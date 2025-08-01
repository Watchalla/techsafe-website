import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Verificar se está tentando acessar área admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Permitir acesso à página de login
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next()
    }

    // Verificar token de autenticação
    const token =
      request.cookies.get("admin_token")?.value || request.headers.get("authorization")?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    // Aqui você poderia validar o token com o backend
    // Por simplicidade, assumimos que a presença do token é suficiente
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
