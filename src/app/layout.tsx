import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ksatria Dharma Aldzikri | Senior IT Cyber Security & Full-Stack Web Developer",
  description:
    "Official Portfolio of Ksatria Dharma Aldzikri — Senior IT Cyber Security, Senior Technical Product Specialist (PAM, Sophos, Acronis XDR/DLP), and Full-Stack Web Developer based in South Tangerang, Indonesia.",
  keywords: [
    "Ksatria Dharma Aldzikri",
    "Senior IT Cyber Security",
    "Senior Technical Product Specialist",
    "Privileged Access Management",
    "Segura PAM",
    "Senhasegura",
    "Acronis Cyber Protect",
    "Sophos Firewall Engineer",
    "Full-Stack Web Developer",
    "South Tangerang",
    "Indonesia",
  ],
  authors: [{ name: "Ksatria Dharma Aldzikri" }],
  openGraph: {
    title: "Ksatria Dharma Aldzikri | Senior IT Cyber Security & Web Developer",
    description:
      "Senior Technical Product Specialist & Full-Stack Web Developer specializing in Privileged Access Management (PAM), Enterprise Backup & XDR, and Modern Web Systems.",
    type: "website",
    images: ["/images/ksatria-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#040814] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
