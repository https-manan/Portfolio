"use client";

import { useState } from "react";
import Image from "next/image";
import { aiSkills, webSkillGroups } from "@/lib/skills";
import { projects } from "@/lib/projects";

const imageSrc = "/manan.png";

type Tab = "ai" | "web";

export default function About() {
  const [tab, setTab] = useState<Tab>("web");

  return (
    <section id="about" className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <h2 className="mb-10 font-display text-4xl text-ink md:text-5xl">About</h2>
        
        {/* Adjusted grid layout and gap for breathing space */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[190px_1fr] md:gap-32">
          
          {/* Adjusted image container height and width */}
          <div className="relative aspect-[4/5] w-full max-w-[190px] shrink-0 overflow-hidden border border-line bg-bg">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Manan Bhardwaj"
                fill
                sizes="190px"
                className="object-cover grayscale"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-4 text-center font-mono text-xs text-muted">
                photo.jpg
              </div>
            )}
          </div>

          <div>
            <p className="max-w-[60ch] font-body text-lg leading-relaxed text-ink">
              Hi, I&apos;m Manan. I build real-time backend systems and train ML models, 
              then ship both behind a clean, simple interface. Here are a few examples
              of my work.
            </p>

            <nav className="mt-8 max-w-[420px]" aria-label="Jump to project">
              <ul className="divide-y divide-line border-t border-line">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <a
                      href={`#${project.slug}`}
                      className="group flex items-center justify-between py-3 font-mono text-sm text-ink transition-opacity hover:opacity-60"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-muted">{project.index}</span>
                        <span>{project.name}</span>
                      </span>
                      <span className="text-muted">{project.category}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8 md:mt-16 md:pt-10">
          <div className="mb-8 inline-flex border border-line">
            <button
              type="button"
              onClick={() => setTab("web")}
              aria-pressed={tab === "web"}
              className={`border-l border-line px-5 py-2 font-mono text-xs transition-colors ${
                tab === "web" ? "bg-ink text-bg" : "text-ink hover:bg-line/30"
              }`}>
              Web Dev
            </button>
            <button
              type="button"
              onClick={() => setTab("ai")}
              aria-pressed={tab === "ai"}
              className={`px-5 py-2 font-mono text-xs transition-colors ${
                tab === "ai" ? "bg-ink text-bg" : "text-ink hover:bg-line/30"
              }`}
            >
              AI / ML
            </button>
          </div>

          {tab === "ai" && (
            <div className="flex flex-wrap gap-2">
              {aiSkills.map((item) => (
                <span
                  key={item}
                  className="border border-line px-2 py-1 font-mono text-xs text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {tab === "web" && (
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
              {webSkillGroups.map((group) => (
                <div key={group.label} className="grid grid-cols-[110px_1fr] gap-x-4">
                  <span className="pt-1.5 font-mono text-xs text-muted">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-line px-2 py-1 font-mono text-xs text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}