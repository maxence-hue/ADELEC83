import type { Metadata } from 'next';
import './styles/globals.css';
import { defaultMetadata, businessJsonLd } from '@/lib/seo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileCta } from '@/components/mobile-cta';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900">
        <ThemeProvider>
          <Header />
          <main className="relative flex-1 pt-24 pb-16">{children}</main>
          <Footer />
          <MobileCta />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
