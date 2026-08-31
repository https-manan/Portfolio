"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line py-10 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <span className="font-display text-2xl text-muted md:w-16">{project.index}</span>

        <div className="aspect-[4/3] w-full shrink-0 border border-line bg-bg md:w-64">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-body text-xs text-muted">
              Image coming soon
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-3xl text-ink md:text-4xl">{project.name}</h3>
            <span className="border border-line px-2 py-1 font-body text-xs text-muted">
              {project.category}
            </span>
          </div>
          <p className="mb-4 max-w-[60ch] font-body text-base text-muted">{project.oneLiner}</p>
          <p className="mb-6 font-body text-sm text-muted">{project.stack.join(" · ")}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-ink px-5 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                View live
              </a>
            ) : (
              <span className="border border-line px-5 py-2.5 font-body text-sm font-medium text-muted">
                Live link coming soon
              </span>
            )}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="px-5 py-2.5 font-body text-sm font-medium text-ink underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              {open ? "Hide details" : "Details"}
            </button>
          </div>

          {open && (
            <div className="mt-6 max-w-[65ch] border-t border-line pt-6">
              <p className="font-body text-sm leading-relaxed text-ink">{project.detail}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
