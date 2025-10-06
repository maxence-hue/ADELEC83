import type { Metadata } from "next";
import { Providers } from "./providers";
import "./styles/globals.css";
import { defaultMetadata, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
