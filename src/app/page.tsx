"use client";

import React, { useState, useEffect } from "react";
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
  Shield,
  Activity,
} from "lucide-react";
import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  ProjectItem,
} from "@/data/portfolioData";
import ProjectBlueprintModal from "@/components/ProjectBlueprintModal";
import KineticSecurityCanvas from "@/components/KineticSecurityCanvas";
import ScrollReveal from "@/components/ScrollReveal";

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

const MARQUEE_ITEMS = [
  "SEGURA® PAM ARCHITECTURE",
  "GOOGLE CYBERSECURITY PROFESSIONAL",
  "FORTINET NSE 1 · 2 · 3 CERTIFIED",
  "FORTIOS 8.0 & ISC2 CPE",
  "SOPHOS FIREWALL v22 & ENDPOINT v7",
  "ACRONIS CYBER PROTECT · XDR · DLP",
  "ZERO-TRUST & PRINCIPLE OF LEAST PRIVILEGE",
  "ICSI | CNSS NETWORK SECURITY",
  "ISO 27001 COMPLIANCE",
  "FULL-STACK NEXT.JS & LARAVEL",
];

const DYNAMIC_FOCUS_ROTATION = {
  id: [
    "Privileged Access Management (PAM)",
    "Keamanan Jaringan & Next-Gen Firewall",
    "Unified Data Protection, XDR & DLP",
    "Arsitektur Aplikasi Web Full-Stack",
  ],
  en: [
    "Privileged Access Management (PAM)",
    "Perimeter & Next-Gen Firewall Defense",
    "Unified Data Protection, XDR & DLP",
    "Full-Stack Web System Engineering",
  ],
};

export default function PortfolioHomePage() {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<"all" | "cybersecurity" | "fullstack">("all");
  const [certFilter, setCertFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);

  // Dynamic rotating specialty index
  const [focusIdx, setFocusIdx] = useState(0);

  // Interactive 3D tilt state for portrait card
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Contact form state
  const [visitorName, setVisitorName] = useState("");
  const [visitorOrg, setVisitorOrg] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState(
    "Privileged Access Management (PAM - Segura)"
  );
  const [inquiryMessage, setInquiryMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFocusIdx((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    setCardTilt({ rotateX, rotateY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

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
      <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0B0C0E] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative">
        {/* Top Scroll Progress Line */}
        <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent pointer-events-none">
          <div
            className="h-full bg-emerald-600 dark:bg-emerald-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* ================= TOP NAVIGATION ================= */}
        <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 dark:bg-[#0B0C0E]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
            {/* Avatar Photo Icon & Name */}
            <a href="#top" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <img
                  src={PROFILE_DATA.profilePhoto}
                  alt="Ksatria Dharma Aldzikri"
                  className="w-9 h-9 rounded-full object-cover object-center border border-zinc-300 dark:border-zinc-700 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#FAF9F6] dark:ring-[#0B0C0E]" />
              </div>
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium whitespace-nowrap transition hover:-translate-y-0.5"
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
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center rounded-lg border border-zinc-300 dark:border-zinc-700 text-xs font-medium"
                >
                  Instagram ↗
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

        {/* ================= HERO SECTION WITH INTERACTIVE SECURITY TOPOLOGY CANVAS ================= */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-20"
        >
          {/* Interactive Zero-Trust Network Mesh Canvas */}
          <KineticSecurityCanvas darkMode={darkMode} />

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Narrative & Positioning */}
              <div className="lg:col-span-8 space-y-6">
                {/* Live Animated Status Indicator + Dynamic Rotating Focus */}
                <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-sm border border-zinc-200/90 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    ACTIVE FOCUS:
                  </span>
                  <span
                    key={focusIdx}
                    className="font-semibold text-zinc-900 dark:text-zinc-100 transition-all duration-500"
                  >
                    {DYNAMIC_FOCUS_ROTATION[lang][focusIdx]}
                  </span>
                </div>

                {/* Clean Executive Headline & Structured Bio */}
                <div className="space-y-5">
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50 leading-[1.22] max-w-3xl">
                    {lang === "id" ? (
                      <>
                        Mengamankan{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          infrastruktur digital &amp; cloud
                        </span>{" "}
                        melalui arsitektur pertahanan yang terukur.
                      </>
                    ) : (
                      <>
                        Securing{" "}
                        <span className="text-emerald-700 dark:text-emerald-400">
                          digital infrastructure &amp; cloud
                        </span>{" "}
                        with scalable enterprise defense.
                      </>
                    )}
                  </h1>

                  <div className="space-y-3 text-[15px] sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.78] max-w-[62ch]">
                    {lang === "id" ? (
                      <>
                        <p>
                          Berpengalaman lebih dari{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            5 tahun
                          </span>{" "}
                          di bidang{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            Cyber Security Engineering
                          </span>
                          , pengembangan aplikasi web, dan operasional infrastruktur dalam
                          mentransformasikan tantangan keamanan kompleks menjadi pertahanan{" "}
                          <em>enterprise</em> yang tangguh.
                        </p>
                        <p>
                          Saat ini berperan sebagai{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            Senior Technical Product Specialist / Security Product Engineer
                          </span>{" "}
                          di{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            PT. Optima Solusindo Informatika
                          </span>
                          —memimpin siklus teknis <em>end-to-end</em> mulai dari perancangan
                          arsitektur, eksekusi POC, implementasi produksi (
                          <span className="font-medium text-zinc-800 dark:text-zinc-300">
                            Segura® PAM, Acronis Backup &amp; DR, Sophos, Fortinet, SIEM, XDR/DLP
                          </span>
                          ), hingga remediasi insiden SOC/L3 dan kepatuhan{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            ISO 27001
                          </span>
                          .
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          With over{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            5 years
                          </span>{" "}
                          of hands-on experience in{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            Cyber Security Engineering
                          </span>
                          , full-stack web development, and enterprise infrastructure operations, I
                          specialize in transforming complex security challenges into resilient,
                          scalable defenses.
                        </p>
                        <p>
                          Currently serving as a{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            Senior Technical Product Specialist / Security Product Engineer
                          </span>{" "}
                          at{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            PT. Optima Solusindo Informatika
                          </span>
                          —leading the end-to-end technical lifecycle from architecture design, POC
                          execution, and production deployment (
                          <span className="font-medium text-zinc-800 dark:text-zinc-300">
                            Segura® PAM, Acronis Backup &amp; DR, Sophos, Fortinet, SIEM, XDR/DLP
                          </span>
                          ) to L3 SOC incident remediation and{" "}
                          <span className="font-medium text-zinc-900 dark:text-zinc-200">
                            ISO 27001
                          </span>{" "}
                          compliance alignment.
                        </p>
                      </>
                    )}
                  </div>
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
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/85 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span>
                      {lang === "id" ? "Profil LinkedIn Resmi" : "Official LinkedIn Profile"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PROFILE_DATA.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {lang === "id" ? "Unduh CV / ATS Resume" : "Download ATS Resume"}
                    </span>
                  </a>

                  <a
                    href="#credentials"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition group"
                  >
                    <span>
                      {lang === "id" ? "Lihat 18 Sertifikasi" : "View 18 Certifications"}
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive 3D-Tilt Portrait Card + Rotating Orbital Perimeter Geometry */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative flex items-center justify-center">
                  {/* Artistic Rotating Orbital Security Rings Behind Portrait */}
                  <div
                    className="pointer-events-none absolute -inset-6 sm:-inset-8 flex items-center justify-center opacity-75"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full animate-orbit-slow text-zinc-300 dark:text-zinc-800"
                    >
                      <circle
                        cx="200"
                        cy="200"
                        r="190"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="6 8"
                      />
                      <circle cx="200" cy="10" r="4" className="fill-emerald-500" />
                      <circle cx="390" cy="200" r="3" className="fill-zinc-400 dark:fill-zinc-600" />
                      <circle cx="200" cy="390" r="3" className="fill-zinc-400 dark:fill-zinc-600" />
                    </svg>
                  </div>

                  <div
                    className="pointer-events-none absolute -inset-3 sm:-inset-4 flex items-center justify-center opacity-60"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 360 360"
                      className="w-full h-full animate-orbit-reverse text-zinc-200 dark:text-zinc-800/80"
                    >
                      <circle
                        cx="180"
                        cy="180"
                        r="172"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="24 12"
                      />
                      <circle cx="180" cy="8" r="3" className="fill-emerald-500/70" />
                    </svg>
                  </div>

                  {/* Interactive 3D Perspective Portrait Card */}
                  <div
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                    style={{
                      transform: `perspective(900px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
                      transition:
                        cardTilt.rotateX === 0 && cardTilt.rotateY === 0
                          ? "transform 0.5s ease-out"
                          : "transform 0.08s ease-out",
                    }}
                    className="relative z-10 w-full max-w-[300px] sm:max-w-[310px] rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-[#121317]/95 backdrop-blur-md p-4 shadow-lg space-y-4"
                  >
                    {/* High-DPI 800x800 image rendered at ~275px for ~3x Retina Sharpness */}
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 group">
                      <img
                        src={PROFILE_DATA.profilePhoto}
                        alt="Ksatria Dharma Aldzikri"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>

                    {/* Clean Executive Profile Metadata */}
                    <div className="space-y-2.5 pt-0.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                            <span>Ksatria Dharma Aldzikri</span>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
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
            </div>

            {/* Architectural Key Facts Bar */}
            <ScrollReveal delayMs={100}>
              <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="group">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id" ? "Pengalaman Industri" : "Industry Track"}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1 group-hover:translate-x-1 transition-transform">
                    5+ {lang === "id" ? "Tahun" : "Years"}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {lang === "id"
                      ? "Cyber Security Engineering & Web (Sejak 2019)"
                      : "Cyber Security Engineering & Web (Since 2019)"}
                  </p>
                </div>

                <div className="group">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id" ? "Spesialisasi Inti" : "Core Focus"}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1 group-hover:translate-x-1 transition-transform">
                    PAM · XDR · NGFW
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Segura, Acronis, Sophos & Fortinet
                  </p>
                </div>

                <div className="group">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id" ? "Implementasi Klien" : "Enterprise Clients"}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1 group-hover:translate-x-1 transition-transform">
                    8+ {lang === "id" ? "Proyek" : "Deployments"}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    MSIG Life, Bayer, Sucofindo, Arasis, Socare
                  </p>
                </div>

                <div className="group">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {lang === "id" ? "Lisensi & Sertifikasi" : "Verified Credentials"}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1 group-hover:translate-x-1 transition-transform">
                    18 {lang === "id" ? "Sertifikasi" : "Certifications"}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Google Cybersecurity, Fortinet, Sophos, Segura, ICSI
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= INFINITE KINETIC SECURITY ECOSYSTEM MARQUEE ================= */}
        <div className="border-b border-zinc-200 dark:border-zinc-800/90 bg-zinc-100/70 dark:bg-zinc-900/50 py-3.5 overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-wider text-zinc-500 dark:text-zinc-400">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-8 whitespace-nowrap">
                <span className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              </span>
            ))}
          </div>
        </div>

        {/* ================= MAIN CONTAINER ================= */}
        <main className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* ================= 01 / KEAHLIAN & KAPABILITAS TEKNIS ================= */}
          <section
            id="capabilities"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <ScrollReveal>
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
                  {CAPABILITY_PILLARS.map((pillar, i) => (
                    <ScrollReveal key={pillar.index} delayMs={i * 80}>
                      <div className="group relative py-7 first:pt-6 last:pb-6 space-y-3.5 pl-4 transition-all duration-300 hover:pl-6">
                        {/* Animated Left Accent Indicator */}
                        <span className="absolute left-0 top-7 bottom-7 w-[2px] bg-zinc-200 dark:bg-zinc-800 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 transition-colors duration-300" />

                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================= 02 / PENGALAMAN PROFESIONAL ================= */}
          <section
            id="experience"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <ScrollReveal>
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
                  {EXPERIENCE_DATA.map((exp, i) => (
                    <ScrollReveal key={exp.id} delayMs={i * 90}>
                      <div className="py-8 space-y-4 group">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
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
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-emerald-500 transition-colors shrink-0" />
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
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================= 03 / STUDI KASUS & PROYEK TERPILIH ================= */}
          <section
            id="work"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <ScrollReveal>
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
                    <ScrollReveal key={project.id} delayMs={idx * 60}>
                      <article
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer py-7 sm:py-8 transition-all duration-300 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/50 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-xl"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                          {/* Client & Year */}
                          <div className="lg:col-span-3 flex lg:flex-col justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:translate-x-1 transition-transform">
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
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================= 04 / LISENSI & SERTIFIKASI RESMI (LINKEDIN VERIFIED) ================= */}
          <section
            id="credentials"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <ScrollReveal>
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
                    <ScrollReveal key={cert.id} delayMs={index * 40}>
                      <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg transition">
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
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-800 dark:text-zinc-200 shrink-0 self-start sm:self-center transition hover:-translate-y-0.5 ml-6 sm:ml-0"
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
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================= 05 / PENDIDIKAN ================= */}
          <section
            id="background"
            className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/90 scroll-mt-16"
          >
            <ScrollReveal>
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
                    {EDUCATION_DATA.map((edu, i) => (
                      <ScrollReveal key={edu.institution} delayMs={i * 90}>
                        <div className="py-6 space-y-2">
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
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================= 06 / KONTAK & DISKUSI ================= */}
          <section id="contact" className="py-16 sm:py-24 scroll-mt-16">
            <ScrollReveal>
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
                      <span className="text-zinc-500 dark:text-zinc-400">Instagram</span>
                      <a
                        href={PROFILE_DATA.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{PROFILE_DATA.instagramHandle}</span>
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-medium transition hover:-translate-y-0.5"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium transition hover:-translate-y-0.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lang === "id" ? "Kirim via Email" : "Send via Email"}</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </ScrollReveal>
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
                href={PROFILE_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                Instagram
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
