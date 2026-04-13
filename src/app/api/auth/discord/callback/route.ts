import { NextRequest, NextResponse } from "next/server";
import { exchangeCode, getDiscordUser, getUserGuilds } from "@/lib/discord";
import { createToken, getAvatarUrl, getUserRole } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.redirect(new URL("/?error=no_code", req.url));
  }

  try {
    const tokenData = await exchangeCode(code);
    const [user, guilds] = await Promise.all([
      getDiscordUser(tokenData.access_token),
      getUserGuilds(tokenData.access_token),
    ]);

    const role = getUserRole(user.id);
    const session = {
      id: user.id,
      username: user.username,
      email: user.email || "",
      avatar: getAvatarUrl(user.id, user.avatar, user.discriminator || "0"),
      discriminator: user.discriminator || "0",
      guilds,
      role,
    };

    const jwt = await createToken(session);
    const res = NextResponse.redirect(
      new URL(role === "OWNER" ? "/dashboard/owner" : "/dashboard", req.url)
    );
    res.cookies.set("session", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.redirect(new URL("/?error=auth_failed", req.url));
  }
}
