"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Youtube, Music2, Podcast, ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
    <div className="min-h-screen pt-16 bg-cream">
      {/* Page Header */}
      <div className="bg-white border-b border-border">
        <div className="section-container py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-iima-blue transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-iima-gold" />
            <span className="text-xs font-sans font-medium text-iima-gold uppercase tracking-[0.2em]">
              All Episodes
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            The Podcast Series
          </h1>
          <p className="text-text-secondary mt-2 text-lg font-light max-w-xl">
            {episodes.filter((e) => e.status === "released").length} episodes released ·{" "}
            {episodes.filter((e) => e.status === "coming-soon").length} upcoming
          </p>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto flex min-h-[calc(100vh-280px)]">
        {/* ── Left Sidebar ── */}
        <aside className="w-64 shrink-0 border-r border-border bg-white hidden md:flex flex-col sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-5 border-b border-border">
            <h2 className="text-xs font-sans font-semibold text-text-muted uppercase tracking-widest">
              Episodes
            </h2>
          </div>
          <nav className="p-3 flex flex-col gap-1">
            {episodes.map((ep) => (
              <button
                key={ep.id}
                onClick={() => handleEpisodeClick(ep.id)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 group",
                  activeEpisodeId === ep.id
                    ? "bg-iima-blue text-white"
                    : "hover:bg-warm-gray text-text-secondary hover:text-text-primary"
                )}
              >
                <div className="flex items-start gap-2">
                  <span
                    className={cn(
                      "text-[10px] font-mono font-semibold shrink-0 mt-0.5",
                      activeEpisodeId === ep.id ? "text-iima-gold" : "text-text-muted"
                    )}
                  >
                    {String(ep.number).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium leading-snug line-clamp-2">{ep.title}</p>
                    <p
                      className={cn(
                        "text-[10px] mt-0.5",
                        activeEpisodeId === ep.id ? "text-white/60" : "text-text-muted"
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
                  
                  {/* Featured episode detail */}
                  <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                    <div className="p-8 flex flex-col md:flex-row gap-8">
                      {/* Photo */}
                      <div className="shrink-0">
                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden bg-warm-gray">
                          <Image
                            src={ep.photoUrl}
                            alt={ep.speakerName}
                            width={176}
                            height={176}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex flex-col gap-3 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-iima-gold uppercase tracking-widest">
                            Episode {String(ep.number).padStart(2, "0")}
                          </span>
                          {ep.status === "coming-soon" && (
                            <Badge variant="coming">Coming Soon</Badge>
                          )}
                          {ep.status === "released" && (
                            <Badge variant="gold">Released</Badge>
                          )}
                        </div>

                        <h2 className="font-serif text-3xl font-semibold text-text-primary leading-snug">
                          {ep.title}
                        </h2>

                        <div>
                          <p className="font-sans font-semibold text-iima-blue">{ep.speakerName}</p>
                          <p className="text-sm text-text-secondary">
                            {ep.designation} · {ep.organisation}
                          </p>
                        </div>

                        <Separator />

                        <p className="text-text-secondary leading-relaxed">{ep.description}</p>

                        {/* Platform links */}
                        {ep.status === "released" && (
                          <div className="flex items-center gap-4 pt-2 flex-wrap">
                            {ep.blogUrl && (
                              <Link
                                href={ep.blogUrl}
                                className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-iima-blue transition-colors"
                              >
                                <ExternalLink size={14} />
                                Read Blog Post
                              </Link>
                            )}
                            {ep.youtubeUrl && (
                              <Link href={ep.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Youtube size={14} className="text-red-500" />
                                  YouTube
                                </Button>
                              </Link>
                            )}
                            {ep.spotifyUrl && (
                              <Link href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Music2 size={14} className="text-green-500" />
                                  Spotify
                                </Button>
                              </Link>
                            )}
                            {ep.podcastUrl && (
                              <Link href={ep.podcastUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Podcast size={14} className="text-purple-500" />
                                  Apple Podcasts
                                </Button>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-10" />
                  <h3 className="font-serif text-xl font-medium text-text-primary mb-6">
                    Other Episodes
                  </h3>
                </div>
              )
            })()}

            {/* Episode cards grid (3 at a time) */}
            <div className="flex flex-col gap-5">
              {visibleEpisodes
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
