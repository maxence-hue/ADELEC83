import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse('Authentification requise', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="ADELEC83 CMS", charset="UTF-8"',
    },
  });
}
