import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protection du Studio Sanity par mot de passe
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const basicAuth = request.headers.get('authorization');
    const url = request.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // Mot de passe défini dans .env.local
      const validPassword = process.env.STUDIO_PASSWORD || 'adelec2024';

      if (pwd === validPassword) {
        return NextResponse.next();
      }
    }

    url.pathname = '/api/auth';

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/studio/:path*',
};
