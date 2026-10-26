"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Server,
  Code2,
  Compass,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Terminal,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  FileText,
  Lock,
  Cpu,
  Globe,
  Send,
  Mountain,
  Eye,
  ChevronRight,
  Layers,
  Menu,
  X,
} from "lucide-react";
import {
  PROFILE_DATA,
  METRICS_DATA,
  SKILL_GROUPS,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  EDUCATION_DATA,
  LEADERSHIP_AND_SAR_DATA,
  ProjectItem,
} from "@/data/portfolioData";
import CyberTerminal from "@/components/CyberTerminal";
import ProjectBlueprintModal from "@/components/ProjectBlueprintModal";

export default function PortfolioHomePage() {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [projectFilter, setProjectFilter] = useState<"all" | "cybersecurity" | "fullstack">("all");
  const [certFilter, setCertFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Consultation Form State
  const [visitorName, setVisitorName] = useState("");
  const [visitorOrg, setVisitorOrg] = useState("");
  const [inquiryTopic, setInquiryTopic] = useState("Enterprise PAM / Cyber Security Consultation");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    projectFilter === "all" ? true : p.category === projectFilter
  );

  const certCategories = ["All", "Security & PAM", "Firewall & Endpoint", "Cloud & Backup", "Software & SAR"];
  const filteredCerts = CERTIFICATIONS_DATA.filter((c) =>
    certFilter === "All" ? true : c.category === certFilter
  );

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      lang === "id"
        ? `Halo Mas Ksatria Dharma Aldzikri,\n\nPerkenalkan saya *${visitorName || "Rekruter / Klien"}* dari *${visitorOrg || "Perusahaan"}*.\nSaya melihat website portofolio & profil LinkedIn Anda dan tertarik berdiskusi mengenai: *${inquiryTopic}*.\n\nPesan:\n${inquiryMessage || "Mohon informasi jadwal diskusi lebih lanjut. Terima kasih."}`
        : `Hello Ksatria Dharma Aldzikri,\n\nMy name is *${visitorName || "Client / Recruiter"}* from *${visitorOrg || "Organization"}*.\nI reviewed your portfolio website & LinkedIn profile and would like to discuss: *${inquiryTopic}*.\n\nMessage:\n${inquiryMessage || "Looking forward to connecting with you."}`;
    window.open(
      `https://wa.me/6281293353915?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-emerald-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-sky-400" />;
      default:
        return <Compass className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 relative cyber-grid-bg">
      {/* Ambient Radial Spotlight */}
      <div className="pointer-events-none fixed inset-0 cyber-spotlight z-0" />

      {/* Sticky Futuristic Header */}
      <header className="sticky top-0 z-40 border-b border-cyan-500/15 bg-[#040814]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/25 via-sky-500/15 to-emerald-500/20 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:border-cyan-300 transition">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white text-sm sm:text-base">
                  KSATRIA D. ALDZIKRI
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  ● SEC-OPS ONLINE
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Senior Cyber Security • PAM • Web Dev
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Profil & Terminal" : "Profile & Terminal"}
            </a>
            <a href="#competencies" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Keahlian" : "Competencies"}
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Pengalaman" : "Experience"}
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Proyek Enterprise & Web" : "Projects"}
            </a>
            <a href="#certifications" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Sertifikasi" : "Certifications"}
            </a>
            <a href="#leadership" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Pendidikan & SAR" : "Education & SAR"}
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              {lang === "id" ? "Kontak" : "Contact"}
            </a>
          </nav>

          {/* Actions: Language Switcher + LinkedIn + CV */}
          <div className="flex items-center gap-2.5">
            {/* Bilingual Toggle */}
            <div className="inline-flex items-center rounded-lg bg-[#0a1329] p-0.5 border border-cyan-500/25">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition ${
                  lang === "id"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition ${
                  lang === "en"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a66c2]/20 hover:bg-[#0a66c2]/35 text-sky-300 border border-sky-400/35 text-xs font-semibold transition"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE_DATA.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === "id" ? "Unduh CV (ATS)" : "Download CV"}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-[#060c1f] px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Profil & Terminal" : "Profile & Terminal"}
              </a>
              <a
                href="#competencies"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Keahlian Utama" : "Competencies"}
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Pengalaman Kerja" : "Experience"}
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Proyek Enterprise" : "Projects"}
              </a>
              <a
                href="#certifications"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Sertifikasi Resmi" : "Certifications"}
              </a>
              <a
                href="#leadership"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200"
              >
                {lang === "id" ? "Pendidikan & SAR" : "Education & SAR"}
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg bg-[#0a66c2] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn Resmi
              </a>
              <a
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" /> Unduh CV (PDF)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="top" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-24 space-y-24">
        {/* ================= HERO COMMAND SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Executive Bio & LinkedIn Alignment */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {lang === "id"
                  ? "TERVERIFIKASI LINKEDIN • SENIOR IT CYBER SECURITY & WEB DEVELOPER"
                  : "LINKEDIN VERIFIED • SENIOR IT CYBER SECURITY & WEB DEVELOPER"}
              </span>
            </div>

            {/* Name & Futuristic Gradient Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400">
                {lang === "id"
                  ? "DOSSIER EKSEKUTIF KEAMANAN SIBER & REKAYASA WEB"
                  : "EXECUTIVE CYBERSECURITY & FULL-STACK ENGINEERING DOSSIER"}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Ksatria Dharma{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                  Aldzikri
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold">
                  Senior IT Cyber Security
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold">
                  Senior Technical Product Specialist
                </span>
                <span className="px-3 py-1 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
                  Full-Stack Web Developer
                </span>
              </div>
            </div>

            {/* Tagline & Summary */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed border-l-2 border-cyan-400 pl-4">
              {PROFILE_DATA.tagline[lang]}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {PROFILE_DATA.summary[lang]}
            </p>

            {/* Quick Location & Identity Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091229]/90 border border-slate-800/90">
                <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  <strong className="text-white">PT. Optima Solusindo Informatika</strong> (2024 – Present)
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091229]/90 border border-slate-800/90">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091229]/90 border border-slate-800/90">
                <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>S1 Information Technology — Universitas Terbuka</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091229]/90 border border-slate-800/90">
                <Mountain className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SAR SJ-182 Rescue & APGI ({PROFILE_DATA.apgiId})</span>
              </div>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm shadow-[0_0_30px_rgba(0,240,255,0.35)] transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>
                  {lang === "id" ? "Kunjungi LinkedIn Saya" : "Connect on LinkedIn"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b1736] hover:bg-[#11224d] text-cyan-300 border border-cyan-500/35 font-semibold text-sm transition"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>
                  {lang === "id" ? "Unduh ATS Resume (PDF)" : "Download ATS Resume (PDF)"}
                </span>
              </a>

              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-semibold text-sm transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>

              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Futuristic Holographic Photo Frame + LinkedIn Banner Switcher */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Glowing Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-sky-500/15 to-emerald-500/30 blur-2xl opacity-80" />

              {/* Holographic HUD Container */}
              <div className="relative rounded-3xl border border-cyan-400/40 bg-[#071026]/95 p-4 sm:p-5 shadow-[0_0_50px_-10px_rgba(0,240,255,0.28)] overflow-hidden">
                {/* Top HUD Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 pb-3 mb-3 border-b border-cyan-500/20">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    ID // KSATRIA-SEC-2026
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    CLEARANCE: SENIOR
                  </span>
                </div>

                {/* Professional Portrait Image */}
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 aspect-[4/4.2] group">
                  <img
                    src={PROFILE_DATA.profilePhoto}
                    alt="Ksatria Dharma Aldzikri - Senior IT Cyber Security & Senior Technical Product Specialist"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                  />

                  {/* Subtle Cyber Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/25 to-transparent" />

                  {/* Corner HUD Brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400/80" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400/80" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400/80" />

                  {/* Floating Telemetry Badges */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-[#050c1e]/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-lg">
                    🛡️ PAM: SEGURA CORE
                  </div>
                  <div className="absolute top-14 right-4 px-2.5 py-1 rounded-lg bg-[#050c1e]/85 backdrop-blur-md border border-emerald-400/40 text-[11px] font-mono text-emerald-300 shadow-lg">
                    🔒 SOPHOS v22 & ACRONIS XDR
                  </div>

                  {/* Bottom Nameplate inside Photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#050d20]/90 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white flex items-center gap-1.5">
                          {PROFILE_DATA.name}
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        </p>
                        <p className="text-[11px] font-mono text-cyan-300">
                          Senior IT Cyber Security | Technical Product Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Cyber Banner Preview Strip */}
                <div className="mt-3 p-2.5 rounded-xl bg-[#0a1530] border border-cyan-500/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={PROFILE_DATA.bannerPhoto}
                      alt="Ksatria LinkedIn Cyber & SAR Banner"
                      className="w-16 h-9 rounded object-cover border border-cyan-400/30 shrink-0"
                    />
                    <div className="truncate">
                      <p className="text-xs font-semibold text-white truncate">
                        {lang === "id" ? "Banner Resmi LinkedIn" : "Official LinkedIn Banner"}
                      </p>
                      <p className="text-[11px] font-mono text-slate-400 truncate">
                        Cyber Security • Web Dev • SAR Rescue
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBannerModal(true)}
                    className="px-2.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono inline-flex items-center gap-1 shrink-0 transition"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === "id" ? "Lihat" : "View"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXECUTIVE METRICS BAR ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/45 transition group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-sm font-bold text-white mt-1">
                {item.label[lang]}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {item.detail[lang]}
              </div>
            </div>
          ))}
        </section>

        {/* ================= INTERACTIVE CYBER COMMAND TERMINAL ================= */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>INTERACTIVE SECURITY TELEMETRY CONSOLE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === "id"
                  ? "Terminal Komando Interaktif & Jejak Rekam Digital"
                  : "Interactive Cyber Command Terminal & Digital Footprint"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {lang === "id"
                ? "Klik tombol perintah cepat di bawah untuk mengeksplorasi arsitektur keamanan, proyek korporasi, dan sertifikasi saya secara real-time."
                : "Click any quick-execute command below to inspect my security architecture, enterprise deployments, and verified credentials."}
            </p>
          </div>

          <CyberTerminal lang={lang} />
        </section>

        {/* ================= CORE COMPETENCIES & ARCHITECTURE MATRIX ================= */}
        <section id="competencies" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Cpu className="w-4 h-4" />
                <span>CORE COMPETENCIES & SKILLS MATRIX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === "id"
                  ? "Spesialisasi Keamanan Siber, Infrastruktur & Full-Stack Web"
                  : "Cybersecurity, Infrastructure & Full-Stack Web Architecture"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {lang === "id"
                ? "Selaras dengan rekam jejak di LinkedIn & ATS Resume: menggabungkan pertahanan Zero-Trust PAM dengan rekayasa perangkat lunak modern."
                : "Directly aligned with my LinkedIn & ATS Dossier: combining Zero-Trust PAM defense with modern full-stack software engineering."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.id}
                className="p-6 rounded-2xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/40 transition space-y-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      {renderSkillIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {group.title[lang]}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {group.subtitle[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px] border border-slate-700">
                            {skill.tag}
                          </span>
                          <span className="font-mono text-cyan-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROFESSIONAL EXPERIENCE TIMELINE ================= */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span>PROFESSIONAL CAREER TRACK (2019 – PRESENT)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === "id"
                  ? "Pengalaman Kerja Profesional"
                  : "Professional Experience"}
              </h2>
            </div>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
            >
              <span>
                {lang === "id"
                  ? "Lihat Rekam Jejak Lengkap di LinkedIn"
                  : "Verify Full Career History on LinkedIn"}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-sky-500 before:to-emerald-500/30">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={exp.id} className="relative pl-12 sm:pl-16">
                {/* Timeline Node */}
                <div
                  className={`absolute left-2 sm:left-4 top-6 w-4 h-4 rounded-full border-2 ${
                    idx === 0
                      ? "bg-cyan-400 border-white shadow-[0_0_15px_rgba(0,240,255,0.9)]"
                      : "bg-[#091229] border-cyan-400"
                  }`}
                />

                <div className="p-6 rounded-2xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/45 transition space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-emerald-400">
                          • {exp.type[lang]}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role[lang]}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 mt-0.5">
                        {exp.company} <span className="text-slate-500 font-normal">| {exp.location}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {exp.highlights[lang].map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= KEY ENTERPRISE & FULL-STACK PROJECTS ================= */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Layers className="w-4 h-4" />
                <span>ENTERPRISE SECURITY DEPLOYMENTS & FULL-STACK PORTFOLIO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === "id"
                  ? "Proyek Strategis Korporasi & Aplikasi Web Full-Stack"
                  : "Key Enterprise Security Deployments & Full-Stack Projects"}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setProjectFilter("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition ${
                  projectFilter === "all"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "bg-[#091229] text-slate-300 border border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                {lang === "id" ? "Semua Proyek (8)" : "All Projects (8)"}
              </button>
              <button
                type="button"
                onClick={() => setProjectFilter("cybersecurity")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition ${
                  projectFilter === "cybersecurity"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "bg-[#091229] text-slate-300 border border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                🛡️ {lang === "id" ? "Cyber Security & PAM (5)" : "Enterprise Security & PAM (5)"}
              </button>
              <button
                type="button"
                onClick={() => setProjectFilter("fullstack")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition ${
                  projectFilter === "fullstack"
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    : "bg-[#091229] text-slate-300 border border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                💻 {lang === "id" ? "Full-Stack Web Apps (3)" : "Full-Stack Web Apps (3)"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer p-6 rounded-2xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/60 transition flex flex-col justify-between space-y-5 hover:shadow-[0_0_35px_-10px_rgba(0,240,255,0.22)]"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.badge[lang]}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                      {project.year} • {project.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {project.clientOrOrg}
                    </p>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary[lang]}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-cyan-400 border border-slate-800">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                    <span>
                      {lang === "id"
                        ? "Buka Detail Arsitektur & Solusi"
                        : "Inspect Architecture Blueprint"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold">
                      VIEW DOSSIER →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VERIFIED CERTIFICATIONS & CREDENTIALS VAULT ================= */}
        <section id="certifications" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                <Award className="w-4 h-4" />
                <span>VERIFIED GLOBAL & NATIONAL CREDENTIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === "id"
                  ? "Lisensi & Sertifikasi Keamanan Siber Resmi"
                  : "Verified Licenses & Cybersecurity Certifications"}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {certCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCertFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition ${
                    certFilter === cat
                      ? "bg-cyan-500 text-slate-950 font-bold"
                      : "bg-[#091229] text-slate-300 border border-slate-800 hover:border-cyan-500/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/50 transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                      {cert.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300">
                    {cert.issuer} <span className="text-slate-500 font-mono">• {cert.date}</span>
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  {cert.credentialId ? (
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded">
                      ID: {cert.credentialId}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">
                      ISSUED TO KSATRIA D.A.
                    </span>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-2.5 py-1 rounded-lg transition"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{lang === "id" ? "Buka Sertifikat" : "View PDF"}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EDUCATION, LEADERSHIP & TACTICAL SAR ("BEYOND THE FIREWALL") ================= */}
        <section id="leadership" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
              <Compass className="w-4 h-4" />
              <span>EDUCATION, EMERGENCY RESCUE (SAR) & APGI MOUNTAINEERING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {lang === "id"
                ? "Pendidikan, Kepemimpinan Krisis & Operasi SAR Lapangan"
                : "Academic Background, Crisis Leadership & Search-and-Rescue"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Academic Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl cyber-glass border border-cyan-500/20 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {lang === "id" ? "Pendidikan Formal" : "Academic Education"}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Information Technology & Computer Science
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {EDUCATION_DATA.map((edu) => (
                    <div
                      key={edu.institution}
                      className="p-4 rounded-xl bg-[#081126] border border-slate-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                      <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                      <p className="text-xs font-semibold text-emerald-400">
                        {edu.degree[lang]}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {edu.description[lang]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mountain Expedition Log Summary Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-cyan-500/10 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                      <Mountain className="w-4 h-4" />
                      APGI REG: {PROFILE_DATA.apgiId}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      SURVIVAL & IMPK
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === "id"
                      ? "Rekam Jejak Ekspedisi (2021–2026): TN Gunung Rinjani (2x), Gn. Slamet, Gn. Sumbing, Gn. Sindoro, Gn. Merbabu, Gn. Lawu, TN Gn. Gede Pangrango (4x), Gn. Prau, & TN Gn. Halimun Salak."
                      : "Expedition Track Record (2021–2026): Mt. Rinjani National Park (2x), Mt. Slamet, Mt. Sumbing, Mt. Sindoro, Mt. Merbabu, Mt. Lawu, Mt. Gede Pangrango (4x), Mt. Prau, & Mt. Halimun Salak."}
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership & SAR Operations Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEADERSHIP_AND_SAR_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl cyber-glass border border-amber-500/20 hover:border-amber-400/45 transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white leading-snug">
                      {item.role[lang]}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-300">{item.org}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.highlight[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DIRECT CONTACT & CONSULTATION HUB ================= */}
        <section id="contact" className="scroll-mt-24">
          <div className="rounded-3xl cyber-glass border border-cyan-500/30 p-6 sm:p-10 shadow-[0_0_60px_-15px_rgba(0,240,255,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Channels */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                    <Globe className="w-4 h-4" />
                    <span>DIRECT EXECUTIVE CHANNELS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {lang === "id"
                      ? "Mari Diskusikan Arsitektur Keamanan & Proyek Web Anda"
                      : "Let's Architect Your Enterprise Security & Web Solutions"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {lang === "id"
                      ? "Terbuka untuk peluang kolaborasi proyek Enterprise Cyber Security (PAM, XDR, Backup/DR), Technical Pre-Sales/POC, maupun pengembangan aplikasi Web Full-Stack."
                      : "Open for Enterprise Cyber Security (PAM, XDR, Backup/DR) consulting, Technical Product Specialist opportunities, and Full-Stack Web Engineering projects."}
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#09132c] hover:bg-[#0e1d42] border border-cyan-500/25 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-sky-400" />
                      <div>
                        <div className="font-bold text-white">LinkedIn Profile</div>
                        <div className="text-xs text-slate-400 font-mono">
                          {PROFILE_DATA.linkedinSlug}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  </a>

                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#09132c] hover:bg-[#0e1d42] border border-cyan-500/25 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-bold text-white">Direct Email</div>
                        <div className="text-xs text-slate-400 font-mono">
                          {PROFILE_DATA.email}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  </a>

                  <a
                    href={PROFILE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#09132c] hover:bg-[#0e1d42] border border-emerald-500/25 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="font-bold text-white">Phone / WhatsApp</div>
                        <div className="text-xs text-slate-400 font-mono">
                          {PROFILE_DATA.phone}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                  </a>

                  <a
                    href={PROFILE_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#09132c] hover:bg-[#0e1d42] border border-slate-800 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-slate-200" />
                      <div>
                        <div className="font-bold text-white">GitHub Repositories</div>
                        <div className="text-xs text-slate-400 font-mono">
                          github.com/Ksatria3739
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Interactive Quick Dispatch Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSendWhatsApp}
                  className="p-6 rounded-2xl bg-[#070f24] border border-cyan-500/25 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      // FAST-TRACK DISPATCH MESSAGE
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">
                      ● INSTANT WHATSAPP / EMAIL ROUTING
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {lang === "id" ? "Nama Lengkap Anda" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder={lang === "id" ? "Contoh: Budi Santoso" : "e.g. Alex Morgan"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1633] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {lang === "id" ? "Perusahaan / Organisasi" : "Company / Organization"}
                      </label>
                      <input
                        type="text"
                        value={visitorOrg}
                        onChange={(e) => setVisitorOrg(e.target.value)}
                        placeholder={lang === "id" ? "Nama Perusahaan" : "Organization Name"}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1633] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {lang === "id" ? "Topik Diskusi / Kebutuhan" : "Inquiry Topic"}
                    </label>
                    <select
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1633] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Enterprise PAM (Segura) & Zero-Trust Security">
                        Enterprise PAM (Segura) & Zero-Trust Security
                      </option>
                      <option value="Acronis Backup, Disaster Recovery & XDR/DLP">
                        Acronis Backup, Disaster Recovery & XDR/DLP
                      </option>
                      <option value="Sophos Firewall & Endpoint Engineering">
                        Sophos Firewall & Endpoint Engineering
                      </option>
                      <option value="Full-Stack Web Application & Payment Gateway">
                        Full-Stack Web Application & Payment Gateway
                      </option>
                      <option value="Executive Career / Recruitment Opportunity">
                        Executive Career / Recruitment Opportunity
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {lang === "id" ? "Pesan Singkat" : "Message Brief"}
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder={
                        lang === "id"
                          ? "Tuliskan kebutuhan proyek, jadwal POC, atau penawaran kolaborasi..."
                          : "Describe your project scope, POC schedule, or role opportunity..."
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1633] border border-slate-700/80 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.3)] transition"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {lang === "id"
                          ? "Kirim via WhatsApp Sekarang"
                          : "Dispatch via WhatsApp Now"}
                      </span>
                    </button>

                    <a
                      href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                        inquiryTopic
                      )}&body=${encodeURIComponent(inquiryMessage)}`}
                      className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-sm font-semibold inline-flex items-center gap-2 transition"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{lang === "id" ? "Via Email" : "Send Email"}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/15 bg-[#030611] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>
              © {new Date().getFullYear()} <strong className="text-white">{PROFILE_DATA.name}</strong>. Built for GitHub & Vercel Deployment.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              ATS Resume (PDF)
            </a>
          </div>
        </div>
      </footer>

      {/* Project Blueprint Modal */}
      <ProjectBlueprintModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      {/* LinkedIn Banner Lightbox Modal */}
      {showBannerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setShowBannerModal(false)}
        >
          <div
            className="max-w-5xl w-full rounded-2xl border border-cyan-500/40 bg-[#070f24] p-4 space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300">
                OFFICIAL LINKEDIN IDENTITY BANNER — KSATRIA DHARMA ALDZIKRI
              </span>
              <button
                type="button"
                onClick={() => setShowBannerModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img
              src={PROFILE_DATA.bannerPhoto}
              alt="Ksatria Dharma Aldzikri LinkedIn Banner"
              className="w-full rounded-xl border border-cyan-500/25"
            />
          </div>
        </div>
      )}
    </div>
  );
}
