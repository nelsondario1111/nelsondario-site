import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * ✦ NelsonDario.com Middleware ✦
 * 1) Language redirect on root (/) → /en or /es via Accept-Language
 * 2) Legacy LUMA route redirects → https://lumaeconomy.com (308)
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static files and API routes
  if (pathname.startsWith("/_next") || pathname.includes(".") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 1) Redirect legacy LUMA routes to the new domain
  // Handles:
  // /en/luma, /es/luma, /en/luma-*, /es/luma-*
  if (
    pathname === "/en/luma" ||
    pathname === "/es/luma" ||
    pathname.startsWith("/en/luma-") ||
    pathname.startsWith("/es/luma-")
  ) {
    return NextResponse.redirect("https://lumaeconomy.com", 308);
  }

  // 2) Language redirect only on root route
  if (pathname === "/") {
    const langHeader = request.headers.get("accept-language") || "";
    const locale = langHeader.toLowerCase().startsWith("es") ? "es" : "en";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply to root + locale routes so LUMA redirects work anywhere under /en or /es
export const config = {
  matcher: ["/", "/en/:path*", "/es/:path*"],
};
