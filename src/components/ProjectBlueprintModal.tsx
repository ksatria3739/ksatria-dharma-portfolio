"use client";

import React from "react";
import { X, ShieldAlert, Cpu, CheckCircle2, Layers, Building2, Calendar } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface Props {
  project: ProjectItem | null;
  lang: "en" | "id";
  onClose: () => void;
}

export default function ProjectBlueprintModal({ project, lang, onClose }: Props) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/35 bg-[#070e22] text-slate-100 shadow-[0_0_70px_-10px_rgba(0,240,255,0.28)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0b1633] border-b border-cyan-500/20 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {project.badge[lang]}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                ● {project.status}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                {project.clientOrOrg}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {project.year}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto text-sm">
          {/* Challenge */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/20">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              {lang === "en" ? "Operational & Security Challenge" : "Tantangan Operasional & Keamanan"}
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.architectureDetails.challenge[lang]}
            </p>
          </div>

          {/* Architectural Solution */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/25">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-1.5">
              <Cpu className="w-4 h-4" />
              {lang === "en" ? "Architectural Solution & Execution" : "Solusi Arsitektur & Eksekusi Teknis"}
            </div>
            <p className="text-slate-300 leading-relaxed">
              {project.architectureDetails.solution[lang]}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2.5">
              <CheckCircle2 className="w-4 h-4" />
              {lang === "en" ? "Key Technical Deliverables & Impact" : "Deliverables Teknis & Dampak Proyek"}
            </div>
            <ul className="space-y-2">
              {project.architectureDetails.deliverables[lang].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0b152e] border border-slate-800 text-slate-200 text-xs sm:text-sm"
                >
                  <span className="text-emerald-400 font-mono font-bold mt-0.5">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              {lang === "en" ? "Technologies & Security Protocols" : "Teknologi & Protokol Keamanan"}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#0b1633] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            ARCHITECT: KSATRIA DHARMA ALDZIKRI
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition"
          >
            {lang === "en" ? "Close Blueprint" : "Tutup Blueprint"}
          </button>
        </div>
      </div>
    </div>
  );
}
