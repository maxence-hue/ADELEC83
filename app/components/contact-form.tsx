"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "./button";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  adresse: z.string().min(3),
  ville: z.string().min(2),
  type_prestation: z.string().min(2),
  message: z.string().min(10),
  consent: z.literal(true)
});

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

const services = [
  "Bâtiments collectifs & tertiaires",
  "Climatisation",
  "Domotique",
  "Bornes de recharge",
  "Photovoltaïque",
  "Dépannage & réparation"
];

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const parsed = contactSchema.safeParse({
      ...data,
      consent: formData.get("consent") === "on"
    });

    if (!parsed.success) {
      setFormState({ status: "error", message: "Merci de vérifier les champs obligatoires." });
      return;
    }

    setFormState({ status: "loading" });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data)
    });

    if (!response.ok) {
      setFormState({ status: "error", message: "Une erreur est survenue. Merci de réessayer." });
      return;
    }

    setFormState({ status: "success", message: "Merci ! Nous revenons vers vous très vite." });
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Nom complet" name="name" required />
        <FormField label="Email" name="email" type="email" required />
        <FormField label="Téléphone" name="phone" required />
        <FormField label="Adresse" name="adresse" required />
        <FormField label="Ville" name="ville" required />
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="type_prestation">
            Type de prestation
          </label>
          <select
            id="type_prestation"
            name="type_prestation"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <option value="">Sélectionner un service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          placeholder="Décrivez votre besoin, le contexte du chantier et les délais souhaités."
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" required />
        <span>
          J’accepte que mes données soient utilisées pour être recontacté(e). Elles ne seront jamais transmises à des tiers.
        </span>
      </label>
      <Button type="submit" disabled={formState.status === "loading"}>
        {formState.status === "loading" ? "Envoi…" : "Envoyer ma demande"}
      </Button>
      {formState.message && (
        <p className={`text-sm ${formState.status === "success" ? "text-emerald-600" : "text-red-600"}`}>{formState.message}</p>
      )}
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </div>
  );
}
