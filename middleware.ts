import { NextResponse, type NextRequest } from "next/server";
import { getCanonicalRedirectTarget } from "@/lib/canonicalHost";

export function middleware(request: NextRequest) {
  const target = getCanonicalRedirectTarget(
    request.headers.get("x-forwarded-host"),
    request.headers.get("host"),
    request.nextUrl.pathname,
    request.nextUrl.search,
  );

  if (target) {
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
