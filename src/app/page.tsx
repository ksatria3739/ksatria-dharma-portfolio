"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  FileText,
  Sun,
  Moon,
  Send,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  LEADERSHIP_AND_SAR_DATA,
  ProjectItem,
} from "@/data/portfolioData";
import ProjectBlueprintModal from "@/components/ProjectBlueprintModal";

const CAPABILITY_PILLARS = [
  {
    index: "01",
    title: {
      id: "Privileged Access Management (PAM) & Keamanan Siber",
      en: "Privileged Access Management (PAM) & Cybersecurity",
    },
    description: {
      id: "Merancang, mengimplementasikan, dan mengelola arsitektur akses istimewa (Zero-Trust & Principle of Least Privilege) menggunakan platform Segura (Senhasegura), serta pengamanan jaringan dan endpoint korporasi dengan Sophos.",
      en: "Designing, deploying, and administering Zero-Trust and Principle of Least Privilege (PoLP) architectures utilizing the Segura (Senhasegura) platform, alongside enterprise perimeter and endpoint defense with Sophos.",
    },
    tools: [
      "Segura / Senhasegura PAM",
      "Principle of Least Privilege (PoLP)",
      "Credential Vaulting & Auto-Rotation",
      "Sophos Firewall v22.0",
      "Sophos Endpoint v7.0",
      "Cyber Threat Intelligence (Cyble)",
      "OT & Cloud Security",
    ],
  },
  {
    index: "02",
    title: {
      id: "Infrastruktur Backup, XDR, DLP & Disaster Recovery",
      en: "Enterprise Backup, XDR, DLP & Disaster Recovery",
    },
    description: {
      id: "Membangun ketahanan data korporasi melalui integrasi Acronis Cyber Protect (On-Premises & Cloud), kebijakan Extended Detection & Response (XDR), Data Loss Prevention (DLP), serta simulasi pemulihan bencana (DR) teruji.",
      en: "Building enterprise data resilience through Acronis Cyber Protect (On-Premises & Cloud) integration, Extended Detection & Response (XDR), Data Loss Prevention (DLP), and verified Disaster Recovery (DR) failover drills.",
    },
    tools: [
      "Acronis Cyber Protect",
      "Extended Detection & Response (XDR)",
      "Data Loss Prevention (DLP)",
      "Microsoft 365 Automated Backup",
      "Disaster Recovery Simulation",
      "Synology NAS & SSL VPN",
    ],
  },
  {
    index: "03",
    title: {
      id: "Technical Pre-Sales, Eksekusi POC & Delivery Proyek",
      en: "Technical Pre-Sales, POC Execution & Solution Delivery",
    },
    description: {
      id: "Memimpin siklus proyek teknis end-to-end mulai dari konsultasi kebutuhan klien, perancangan arsitektur, eksekusi Proof of Concept (POC) langsung di lingkungan produksi klien, hingga dukungan diagnostik L3 zero-downtime.",
      en: "Leading the complete end-to-end technical project lifecycle—from initial client consultation and architecture design to live Proof of Concept (POC) execution and L3 zero-downtime diagnostic troubleshooting.",
    },
    tools: [
      "End-to-End Solution Delivery",
      "Tailored Proof of Concept (POC)",
      "Executive Product Demonstration",
      "System Diagnostics & L3 Support",
      "Zero-Downtime Migration",
    ],
  },
  {
    index: "04",
    title: {
      id: "Pengembangan Aplikasi Web Full-Stack",
      en: "Full-Stack Web Application Engineering",
    },
    description: {
      id: "Mengembangkan aplikasi web modern dan portal korporasi yang mengutamakan keamanan transaksi, integritas basis data (atomic locking), kontrol akses multi-peran (RBAC), serta integrasi payment gateway.",
      en: "Engineering modern web applications and corporate platforms focused on transactional security, database integrity (atomic row locking), multi-role RBAC, and fintech payment gateway integration.",
    },
    tools: [
      "Next.js 15 & TypeScript",
      "Laravel 11/12 (PHP 8.2)",
      "Vue.js 3 & Tailwind CSS",
      "MySQL & PostgreSQL (Prisma)",
      "Midtrans, Xendit & QRIS",
      "SHA-256 Tokenization",
    ],
  },
];

export default function PortfolioHomePage() {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "cybersecurity" | "fullstack">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [visitorName, setVisitorName] = useState("");
  const [visitorOrg, setVisitorOrg] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState("Konsultasi Arsitektur Keamanan / PAM / Backup");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    projectFilter === "all" ? true : p.category === projectFilter
  );

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      lang === "id"
        ? `Halo Mas Ksatria Dharma Aldzikri,\n\nPerkenalkan saya ${visitorName || "Rekruter / Klien"} dari ${visitorOrg || "Perusahaan"}.\nSaya melihat portofolio Anda dan ingin berdiskusi terkait: ${inquiryTopic}.\n\n${inquiryMessage || "Mohon informasi waktu yang tersedia untuk diskusi lebih lanjut. Terima kasih."}`
        : `Hello Ksatria Dharma Aldzikri,\n\nMy name is ${visitorName || "Client / Recruiter"} from ${visitorOrg || "Organization"}.\nI reviewed your portfolio and would like to discuss: ${inquiryTopic}.\n\n${inquiryMessage || "Looking forward to connecting with you."}`;
    window.open(
      `https://wa.me/6281293353915?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0B0C0E] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
        {/* ================= TOP NAVIGATION ================= */}
        <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
            {/* Name & Subtle Role */}
            <a href="#top" className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center text-xs font-semibold tracking-tight">
                KD
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Ksatria Dharma Aldzikri
                </span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                  Senior IT Cyber Security & Product Specialist
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <a
                href="#capabilities"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Keahlian" : "Expertise"}
              </a>
              <a
                href="#experience"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Pengalaman" : "Experience"}
              </a>
              <a
                href="#work"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Studi Kasus" : "Selected Work"}
              </a>
              <a
                href="#credentials"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Sertifikasi" : "Credentials"}
              </a>
              <a
                href="#background"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Pendidikan & Dedikasi" : "Background"}
              </a>
              <a
                href="#contact"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Kontak" : "Contact"}
              </a>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-0.5 text-[11px] font-medium">
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`px-2.5 py-1 rounded-full transition ${
                    lang === "id"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-full transition ${
                    lang === "en"
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition"
                title={darkMode ? "Light Mode" : "Dark Mode"}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              {/* Resume Download */}
              <a
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium transition"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-[#FAF9F6] dark:bg-[#0B0C0E] px-5 py-4 space-y-3 text-sm">
              <div className="flex flex-col space-y-2.5 text-zinc-700 dark:text-zinc-300 font-medium">
                <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>
                  01 / {lang === "id" ? "Keahlian & Spesialisasi" : "Expertise"}
                </a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
                  02 / {lang === "id" ? "Pengalaman Profesional" : "Experience"}
                </a>
                <a href="#work" onClick={() => setMobileMenuOpen(false)}>
                  03 / {lang === "id" ? "Studi Kasus & Proyek" : "Selected Work"}
                </a>
                <a href="#credentials" onClick={() => setMobileMenuOpen(false)}>
                  04 / {lang === "id" ? "Lisensi & Sertifikasi" : "Certifications"}
                </a>
                <a href="#background" onClick={() => setMobileMenuOpen(false)}>
                  05 / {lang === "id" ? "Pendidikan & Dedikasi" : "Background"}
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  06 / {lang === "id" ? "Kontak" : "Contact"}
                </a>
              </div>
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={PROFILE_DATA.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-xs font-medium"
                >
                  Resume PDF
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ================= MAIN CONTAINER ================= */}
        <main id="top" className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* ================= EDITORIAL HERO SECTION ================= */}
          <section className="py-12 sm:py-20 lg:py-24 border-b border-zinc-200 dark:border-zinc-800/90">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
              {/* Left Column: Narrative & Positioning */}
              <div className="lg:col-span-7 space-y-7">
                {/* Quiet Availability Line */}
                <div className="inline-flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>
                    {lang === "id"
                      ? "Tangerang Selatan, Indonesia · Senior Technical Product Specialist"
                      : "South Tangerang, Indonesia · Senior Technical Product Specialist"}
                  </span>
                </div>

                {/* Editorial Headline */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]">
                    {lang === "id" ? (
                      <>
                        Merancang arsitektur{" "}
                        <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
                          keamanan siber enterprise
                        </span>{" "}
                        & sistem web berintegritas tinggi.
                      </>
                    ) : (
                      <>
                        Architecting{" "}
                        <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
                          enterprise cybersecurity
                        </span>{" "}
                        & resilient web systems.
                      </>
                    )}
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {lang === "id"
                      ? "Saya Ksatria Dharma Aldzikri — profesional Teknologi Informasi dengan fokus pada Privileged Access Management (PAM), solusi Backup & Disaster Recovery (Acronis, XDR, DLP), keamanan jaringan (Sophos), serta pengembangan aplikasi web full-stack. Saat ini memimpin implementasi teknis end-to-end dan Proof of Concept (POC) korporasi di PT. Optima Solusindo Informatika."
                      : "I am Ksatria Dharma Aldzikri — an Information Technology specialist focused on Privileged Access Management (PAM), Backup & Disaster Recovery (Acronis, XDR, DLP), network security (Sophos), and full-stack web development. Currently leading end-to-end enterprise deployments and Proof of Concepts (POC) at PT. Optima Solusindo Informatika."}
                  </p>
                </div>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium transition"
                  >
                    <span>
                      {lang === "id" ? "Terhubung di LinkedIn" : "Connect on LinkedIn"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE_DATA.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {lang === "id" ? "Unduh CV / ATS Resume" : "Download ATS Resume"}
                    </span>
                  </a>

                  <a
                    href="#work"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition"
                  >
                    <span>
                      {lang === "id" ? "Lihat Studi Kasus" : "Explore Case Studies"}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Direct Contact Metadata Row */}
                <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{PROFILE_DATA.email}</span>
                  </a>
                  <a
                    href={PROFILE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{PROFILE_DATA.phone}</span>
                  </a>
                  <a
                    href={PROFILE_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition inline-flex items-center gap-1"
                  >
                    <span>github.com/Ksatria3739</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Editorial Portrait Card */}
              <div className="lg:col-span-5">
                <div className="mx-auto max-w-sm lg:max-w-none">
                  <div className="rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#121317] p-3 shadow-sm">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/4.3] bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={PROFILE_DATA.profilePhoto}
                        alt="Ksatria Dharma Aldzikri"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Clean Executive Caption Below Portrait */}
                    <div className="pt-3.5 pb-1 px-1 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          Ksatria Dharma Aldzikri
                        </h2>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          Senior IT Cyber Security · Technical Product Specialist
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                        ID / BANTEN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Key Facts Bar */}
            <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {lang === "id" ? "Pengalaman Industri" : "Industry Track"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  2019 — {lang === "id" ? "Kini" : "Now"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {lang === "id"
                    ? "Cyber Security, PAM & Web Development"
                    : "Cyber Security, PAM & Web Development"}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {lang === "id" ? "Spesialisasi Utama" : "Core Focus"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  PAM & XDR
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Segura (Senhasegura), Acronis & Sophos
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {lang === "id" ? "Implementasi Klien" : "Enterprise Clients"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  8+ {lang === "id" ? "Proyek" : "Deployments"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  MSIG Life, Bayer, Sucofindo, Arasis, Socare
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {lang === "id" ? "Lisensi & Kredensial" : "Verified Credentials"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  10+ {lang === "id" ? "Sertifikasi" : "Certifications"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Sophos, Segura, ICSI CNSS, Cyble, Acronis
                </p>
              </div>
            </div>
          </section>

          {/* ================= 01 / KEAHLIAN & KAPABILITAS TEKNIS ================= */}
          <section
            id="capabilities"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Section Index */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  01 / {lang === "id" ? "Fokus & Kapabilitas" : "Capabilities"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === "id"
                    ? "Arsitektur Keamanan & Rekayasa Sistem"
                    : "Security Architecture & System Engineering"}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {lang === "id"
                    ? "Kombinasi keahlian dalam melindungi aset kritis perusahaan melalui tata kelola akses istimewa (PAM), pemulihan bencana (DR), serta pengembangan aplikasi web modern."
                    : "Combining deep expertise in safeguarding critical enterprise assets through Privileged Access Management (PAM), disaster recovery, and modern web engineering."}
                </p>
              </div>

              {/* Right 4 Pillars */}
              <div className="lg:col-span-8 divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                {CAPABILITY_PILLARS.map((pillar) => (
                  <div key={pillar.index} className="py-7 first:pt-6 last:pb-6 space-y-3.5">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        {pillar.index}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {pillar.title[lang]}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">
                      {pillar.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pl-6 pt-1">
                      {pillar.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 02 / PENGALAMAN PROFESIONAL ================= */}
          <section
            id="experience"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Section Header */}
              <div className="lg:col-span-4 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  02 / {lang === "id" ? "Rekam Jejak Karier" : "Career History"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === "id" ? "Pengalaman Profesional" : "Professional Experience"}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {lang === "id"
                    ? "Perjalanan karier profesional sejak 2019 yang berfokus pada pengembangan platform web dan berlanjut pada kepemimpinan solusi keamanan siber enterprise."
                    : "Professional trajectory since 2019 spanning full-stack web platform engineering and senior enterprise cybersecurity solution delivery."}
                </p>
                <div className="pt-2">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:opacity-80"
                  >
                    <span>
                      {lang === "id"
                        ? "Lihat profil lengkap di LinkedIn"
                        : "View full profile on LinkedIn"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Career Entries */}
              <div className="lg:col-span-8 divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="py-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                          {exp.role[lang]}
                        </h3>
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                          {exp.company}{" "}
                          <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                            · {exp.location}
                          </span>
                        </p>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.highlights[lang].map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 03 / STUDI KASUS & PROYEK TERPILIH ================= */}
          <section
            id="work"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="space-y-10">
              {/* Section Header + Filter */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    03 / {lang === "id" ? "Studi Kasus & Implementasi" : "Selected Case Studies"}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {lang === "id"
                      ? "Proyek Keamanan Korporasi & Aplikasi Web"
                      : "Enterprise Security Deployments & Web Systems"}
                  </h2>
                </div>

                {/* Minimalist Filter Tabs */}
                <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setProjectFilter("all")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      projectFilter === "all"
                        ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {lang === "id" ? "Semua (8)" : "All Work (8)"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectFilter("cybersecurity")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      projectFilter === "cybersecurity"
                        ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {lang === "id" ? "Enterprise Security & PAM (5)" : "Cybersecurity & PAM (5)"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectFilter("fullstack")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      projectFilter === "fullstack"
                        ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {lang === "id" ? "Aplikasi Web Full-Stack (3)" : "Full-Stack Web (3)"}
                  </button>
                </div>
              </div>

              {/* Editorial Case Study List */}
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                {filteredProjects.map((project, idx) => (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer py-7 sm:py-8 transition hover:bg-zinc-100/60 dark:hover:bg-zinc-900/40 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                      {/* Client & Year */}
                      <div className="lg:col-span-3 flex lg:flex-col justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                            0{idx + 1}
                          </span>
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {project.clientOrOrg}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 lg:pl-6">
                          {project.year} · {project.badge[lang]}
                        </span>
                      </div>

                      {/* Title, Summary & Tech */}
                      <div className="lg:col-span-7 space-y-2.5">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:underline underline-offset-4">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {project.summary[lang]}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Trigger */}
                      <div className="lg:col-span-2 flex lg:justify-end items-center pt-1">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition">
                          <span>{lang === "id" ? "Baca Studi Kasus" : "Case Study"}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 04 / LISENSI & SERTIFIKASI RESMI ================= */}
          <section
            id="credentials"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Header */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  04 / {lang === "id" ? "Lisensi & Kredensial" : "Verified Credentials"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === "id" ? "Sertifikasi Profesional" : "Professional Certifications"}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {lang === "id"
                    ? "Sertifikasi teknis resmi di bidang keamanan jaringan, Privileged Access Management (PAM), proteksi endpoint, dan infrastruktur cloud."
                    : "Verified industry certifications across network defense, Privileged Access Management (PAM), endpoint engineering, and cloud backup."}
                </p>
              </div>

              {/* Right Credential Ledger */}
              <div className="lg:col-span-8 divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {cert.title}
                        </h3>
                        {cert.credentialId && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {cert.issuer} · <span className="font-mono">{cert.date}</span>
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-0.5 max-w-xl">
                        {cert.description[lang]}
                      </p>
                    </div>

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-300 text-xs font-medium text-zinc-700 dark:text-zinc-300 shrink-0 self-start sm:self-center transition"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === "id" ? "Lihat Sertifikat" : "View Certificate"}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 05 / PENDIDIKAN & KEPEMIMPINAN LAPANGAN (SAR) ================= */}
          <section
            id="background"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Header */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  05 / {lang === "id" ? "Pendidikan & Dedikasi" : "Education & Leadership"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === "id"
                    ? "Akademik, Kepemimpinan & Operasi SAR"
                    : "Academic Background & Emergency Rescue"}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {lang === "id"
                    ? "Di luar dunia teknologi informasi, saya aktif dalam operasi kemanusiaan tanggap darurat (SAR), kepemimpinan organisasi kepramukaan, dan pemanduan gunung profesional (APGI)."
                    : "Beyond enterprise IT, I am actively involved in emergency search-and-rescue (SAR) operations, youth leadership, and certified mountain guiding (APGI)."}
                </p>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-8 space-y-12">
                {/* Academic Education */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id" ? "Pendidikan Formal" : "Academic Education"}
                  </h3>
                  <div className="divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                    {EDUCATION_DATA.map((edu) => (
                      <div key={edu.institution} className="py-5 space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            {edu.institution}
                          </h4>
                          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {edu.degree[lang]} ·{" "}
                          <span className="text-zinc-500 font-normal">{edu.location}</span>
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                          {edu.description[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership & SAR */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id"
                      ? "Kepemimpinan Organisasi, Operasi SAR & Keanggotaan APGI"
                      : "Leadership, Search-and-Rescue (SAR) & APGI Membership"}
                  </h3>
                  <div className="divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                    {LEADERSHIP_AND_SAR_DATA.map((item, idx) => (
                      <div key={idx} className="py-5 space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h4 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            {item.role[lang]}
                          </h4>
                          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          {item.org}
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                          {item.highlight[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= 06 / KONTAK & DISKUSI ================= */}
          <section id="contact" className="py-16 sm:py-24 scroll-mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    06 / {lang === "id" ? "Kontak & Kolaborasi" : "Get in Touch"}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {lang === "id"
                      ? "Mari Berdiskusi Mengenai Kebutuhan Proyek Anda"
                      : "Let's Discuss Your Security or Web Architecture"}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {lang === "id"
                      ? "Silakan hubungi saya melalui LinkedIn, email, atau WhatsApp untuk diskusi implementasi Privileged Access Management (PAM), solusi Backup/XDR, pelaksanaan POC, maupun pengembangan aplikasi web."
                      : "Feel free to reach out via LinkedIn, email, or WhatsApp for Privileged Access Management (PAM) consulting, Backup/XDR architecture, POC execution, or full-stack web projects."}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 text-sm">
                  <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">LinkedIn</span>
                    <a
                      href={PROFILE_DATA.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{PROFILE_DATA.linkedinSlug}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">Email</span>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">WhatsApp / Telp</span>
                    <a
                      href={PROFILE_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
                    >
                      {PROFILE_DATA.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {lang === "id" ? "Domisili" : "Location"}
                    </span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {PROFILE_DATA.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Clean Message Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSendWhatsApp}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200/90 dark:border-zinc-800 space-y-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {lang === "id" ? "Kirim Pesan Langsung" : "Send a Direct Message"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                        {lang === "id" ? "Nama Anda" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder={lang === "id" ? "Nama lengkap" : "Full name"}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                        {lang === "id" ? "Perusahaan / Instansi" : "Company / Organization"}
                      </label>
                      <input
                        type="text"
                        value={visitorOrg}
                        onChange={(e) => setVisitorOrg(e.target.value)}
                        placeholder={lang === "id" ? "Nama perusahaan" : "Company name"}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                      {lang === "id" ? "Topik Kebutuhan" : "Subject"}
                    </label>
                    <select
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400"
                    >
                      <option value="Implementasi Privileged Access Management (PAM - Segura)">
                        Implementasi Privileged Access Management (PAM - Segura)
                      </option>
                      <option value="Solusi Backup, Disaster Recovery & XDR/DLP (Acronis)">
                        Solusi Backup, Disaster Recovery & XDR/DLP (Acronis)
                      </option>
                      <option value="Keamanan Jaringan & Endpoint (Sophos Firewall / Endpoint)">
                        Keamanan Jaringan & Endpoint (Sophos Firewall / Endpoint)
                      </option>
                      <option value="Pengembangan Aplikasi Web Full-Stack">
                        Pengembangan Aplikasi Web Full-Stack
                      </option>
                      <option value="Peluang Karier / Rekrutmen Profesional">
                        Peluang Karier / Rekrutmen Profesional
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1.5">
                      {lang === "id" ? "Pesan" : "Message"}
                    </label>
                    <textarea
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder={
                        lang === "id"
                          ? "Tuliskan detail kebutuhan proyek atau jadwal diskusi..."
                          : "Share details about your project or preferred schedule..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-400"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {lang === "id" ? "Kirim via WhatsApp" : "Send via WhatsApp"}
                      </span>
                    </button>

                    <a
                      href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                        inquiryTopic
                      )}&body=${encodeURIComponent(inquiryMessage)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{lang === "id" ? "Kirim via Email" : "Send via Email"}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800/90 py-10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <div>
              © {new Date().getFullYear()} Ksatria Dharma Aldzikri. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                GitHub
              </a>
              <a
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                ATS Resume (PDF)
              </a>
            </div>
          </div>
        </footer>

        {/* Case Study Modal */}
        <ProjectBlueprintModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
