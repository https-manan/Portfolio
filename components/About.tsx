"use client";

import { useState } from "react";
import Image from "next/image";
import { aiSkills, webSkillGroups } from "@/lib/skills";

const imageSrc = "/manan.png";

type Tab = "ai" | "web";

export default function About() {
  const [tab, setTab] = useState<Tab>("ai");

  return (
    <section id="about" className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <p className="mb-8 font-mono text-sm text-muted">$ about</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="relative aspect-[3/4] w-full max-w-[180px] overflow-hidden border border-line bg-bg">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Manan Bhardwaj"
                fill
                sizes="180px"
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
              Hi, I&apos;m Manan. I build real-time backend systems and train ML models from
              scratch, then ship both behind a clean, simple interface. If it&apos;s below, it
              started as &ldquo;can this actually work&rdquo; and turned into a full project.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8 md:mt-16 md:pt-10">
          <div className="mb-8 inline-flex border border-line">
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
            <button
              type="button"
              onClick={() => setTab("web")}
              aria-pressed={tab === "web"}
              className={`border-l border-line px-5 py-2 font-mono text-xs transition-colors ${
                tab === "web" ? "bg-ink text-bg" : "text-ink hover:bg-line/30"
              }`}
            >
              Web Dev
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