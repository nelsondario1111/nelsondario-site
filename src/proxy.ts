import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * ✦ NelsonDario.com Proxy ✦
 * 1) Language redirect on root (/) → /en or /es via Accept-Language
 */

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static files and API routes
  if (pathname.startsWith("/_next") || pathname.includes(".") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 1) Language redirect only on root route
  if (pathname === "/") {
    const langHeader = request.headers.get("accept-language") || "";
    const locale = langHeader.toLowerCase().startsWith("es") ? "es" : "en";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply to root + locale routes
export const config = {
  matcher: ["/", "/en/:path*", "/es/:path*"],
};
