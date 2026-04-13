import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const OWNER_DISCORD_ID = "1060444223666671667";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-change-me-in-production");

export interface UserSession {
  id: string;
  username: string;
  email: string;
  avatar: string;
  discriminator: string;
  guilds: Guild[];
  role: "OWNER" | "USER";
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: number;
  features: string[];
}

export function getAvatarUrl(userId: string, avatar: string | null, discriminator: string): string {
  if (avatar) return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png?size=128`;
  const index = parseInt(discriminator) % 5;
  return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
}

export function hasAdminPermission(permissions: number): boolean {
  const ADMINISTRATOR = 0x8;
  return (permissions & ADMINISTRATOR) === ADMINISTRATOR;
}

export function getUserRole(discordId: string): "OWNER" | "USER" {
  return discordId === OWNER_DISCORD_ID ? "OWNER" : "USER";
}

export async function createToken(user: UserSession): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .setIssuedAt()
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<UserSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as UserSession;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<UserSession | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  return verifyToken(token);
}
