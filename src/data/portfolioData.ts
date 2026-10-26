export interface ExperienceItem {
  id: string;
  role: { en: string; id: string };
  company: string;
  period: string;
  location: string;
  type: { en: string; id: string };
  highlights: { en: string[]; id: string[] };
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientOrOrg: string;
  year: string;
  category: "cybersecurity" | "fullstack";
  badge: { en: string; id: string };
  summary: { en: string; id: string };
  liveUrl?: string;
  liveDomain?: string;
  architectureDetails: {
    challenge: { en: string; id: string };
    solution: { en: string; id: string };
    deliverables: { en: string[]; id: string[] };
  };
  technologies: string[];
  status: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: "Fortinet & ISC2" | "Segura® PAM" | "Sophos" | "Google, ICSI & Acronis";
  pdfUrl?: string;
  verified: boolean;
  description: { en: string; id: string };
}

export const PROFILE_DATA = {
  name: "Ksatria Dharma Aldzikri",
  shortName: "Ksatria D. Aldzikri",
  handle: "ksatria@sec-ops",
  title: {
    en: "Cyber Security Engineer | Senior Technical Product Specialist | Full-Stack Web Developer",
    id: "Cyber Security Engineer | Senior Technical Product Specialist | Full-Stack Web Developer",
  },
  tagline: {
    en: "Securing Digital Infrastructure & Cloud Solutions through Privileged Access Management (PAM), Enterprise Backup & XDR, Perimeter Firewall Defense, and Resilient Web Systems.",
    id: "Mengamankan Infrastruktur Digital & Solusi Cloud melalui Privileged Access Management (PAM), Backup & XDR Korporasi, Pertahanan Firewall Perimeter, dan Sistem Web Berintegritas Tinggi.",
  },
  summary: {
    en: "With over 5 years of hands-on experience in cybersecurity engineering, web development, and enterprise operations, I specialize in transforming complex security challenges into robust, scalable defenses. Currently serving as a Senior Technical Product Specialist / Security Product Engineer at PT. Optima Solusindo Informatika, I drive the end-to-end technical lifecycle—from solution design, Proof of Concept (POC) execution, and deployment (Segura PAM, Acronis Data Protection & DR, Sophos, Fortinet, SIEM, XDR/DLP) to post-deployment L3 incident remediation and ISO 27001 compliance alignment.",
    id: "Dengan pengalaman lebih dari 5 tahun di bidang rekayasa keamanan siber (Cyber Security Engineering), pengembangan web, dan operasional infrastruktur, saya berfokus mentransformasikan tantangan keamanan yang kompleks menjadi pertahanan enterprise yang tangguh. Saat ini sebagai Senior Technical Product Specialist / Security Product Engineer di PT. Optima Solusindo Informatika, saya memimpin siklus teknis end-to-end—mulai dari perancangan arsitektur, eksekusi Proof of Concept (POC), implementasi produksi (Segura PAM, Acronis Backup & DR, Sophos, Fortinet, SIEM, XDR/DLP), hingga remediasi insiden SOC/L3 dan kepatuhan standar ISO 27001.",
  },
  location: "South Tangerang, Banten, Indonesia",
  email: "Ksatriadharmaaldzikri@gmail.com",
  corporateEmail: "aldzikrik@optima-online.com",
  phone: "+62 812-9335-3915",
  whatsappUrl: "https://wa.me/6281293353915",
  linkedinUrl: "https://www.linkedin.com/in/ksatria-dharma-aldzikri-ab60522a4/",
  linkedinSlug: "in/ksatria-dharma-aldzikri-ab60522a4",
  instagramUrl: "https://www.instagram.com/ksatriadharmaaldz/",
  instagramHandle: "@ksatriadharmaaldz",
  githubUrl: "https://github.com/ksatria3739",
  profilePhoto: "/images/ksatria-profile.jpg?v=800hd",
  bannerPhoto: "/images/ksatria-banner.jpg",
  resumePdfUrl: "/resume/ATS-Resume-Ksatria-Dharma-Aldzikri.pdf",
  apgiId: "APGI.B26-03084",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "optima",
    role: {
      en: "Senior Technical Product Specialist / Security Product Engineer",
      id: "Senior Technical Product Specialist / Security Product Engineer",
    },
    company: "PT. Optima Solusindo Informatika",
    period: "Feb 2024 – Present",
    location: "DKI Jakarta & South Tangerang, Indonesia",
    type: {
      en: "Enterprise Cyber Security, PAM & Cloud Infrastructure",
      id: "Keamanan Siber Korporasi, PAM & Infrastruktur Cloud",
    },
    highlights: {
      en: [
        "Spearheaded the end-to-end design, deployment, and administration of Privileged Access Management (PAM) solutions utilizing the Segura (Senhasegura) platform to protect critical enterprise assets.",
        "Managed the complete technical lifecycle of cybersecurity and unified Data Protection & Disaster Recovery projects (Acronis, XDR, DLP, SIEM, Sophos, Fortinet) from initial client consultation to production deployment.",
        "Acted as the internal security anchor managing SOC L1/L3 escalations—actively validating threats, blocking malicious IPs, neutralizing brute-force attacks, and fine-tuning firewall and WAF rules.",
        "Partnered with IT infrastructure, governance teams, and external auditors to align technical security controls with ISO 27001 compliance frameworks.",
        "Designed and executed tailored Proof of Concepts (POCs) across major enterprise environments including PT. MSIG Life, PT. Bayer Indonesia, PT. Sucofindo, PT. Arasis Awan Teknologi, and PT. Sinar Alum Sarana.",
      ],
      id: [
        "Memimpin perancangan, deployment, dan administrasi end-to-end solusi Privileged Access Management (PAM) menggunakan platform Segura (Senhasegura) untuk mengamankan aset kritis organisasi.",
        "Mengelola siklus hidup teknis proyek keamanan siber serta Data Protection & Disaster Recovery terpadu (Acronis, XDR, DLP, SIEM, Sophos, Fortinet) mulai dari konsultasi awal hingga implementasi produksi.",
        "Berperan sebagai jangkar keamanan operasional yang menangani eskalasi insiden SOC—memvalidasi ancaman secara aktif, memblokir IP berbahaya, menetralisir serangan brute-force, serta menyempurnakan aturan Firewall dan WAF.",
        "Bermitra dengan tim infrastruktur IT, tata kelola (governance), dan auditor eksternal untuk memastikan kepatuhan kontrol keamanan terhadap standar ISO 27001.",
        "Merancang dan mengeksekusi Proof of Concept (POC) di berbagai lingkungan klien korporasi seperti PT. MSIG Life, PT. Bayer Indonesia, PT. Sucofindo, PT. Arasis Awan Teknologi, dan PT. Sinar Alum Sarana.",
      ],
    },
    tags: [
      "Segura PAM (Senhasegura)",
      "Identity & Access Management (IAM)",
      "Acronis Cyber Protect & DR",
      "Sophos & Fortinet Firewall",
      "XDR, DLP & SIEM",
      "ISO 27001 Compliance",
      "Technical Pre-Sales & POC",
    ],
  },
  {
    id: "bhayangkara",
    role: {
      en: "Cyber Security Engineer & Web Developer",
      id: "Cyber Security Engineer & Web Developer",
    },
    company: "PT. Bhayangkara Indonesia Bersatu",
    period: "2020 – 2024",
    location: "South Tangerang, Banten, Indonesia",
    type: {
      en: "Network Security Hardening & Web Platform Engineering",
      id: "Perkuatan Keamanan Jaringan & Pengembangan Platform Web",
    },
    highlights: {
      en: [
        "Implemented system security hardening best practices and configured network security controls, resulting in a 76% decrease in security incidents.",
        "Developed and led an internal security awareness program that improved employee security readiness and reduced human-factor security incidents by 80%.",
        "Developed and maintained responsive web applications and digital portals, ensuring optimal performance, data protection, and seamless user experience.",
      ],
      id: [
        "Mengimplementasikan perkuatan keamanan sistem (system hardening) dan konfigurasi keamanan jaringan yang berhasil menurunkan insiden keamanan sebesar 76%.",
        "Mengembangkan program kesadaran keamanan siber (security awareness) internal yang meningkatkan kesiapan personel dan menekan risiko insiden hingga 80%.",
        "Mengembangkan dan memelihara aplikasi web responsif serta portal digital terstruktur dengan performa dan keamanan data yang optimal.",
      ],
    },
    tags: [
      "Cyber Security Engineering",
      "Network Security Hardening",
      "Security Awareness",
      "Full-Stack Web Development",
      "Incident Reduction",
    ],
  },
  {
    id: "bharindo",
    role: {
      en: "Web Developer",
      id: "Web Developer",
    },
    company: "PT. Bharindo Indonesia Bersatu / Banten",
    period: "2019 – 2023",
    location: "South Tangerang, Banten, Indonesia",
    type: {
      en: "Web Platform Development & System Reliability",
      id: "Pengembangan Platform Web & Reliabilitas Sistem",
    },
    highlights: {
      en: [
        "Built and optimized web-based platforms focusing on clean code architecture, security hardening, and long-term system reliability.",
        "Developed custom RESTful APIs and third-party system integrations (including earlier backend & CMS engineering roles at CV. Dwi Rent Car and PT. Maustudy Indonesia) to automate data exchange and reduce latency.",
      ],
      id: [
        "Membangun dan mengoptimalkan platform berbasis web dengan fokus pada arsitektur clean code, perkuatan keamanan aplikasi, dan keandalan sistem.",
        "Mengembangkan RESTful API kustom dan integrasi sistem pihak ketiga (termasuk rekam jejak awal sebagai Back End & WordPress Developer di CV. Dwi Rent Car dan PT. Maustudy Indonesia) untuk mengotomatisasi pertukaran data.",
      ],
    },
    tags: [
      "RESTful API Engineering",
      "Full-Stack Web Development",
      "Clean Code Architecture",
      "Database Optimization",
      "System Integration",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "msig-life-pam",
    title: "Enterprise Privileged Access Management (PAM) Architecture",
    clientOrOrg: "PT. MSIG Life",
    year: "2025",
    category: "cybersecurity",
    badge: {
      en: "Enterprise PAM & Zero-Trust",
      id: "Enterprise PAM & Zero-Trust",
    },
    summary: {
      en: "Led the strategic deployment and architectural configuration of Senhasegura (Segura) as the core enterprise PAM solution, enforcing strict Principle of Least Privilege (PoLP).",
      id: "Memimpin deployment strategis dan konfigurasi arsitektur Senhasegura (Segura) sebagai solusi inti PAM korporasi dengan penerapan ketat Principle of Least Privilege (PoLP).",
    },
    architectureDetails: {
      challenge: {
        en: "Financial & insurance enterprise environments require strict regulatory compliance, centralized privileged session monitoring, and elimination of standing shared administrative credentials across critical servers.",
        id: "Lingkungan korporasi asuransi jiwa membutuhkan kepatuhan regulasi yang ketat, pemantauan sesi akses istimewa terpusat, serta penghapusan kredensial admin statis pada server kritis.",
      },
      solution: {
        en: "Architected and deployed Senhasegura PAM with high-availability vaulting, automated JIT/rotation policies, and granular role-based access controls tailored to MSIG Life's security governance.",
        id: "Merancang dan mengimplementasikan Senhasegura PAM dengan brankas kredensial terenkripsi, rotasi kata sandi otomatis, dan kontrol akses berlapis sesuai tata kelola keamanan MSIG Life.",
      },
      deliverables: {
        en: [
          "End-to-end Senhasegura PAM cluster deployment & hardening",
          "Secure credential vaulting & automated password rotation workflows",
          "Granular Principle of Least Privilege (PoLP) access matrix & session recording",
          "Zero-downtime transition & administrator operational handover",
        ],
        id: [
          "Deployment & hardening klaster Senhasegura PAM end-to-end",
          "Penyimpanan kredensial terenkripsi (Vaulting) & rotasi password otomatis",
          "Matriks akses Principle of Least Privilege (PoLP) & perekaman sesi audit",
          "Transisi zero-downtime & serah terima operasional tim sekuriti",
        ],
      },
    },
    technologies: ["Segura / Senhasegura PAM", "PoLP Architecture", "Credential Vaulting", "Automated Rotation", "Session Audit", "Zero-Trust"],
    status: "Production Deployed",
  },
  {
    id: "arasis-xdr-dlp",
    title: "Unified Cybersecurity Framework: XDR, DLP & M365 Backup",
    clientOrOrg: "PT. Arasis Awan Teknologi",
    year: "2025",
    category: "cybersecurity",
    badge: {
      en: "XDR + DLP + Cloud Backup",
      id: "XDR + DLP + Cloud Backup",
    },
    summary: {
      en: "Architected and deployed a unified cybersecurity framework integrating robust backup infrastructure with XDR and DLP protocols, plus high-frequency automated Microsoft 365 backups.",
      id: "Merancang dan menggelar kerangka kerja keamanan siber terpadu yang mengintegrasikan infrastruktur backup tangguh dengan protokol XDR dan DLP, serta jadwal backup otomatis berfrekuensi tinggi untuk Microsoft 365.",
    },
    architectureDetails: {
      challenge: {
        en: "Protecting modern cloud-first workspaces against ransomware, data exfiltration, and accidental SaaS data loss across Microsoft 365 tenants and endpoint fleets.",
        id: "Melindungi ekosistem kerja modern berbasis cloud dari ancaman ransomware, kebocoran data sensitif, serta kehilangan data SaaS pada lingkungan Microsoft 365 dan endpoint.",
      },
      solution: {
        en: "Unified Extended Detection & Response (XDR) and Data Loss Prevention (DLP) policies with automated, high-frequency Microsoft 365 backup schedules under a centralized management console.",
        id: "Menyatukan kebijakan Extended Detection & Response (XDR) dan Data Loss Prevention (DLP) dengan penjadwalan backup otomatis Microsoft 365 berfrekuensi tinggi dalam satu konsol terpusat.",
      },
      deliverables: {
        en: [
          "Unified XDR & Endpoint threat telemetry integration",
          "Data Loss Prevention (DLP) policy enforcement for sensitive corporate data",
          "High-frequency automated Microsoft 365 backup & granular point-in-time recovery",
        ],
        id: [
          "Integrasi telemetri ancaman XDR & Endpoint terpadu",
          "Penegakan kebijakan Data Loss Prevention (DLP) untuk data korporasi sensitif",
          "Backup otomatis berfrekuensi tinggi Microsoft 365 & pemulihan point-in-time",
        ],
      },
    },
    technologies: ["Acronis Cyber Protect", "XDR Protocols", "Data Loss Prevention (DLP)", "Microsoft 365 Backup", "Cloud Security"],
    status: "Production Deployed",
  },
  {
    id: "bayer-acronis-poc",
    title: "Corporate Network Backup Integration & Vulnerability POC",
    clientOrOrg: "PT. Bayer Indonesia",
    year: "2025",
    category: "cybersecurity",
    badge: {
      en: "Enterprise Backup & Security POC",
      id: "Integrasi Backup & POC Keamanan",
    },
    summary: {
      en: "Spearheaded the integration of Acronis backup architecture within the corporate network and executed comprehensive POC testing to proactively resolve potential vulnerabilities.",
      id: "Memimpin integrasi arsitektur backup Acronis di dalam jaringan korporasi serta mengeksekusi pengujian POC menyeluruh untuk memitigasi potensi kerentanan secara proaktif.",
    },
    architectureDetails: {
      challenge: {
        en: "Validating enterprise backup throughput, network segmentation compatibility, and vulnerability remediation within a strict multinational pharmaceutical network environment.",
        id: "Memvalidasi performa backup korporasi, kompatibilitas segmentasi jaringan, serta remediasi kerentanan di dalam lingkungan jaringan multinasional yang ketat.",
      },
      solution: {
        en: "Designed a custom Acronis integration architecture within the corporate network and conducted multi-stage POC validation to identify and eliminate security bottlenecks prior to rollout.",
        id: "Merancang arsitektur integrasi Acronis pada jaringan korporasi dan menjalankan pengujian POC bertahap untuk mengidentifikasi serta menutup celah kerentanan secara proaktif.",
      },
      deliverables: {
        en: [
          "Corporate network Acronis backup architecture integration",
          "Proactive vulnerability assessment & remediation validation during POC",
          "Executive technical viability report & production blueprint",
        ],
        id: [
          "Integrasi arsitektur backup Acronis pada jaringan korporasi",
          "Asesmen kerentanan proaktif & validasi mitigasi selama tahapan POC",
          "Laporan kelayakan teknis eksekutif & cetak biru produksi",
        ],
      },
    },
    technologies: ["Acronis Backup Architecture", "Enterprise Network Integration", "Vulnerability Assessment", "Technical POC", "Data Resilience"],
    status: "Verified & Completed",
  },
  {
    id: "sinar-alum-dr",
    title: "On-Premises Backup & Disaster Recovery Simulation",
    clientOrOrg: "PT. Sinar Alum Sarana",
    year: "2024",
    category: "cybersecurity",
    badge: {
      en: "On-Premises DR & NAS Security",
      id: "Disaster Recovery On-Premises",
    },
    summary: {
      en: "Executed the end-to-end onboarding and deployment of Acronis On-Premises backup solutions, conducting rigorous system testing and simulated disaster recovery scenarios.",
      id: "Mengeksekusi onboarding dan deployment end-to-end solusi backup Acronis On-Premises, disertai pengujian sistem ketat dan simulasi skenario Disaster Recovery untuk validasi integritas data.",
    },
    architectureDetails: {
      challenge: {
        en: "Industrial manufacturing operations require local, high-speed on-premises backup and verified disaster recovery capability across servers and Synology NAS storage.",
        id: "Operasional industri manufaktur membutuhkan sistem backup lokal berkecepatan tinggi serta kepastian pemulihan bencana (Disaster Recovery) pada server dan penyimpanan NAS.",
      },
      solution: {
        en: "Deployed Acronis On-Premises management server and agents (including Synology NAS integration) and executed live disaster recovery drills to verify RTO/RPO and data integrity.",
        id: "Mengimplementasikan server manajemen dan agen Acronis On-Premises (termasuk integrasi Synology NAS) serta menjalankan simulasi pemulihan bencana langsung untuk memvalidasi integritas data.",
      },
      deliverables: {
        en: [
          "End-to-end On-Premises Acronis Backup infrastructure deployment",
          "Full-scale simulated Disaster Recovery (DR) failover & bare-metal restore testing",
          "100% data integrity verification across critical production workloads",
        ],
        id: [
          "Deployment penuh infrastruktur Acronis Backup On-Premises",
          "Simulasi penuh skenario Disaster Recovery (DR) & uji pemulihan sistem",
          "Verifikasi integritas data 100% pada beban kerja produksi kritis",
        ],
      },
    },
    technologies: ["Acronis On-Premises", "Disaster Recovery Simulation", "Synology NAS Agent", "Data Integrity Testing", "RTO/RPO Validation"],
    status: "Production Deployed",
  },
  {
    id: "sucofindo-dataprotect",
    title: "Enterprise Data Protection Onboarding & Workflow Optimization",
    clientOrOrg: "PT. Sucofindo",
    year: "2024",
    category: "cybersecurity",
    badge: {
      en: "SOE / BUMN Data Protection",
      id: "Proteksi Data Enterprise / BUMN",
    },
    summary: {
      en: "Directed the initial setup, configuration, and onboarding of advanced Acronis data protection software, performing iterative testing and diagnostic troubleshooting to optimize backup workflows.",
      id: "Mengarahkan setup awal, konfigurasi, dan onboarding perangkat lunak proteksi data tingkat lanjut Acronis, serta melakukan pengujian iteratif dan troubleshooting diagnostik untuk mengoptimalkan alur kerja backup.",
    },
    architectureDetails: {
      challenge: {
        en: "Streamlining multi-node backup schedules and eliminating job bottlenecks across complex state-owned enterprise inspection & assurance infrastructure.",
        id: "Menyelaraskan jadwal backup multi-node dan menghilangkan hambatan performa pada infrastruktur korporasi BUMN.",
      },
      solution: {
        en: "Directed structured onboarding, tuned backup deduplication and retention policies, and performed deep diagnostic troubleshooting to maximize backup reliability.",
        id: "Memimpin proses onboarding terstruktur, menyempurnakan kebijakan retensi serta deduplikasi, dan melakukan diagnostik mendalam untuk memaksimalkan keandalan alur kerja backup.",
      },
      deliverables: {
        en: [
          "Enterprise Acronis Data Protection setup & agent onboarding",
          "Iterative performance tuning & diagnostic troubleshooting",
          "Optimized automated backup & retention workflows",
        ],
        id: [
          "Setup & onboarding agen proteksi data Acronis tingkat korporasi",
          "Pengujian iteratif & diagnostik troubleshooting sistem",
          "Optimalisasi alur kerja jadwal backup dan kebijakan retensi otomatis",
        ],
      },
    },
    technologies: ["Acronis Data Protection", "System Diagnostics", "Workflow Optimization", "Enterprise Onboarding", "Backup Architecture"],
    status: "Production Deployed",
  },
  {
    id: "socare-smart-invoicing",
    title: "Socare.id — Corporate Consultancy Platform & Smart Invoicing Ecosystem",
    clientOrOrg: "PT. Socare Group International",
    year: "2025 – 2026",
    category: "fullstack",
    liveUrl: "https://socare.id",
    liveDomain: "socare.id",
    badge: {
      en: "Live Corporate Platform & Fintech",
      id: "Platform Korporasi Live & Fintech",
    },
    summary: {
      en: "Developed the official web ecosystem for PT. Socare Group International (socare.id)—an international management consultancy specializing in Foreign Direct Investment (PMA), regulatory compliance, HR training, and international internship programs—complete with a SHA-256 tokenized Smart Invoicing & 3DS 2.0 payment portal.",
      id: "Mengembangkan ekosistem web resmi PT. Socare Group International (socare.id)—konsultan manajemen internasional yang berfokus pada pendampingan investasi asing (PMA), kepatuhan hukum & regulasi, pelatihan SDM, serta program magang internasional—lengkap dengan sistem Smart Invoicing berproteksi kriptografi SHA-256 & pembayaran 3DS 2.0.",
    },
    architectureDetails: {
      challenge: {
        en: "Establishing a credible, globally accessible digital presence at socare.id for foreign investors and institutional partners while securing corporate invoicing and multi-channel payment workflows against IDOR vulnerabilities.",
        id: "Membangun kehadiran digital korporasi yang kredibel dan berstandar global di socare.id bagi investor asing serta mitra institusi, sekaligus mengamankan dokumen tagihan korporasi dan transaksi pembayaran dari celah keamanan IDOR.",
      },
      solution: {
        en: "Architected the live corporate web platform at socare.id alongside a Next.js 15 & TypeScript Smart Invoicing module featuring SHA-256 tokenized document URLs, SMTP 6-digit OTP verification, and 3D Secure 2.0 Credit Card / Virtual Account checkout.",
        id: "Merancang platform web korporasi live di socare.id beserta modul Smart Invoicing berbasis Next.js 15 & TypeScript yang dilengkapi URL dokumen terproteksi hash SHA-256, verifikasi OTP 6-digit via SMTP, serta pembayaran Kartu Kredit 3DS 2.0 & Virtual Account.",
      },
      deliverables: {
        en: [
          "Official live corporate platform at https://socare.id showcasing PMA consulting, legal compliance, strategic business partnerships, and international internship programs",
          "SHA-256 cryptographic tokenized invoice & checkout endpoints (anti-IDOR) with 3D Secure 2.0 Credit Card & Multi-Bank Virtual Account integration",
          "Mandatory 6-digit Email OTP verification & Executive Admin Dashboard with 1-click WhatsApp billing",
        ],
        id: [
          "Platform web korporasi live di https://socare.id untuk layanan pendampingan PMA, kepatuhan regulasi, kemitraan bisnis strategis, dan program magang internasional",
          "Endpoint invoice & checkout terproteksi kriptografi SHA-256 (anti-IDOR) dengan integrasi Kartu Kredit 3D Secure 2.0 & Virtual Account Multi-Bank",
          "Verifikasi wajib OTP Email 6-digit & Dashboard Admin dengan generator tagihan WhatsApp 1-klik",
        ],
      },
    },
    technologies: ["socare.id (Live)", "Next.js 15", "TypeScript", "Tailwind CSS", "Prisma ORM", "SHA-256 Security", "3DS 2.0 Payment Gateway"],
    status: "Live Production (socare.id)",
  },
  {
    id: "portalbmi-news-portal",
    title: "PortalBMI.id — Cross-Border Digital News & Media Publishing Platform",
    clientOrOrg: "PORTALBMI.ID (Lintas Berita Lintas Negara)",
    year: "2025 – 2026",
    category: "fullstack",
    liveUrl: "https://portalbmi.id",
    liveDomain: "portalbmi.id",
    badge: {
      en: "Live Media Portal & Web Security",
      id: "Portal Berita Live & Keamanan Web",
    },
    summary: {
      en: "Engineered, deployed, and secured the live digital news portal PortalBMI.id ('Lintas Berita Lintas Negara'), delivering real-time domestic, international, legal, and Indonesian migrant worker (BMI) news coverage with high-speed content delivery and web security hardening.",
      id: "Membangun, mengelola deployment, dan mengamankan portal berita digital live PortalBMI.id ('Lintas Berita Lintas Negara') yang menyajikan liputan aktual berita nasional, mancanegara, hukum, politik, serta berita pekerja migran Indonesia (BMI) dengan performa tinggi dan keamanan web berlapis.",
    },
    architectureDetails: {
      challenge: {
        en: "Delivering fast, mobile-responsive news publishing across multiple rubrics (National, International, Migrant Workers/Imigran Indonesia, Law & Crime, Politics, Social & Culture) while maintaining high availability, strong SEO indexing, and protection against automated bot scraping and DDoS traffic.",
        id: "Menghadirkan publikasi berita yang cepat dan responsif di berbagai rubrik (Berita Nasional, Mancanegara, Imigran Indonesia, Hukum & Kriminalitas, Politik, Sosial & Budaya) sekaligus menjaga ketersediaan tinggi, optimasi SEO, serta perlindungan dari serangan bot dan DDoS.",
      },
      solution: {
        en: "Built and optimized the production publishing platform at portalbmi.id with structured multi-category editorial taxonomy, trending news engines, Core Web Vitals & SEO schema optimization, caching layers, and perimeter web security hardening.",
        id: "Merancang dan mengoptimalkan arsitektur portal berita produksi di portalbmi.id dengan taksonomi redaksi multi-kategori, mesin berita trending, optimasi skema SEO & Core Web Vitals, akselerasi caching, serta hardening keamanan aplikasi web.",
      },
      deliverables: {
        en: [
          "Live production news portal at https://portalbmi.id ('Lintas Berita Lintas Negara') with dynamic multi-category editorial grids",
          "Comprehensive rubric architecture covering Berita Nasional, Imigran Indonesia, Mancanegara, Hukum & Kriminalitas, Politik, Pendidikan, and Sosial Budaya",
          "Search Engine Optimization (SEO), social media syndication integration, SSL/TLS encryption, and web security hardening",
        ],
        id: [
          "Portal berita produksi live di https://portalbmi.id ('Lintas Berita Lintas Negara') dengan tata letak redaksi multi-kategori yang dinamis",
          "Arsitektur rubrik komprehensif: Berita Nasional, Imigran Indonesia, Mancanegara, Hukum & Kriminalitas, Politik, Pendidikan, serta Sosial & Budaya",
          "Optimasi penuh SEO & kecepatan akses, integrasi jejaring media sosial, enkripsi SSL/TLS, serta hardening keamanan server & CMS",
        ],
      },
    },
    technologies: ["portalbmi.id (Live)", "Web Publishing Architecture", "SEO & Core Web Vitals", "Web Security Hardening", "SSL/TLS & Caching", "Responsive Editorial UI"],
    status: "Live Production (portalbmi.id)",
  },
  {
    id: "rumah-tani-marketplace",
    title: "Rumah Tani — Integrated B2B/B2C Agricultural Supply Chain Platform",
    clientOrOrg: "AgriTech Supply Chain Ecosystem",
    year: "2026",
    category: "fullstack",
    badge: {
      en: "Laravel 12 + Vue 3 + 5-Level RBAC",
      id: "Laravel 12 + Vue 3 + RBAC 5-Level",
    },
    summary: {
      en: "Architected a multi-role B2B/B2C agricultural e-commerce platform with 5-level RBAC, pessimistic row locking (anti-race-condition inventory), B2B price bidding, Haversine fleet logistics, and Tripay QRIS.",
      id: "Merancang platform e-commerce rantai pasok pertanian B2B/B2C multi-peran dengan RBAC 5-level, penguncian baris atomik (anti-race-condition stok), negosiasi harga B2B, estimasi logistik Haversine, dan QRIS Tripay.",
    },
    architectureDetails: {
      challenge: {
        en: "Eliminating inventory race conditions during simultaneous high-volume B2B/B2C checkouts while enforcing strict role isolation across Super Admin, L3 Support, Regional Distributors, Farmers, and Buyers.",
        id: "Mencegah race condition stok saat checkout massal berlangsung bersamaan, serta menjaga isolasi hak akses ketat di antara Super Admin, Admin Support L3, Tengkulak Wilayah, Petani, dan Pembeli.",
      },
      solution: {
        en: "Built a Laravel 12 REST API with MySQL InnoDB pessimistic row locking (`SELECT ... FOR UPDATE`), 5-level Sanctum RBAC middleware, Haversine shipping calculator, and a reactive Vue 3 + Pinia SPA.",
        id: "Membangun REST API Laravel 12 dengan pessimistic row locking MySQL InnoDB (`SELECT ... FOR UPDATE`), middleware RBAC 5-level Sanctum, kalkulator ongkir Haversine, serta frontend reaktif Vue 3 + Pinia.",
      },
      deliverables: {
        en: [
          "54 RESTful API endpoints with 5-level RBAC & L3 Support delegation boundary",
          "Zero-race-condition atomic checkout & Reserved-vs-Sold stock lifecycle",
          "Real-time Tripay QRIS webhook settlement & 90/90 automated E2E test passes",
        ],
        id: [
          "54 endpoint RESTful API dengan RBAC 5-level & batas delegasi Admin Support L3",
          "Checkout atomik bebas race-condition & siklus hidup stok Reserved-vs-Sold",
          "Penyelesaian otomatis webhook QRIS Tripay & lulus 100% pengujian otomatis E2E",
        ],
      },
    },
    technologies: ["Laravel 12 (PHP 8.2)", "Vue.js 3 + Pinia", "MySQL 8 Atomic Locking", "5-Level RBAC", "Tripay QRIS", "RESTful API"],
    status: "100% E2E Verified",
  },
  {
    id: "boostpanel-smm",
    title: "BoostPanel — Automated Digital Services & Midtrans Snap Platform",
    clientOrOrg: "Digital Commerce Platform",
    year: "2026",
    category: "fullstack",
    badge: {
      en: "Laravel 11 + Vue 3 + Midtrans SHA512",
      id: "Laravel 11 + Vue 3 + Midtrans SHA512",
    },
    summary: {
      en: "Engineered an automated digital marketing & SMM Panel v2 platform featuring encrypted provider API keys, atomic balance ledger with row locking, and Midtrans Snap SHA-512 webhook verification.",
      id: "Mengembangkan platform layanan digital otomatis (SMM Panel v2) dengan enkripsi API key provider, buku besar saldo atomik dengan row locking, serta verifikasi webhook SHA-512 Midtrans Snap.",
    },
    architectureDetails: {
      challenge: {
        en: "Ensuring financial ledger integrity against double-spending, automating background order synchronization across external SMM providers, and securing payment gateway webhooks.",
        id: "Menjaga integritas mutasi saldo keuangan dari manipulasi transaksi ganda, mengotomatisasi sinkronisasi status pesanan ke provider eksternal, serta mengamankan webhook payment gateway.",
      },
      solution: {
        en: "Implemented `lockForUpdate` atomic balance mutations, Laravel encrypted model casts for API credentials, automated cron schedulers (`orders:sync`), and SHA-512 signature verification for Midtrans Snap.",
        id: "Mengimplementasikan mutasi saldo atomik `lockForUpdate`, enkripsi kredensial API di database, scheduler sinkronisasi otomatis (`orders:sync`), serta validasi signature SHA-512 untuk Midtrans Snap.",
      },
      deliverables: {
        en: [
          "Atomic financial balance ledger with auto-refund on partial/canceled orders",
          "Midtrans Snap QRIS/VA/Card integration with SHA-512 webhook security",
          "Automated SMM API v2 service importer with dynamic profit margin markup",
        ],
        id: [
          "Buku besar mutasi saldo atomik dengan fitur auto-refund otomatis",
          "Integrasi Midtrans Snap (QRIS/VA/Kartu Kredit) dengan proteksi signature SHA-512",
          "Importir layanan otomatis SMM API v2 dengan kalkulasi markup margin profit",
        ],
      },
    },
    technologies: ["Laravel 11", "Vue 3 + Tailwind CSS", "Midtrans Snap SHA-512", "Atomic Row Locking", "Encrypted Credentials"],
    status: "Full-Stack Verified",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  // Google Cybersecurity Professional Certificate (Top Featured)
  {
    id: "google-cybersecurity-professional",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google (Google Career Certificates / LinkedIn Verified)",
    date: "LinkedIn Verified Credential",
    category: "Google, ICSI & Acronis",
    verified: true,
    description: {
      en: "Comprehensive 8-course professional certification by Google covering SIEM tools (Splunk/Chronicle), Linux, SQL, Python security automation, IDS, network defense, risk management (NIST/CSF), and incident response.",
      id: "Sertifikasi profesional komprehensif dari Google yang mencakup operasional SIEM, keamanan jaringan & IDS, Linux, SQL, otomatisasi Python untuk keamanan siber, manajemen risiko (NIST/CSF), serta penanganan insiden.",
    },
  },
  // Fortinet & ISC2
  {
    id: "fortinet-nse-3",
    title: "Fortinet NSE 3 Certified in Cybersecurity",
    issuer: "Fortinet Training Institute",
    date: "Oct 2026 – Oct 2028",
    credentialId: "6997901603KD",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-NSE-3-Ksatria.pdf",
    verified: true,
    description: {
      en: "Advanced product & zero-trust network security architecture certification verified by Fortinet Training Institute.",
      id: "Sertifikasi tingkat lanjut arsitektur keamanan jaringan dan produk Fortinet (Valid s/d Oktober 2028).",
    },
  },
  {
    id: "fortinet-nse-2",
    title: "Fortinet NSE 2 Certified in Cybersecurity",
    issuer: "Fortinet Training Institute",
    date: "Oct 2026 – Oct 2028",
    credentialId: "0938591219KD",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-NSE-2-Ksatria.pdf",
    verified: true,
    description: {
      en: "Evolution of cybersecurity, core security solutions (Firewall, SIEM, SOAR, Zero-Trust, Cloud Security) certified by Fortinet.",
      id: "Sertifikasi arsitektur pertahanan siber inti (Firewall, SIEM, SOAR, Zero-Trust & Cloud Security) oleh Fortinet.",
    },
  },
  {
    id: "fortinet-nse-1",
    title: "Fortinet NSE 1 Certified in Cybersecurity",
    issuer: "Fortinet Training Institute",
    date: "Oct 2026 – Oct 2028",
    credentialId: "1081529479KD",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-NSE-1-Ksatria.pdf",
    verified: true,
    description: {
      en: "Threat landscape fundamentals, attack surface analysis, and enterprise cybersecurity governance.",
      id: "Sertifikasi lanskap ancaman siber, analisis permukaan serangan, dan tata kelola keamanan informasi.",
    },
  },
  {
    id: "fortios-8-isc2",
    title: "FortiOS 8.0 Administrator (ISC2 CISSP CPE — Security Operations)",
    issuer: "Fortinet Training Institute & ISC2",
    date: "Oct 2026 (13 CPE Hours)",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-FortiOS-8.0-ISC2-Ksatria.pdf",
    verified: true,
    description: {
      en: "Official ISC2 Continuing Professional Education (CPE) completion for FortiOS 8.0 Administrator in the CISSP Security Operations domain.",
      id: "Penyelesaian resmi program FortiOS 8.0 Administrator yang diakui oleh ISC2 pada domain CISSP Security Operations (13 Jam Kredit).",
    },
  },
  {
    id: "fortigate-76-operator",
    title: "FortiGate 7.6 Operator",
    issuer: "Fortinet Training Institute",
    date: "Oct 2026",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-FortiGate-7.6-Operator-Ksatria.pdf",
    verified: true,
    description: {
      en: "Hands-on operational configuration of FortiGate 7.6 Next-Generation Firewall policies, VPN, SD-WAN, and security profiles.",
      id: "Pengoperasian dan konfigurasi teknis FortiGate 7.6 Next-Generation Firewall, kebijakan keamanan, VPN, dan SD-WAN.",
    },
  },
  {
    id: "fortinet-cloud-fundamentals",
    title: "Cybersecurity and Cloud Fundamentals 1.0",
    issuer: "Fortinet Training Institute",
    date: "Oct 2026",
    category: "Fortinet & ISC2",
    pdfUrl: "/certificates/Fortinet-Cybersecurity-Cloud-Fundamentals-Ksatria.pdf",
    verified: true,
    description: {
      en: "Cloud security architecture, shared responsibility models, and securing multi-cloud enterprise workloads.",
      id: "Arsitektur keamanan cloud, model tanggung jawab bersama, dan pengamanan beban kerja multi-cloud korporasi.",
    },
  },

  // Sophos Academy
  {
    id: "sophos-firewall-v22",
    title: "ET80 - Sophos Firewall Engineer v22.0",
    issuer: "Sophos Academy",
    date: "Oct 2026 – Dec 2027",
    category: "Sophos",
    pdfUrl: "/certificates/Sophos-Firewall-Engineer-Ksatria.pdf",
    verified: true,
    description: {
      en: "Certified in deploying, configuring, and troubleshooting enterprise Sophos Firewall v22.0 network security architectures.",
      id: "Tersertifikasi dalam deployment, konfigurasi, dan troubleshooting arsitektur keamanan jaringan Sophos Firewall v22.0.",
    },
  },
  {
    id: "sophos-endpoint-v7",
    title: "ET15 - Sophos Endpoint Engineer v7.0",
    issuer: "Sophos Academy",
    date: "Oct 2026 – Sep 2028",
    category: "Sophos",
    pdfUrl: "/certificates/Sophos-Endpoint-Engineer-Ksatria.pdf",
    verified: true,
    description: {
      en: "Certified in enterprise endpoint protection, Intercept X policies, threat mitigation, and Sophos Central administration.",
      id: "Tersertifikasi dalam proteksi endpoint korporasi, kebijakan Intercept X, mitigasi ancaman, dan administrasi Sophos Central.",
    },
  },

  // Segura University (PAM)
  {
    id: "segura-pam-core",
    title: "Segura® PAM Core Specialist (PAM Core Basic)",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "6a71-e03d-f512-ae32",
    category: "Segura® PAM",
    pdfUrl: "/certificates/Segura-PAM-Core-Specialist.pdf",
    verified: true,
    description: {
      en: "Recognized Segura® PAM Core Specialist covering credential vaulting, privileged session management, and Zero-Trust access governance.",
      id: "Diakui sebagai Segura® PAM Core Specialist dalam manajemen brankas kredensial, pemantauan sesi istimewa, dan tata kelola Zero-Trust.",
    },
  },
  {
    id: "segura-deployment",
    title: "Segura® Deployment Specialist",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "a936-6046-30aa-3c66",
    category: "Segura® PAM",
    pdfUrl: "/certificates/Segura-Deployment-Specialist.pdf",
    verified: true,
    description: {
      en: "Certified in end-to-end production deployment, cluster sizing, high availability, and architectural integration of Segura® PAM.",
      id: "Tersertifikasi dalam deployment produksi end-to-end, konfigurasi high-availability, dan integrasi arsitektur Segura® PAM.",
    },
  },
  {
    id: "segura-portfolio-ii",
    title: "Segura® Ready to Sell – Portfolio II Specialist",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "4380-6193-bb25-cc58",
    category: "Segura® PAM",
    pdfUrl: "/certificates/Segura-Ready-to-Sell-Portfolio-II.pdf",
    verified: true,
    description: {
      en: "Advanced proficiency in enterprise PAM solution positioning, technical pre-sales architecture, and enterprise security delivery.",
      id: "Kemahiran tingkat lanjut dalam arsitektur solusi PAM korporasi, technical pre-sales, dan implementasi keamanan enterprise.",
    },
  },
  {
    id: "segura-portfolio-i",
    title: "Segura® Ready to Sell – Portfolio I & Foundation",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "0d28-9aba-9257-309d",
    category: "Segura® PAM",
    pdfUrl: "/certificates/Segura-Ready-to-Sell-Portfolio-I.pdf",
    verified: true,
    description: {
      en: "Completed Segura® Portfolio I (0d28-9aba-9257-309d), Foundation (15a7-e9ce-8ad8-43e9), and Go-To-Market (ff6c-f4af-444f-adb3) tracks.",
      id: "Menyelesaikan rangkaian sertifikasi Segura® Portfolio I, Foundation, dan Go-To-Market Strategic Guide.",
    },
  },

  // Google, ICSI, Acronis, Cyble & APGI
  {
    id: "google-play-it-safe",
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google Career Certificates (Coursera / LinkedIn Verified)",
    date: "LinkedIn Featured Credential",
    category: "Google, ICSI & Acronis",
    verified: true,
    description: {
      en: "Featured on LinkedIn profile: risk management frameworks (NIST RMF, CIS), SIEM tools, security audits, and incident response playbooks.",
      id: "Tercantum pada profil LinkedIn: kerangka kerja manajemen risiko (NIST, CIS), penggunaan SIEM, audit keamanan, dan playbook respons insiden.",
    },
  },
  {
    id: "icsi-cnss",
    title: "ICSI | CNSS Certified Network Security Specialist",
    issuer: "International CyberSecurity Institute (UK)",
    date: "LinkedIn Featured Credential",
    category: "Google, ICSI & Acronis",
    verified: true,
    description: {
      en: "Featured on LinkedIn profile: comprehensive network defense, cryptography, penetration testing methodology, and perimeter hardening.",
      id: "Tercantum pada profil LinkedIn: pertahanan jaringan komprehensif, kriptografi, metodologi uji penetrasi, dan perkuatan keamanan perimeter.",
    },
  },
  {
    id: "acronis-tech-pro",
    title: "Acronis Cyber Protect Tech Pro, Advanced Security & Cloud Tech Pro",
    issuer: "Acronis Academy",
    date: "Verified Partner Credential",
    category: "Google, ICSI & Acronis",
    verified: true,
    description: {
      en: "Advanced enterprise backup architecture, Extended Detection & Response (XDR), Data Loss Prevention (DLP), and disaster recovery failover.",
      id: "Arsitektur backup korporasi tingkat lanjut, Extended Detection & Response (XDR), Data Loss Prevention (DLP), dan pemulihan bencana (DR).",
    },
  },
  {
    id: "cyble-cse-ccsep",
    title: "Cyble Certified Solutions Engineer & Cyber Security Educator (CCSEP)",
    issuer: "Cyble Threat Intelligence & Professional Credential",
    date: "Verified Credential",
    category: "Google, ICSI & Acronis",
    verified: true,
    description: {
      en: "Specialized in Cyber Threat Intelligence (CTI), attack surface management, dark web monitoring, and enterprise security education.",
      id: "Spesialisasi dalam Cyber Threat Intelligence (CTI), manajemen permukaan serangan, pemantauan ancaman, dan edukasi keamanan siber.",
    },
  },
  {
    id: "gdg-vibe-coding",
    title: "Google Developer Groups — #JuaraVibeCoding",
    issuer: "Google Developer Groups (GDG)",
    date: "May 2026",
    credentialId: "JVC2605-57LN-H5NK",
    category: "Google, ICSI & Acronis",
    pdfUrl: "/certificates/GDG-JuaraVibeCoding-Ksatria.pdf",
    verified: true,
    description: {
      en: "Awarded by Google Developer Groups for modern AI-assisted software engineering and rapid full-stack product innovation.",
      id: "Diberikan oleh Google Developer Groups atas rekayasa perangkat lunak modern dan inovasi pengembangan produk full-stack.",
    },
  },
];

export const EDUCATION_DATA = [
  {
    institution: "Universitas Terbuka",
    degree: {
      en: "Bachelor's Degree (S1) in Information Systems (Sistem Informasi)",
      id: "Sarjana (S1) Sistem Informasi",
    },
    period: "2022 – 2026",
    location: "South Tangerang, Indonesia",
    description: {
      en: "Focused on Information Systems Architecture, Enterprise Database Management, Information Systems Security, Statistical Computing (R), and Web-Based Programming while working full-time in Enterprise Cybersecurity.",
      id: "Berfokus pada Arsitektur Sistem Informasi, Manajemen Basis Data Korporasi, Keamanan Sistem Informasi, Komputasi Statistik R, dan Pemrograman Berbasis Web sembari berkarier penuh waktu di bidang Keamanan Siber.",
    },
  },
  {
    institution: "SMAN 09 Kota Tangerang Selatan",
    degree: {
      en: "High School Diploma — General Studies",
      id: "Sekolah Menengah Atas (SMA)",
    },
    period: "2018 – 2022",
    location: "South Tangerang, Banten",
    description: {
      en: "Active leader in Scout & Emergency Response organizations while beginning professional software & web development career in 2019.",
      id: "Aktif memimpin organisasi Pramuka & Tim Reaksi Cepat sembari memulai karier profesional sebagai Web Developer sejak 2019.",
    },
  },
];

export const LEADERSHIP_AND_SAR_DATA = [
  {
    role: {
      en: "Sriwijaya Air SJ-182 Search & Rescue Team — Rapid Response Unit",
      id: "Tim Operasi Penyelamatan Sriwijaya Air SJ-182 — Tim Reaksi Cepat",
    },
    org: "Tim Reaksi Cepat Pramuka (Kwarcab South Tangerang / Kwarda Banten)",
    period: "2021 – 2024",
    highlight: {
      en: "Deployed in high-stakes emergency and humanitarian rescue operations, including the national Sriwijaya Air SJ-182 Search & Rescue mission (2021) and Water Rescue training coordination.",
      id: "Terjun langsung dalam operasi tanggap darurat dan kemanusiaan kritis, termasuk Operasi SAR kecelakaan pesawat Sriwijaya Air SJ-182 (2021) serta penanggung jawab pelatihan Water Rescue.",
    },
  },
  {
    role: {
      en: "Scout Branch Work Council & National Raimuna XII Governor's Aide",
      id: "Dewan Kerja Cabang (DKC) & Ajudan Gubernur Putra Raimuna Nasional XII",
    },
    org: "Kwartir Cabang Kota Tangerang Selatan & Kwarnas Gerakan Pramuka",
    period: "2019 – 2024",
    highlight: {
      en: "Served 5 years on the South Tangerang Branch Council; appointed Head of Security for Kanira (2022), Governor's Aide at Raimuna Nasional XII (2023), and Security Secretary for Perkemahan Nasional Kalpataru (2024).",
      id: "Mengabdi selama 5 tahun di Dewan Kerja Cabang Tangerang Selatan; menjabat Kepala Bidang Keamanan Kanira (2022), Ajudan Gubernur Putra Raimuna Nasional XII (2023), dan Sekretaris Keamanan Perkemahan Nasional Kalpataru (2024).",
    },
  },
  {
    role: {
      en: "Secretary — Satuan Karya Wira Kartika KODIM 0506",
      id: "Sekretaris — Satuan Karya Wira Kartika KODIM 0506",
    },
    org: "KODIM 0506 Tangerang & Penataran Kader Bela Negara Kodam Jaya",
    period: "2021 – 2023",
    highlight: {
      en: "Served as Secretary of Saka Wira Kartika KODIM 0506 Tangerang (2023) and Platoon/Barracks Commander at Kodam Jaya National Defense Cadre Training (2021).",
      id: "Menjabat sebagai Sekretaris Saka Wira Kartika KODIM 0506 Tangerang (2023) serta Komandan Barak Putra pada Penataran Kader Bela Negara Kodam Jaya/Jayakarta (2021).",
    },
  },
  {
    role: {
      en: "Certified Mountain Guide & Survival Instructor (APGI.B26-03084)",
      id: "Pemandu Gunung Tersertifikasi & Instruktur Survival (APGI.B26-03084)",
    },
    org: "Asosiasi Pemandu Gunung Indonesia (APGI)",
    period: "2021 – Present",
    highlight: {
      en: "Registered member of the Indonesian Mountain Guide Association (APGI.B26-03084). Led expeditions across Mt. Rinjani (2x), Mt. Slamet, Mt. Sumbing, Mt. Lawu, Mt. Merbabu, Mt. Sindoro, Mt. Gede Pangrango (4x), Mt. Prau, and Mt. Halimun Salak.",
      id: "Anggota resmi Asosiasi Pemandu Gunung Indonesia (APGI.B26-03084). Memimpin ekspedisi pendakian dan pelatihan survival di Gn. Rinjani (2x), Gn. Slamet, Gn. Sumbing, Gn. Lawu, Gn. Merbabu, Gn. Sindoro, Gn. Gede Pangrango (4x), Gn. Prau, dan Gn. Halimun Salak.",
    },
  },
];
