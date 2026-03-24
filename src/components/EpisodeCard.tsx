import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Youtube, Music2, Podcast } from "lucide-react"
import { Episode } from "@/data/episodes"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EpisodeCardProps {
  episode: Episode
  variant?: "preview" | "full"
  className?: string
}

export default function EpisodeCard({
  episode,
  variant = "preview",
  className,
}: EpisodeCardProps) {
  if (variant === "full") {
    return (
      <div
        className={cn(
          "bg-white rounded-xl border border-border p-6 flex gap-6 hover:shadow-md transition-shadow duration-300",
          className
        )}
      >
        {/* Speaker Photo */}
        <div className="shrink-0">
          <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-warm-gray">
            <Image
              src={episode.photoUrl}
              alt={episode.speakerName}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans font-medium text-iima-gold uppercase tracking-widest">
              Episode {String(episode.number).padStart(2, "0")}
            </span>
            {episode.status === "coming-soon" && (
              <Badge variant="coming">Coming Soon</Badge>
            )}
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary leading-snug">
            {episode.title}
          </h3>

          <p className="text-sm font-sans font-medium text-iima-blue">
            {episode.speakerName}
          </p>

          <p className="text-xs text-text-secondary">
            {episode.designation} · {episode.organisation}
          </p>

          <p className="text-sm text-text-secondary leading-relaxed mt-1 line-clamp-3">
            {episode.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">

            {/* Blog + Transcript */}
            <div className="flex items-center gap-3">
              {episode.blogUrl ? (
                <Link
                  href={episode.blogUrl}
                  className="text-xs text-text-primary hover:text-iima-blue transition-colors underline underline-offset-2"
                >
                  Blog
                </Link>
              ) : (
                <span className="text-xs text-text-primary opacity-40">Blog</span>
              )}
              {episode.transcriptUrl ? (
                <Link
                  href={episode.transcriptUrl}
                  className="text-xs text-text-primary hover:text-iima-blue transition-colors underline underline-offset-2"
                >
                  Transcript
                </Link>
              ) : (
                <span className="text-xs text-text-primary opacity-40">Transcript</span>
              )}
            </div>

            {/* Podcast icons */}
            <div className="flex items-center gap-3">
              {episode.youtubeUrl ? (
                <Link
                  href={episode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-red-500 transition-colors"
                  title="Watch on YouTube"
                >
                  <Youtube size={18} />
                </Link>
              ) : (
                <Youtube size={18} className="text-text-primary opacity-40" />
              )}
              {episode.spotifyUrl ? (
                <Link
                  href={episode.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-green-500 transition-colors"
                  title="Listen on Spotify"
                >
                  <Music2 size={18} />
                </Link>
              ) : (
                <Music2 size={18} className="text-text-primary opacity-40" />
              )}
              {episode.podcastUrl ? (
                <Link
                  href={episode.podcastUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-iima-blue transition-colors"
                  title="Apple Podcasts"
                >
                  <Podcast size={18} />
                </Link>
              ) : (
                <Podcast size={18} className="text-text-primary opacity-40" />
              )}
            </div>

          </div>
        </div>
      </div>
    )
  }

  // Preview (card) variant for horizontal scroll
  return (
    <Link href={`/podcasts#${episode.id}`}>
      <div
        className={cn(
          "episode-card w-64 shrink-0 h-full",
          className
        )}
      >
        {/* Episode number + status */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans font-medium text-iima-gold uppercase tracking-widest">
            Ep {String(episode.number).padStart(2, "0")}
          </span>
          {episode.status === "coming-soon" ? (
            <Badge variant="coming" className="text-[10px]">
              Soon
            </Badge>
          ) : (
            <div className="w-2 h-2 rounded-full bg-green-400" title="Released" />
          )}
        </div>

        {/* Speaker photo */}
        <div className="w-full aspect-square rounded-lg overflow-hidden bg-warm-gray">
          <Image
            src={episode.photoUrl}
            alt={episode.speakerName}
            width={200}
            height={200}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-base font-semibold text-text-primary leading-snug line-clamp-2">
          {episode.title}
        </h3>

        {/* Speaker info */}
        <div>
          <p className="text-sm font-medium text-text-primary">{episode.speakerName}</p>
          <p className="text-xs text-text-secondary line-clamp-1">
            {episode.designation}
          </p>
          <p className="text-xs text-text-muted">{episode.organisation}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Calendar size={11} />
            <span>{episode.releaseDate}</span>
          </div>
          <span className="text-xs font-medium text-iima-blue flex items-center gap-1 hover:gap-2 transition-all">
            Know More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}