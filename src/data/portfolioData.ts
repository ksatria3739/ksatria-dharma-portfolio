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
  category: "Security & PAM" | "Firewall & Endpoint" | "Cloud & Backup" | "Software & SAR";
  pdfUrl?: string;
  verified: boolean;
  description: { en: string; id: string };
}

export interface SkillGroup {
  id: string;
  title: { en: string; id: string };
  subtitle: { en: string; id: string };
  iconName: string;
  accent: "cyan" | "emerald" | "amber" | "blue";
  skills: {
    name: string;
    level: number;
    tag: string;
  }[];
}

export const PROFILE_DATA = {
  name: "Ksatria Dharma Aldzikri",
  shortName: "Ksatria D. Aldzikri",
  handle: "ksatria@sec-ops",
  title: {
    en: "Senior IT Cyber Security | Senior Technical Product Specialist | Full-Stack Web Developer",
    id: "Senior IT Cyber Security | Senior Technical Product Specialist | Full-Stack Web Developer",
  },
  tagline: {
    en: "Architecting Zero-Downtime Privileged Access Management (PAM), Enterprise Backup & XDR Frameworks, and High-Integrity Full-Stack Web Systems.",
    id: "Merancang Arsitektur Privileged Access Management (PAM) Zero-Downtime, Infrastruktur Backup & XDR Korporasi, serta Sistem Web Full-Stack Berintegritas Tinggi.",
  },
  summary: {
    en: "Experienced Information Technology professional specializing in Cyber Security, Web Development, and Enterprise Infrastructure Management. Proven track record in designing, deploying, and maintaining advanced security solutions—including Privileged Access Management (Segura PAM), Next-Gen Firewall & Endpoint Protection (Sophos), and Disaster Recovery systems (Acronis Cyber Protect, XDR, DLP). Adept at leading end-to-end technical projects, executing Proof of Concepts (POC), and delivering advanced troubleshooting to safeguard critical enterprise assets.",
    id: "Profesional Teknologi Informasi berpengalaman dengan spesialisasi di bidang Cyber Security, Web Development, dan Manajemen Infrastruktur Enterprise. Memiliki rekam jejak teruji dalam merancang, mengimplementasikan, dan mengelola solusi keamanan tingkat lanjut—termasuk Privileged Access Management (Segura PAM), Proteksi Firewall & Endpoint (Sophos), serta sistem Backup & Disaster Recovery (Acronis Cyber Protect, XDR, DLP). Ahli dalam memimpin siklus proyek teknis end-to-end, eksekusi Proof of Concept (POC), serta diagnostik sistem zero-downtime.",
  },
  location: "South Tangerang, Banten, Indonesia",
  email: "Ksatriadharmaaldzikri@gmail.com",
  corporateEmail: "aldzikrik@optima-online.com",
  phone: "+62 812-9335-3915",
  whatsappUrl: "https://wa.me/6281293353915",
  linkedinUrl: "https://www.linkedin.com/in/ksatria-dharma-aldzikri-ab60522a4/",
  linkedinSlug: "in/ksatria-dharma-aldzikri-ab60522a4",
  githubUrl: "https://github.com/Ksatria3739",
  profilePhoto: "/images/ksatria-profile.jpg",
  bannerPhoto: "/images/ksatria-banner.jpg",
  resumePdfUrl: "/resume/ATS-Resume-Ksatria-Dharma-Aldzikri.pdf",
  apgiId: "APGI.B26-03084",
};

export const METRICS_DATA = [
  {
    value: "99.99%",
    label: {
      en: "Zero-Downtime PAM & DR Target",
      id: "Target Uptime PAM & Disaster Recovery",
    },
    detail: {
      en: "High-availability enterprise access & backup",
      id: "Akses sekuriti & backup korporasi ketersediaan tinggi",
    },
  },
  {
    value: "5+ Yrs",
    label: {
      en: "IT Security & Web Engineering",
      id: "Pengalaman IT Security & Web Dev",
    },
    detail: {
      en: "Active career track since 2019",
      id: "Rekam jejak profesional sejak 2019",
    },
  },
  {
    value: "10+",
    label: {
      en: "Enterprise & Full-Stack Deployments",
      id: "Implementasi Enterprise & Web",
    },
    detail: {
      en: "MSIG Life, Bayer, Sucofindo, Socare & more",
      id: "MSIG Life, Bayer, Sucofindo, Socare, dll.",
    },
  },
  {
    value: "10+",
    label: {
      en: "Global & National Certifications",
      id: "Sertifikasi Global & Nasional",
    },
    detail: {
      en: "Sophos, Segura PAM, Acronis, Cyble, ICSI, APGI",
      id: "Sophos, Segura PAM, Acronis, Cyble, ICSI, APGI",
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "cyber-pam",
    title: {
      en: "Cybersecurity & Zero-Trust PAM",
      id: "Cybersecurity & Zero-Trust PAM",
    },
    subtitle: {
      en: "Privileged Access, Threat Intelligence & Perimeter Defense",
      id: "Manajemen Akses Istimewa, Threat Intelligence & Pertahanan Jaringan",
    },
    iconName: "ShieldCheck",
    accent: "cyan",
    skills: [
      { name: "Privileged Access Management (Segura / Senhasegura)", level: 98, tag: "PAM Core" },
      { name: "Principle of Least Privilege (PoLP) & Vaulting", level: 96, tag: "Zero-Trust" },
      { name: "Sophos Firewall Engineer (v22.0) & Endpoint (v7.0)", level: 95, tag: "Network Sec" },
      { name: "Cyber Threat Intelligence (Cyble) & Malware Analysis", level: 92, tag: "CTI / SOC" },
      { name: "Cloud Security & Operational Technology (OT) Security", level: 90, tag: "Cloud / OT" },
    ],
  },
  {
    id: "infra-backup",
    title: {
      en: "Backup, XDR, DLP & Infrastructure",
      id: "Backup, XDR, DLP & Infrastruktur IT",
    },
    subtitle: {
      en: "Data Protection, Disaster Recovery & Enterprise Resilience",
      id: "Proteksi Data, Pemulihan Bencana & Ketahanan Infrastruktur",
    },
    iconName: "Server",
    accent: "emerald",
    skills: [
      { name: "Acronis Cyber Protect (On-Premises & Cloud DR)", level: 98, tag: "Backup / DR" },
      { name: "Extended Detection & Response (XDR) & DLP Protocols", level: 95, tag: "XDR / DLP" },
      { name: "Microsoft 365 Automated Backup Architecture", level: 94, tag: "Cloud Backup" },
      { name: "Network Engineering, SSL VPN & Synology NAS Protection", level: 92, tag: "Infra / VPN" },
      { name: "Disaster Recovery Simulation & Integrity Validation", level: 95, tag: "DR Testing" },
    ],
  },
  {
    id: "fullstack-web",
    title: {
      en: "Full-Stack Web Engineering",
      id: "Pengembangan Web Full-Stack",
    },
    subtitle: {
      en: "Modern Web Applications, Fintech Gateways & Scalable APIs",
      id: "Aplikasi Web Modern, Integrasi Payment Gateway & RESTful API",
    },
    iconName: "Code2",
    accent: "blue",
    skills: [
      { name: "Next.js 15 (App Router), React 19 & TypeScript", level: 94, tag: "Frontend / SSR" },
      { name: "Laravel 11/12 (PHP 8.2), Sanctum & Multi-Role RBAC", level: 95, tag: "Backend API" },
      { name: "Vue.js 3 (Vite, Pinia) & Tailwind CSS Architecture", level: 93, tag: "Reactive UI" },
      { name: "MySQL 8 / PostgreSQL (Prisma ORM) & Atomic Locking", level: 92, tag: "Database" },
      { name: "Fintech Payment Gateways (Midtrans, Xendit, Tripay QRIS)", level: 95, tag: "Fintech" },
    ],
  },
  {
    id: "presales-rescue",
    title: {
      en: "Technical Pre-Sales, POC & Tactical SAR",
      id: "Technical Pre-Sales, POC & Kepemimpinan SAR",
    },
    subtitle: {
      en: "Solution Delivery, Executive Demos & High-Pressure Crisis Response",
      id: "Solusi End-to-End, Eksekusi POC & Tanggap Darurat Lapangan",
    },
    iconName: "Compass",
    accent: "amber",
    skills: [
      { name: "Tailored Proof of Concept (POC) Design & Execution", level: 98, tag: "Pre-Sales" },
      { name: "End-to-End Enterprise Project Lifecycle Delivery", level: 96, tag: "Project Lead" },
      { name: "Executive Product Demos & Security Architecture Consultation", level: 95, tag: "Consultation" },
      { name: "System Diagnostics & Zero-Downtime Troubleshooting", level: 96, tag: "L3 Support" },
      { name: "Emergency Search & Rescue (SAR), Survival & IMPK Navigation", level: 95, tag: "APGI / SAR" },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "optima",
    role: {
      en: "Senior Technical Product Specialist (Cyber Security & PAM)",
      id: "Senior Technical Product Specialist (Cyber Security & PAM)",
    },
    company: "PT. Optima Solusindo Informatika",
    period: "2024 – Present",
    location: "Jakarta / South Tangerang, Indonesia",
    type: {
      en: "Enterprise Cyber Security & Infrastructure",
      id: "Keamanan Siber & Infrastruktur Korporasi",
    },
    highlights: {
      en: [
        "Spearheaded the end-to-end design, deployment, and administration of Privileged Access Management (PAM) solutions utilizing the Segura (Senhasegura) platform to secure critical organizational assets and infrastructure.",
        "Managed the complete technical lifecycle of cybersecurity and infrastructure projects—from initial client consultation and requirements gathering to final production deployment and ongoing maintenance.",
        "Led client-facing technical meetings and delivered comprehensive executive product demonstrations to articulate the value and functionality of proposed security architectures.",
        "Delivered advanced L3 technical support for PAM, XDR, and Backup incidents, resolving complex integration issues and optimizing system performance to ensure zero-downtime secure access.",
        "Designed and executed tailored Proof of Concepts (POCs) in prospective enterprise environments (including MSIG Life, Bayer Indonesia, Sucofindo, Arasis Awan Teknologi, and Sinar Alum Sarana).",
      ],
      id: [
        "Memimpin perancangan, implementasi, dan administrasi end-to-end solusi Privileged Access Management (PAM) menggunakan platform Segura (Senhasegura) untuk mengamankan aset dan infrastruktur kritis perusahaan.",
        "Mengelola siklus hidup teknis proyek keamanan siber dan infrastruktur secara menyeluruh—mulai dari konsultasi awal klien, analisis kebutuhan, hingga deployment produksi dan pemeliharaan berkelanjutan.",
        "Memimpin pertemuan teknis dengan klien korporasi serta menyajikan demonstrasi produk komprehensif untuk menjelaskan arsitektur keamanan yang diusulkan.",
        "Memberikan dukungan teknis tingkat lanjut (Advanced Troubleshooting) untuk insiden terkait PAM dan backup guna memastikan akses aman tanpa waktu henti (zero-downtime).",
        "Merancang dan mengeksekusi Proof of Concept (POC) yang disesuaikan pada lingkungan klien korporasi (termasuk PT. MSIG Life, PT. Bayer Indonesia, PT. Sucofindo, PT. Arasis Awan Teknologi, dan PT. Sinar Alum Sarana).",
      ],
    },
    tags: [
      "Segura PAM (Senhasegura)",
      "Acronis Cyber Protect",
      "Sophos Firewall & Endpoint",
      "XDR & DLP",
      "Technical Pre-Sales & POC",
      "Zero-Trust PoLP",
    ],
  },
  {
    id: "bhayangkara",
    role: {
      en: "Full-Stack Web Developer",
      id: "Full-Stack Web Developer",
    },
    company: "PT. Bhayangkara Indonesia Bersatu",
    period: "2022 – 2024",
    location: "Indonesia",
    type: {
      en: "Web Application & Digital Platform Engineering",
      id: "Pengembangan Aplikasi Web & Platform Digital",
    },
    highlights: {
      en: [
        "Developed and maintained responsive, high-traffic web applications and structured digital portals, ensuring optimal performance, mobile readiness, and seamless user experience.",
        "Collaborated closely with cross-functional internal teams to architect digital solutions aligned with organizational goals and security best practices.",
        "Optimized front-end rendering, CMS workflows, and database queries to maintain high availability and fast page load speeds.",
      ],
      id: [
        "Mengembangkan dan memelihara aplikasi web responsif berkinerja tinggi serta portal digital terstruktur dengan fokus pada performa optimal dan pengalaman pengguna (UX).",
        "Berkolaborasi dengan tim internal lintas divisi untuk merancang solusi digital yang selaras dengan target strategis organisasi dan standar keamanan.",
        "Mengoptimalkan arsitektur front-end, manajemen konten (CMS), dan kueri database untuk menjaga reliabilitas serta kecepatan akses.",
      ],
    },
    tags: [
      "Web Development",
      "Responsive UI/UX",
      "PHP / Laravel",
      "JavaScript / TypeScript",
      "Performance Optimization",
      "Database Management",
    ],
  },
  {
    id: "bharindo",
    role: {
      en: "Web Developer",
      id: "Web Developer",
    },
    company: "PT. Bharindo Indonesia Banten",
    period: "2019 – 2022",
    location: "Banten, Indonesia",
    type: {
      en: "Web Platform Development & System Reliability",
      id: "Pengembangan Platform Web & Reliabilitas Sistem",
    },
    highlights: {
      en: [
        "Built and optimized web-based platforms from the ground up, focusing on clean code architecture, security hardening, and long-term system reliability.",
        "Maintained server configurations, backup routines, and front-end styling for corporate digital assets.",
      ],
      id: [
        "Membangun dan mengoptimalkan platform berbasis web dengan berfokus pada arsitektur clean code, keamanan aplikasi, serta keandalan sistem jangka panjang.",
        "Mengelola konfigurasi server, rutinitas backup, serta pengembangan antarmuka web korporasi.",
      ],
    },
    tags: [
      "Clean Code Architecture",
      "Full-Stack Web",
      "System Reliability",
      "Server Administration",
      "Frontend & Backend",
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
    title: "Smart Invoicing, SHA-256 Tokenized Portal & 3DS 2.0 Fintech Checkout",
    clientOrOrg: "PT Socare Group International",
    year: "2026",
    category: "fullstack",
    badge: {
      en: "Full-Stack Next.js 15 & Fintech Security",
      id: "Full-Stack Next.js 15 & Keamanan Fintech",
    },
    summary: {
      en: "Built an enterprise Smart Invoicing, Payment Link Generator (3D Secure 2.0 Credit Card & Virtual Account), and KYB-compliant Corporate Storefront with SHA-256 cryptographic invoice tokens.",
      id: "Membangun sistem Smart Invoicing korporasi, generator link pembayaran (Kartu Kredit 3D Secure 2.0 & Virtual Account), serta katalog e-commerce terintegrasi dengan keamanan token kriptografi SHA-256.",
    },
    architectureDetails: {
      challenge: {
        en: "Preventing Insecure Direct Object Reference (IDOR) on public corporate invoices while delivering seamless Credit Card 3DS 2.0, Bank VA settlement, SMTP OTP verification, and 1-click WhatsApp billing.",
        id: "Mencegah celah keamanan IDOR pada dokumen invoice publik sekaligus menghadirkan pembayaran Kartu Kredit 3DS 2.0, Virtual Account bank, verifikasi OTP email SMTP, dan penagihan WhatsApp 1-klik.",
      },
      solution: {
        en: "Engineered with Next.js 15 (App Router, TypeScript), Prisma ORM, SHA-256 tokenized document URLs, Hostinger SMTP 6-digit OTP verification, and modular Midtrans/Xendit payment adapters.",
        id: "Dikembangkan menggunakan Next.js 15 (App Router, TypeScript), Prisma ORM, URL dokumen terproteksi hash SHA-256, verifikasi OTP 6-digit via SMTP, serta adaptor payment gateway Midtrans/Xendit.",
      },
      deliverables: {
        en: [
          "SHA-256 cryptographic tokenized invoice & checkout endpoints (anti-IDOR)",
          "Interactive 3D Secure 2.0 Credit Card & Multi-Bank Virtual Account payment engine",
          "Mandatory 6-digit Email OTP verification & Executive Admin Dashboard with 1-click WhatsApp billing",
        ],
        id: [
          "Endpoint invoice & checkout terproteksi kriptografi SHA-256 (anti-IDOR)",
          "Mesin checkout Kartu Kredit 3D Secure 2.0 & Virtual Account Multi-Bank",
          "Verifikasi wajib OTP Email 6-digit & Dashboard Admin dengan generator tagihan WhatsApp 1-klik",
        ],
      },
    },
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma ORM", "SHA-256 Security", "3DS 2.0 & Payment Gateway"],
    status: "Vercel Ready",
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
  {
    id: "sophos-firewall-v22",
    title: "ET80 - Sophos Firewall Engineer v22.0",
    issuer: "Sophos Academy",
    date: "Jan 2026 – Dec 2027",
    category: "Firewall & Endpoint",
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
    date: "Jan 2026 – Sep 2028",
    category: "Firewall & Endpoint",
    pdfUrl: "/certificates/Sophos-Endpoint-Engineer-Ksatria.pdf",
    verified: true,
    description: {
      en: "Certified in enterprise endpoint protection, intercept X policies, threat mitigation, and Sophos Central administration.",
      id: "Tersertifikasi dalam proteksi endpoint korporasi, kebijakan Intercept X, mitigasi ancaman, dan administrasi Sophos Central.",
    },
  },
  {
    id: "segura-pam-core",
    title: "Segura® PAM Core Specialist & Portfolio I",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "0d28-9aba-9257-309d",
    category: "Security & PAM",
    pdfUrl: "/certificates/Segura-Ready-to-Sell-Portfolio-I.pdf",
    verified: true,
    description: {
      en: "Core Privileged Access Management specialist covering credential vaulting, PAM architecture, and Zero-Trust access governance.",
      id: "Spesialis inti Privileged Access Management mencakup brankas kredensial, arsitektur PAM, dan tata kelola akses Zero-Trust.",
    },
  },
  {
    id: "segura-portfolio-ii",
    title: "Segura® Ready to Sell – Portfolio II Specialist",
    issuer: "Segura® University (Senhasegura)",
    date: "May 2026",
    credentialId: "4380-6193-bb25-cc58",
    category: "Security & PAM",
    pdfUrl: "/certificates/Segura-Ready-to-Sell-Portfolio-II.pdf",
    verified: true,
    description: {
      en: "Advanced proficiency in enterprise PAM solution positioning, technical pre-sales architecture, and enterprise security delivery.",
      id: "Kemahiran tingkat lanjut dalam arsitektur solusi PAM korporasi, technical pre-sales, dan implementasi keamanan enterprise.",
    },
  },
  {
    id: "icsi-cnss",
    title: "ICSI | CNSS Certified Network Security Specialist",
    issuer: "International CyberSecurity Institute (UK)",
    date: "Verified Credential",
    category: "Security & PAM",
    verified: true,
    description: {
      en: "Comprehensive network defense, cryptography, penetration testing methodology, and enterprise perimeter security hardening.",
      id: "Pertahanan jaringan komprehensif, kriptografi, metodologi pengujian penetrasi, dan perkuatan keamanan perimeter korporasi.",
    },
  },
  {
    id: "cyble-cse",
    title: "Cyble Certified Solutions Engineer",
    issuer: "Cyble Threat Intelligence",
    date: "Verified Credential",
    category: "Security & PAM",
    verified: true,
    description: {
      en: "Specialized in dark web monitoring, cyber threat intelligence (CTI), attack surface management, and proactive threat hunting.",
      id: "Spesialisasi dalam pemantauan dark web, Cyber Threat Intelligence (CTI), manajemen permukaan serangan, dan perburuan ancaman proaktif.",
    },
  },
  {
    id: "acronis-tech-pro",
    title: "Acronis Cyber Protect Tech Pro & Advanced Security",
    issuer: "Acronis Academy",
    date: "Verified Credential",
    category: "Cloud & Backup",
    verified: true,
    description: {
      en: "Advanced enterprise backup architecture, XDR, Data Loss Prevention (DLP), disaster recovery failover, and anti-ransomware defense.",
      id: "Arsitektur backup korporasi tingkat lanjut, XDR, Data Loss Prevention (DLP), pemulihan bencana (DR), dan pertahanan anti-ransomware.",
    },
  },
  {
    id: "ccsep-cloud-pro",
    title: "Certified Cyber Security Educator Professional & Cloud Tech Pro",
    issuer: "Professional Security & Cloud Credential",
    date: "Verified Credential",
    category: "Cloud & Backup",
    verified: true,
    description: {
      en: "Recognized for technical security leadership, client enablement, and modern hybrid-cloud infrastructure protection.",
      id: "Diakui atas kepemimpinan edukasi keamanan siber, pemberdayaan teknis klien, dan proteksi infrastruktur hybrid-cloud modern.",
    },
  },
  {
    id: "gdg-vibe-coding",
    title: "Google Developer Groups — #JuaraVibeCoding",
    issuer: "Google Developer Groups (GDG)",
    date: "May 2026",
    credentialId: "JVC2605-57LN-H5NK",
    category: "Software & SAR",
    pdfUrl: "/certificates/GDG-JuaraVibeCoding-Ksatria.pdf",
    verified: true,
    description: {
      en: "Awarded by Google Developer Groups for modern AI-assisted software engineering and rapid full-stack product innovation.",
      id: "Diberikan oleh Google Developer Groups atas rekayasa perangkat lunak modern berbasis AI dan inovasi pengembangan produk full-stack.",
    },
  },
  {
    id: "apgi-guide",
    title: "Certified Indonesian Mountain Guide (Pemandu Gunung)",
    issuer: "APGI (Asosiasi Pemandu Gunung Indonesia)",
    date: "Active Member",
    credentialId: "APGI.B26-03084",
    category: "Software & SAR",
    verified: true,
    description: {
      en: "Registered member of the Indonesian Mountain Guide Association specializing in high-altitude navigation (IMPK), survival, and expedition safety.",
      id: "Anggota resmi Asosiasi Pemandu Gunung Indonesia dengan keahlian navigasi darat (IMPK), survival, dan manajemen keselamatan ekspedisi.",
    },
  },
];

export const EDUCATION_DATA = [
  {
    institution: "Universitas Terbuka",
    degree: {
      en: "Bachelor's Degree (S1) in Information Technology",
      id: "Sarjana (S1) Teknologi Informasi",
    },
    period: "2022 – 2026",
    location: "South Tangerang, Indonesia",
    description: {
      en: "Focused on Network Security, Information Systems Architecture, Database Engineering, R Statistical Computing, and Web-Based Programming while working full-time in Enterprise IT & Cyber Security.",
      id: "Berfokus pada Keamanan Jaringan, Arsitektur Sistem Informasi, Rekayasa Basis Data, Komputasi Statistik R, dan Pemrograman Berbasis Web sembari berkarier penuh waktu di industri IT & Cyber Security.",
    },
  },
  {
    institution: "SMAN 09 Kota Tangerang Selatan",
    degree: {
      en: "High School Diploma",
      id: "Sekolah Menengah Atas (SMA)",
    },
    period: "2018 – 2022",
    location: "South Tangerang, Banten",
    description: {
      en: "Active leader in Scout & Emergency Response organizations while beginning professional web development career in 2019.",
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
      en: "Led multiple high-altitude expeditions & survival trainings across Indonesia's major peaks: Mt. Rinjani (3,726m), Mt. Slamet (3,428m), Mt. Sumbing (3,371m), Mt. Lawu (3,265m), Mt. Merbabu (3,145m), Mt. Sindoro (3,153m), Mt. Gede Pangrango, Mt. Prau, and Mt. Halimun Salak.",
      id: "Memimpin berbagai ekspedisi pendakian dan pelatihan survival di gunung-gunung utama Indonesia: Gn. Rinjani (3.726 mdpl), Gn. Slamet (3.428 mdpl), Gn. Sumbing (3.371 mdpl), Gn. Lawu, Gn. Merbabu, Gn. Sindoro, Gn. Gede Pangrango, Gn. Prau, dan Gn. Halimun Salak.",
    },
  },
];
