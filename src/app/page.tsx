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
  CheckCircle2,
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
      id: "Privileged Access Management (PAM) & Identity Security (IAM)",
      en: "Privileged Access Management (PAM) & Identity Security (IAM)",
    },
    description: {
      id: "Merancang, mengimplementasikan, dan mengelola kontrol akses istimewa (Access Control Management, IAM & Principle of Least Privilege) menggunakan platform Segura (Senhasegura) untuk melindungi aset kritis perusahaan dan mendukung kepatuhan ISO 27001.",
      en: "Designing, deploying, and administering Privileged Access Management (Access Control Management, IAM & Principle of Least Privilege) utilizing the Segura (Senhasegura) platform to safeguard critical assets and support ISO 27001 compliance.",
    },
    tools: [
      "Segura / Senhasegura PAM",
      "Identity & Access Management (IAM)",
      "Access Control Management",
      "Principle of Least Privilege (PoLP)",
      "Credential Vaulting & Rotation",
      "ISO 27001 Alignment",
    ],
  },
  {
    index: "02",
    title: {
      id: "Keamanan Perimeter Jaringan, Firewall, Endpoint & Operasi SOC",
      en: "Perimeter Network Defense, Firewall, Endpoint & SOC Operations",
    },
    description: {
      id: "Mengamankan perimeter jaringan dan endpoint korporasi menggunakan Fortinet (FortiGate / FortiOS 8.0) dan Sophos (Firewall v22 & Endpoint v7), serta bertindak sebagai jangkar keamanan operasional dalam validasi ancaman SIEM/SOC, pemblokiran IP berbahaya, dan penyempurnaan aturan WAF/Firewall.",
      en: "Securing enterprise perimeters and endpoints with Fortinet (FortiGate / FortiOS 8.0) and Sophos (Firewall v22 & Endpoint v7), while serving as the operational security anchor for SIEM/SOC threat validation, malicious IP blocking, and firewall/WAF rule tuning.",
    },
    tools: [
      "Fortinet NSE 1 / 2 / 3 Certified",
      "FortiOS 8.0 & FortiGate 7.6",
      "Sophos Firewall v22.0",
      "Sophos Endpoint v7.0",
      "SIEM & SOC L1/L3 Remediation",
      "Cyber Threat Intelligence (Cyble)",
    ],
  },
  {
    index: "03",
    title: {
      id: "Data Protection Terpadu, Backup, XDR, DLP & Disaster Recovery",
      en: "Unified Data Protection, Backup, XDR, DLP & Disaster Recovery",
    },
    description: {
      id: "Membangun ketahanan data korporasi melalui integrasi Acronis Cyber Protect (On-Premises & Cloud), kebijakan Extended Detection & Response (XDR), Data Loss Prevention (DLP), pencadangan otomatis Microsoft 365, serta simulasi pemulihan bencana (DR).",
      en: "Building enterprise data resilience through Acronis Cyber Protect (On-Premises & Cloud) integration, Extended Detection & Response (XDR), Data Loss Prevention (DLP), automated Microsoft 365 backup, and verified Disaster Recovery (DR) drills.",
    },
    tools: [
      "Acronis Cyber Protect",
      "Extended Detection & Response (XDR)",
      "Data Loss Prevention (DLP)",
      "Microsoft 365 Cloud Backup",
      "Disaster Recovery Simulation",
      "Synology NAS & SSL VPN",
    ],
  },
  {
    index: "04",
    title: {
      id: "Technical Pre-Sales, Eksekusi POC & Full-Stack Web Engineering",
      en: "Technical Pre-Sales, POC Execution & Full-Stack Web Engineering",
    },
    description: {
      id: "Memimpin siklus proyek teknis end-to-end mulai dari konsultasi arsitektur dan eksekusi Proof of Concept (POC) di lingkungan klien korporasi, serta mengembangkan aplikasi web full-stack modern dengan keamanan transaksi tinggi.",
      en: "Leading the end-to-end technical project lifecycle from architecture consultation and live Proof of Concept (POC) execution to engineering modern full-stack web applications with high transactional security.",
    },
    tools: [
      "End-to-End Solution Delivery",
      "Proof of Concept (POC) Execution",
      "Next.js 15 & TypeScript",
      "Laravel 11/12 & Vue.js 3",
      "RESTful API & Atomic Locking",
      "SHA-256 & Fintech Gateways",
    ],
  },
];

export default function PortfolioHomePage() {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "cybersecurity" | "fullstack">("all");
  const [certFilter, setCertFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [visitorName, setVisitorName] = useState("");
  const [visitorOrg, setVisitorOrg] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState(
    "Implementasi Privileged Access Management (PAM - Segura)"
  );
  const [inquiryMessage, setInquiryMessage] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    projectFilter === "all" ? true : p.category === projectFilter
  );

  const certCategories = [
    { key: "All", label: lang === "id" ? "Semua (18)" : "All (18)" },
    { key: "Google, ICSI & Acronis", label: "Google, ICSI & Acronis (6)" },
    { key: "Fortinet & ISC2", label: "Fortinet & ISC2 (6)" },
    { key: "Segura® PAM", label: "Segura® PAM (4)" },
    { key: "Sophos", label: "Sophos (2)" },
  ];

  const filteredCerts = CERTIFICATIONS_DATA.filter((c) =>
    certFilter === "All" ? true : c.category === certFilter
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
            {/* Avatar Photo Icon & Name */}
            <a href="#top" className="flex items-center gap-3 group shrink-0">
              <img
                src={PROFILE_DATA.profilePhoto}
                alt="Ksatria Dharma Aldzikri"
                className="w-9 h-9 rounded-full object-cover object-center border border-zinc-300 dark:border-zinc-700 shadow-sm shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  Ksatria Dharma Aldzikri
                </span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:inline whitespace-nowrap">
                  Cyber Security Engineer · Technical Product Specialist
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
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
                {lang === "id" ? "Sertifikasi (18)" : "Credentials (18)"}
              </a>
              <a
                href="#background"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Pendidikan" : "Education"}
              </a>
              <a
                href="#contact"
                className="hover:text-zinc-950 dark:hover:text-white transition"
              >
                {lang === "id" ? "Kontak" : "Contact"}
              </a>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 shrink-0">
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium whitespace-nowrap transition"
              >
                <span>Resume PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-[#FAF9F6] dark:bg-[#0B0C0E] px-5 py-4 space-y-3 text-sm">
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
                  04 / {lang === "id" ? "Lisensi & Sertifikasi (18)" : "Certifications (18)"}
                </a>
                <a href="#background" onClick={() => setMobileMenuOpen(false)}>
                  05 / {lang === "id" ? "Pendidikan" : "Education"}
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Narrative & Positioning */}
              <div className="lg:col-span-8 space-y-6">
                {/* Quiet Availability Line */}
                <div className="inline-flex items-center gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>
                    {lang === "id"
                      ? "Tangerang Selatan, Indonesia · Cyber Security Engineer & Technical Product Specialist"
                      : "South Tangerang, Indonesia · Cyber Security Engineer & Technical Product Specialist"}
                  </span>
                </div>

                {/* Editorial Headline */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]">
                    {lang === "id" ? (
                      <>
                        Mengamankan{" "}
                        <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
                          infrastruktur digital & cloud
                        </span>{" "}
                        melalui arsitektur pertahanan yang terukur.
                      </>
                    ) : (
                      <>
                        Securing{" "}
                        <span className="font-serif italic font-normal text-zinc-700 dark:text-zinc-300">
                          digital infrastructure & cloud
                        </span>{" "}
                        with scalable enterprise defense.
                      </>
                    )}
                  </h1>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {PROFILE_DATA.summary[lang]}
                  </p>
                </div>

                {/* LinkedIn Top Skills Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mr-1">
                    LinkedIn Top Skills:
                  </span>
                  {[
                    "Privileged Access Management (PAM)",
                    "Access Control Management",
                    "Identity & Access Management (IAM)",
                    "Fortinet & Sophos Firewall",
                    "Acronis Data Protection & XDR",
                    "Full-Stack Web",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium transition"
                  >
                    <span>
                      {lang === "id" ? "Profil LinkedIn Resmi" : "Official LinkedIn Profile"}
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
                    href="#credentials"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition"
                  >
                    <span>
                      {lang === "id" ? "Lihat 18 Sertifikasi" : "View 18 Certifications"}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Crisp High-DPI Executive Portrait Card */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-[300px] sm:max-w-[310px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#121317] p-4 shadow-sm space-y-4">
                  {/* High-DPI 800x800 image rendered at ~275px for ~3x Retina Sharpness */}
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800">
                    <img
                      src={PROFILE_DATA.profilePhoto}
                      alt="Ksatria Dharma Aldzikri"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Clean Executive Profile Metadata */}
                  <div className="space-y-2.5 pt-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                          <span>Ksatria Dharma Aldzikri</span>
                          <CheckCircle2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                        </h2>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          Cyber Security Engineer · PAM & Cloud Defense
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-zinc-400 dark:text-zinc-500">
                          {lang === "id" ? "Tempat Kerja Saat Ini" : "Current Workplace"}
                        </span>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200 text-right">
                          PT. Optima Solusindo
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-zinc-400 dark:text-zinc-500">
                          {lang === "id" ? "Pendidikan" : "Education"}
                        </span>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200 text-right">
                          {lang === "id"
                            ? "S1 Sistem Informasi — UT"
                            : "B.S. Information Systems — UT"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-zinc-400 dark:text-zinc-500">
                          {lang === "id" ? "Kredensial" : "Credentials"}
                        </span>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200 text-right">
                          Google · Fortinet · Sophos · Segura
                        </span>
                      </div>
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
                  5+ {lang === "id" ? "Tahun" : "Years"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {lang === "id"
                    ? "Cyber Security Engineering & Web (Sejak 2019)"
                    : "Cyber Security Engineering & Web (Since 2019)"}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {lang === "id" ? "Spesialisasi Inti" : "Core Focus"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  PAM · XDR · NGFW
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Segura, Acronis, Sophos & Fortinet
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
                  {lang === "id" ? "Lisensi & Sertifikasi" : "Verified Credentials"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  18 {lang === "id" ? "Sertifikasi" : "Certifications"}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Google Cybersecurity, Fortinet, Sophos, Segura, ICSI
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
                    ? "Selaras dengan keahlian teratas pada profil LinkedIn: menggabungkan tata kelola akses istimewa (PAM & IAM), pertahanan jaringan (Fortinet & Sophos), pemulihan bencana (Acronis DR/XDR), serta rekayasa web."
                    : "Aligned with my LinkedIn top skills: uniting Privileged Access Management (PAM & IAM), network defense (Fortinet & Sophos), disaster recovery (Acronis DR/XDR), and full-stack web engineering."}
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
                    ? "Rekam jejak karier profesional sejak 2019 di bidang Cyber Security Engineering, Technical Product Delivery, dan Full-Stack Web Development."
                    : "Professional trajectory since 2019 across Cyber Security Engineering, Technical Product Delivery, and Full-Stack Web Development."}
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
                        ? "Lihat rekam jejak lengkap di LinkedIn"
                        : "View full career history on LinkedIn"}
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

          {/* ================= 04 / LISENSI & SERTIFIKASI RESMI (LINKEDIN VERIFIED) ================= */}
          <section
            id="credentials"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="space-y-8">
              {/* Header + Category Filter */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    04 / {lang === "id" ? "Lisensi & Sertifikasi LinkedIn" : "Licenses & Certifications"}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {lang === "id"
                      ? "18 Sertifikasi Keamanan Siber & Infrastruktur"
                      : "18 Verified Cybersecurity & Infrastructure Certifications"}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {lang === "id"
                      ? "Termasuk Google Cybersecurity Professional Certificate, rangkaian sertifikasi resmi Fortinet Training Institute, ISC2, Sophos Academy, Segura® University, ICSI, Acronis, dan Cyble."
                      : "Including the Google Cybersecurity Professional Certificate, alongside official credentials from Fortinet Training Institute, ISC2, Sophos Academy, Segura® University, ICSI, Acronis, and Cyble."}
                  </p>
                </div>

                {/* Filter Buttons */}
                <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                  {certCategories.map((cat) => (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setCertFilter(cat.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                        certFilter === cat.key
                          ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Credential Ledger Table */}
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                {filteredCerts.map((cert, index) => (
                  <div
                    key={cert.id}
                    className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg transition"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {cert.title}
                        </h3>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800">
                          {cert.category}
                        </span>
                        {cert.credentialId && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-6">
                        {cert.issuer} · <span className="font-mono">{cert.date}</span>
                      </p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-0.5 pl-6 leading-relaxed">
                        {cert.description[lang]}
                      </p>
                    </div>

                    {cert.pdfUrl ? (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-800 dark:text-zinc-200 shrink-0 self-start sm:self-center transition ml-6 sm:ml-0"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === "id" ? "Lihat Sertifikat PDF" : "View Certificate PDF"}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <a
                        href={PROFILE_DATA.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 shrink-0 self-start sm:self-center transition ml-6 sm:ml-0"
                      >
                        <span>LinkedIn Verified</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 05 / PENDIDIKAN ================= */}
          <section
            id="background"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Header */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  05 / {lang === "id" ? "Pendidikan" : "Education"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {lang === "id"
                    ? "Latar Belakang Akademik"
                    : "Academic Background"}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {lang === "id"
                    ? "Pendidikan formal Sarjana (S1) pada program studi Sistem Informasi di Universitas Terbuka."
                    : "Formal Bachelor's degree (S1) education in Information Systems at Universitas Terbuka."}
                </p>
              </div>

              {/* Right Content: Academic Education */}
              <div className="lg:col-span-8">
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800/90 border-t border-b border-zinc-200 dark:border-zinc-800/90">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.institution} className="py-6 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                          {edu.institution}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {edu.degree[lang]} ·{" "}
                        <span className="text-zinc-500 font-normal">{edu.location}</span>
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                        {edu.description[lang]}
                      </p>
                    </div>
                  ))}
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
                      ? "Silakan hubungi saya melalui LinkedIn, email, atau WhatsApp untuk diskusi implementasi Privileged Access Management (PAM), solusi Backup/XDR, konfigurasi Firewall (Fortinet/Sophos), maupun pengembangan aplikasi web."
                      : "Feel free to reach out via LinkedIn, email, or WhatsApp for Privileged Access Management (PAM) consulting, Backup/XDR architecture, Firewall defense (Fortinet/Sophos), or full-stack web projects."}
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
                      <option value="Privileged Access Management (PAM - Segura)">
                        {lang === "id"
                          ? "Implementasi Privileged Access Management (PAM - Segura)"
                          : "Privileged Access Management (PAM - Segura) Implementation"}
                      </option>
                      <option value="Network & Endpoint Security (Fortinet FortiGate / Sophos)">
                        {lang === "id"
                          ? "Keamanan Jaringan & Endpoint (Fortinet FortiGate / Sophos)"
                          : "Network & Endpoint Security (Fortinet FortiGate / Sophos)"}
                      </option>
                      <option value="Backup, Disaster Recovery & XDR/DLP (Acronis)">
                        {lang === "id"
                          ? "Solusi Backup, Disaster Recovery & XDR/DLP (Acronis)"
                          : "Backup, Disaster Recovery & XDR/DLP Solutions (Acronis)"}
                      </option>
                      <option value="Full-Stack Web Application Engineering">
                        {lang === "id"
                          ? "Pengembangan Aplikasi Web Full-Stack"
                          : "Full-Stack Web Application Engineering"}
                      </option>
                      <option value="Professional Career / Recruitment Opportunity">
                        {lang === "id"
                          ? "Peluang Karier / Rekrutmen Profesional"
                          : "Professional Career / Recruitment Opportunity"}
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
