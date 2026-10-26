import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ksatria Dharma Aldzikri — Senior IT Cyber Security & Technical Product Specialist",
  description:
    "Executive Portfolio of Ksatria Dharma Aldzikri — Senior IT Cyber Security, Senior Technical Product Specialist (PAM, Sophos, Acronis XDR/DLP), and Full-Stack Web Developer based in South Tangerang, Indonesia.",
  keywords: [
    "Ksatria Dharma Aldzikri",
    "Senior IT Cyber Security",
    "Senior Technical Product Specialist",
    "Privileged Access Management",
    "Segura PAM",
    "Senhasegura",
    "Acronis Cyber Protect",
    "Sophos Firewall Engineer",
    "Web Developer",
    "South Tangerang",
    "Indonesia",
  ],
  authors: [{ name: "Ksatria Dharma Aldzikri" }],
  icons: {
    icon: "/images/ksatria-profile.jpg",
    shortcut: "/images/ksatria-profile.jpg",
    apple: "/images/ksatria-profile.jpg",
  },
  openGraph: {
    title: "Ksatria Dharma Aldzikri — Senior IT Cyber Security & Technical Product Specialist",
    description:
      "Senior Technical Product Specialist & Full-Stack Web Developer specializing in Privileged Access Management (PAM), Enterprise Backup & XDR, and Web Engineering.",
    type: "website",
    images: ["/images/ksatria-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#FAF9F6] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
