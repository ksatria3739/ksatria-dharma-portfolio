"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, Shield, CheckCircle2, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

interface TerminalEntry {
  cmd: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function CyberTerminal({ lang }: { lang: "en" | "id" }) {
  const getTime = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  };

  const buildCommandOutput = (rawCmd: string): React.ReactNode => {
    const cmd = rawCmd.trim().toLowerCase();

    if (cmd === "whoami" || cmd === "profile") {
      return (
        <div className="space-y-1.5 text-slate-200">
          <div className="flex flex-wrap items-center gap-2 text-cyan-400 font-semibold">
            <span>[IDENTITY VERIFIED]</span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30">
              CLEARANCE: LEVEL-5 SENIOR SPECIALIST
            </span>
          </div>
          <p>
            <span className="text-slate-400">Name:</span>{" "}
            <span className="text-white font-semibold">{PROFILE_DATA.name}</span>
          </p>
          <p>
            <span className="text-slate-400">Role:</span> Senior IT Cyber Security | Senior Technical Product Specialist | Full-Stack Web Developer
          </p>
          <p>
            <span className="text-slate-400">Current Org:</span> PT. Optima Solusindo Informatika (2024 – Present)
          </p>
          <p>
            <span className="text-slate-400">Base:</span> {PROFILE_DATA.location}
          </p>
          <p>
            <span className="text-slate-400">LinkedIn:</span>{" "}
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300 inline-flex items-center gap-1"
            >
              {PROFILE_DATA.linkedinSlug} <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      );
    }

    if (cmd.startsWith("skills")) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-2.5 rounded bg-slate-900/90 border border-cyan-500/20">
            <div className="text-cyan-400 font-semibold mb-1">[01] CYBERSECURITY & ZERO-TRUST PAM</div>
            <div className="text-slate-300">• Segura (Senhasegura) PAM Core Architecture</div>
            <div className="text-slate-300">• Principle of Least Privilege (PoLP) & Vaulting</div>
            <div className="text-slate-300">• Sophos Firewall v22.0 & Endpoint v7.0</div>
            <div className="text-slate-300">• Cyber Threat Intelligence (Cyble) & OT Security</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900/90 border border-emerald-500/20">
            <div className="text-emerald-400 font-semibold mb-1">[02] BACKUP, XDR, DLP & FULL-STACK</div>
            <div className="text-slate-300">• Acronis Cyber Protect (On-Prem & Cloud DR)</div>
            <div className="text-slate-300">• XDR, DLP & Automated Microsoft 365 Backup</div>
            <div className="text-slate-300">• Next.js 15, TypeScript, Laravel 12, Vue 3</div>
            <div className="text-slate-300">• SHA-256 Tokenization & Fintech Gateways</div>
          </div>
        </div>
      );
    }

    if (cmd.startsWith("projects")) {
      return (
        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="text-emerald-400 font-semibold">
            [ENTERPRISE CYBERSECURITY & FULL-STACK DEPLOYMENT LOG]
          </div>
          <div>
            <span className="text-cyan-400 font-mono">[2025] PT. MSIG Life</span> — Strategic Senhasegura PAM Deployment & PoLP Vaulting
          </div>
          <div>
            <span className="text-cyan-400 font-mono">[2025] PT. Arasis Awan Teknologi</span> — Unified Cybersecurity Framework (XDR, DLP & M365 Backup)
          </div>
          <div>
            <span className="text-cyan-400 font-mono">[2025] PT. Bayer Indonesia</span> — Corporate Network Acronis Integration & Vulnerability POC
          </div>
          <div>
            <span className="text-cyan-400 font-mono">[2024] PT. Sinar Alum Sarana</span> — On-Premises Acronis Deployment & DR Simulation
          </div>
          <div>
            <span className="text-cyan-400 font-mono">[2024] PT. Sucofindo</span> — Advanced Acronis Data Protection Onboarding
          </div>
          <div>
            <span className="text-sky-400 font-mono">[2026] PT Socare Group International</span> — Smart Invoicing & 3DS 2.0 Fintech Checkout (Next.js 15)
          </div>
          <div>
            <span className="text-sky-400 font-mono">[2026] Rumah Tani & BoostPanel</span> — Multi-Role RBAC & Atomic Locking Web Platforms (Laravel + Vue 3)
          </div>
        </div>
      );
    }

    if (cmd.startsWith("certs")) {
      return (
        <div className="space-y-1 text-xs text-slate-300">
          <div className="text-amber-400 font-semibold">[VERIFIED CREDENTIALS VAULT]</div>
          <div>✓ ET80 - Sophos Firewall Engineer v22.0 (Jan 2026 – Dec 2027)</div>
          <div>✓ ET15 - Sophos Endpoint Engineer v7.0 (Jan 2026 – Sep 2028)</div>
          <div>✓ Segura® PAM Core Specialist & Ready to Sell I & II (ID: 0d28-9aba-9257-309d)</div>
          <div>✓ ICSI | CNSS Certified Network Security Specialist</div>
          <div>✓ Cyble Certified Solutions Engineer & Acronis Cyber Protect Tech Pro</div>
          <div>✓ Certified Cyber Security Educator Professional (CCSEP) & Cloud Tech Pro</div>
          <div>✓ Google Developer Groups #JuaraVibeCoding (ID: JVC2605-57LN-H5NK)</div>
          <div>✓ APGI Certified Mountain Guide (Reg: APGI.B26-03084)</div>
        </div>
      );
    }

    if (cmd.startsWith("sar") || cmd.startsWith("rescue")) {
      return (
        <div className="space-y-1 text-xs text-slate-300">
          <div className="text-amber-400 font-semibold">[TACTICAL SAR & MOUNTAINEERING DOSSIER]</div>
          <div>• Rapid Response Team (Tim Reaksi Cepat Pramuka) — Sriwijaya Air SJ-182 Rescue Operation (2021)</div>
          <div>• Registered Indonesian Mountain Guide — APGI.B26-03084 (Survival & IMPK Land Navigation)</div>
          <div>• Summits: Mt. Rinjani (2x), Mt. Slamet, Mt. Sumbing, Mt. Sindoro, Mt. Merbabu, Mt. Lawu, Mt. Gede Pangrango (4x), Mt. Prau, Mt. Halimun Salak</div>
        </div>
      );
    }

    if (cmd.startsWith("contact")) {
      return (
        <div className="space-y-1 text-xs text-slate-300">
          <div className="text-cyan-400 font-semibold">[DIRECT COMMUNICATION CHANNELS]</div>
          <div>• Email: {PROFILE_DATA.email}</div>
          <div>• Phone / WhatsApp: {PROFILE_DATA.phone}</div>
          <div>• LinkedIn: {PROFILE_DATA.linkedinUrl}</div>
          <div>• GitHub: {PROFILE_DATA.githubUrl}</div>
        </div>
      );
    }

    return (
      <div className="text-slate-300 text-xs space-y-1">
        <p className="text-cyan-400">
          {lang === "en"
            ? "Available security telemetry commands:"
            : "Perintah telemetri keamanan yang tersedia:"}
        </p>
        <p className="font-mono text-slate-400">
          whoami | skills --matrix | projects --enterprise | certs --verify | sar --mission | contact
        </p>
      </div>
    );
  };

  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      cmd: "whoami",
      output: buildCommandOutput("whoami"),
      timestamp: "ONLINE",
    },
    {
      cmd: "projects --enterprise",
      output: buildCommandOutput("projects --enterprise"),
      timestamp: "VERIFIED",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const runCommand = (cmd: string) => {
    if (cmd.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }
    setHistory((prev) => [
      ...prev,
      {
        cmd,
        output: buildCommandOutput(cmd),
        timestamp: getTime(),
      },
    ]);
    setInputVal("");
  };

  const presetCommands = [
    { label: "whoami", cmd: "whoami" },
    { label: "skills --matrix", cmd: "skills --matrix" },
    { label: "projects --enterprise", cmd: "projects --enterprise" },
    { label: "certs --verify", cmd: "certs --verify" },
    { label: "sar --mission", cmd: "sar --mission" },
    { label: "contact", cmd: "contact" },
  ];

  return (
    <div className="rounded-2xl border border-cyan-500/25 bg-[#060c1d]/95 shadow-[0_0_50px_-12px_rgba(0,240,255,0.18)] overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#0a132c] border-b border-cyan-500/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 ml-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>ksatria@sec-ops:~/linkedin-dossier#</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> PAM & XDR SHIELD ACTIVE
          </span>
          <button
            type="button"
            onClick={() => setHistory([])}
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 inline-flex items-center gap-1 transition"
            title="Clear terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>clear</span>
          </button>
        </div>
      </div>

      {/* Quick Preset Buttons */}
      <div className="px-4 py-2.5 bg-[#081024] border-b border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-1">
          <Shield className="w-3 h-3 text-cyan-400" />
          {lang === "en" ? "Quick Execute:" : "Eksekusi Cepat:"}
        </span>
        {presetCommands.map((item) => (
          <button
            key={item.cmd}
            type="button"
            onClick={() => runCommand(item.cmd)}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/25 hover:border-cyan-400/50 transition inline-flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Terminal Output Stream */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-4 max-h-[360px] overflow-y-auto">
        {history.length === 0 ? (
          <div className="text-slate-500 italic text-xs">
            {lang === "en"
              ? "Terminal cleared. Click any preset command above or type 'help' below."
              : "Terminal dibersihkan. Klik tombol perintah di atas atau ketik 'help' di bawah."}
          </div>
        ) : (
          history.map((item, idx) => (
            <div key={idx} className="space-y-1.5 border-l-2 border-cyan-500/30 pl-3">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-emerald-400">ksatria@sec-ops</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-slate-400">$ </span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <span className="text-[10px] text-slate-500">{item.timestamp}</span>
              </div>
              <div className="pt-0.5">{item.output}</div>
            </div>
          ))
        )}

        {/* Interactive Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputVal.trim()) return;
            runCommand(inputVal);
          }}
          className="flex items-center gap-2 pt-2 border-t border-slate-800/80"
        >
          <span className="text-emerald-400 font-semibold shrink-0">ksatria@sec-ops:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={
              lang === "en"
                ? "Type command (whoami, skills, projects, certs, sar, clear)..."
                : "Ketik perintah (whoami, skills, projects, certs, sar, clear)..."
            }
            className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-mono shrink-0 transition"
          >
            RUN
          </button>
        </form>
      </div>
    </div>
  );
}
