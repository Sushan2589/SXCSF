// middleware.js
import { NextResponse } from "next/server"

export function middleware(request) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Protect all sub-routes under /admin except /admin itself
  if (pathname.startsWith("/admin/") && pathname !== "/admin") {
    const isAdmin = request.cookies.get("isAdmin")?.value

    if (!isAdmin) {
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"], // runs middleware on /admin and all subpaths
}
