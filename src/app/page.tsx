"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Youtube, Music2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import EpisodeCard from "@/components/EpisodeCard"
import { episodes } from "@/data/episodes"

const platformLinks = [
  { href: "https://www.youtube.com/@adclodiimahmedabad1496", label: "Watch Podcast", icon: Youtube },
  { href: "https://open.spotify.com/show/033qCk6lGlhqNLJveyQFcS", label: "Listen on Spotify", icon: Music2 },
]

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let frameId: number
    const speed = 0.25

    const step = () => {
      if (!container) return
      container.scrollLeft += speed
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }
      frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: "600px" }}
      >
        {/* Background */}
        <div className="hero-media absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                linear-gradient(
                  160deg,
                  #1a2744 0%,
                  #0d1b35 25%,
                  #162240 50%,
                  #0a1628 75%,
                  #111827 100%
                )
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=&apos;0 0 256 256&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos;%3E%3Cfilter id=&apos;noise&apos;%3E%3CfeTurbulence type=&apos;fractalNoise&apos; baseFrequency=&apos;0.9&apos; numOctaves=&apos;4&apos; stitchTiles=&apos;stitch&apos;/%3E%3C/filter%3E%3Crect width=&apos;100%25&apos; height=&apos;100%25&apos; filter=&apos;url(%23noise)&apos; opacity=&apos;0.4&apos;/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.15) 0%,
                rgba(0,0,0,0.05) 30%,
                rgba(0,0,0,0.35) 70%,
                rgba(0,0,0,0.65) 100%
              )
            `,
          }}
        />

        {/* Content */}
        <div
          className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center"
          style={{ paddingTop: "64px", paddingBottom: "64px" }}
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <h1
              className="hero-title font-serif font-normal text-center w-full"
              style={{
                color: "rgb(243, 244, 244)",
                fontSize: "clamp(42px, 8vw, 100px)",
                lineHeight: 1.15,
                letterSpacing: "-0.1px",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
              }}
            >
              <em style={{ fontStyle: "italic" }}>
                The Non-Profit<br />Leadership Archive
              </em>
            </h1>

            <p
              className="hero-subtitle font-sans font-normal mt-5 sm:mt-8 max-w-2xl px-2"
              style={{
                color: "rgba(243,244,244,0.80)",
                fontSize: "clamp(13px, 1.6vw, 18px)",
                lineHeight: 1.65,
                letterSpacing: "0.01em",
              }}
            >
              Documenting the journeys, decisions, and dilemmas of leaders who are shaping social change across India.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-10">
              <Link
                href="/podcasts"
                className="group flex items-center gap-3 font-sans font-medium transition-all duration-200"
                style={{ color: "rgb(243,244,244)", fontSize: "15px", letterSpacing: "0.02em" }}
              >
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#003366" }}
                >
                  <ArrowRight size={18} color="white" />
                </span>
                Explore Episodes
              </Link>

              <Link
                href="/#about"
                className="group flex items-center gap-3 font-sans font-medium transition-all duration-200"
                style={{ color: "rgba(243,244,244,0.65)", fontSize: "15px", letterSpacing: "0.02em" }}
              >
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 group-hover:border-white/60"
                  style={{ borderColor: "rgba(243,244,244,0.3)" }}
                >
                  <ArrowRight size={18} color="rgba(243,244,244,0.65)" />
                </span>
                About the Initiative
              </Link>
            </div>
          </div>
        </div>

        {/* Watch Podcast — bottom left */}
        {(() => { const { href, label, icon: YoutubeIcon } = platformLinks[0]; return (
        <div className="hero-platforms absolute bottom-8 left-6 lg:left-10 z-[3]">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all duration-200"
            style={{ color: "rgba(243,244,244,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(243,244,244)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,244,244,0.5)")}
          >
            <span className="font-sans text-xs tracking-wide">{label}</span>
            <YoutubeIcon size={15} />
          </Link>
        </div>
        )})()}

        {/* Listen on Spotify — bottom right */}
        {(() => { const { href, label, icon: SpotifyIcon } = platformLinks[1]; return (
        <div className="hero-platforms absolute bottom-8 right-6 lg:right-10 z-[3]">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all duration-200"
            style={{ color: "rgba(243,244,244,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(243,244,244)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,244,244,0.5)")}
          >
            <span className="font-sans text-xs tracking-wide">{label}</span>
            <SpotifyIcon size={15} />
          </Link>
        </div>
        )})()}
      </section>

      {/* ─── ABOUT ────────────────────────────────────── */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-5xl">
            <div className="mb-5">
              <span className="font-sans text-xs font-semibold text-iima-blue uppercase tracking-[0.2em] border-l-[3px] border-iima-blue pl-3">
                About the Initiative
              </span>
            </div>

            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-text-primary mb-8 leading-snug">
              Conversations that illuminate the practice of leadership in the social sector.
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed font-sans">
              <p>
                The <strong className="text-text-primary font-semibold">Social Impact Leadership Podcast Series</strong> is
                an initiative of the Ashank Desai Centre for Leadership and Organisational Development (ADCLOD) at the
                Indian Institute of Management Ahmedabad — a centre dedicated to advancing research and thought leadership
                in leadership and organisational development. India has a rich legacy of not-for-profit organisations
                addressing a broad spectrum of social and economic issues — from education and health to environment,
                livelihoods, and women&apos;s empowerment. Despite their vital role in shaping inclusive development, these
                organisations remain underrepresented in mainstream management education and public discourse.
              </p>
              <p>
                This series seeks to change that. Each episode is an in-depth conversation with founders and practitioners
                who have built impactful institutions from the ground up — sitting with complexity: the failures that taught
                more than the wins, the institutional pressures that shaped strategies, the personal reckonings that came
                with scale. Transcripts and findings will be made open source and shared with researchers across
                institutions, in keeping with ADCLOD&apos;s mission to nurture research on leadership in the country.
              </p>
            </div>

            <Separator className="mt-12 mb-10" />
          </div>
        </div>
      </section>

      {/* ─── PODCASTS ─────────────────────────────────── */}
      <section id="podcasts" className="py-16 sm:py-24 bg-cream">
        <div className="section-container">
          <div className="mb-10">
            <div className="mb-3">
              <span className="font-sans text-xs font-semibold text-iima-blue uppercase tracking-[0.2em] border-l-[3px] border-iima-blue pl-3">
                Podcasts
              </span>
            </div>
            <h2 className="font-sans text-3xl font-light text-text-primary mt-1">
              Featured Episodes
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 max-w-7xl mx-auto"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} variant="preview" />
          ))}
        </div>

        <div className="section-container mt-10 text-center">
          <Link
            href="/podcasts"
            className="group inline-flex items-center gap-3 font-sans font-medium text-text-primary hover:text-iima-blue transition-colors text-sm"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border group-hover:border-iima-blue group-hover:bg-iima-blue transition-all duration-200">
              <ArrowRight size={15} className="text-text-secondary group-hover:text-white transition-colors" />
            </span>
            View All Episodes
          </Link>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────── */}
      <section
        id="newsletter"
        className="py-16 sm:py-24"
        style={{
          background: `
            linear-gradient(
              160deg,
              #1a2744 0%,
              #0d1b35 25%,
              #162240 50%,
              #0a1628 75%,
              #111827 100%
            )
          `,
        }}
      >
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-iima-blue" />
              <span className="text-xs font-sans font-medium text-iima-blue uppercase tracking-[0.2em]">
                Newsletter
              </span>
              <div className="w-8 h-px bg-iima-blue" />
            </div>

            <h2 className="font-sans font-semibold text-3xl text-white mb-4 leading-snug">
              Stay informed.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-sans font-light">
              Subscribe to receive new episodes, curated reflections on leadership, and updates on upcoming initiatives.
            </p>

            {subscribed ? (
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
                <p className="text-white font-serif text-xl font-normal">Thank you for subscribing.</p>
                <p className="text-white/60 text-sm mt-2">
                  You&apos;ll hear from us when new episodes are released.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-iima-blue focus-visible:border-iima-blue"
                />
                <Button type="submit" variant="gold" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-white/40 text-xs mt-4">
              No spam. One email per episode. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}