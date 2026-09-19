"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = project.images.length > 0;

  function openGallery() {
    if (!hasImages) return;
    setActiveImage(0);
    setGalleryOpen(true);
  }

  function nextImage() {
    setActiveImage((i) => (i + 1) % project.images.length);
  }

  function prevImage() {
    setActiveImage((i) => (i - 1 + project.images.length) % project.images.length);
  }

  return (
    <div
      id={project.slug}
      className={`relative scroll-mt-24 border-b border-line py-10 first:pt-0 last:border-b-0 ${
        galleryOpen ? "min-h-[540px] md:min-h-[620px]" : ""
      }`}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <span className="font-display text-2xl text-muted md:w-16">{project.index}</span>

        <button
          type="button"
          onClick={openGallery}
          disabled={!hasImages}
          className="group relative aspect-[4/3] w-full shrink-0 overflow-hidden border border-line bg-bg text-left md:w-64 disabled:cursor-default"
        >
          {hasImages ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[0]}
                alt={`${project.name} preview`}
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 font-mono text-xs text-bg opacity-0 transition-all duration-150 group-hover:bg-ink/60 group-hover:opacity-100">
                View photos ({project.images.length})
              </span>
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center font-body text-xs text-muted">
              Images coming soon
            </div>
          )}
        </button>

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

      {galleryOpen && hasImages && (
        <div className="absolute inset-0 z-30 flex flex-col bg-bg p-6 md:p-10">
          <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-baseline gap-3">
              <h4 className="font-display text-2xl text-ink md:text-3xl">{project.name}</h4>
              <span className="font-mono text-xs text-muted">
                {activeImage + 1} / {project.images.length}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              aria-label="Close gallery"
              className="border border-line px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              X
            </button>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden border border-line bg-bg-alt">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.images[activeImage]}
              alt={`${project.name} screenshot ${activeImage + 1}`}
              className="h-full w-full object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 border border-line bg-bg px-3 py-2 font-mono text-base text-ink transition-colors hover:bg-ink hover:text-bg"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 border border-line bg-bg px-3 py-2 font-mono text-base text-ink transition-colors hover:bg-ink hover:text-bg"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={i === activeImage}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden border transition-colors ${
                    i === activeImage ? "border-ink" : "border-line opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}