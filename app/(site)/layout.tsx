import type { ReactNode } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { MobileCTA } from "../components/mobile-cta";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCTA />
    </>
  );
}
