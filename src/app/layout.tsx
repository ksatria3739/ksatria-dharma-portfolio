import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

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
    icon: "/icon.svg?v=2",
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
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
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#FAF9F6] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
