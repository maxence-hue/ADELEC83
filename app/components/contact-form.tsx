'use client';

import { useState } from 'react';
import Button from './button';
import { serviceOrder } from '@/lib/config';

const initialState = {
  name: '',
  email: '',
  phone: '',
  adresse: '',
  ville: '',
  type_prestation: serviceOrder[0] ?? '',
  message: '',
  consent: false
};

type FormState = typeof initialState;

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) {
      alert('Merci de valider le consentement RGPD.');
      return;
    }
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      if (data.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        throw new Error('Réponse invalide');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Nom complet
          <input
            required
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="name"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Email professionnel
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="email"
            autoComplete="email"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Téléphone
          <input
            required
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="phone"
            autoComplete="tel"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Adresse du chantier
          <input
            value={form.adresse}
            onChange={(event) => update('adresse', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="adresse"
            autoComplete="street-address"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Ville
          <input
            value={form.ville}
            onChange={(event) => update('ville', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="ville"
            autoComplete="address-level2"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
          Type de prestation
          <select
            value={form.type_prestation}
            onChange={(event) => update('type_prestation', event.target.value)}
            className="mt-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            name="type_prestation"
          >
            {serviceOrder.map((slug) => (
              <option key={slug} value={slug}>
                {slug
                  .split('-')
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join(' ')
                  .replace('Photovoltaique', 'Photovoltaïque')}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col text-sm font-medium text-slate-700 dark:text-slate-300">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          className="mt-2 min-h-[150px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          name="message"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update('consent', event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
          required
        />
        <span>
          J'accepte que mes données soient utilisées pour être contacté dans le cadre de ma demande conformément à la politique de
          confidentialité.
        </span>
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </Button>
        {status === 'success' && <p className="text-sm text-emerald-600">Merci ! Nous revenons vers vous sous 2h ouvrées.</p>}
        {status === 'error' && <p className="text-sm text-red-600">Une erreur est survenue. Merci de réessayer.</p>}
      </div>
    </form>
  );
}
