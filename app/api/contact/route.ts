import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  adresse: z.string().min(3),
  ville: z.string().min(2),
  type_prestation: z.string().min(2),
  message: z.string().min(10),
  consent: z.boolean().refine((value) => value, "Le consentement est obligatoire")
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);

  if (!json) {
    return NextResponse.json({ ok: false, error: "Payload invalide" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 422 });
  }

  // TODO: intégrer l’envoi d’email (SMTP, Resend ou autre service) ici.

  return NextResponse.json({ ok: true });
}
