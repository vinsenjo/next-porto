import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Tentukan warna dasar berdasarkan path
  const backgroundColor = pathname === "/porto" ? "bg-dasar" : "bg-cream";

  // Tambahkan warna dasar pada header response
  const response = NextResponse.next();
  response.headers.set("x-background-color", backgroundColor);
  return response;
}

// Tentukan route mana yang akan menggunakan middleware
export const config = {
  matcher: ["/:path*"],
};