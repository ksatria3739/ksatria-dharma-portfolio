"use client";

import React from "react";
import { X, ArrowUpRight, Check } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111215] text-zinc-900 dark:text-zinc-100 shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-6 border-b border-zinc-200 dark:border-zinc-800/80 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>{project.clientOrOrg}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                {project.badge[lang]}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm leading-relaxed">
          {/* Context / Challenge */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              01 / {lang === "id" ? "Konteks & Tantangan" : "Context & Challenge"}
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300">
              {project.architectureDetails.challenge[lang]}
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/70" />

          {/* Approach / Solution */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              02 / {lang === "id" ? "Pendekatan & Solusi Teknis" : "Technical Approach & Solution"}
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300">
              {project.architectureDetails.solution[lang]}
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/70" />

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              03 / {lang === "id" ? "Hasil & Implementasi Utama" : "Key Deliverables & Impact"}
            </h4>
            <ul className="space-y-2.5">
              {project.architectureDetails.deliverables[lang].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mt-1 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-zinc-700 dark:text-zinc-300" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/70" />

          {/* Technologies */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              04 / {lang === "id" ? "Teknologi & Platform" : "Technologies & Platforms"}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-zinc-50 dark:bg-[#0c0d0f] border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Status: <strong className="text-zinc-800 dark:text-zinc-200">{project.status}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium transition"
          >
            {lang === "id" ? "Tutup Ringkasan" : "Close Summary"}
          </button>
        </div>
      </div>
    </div>
  );
}
