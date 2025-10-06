import { NextResponse } from 'next/server';

const requiredFields = ['name', 'email', 'phone', 'message', 'type_prestation'] as const;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  adresse?: string;
  ville?: string;
  type_prestation: string;
  message: string;
  consent: boolean;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  for (const field of requiredFields) {
    if (!body[field] || String(body[field]).trim().length === 0) {
      return NextResponse.json({ ok: false, error: `Champ manquant : ${field}` }, { status: 400 });
    }
  }

  if (!body.consent) {
    return NextResponse.json({ ok: false, error: 'Consentement requis.' }, { status: 400 });
  }

  // TODO: implémenter l'envoi d'email via SMTP, Resend ou service équivalent.

  return NextResponse.json({ ok: true });
}
