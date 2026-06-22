"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import EpisodeCard from "@/components/EpisodeCard"
import { episodes } from "@/data/episodes"
import { cn } from "@/lib/utils"

const EPISODES_PER_PAGE = 3

export default function PodcastsPage() {
  const [activeEpisodeId, setActiveEpisodeId] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  const visibleEpisodes = episodes.slice(
    page * EPISODES_PER_PAGE,
    page * EPISODES_PER_PAGE + EPISODES_PER_PAGE
  )
  const totalPages = Math.ceil(episodes.length / EPISODES_PER_PAGE)

  const handleEpisodeClick = (id: string) => {
    setActiveEpisodeId(id)
    // Find which page this episode is on
    const idx = episodes.findIndex((e) => e.id === id)
    if (idx !== -1) {
      setPage(Math.floor(idx / EPISODES_PER_PAGE))
    }
    // Scroll main area to top
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Main two-column layout — starts right below navbar */}
      <div className="flex pt-16 min-h-screen">
        {/* ── Left Sidebar ── */}
        <aside className="w-64 shrink-0 border-r border-border bg-white hidden md:flex flex-col sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-5 border-b border-border">
            <h2 className="text-[10px] font-sans font-semibold text-text-muted uppercase tracking-[0.2em]">
              Episodes
            </h2>
          </div>
          <nav className="p-2 flex flex-col gap-0.5">
            {episodes.map((ep) => (
              <button
                key={ep.id}
                onClick={() => handleEpisodeClick(ep.id)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-md transition-all duration-200 group",
                  activeEpisodeId === ep.id
                    ? "bg-iima-blue text-white"
                    : "hover:bg-warm-gray text-text-secondary hover:text-text-primary"
                )}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className={cn(
                      "text-[10px] font-sans font-semibold shrink-0 mt-0.5 tabular-nums",
                      activeEpisodeId === ep.id ? "text-white/50" : "text-text-muted"
                    )}
                  >
                    {String(ep.number).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-sans font-medium leading-snug line-clamp-2">{ep.title}</p>
                    <p
                      className={cn(
                        "text-[10px] font-sans mt-0.5",
                        activeEpisodeId === ep.id ? "text-white/55" : "text-text-muted"
                      )}
                    >
                      {ep.speakerName}
                    </p>
                  </div>
                  {ep.status === "coming-soon" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-text-muted/40 shrink-0 mt-1.5" />
                  )}
                  {ep.status === "released" && (
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 mt-1.5" />
                  )}
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 overflow-y-auto" ref={mainRef}>
          <div className="p-6 lg:p-8">
            {/* Page Header */}
            <div className="mb-8 pb-8 border-b border-border">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-iima-blue transition-colors mb-4"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
              <div className="mb-3">
                <span className="font-sans text-xs font-semibold text-iima-blue uppercase tracking-[0.2em] border-l-[3px] border-iima-blue pl-3">
                  All Episodes
                </span>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-light text-text-primary leading-snug">
                  The Podcast Series
                </h1>
                <p className="text-text-secondary text-sm font-light">
                  {episodes.filter((e) => e.status === "released").length} episodes released ·{" "}
                  {episodes.filter((e) => e.status === "coming-soon").length} episodes coming soon
                </p>
              </div>
            </div>

            {/* Mobile episode selector — only visible when sidebar is hidden */}
            <div className="md:hidden mb-6">
              <p className="text-[10px] font-sans font-semibold text-text-muted uppercase tracking-[0.2em] mb-2">
                Jump to Episode
              </p>
              <select
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-iima-blue"
                value={activeEpisodeId || ""}
                onChange={(e) => {
                  if (e.target.value) {
                    handleEpisodeClick(e.target.value)
                  } else {
                    setActiveEpisodeId(null)
                    setPage(0)
                  }
                }}
              >
                <option value="">All Episodes</option>
                {episodes.map((ep) => (
                  <option key={ep.id} value={ep.id}>
                    {String(ep.number).padStart(2, "0")} · {ep.speakerName}
                    {ep.status === "coming-soon" ? " (Coming Soon)" : ""}
                  </option>
                ))}
              </select>
            </div>
            {/* If a specific episode is active, show it prominently */}
            {activeEpisodeId && (() => {
              const ep = episodes.find((e) => e.id === activeEpisodeId)
              if (!ep) return null
              return (
                <div className="mb-10">
                  <button
                    onClick={() => setActiveEpisodeId(null)}
                    className="text-xs text-text-muted hover:text-iima-blue mb-4 flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft size={12} /> Show all episodes
                  </button>
                  
                  <EpisodeCard episode={ep} variant="full" />

                  <Separator className="my-10" />
                  <h3 className="font-sans text-lg font-semibold text-text-primary mb-6">
                    Other Episodes
                  </h3>
                </div>
              )
            })()}

            {/* Episode cards grid (3 at a time) — only when no episode is active */}
            {!activeEpisodeId && (
              <div className="flex flex-col gap-5">
                {visibleEpisodes.map((ep) => (
                  <div
                    key={ep.id}
                    id={ep.id}
                    onClick={() => setActiveEpisodeId(ep.id)}
                    className="cursor-pointer"
                  >
                    <EpisodeCard episode={ep} variant="full" />
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {!activeEpisodeId && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(Math.max(0, page - 1))}
                  disabled={page === 0}
                >
                  ← Previous
                </Button>
                <span className="text-sm text-text-muted">
                  {page + 1} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                  disabled={page === totalPages - 1}
                >
                  Next →
                </Button>
              </div>
            )}

            {/* Show all when active episode selected */}
            {activeEpisodeId && (
              <div className="flex flex-col gap-5 mt-2">
                {episodes
                  .filter((e) => e.id !== activeEpisodeId)
                  .map((ep) => (
                    <div
                      key={ep.id}
                      id={ep.id}
                      onClick={() => setActiveEpisodeId(ep.id)}
                      className="cursor-pointer"
                    >
                      <EpisodeCard episode={ep} variant="full" />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
