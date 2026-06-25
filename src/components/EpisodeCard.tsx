import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, LucideYoutube, Music2 } from "lucide-react"
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
          "bg-white rounded-xl border border-border p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:shadow-md transition-shadow duration-300",
          className
        )}
      >
        {/* Speaker Photo */}
        <div className="shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-warm-gray">
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
          <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-sans font-normal text-iima-blue uppercase tracking-widest">
              Episode {String(episode.number).padStart(2, "0")}
            </span>
            {episode.status === "coming-soon" ? (
              <Badge variant="coming">Coming Soon</Badge>
            ) : (
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                {episode.guestPdfUrl || episode.guestUrl ? (
                  <Link
                    href={(episode.guestPdfUrl || episode.guestUrl)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-primary hover:text-iima-blue transition-colors underline underline-offset-2"
                  >
                    About Guest
                  </Link>
                ) : (
                  <span className="text-xs text-text-primary opacity-40">About Guest</span>
                )}
                {episode.organisationUrl ? (
                  <Link
                    href={episode.organisationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-primary hover:text-iima-blue transition-colors underline underline-offset-2"
                  >
                    About Organisation
                  </Link>
                ) : (
                  <span className="text-xs text-text-primary opacity-40">About Organisation</span>
                )}
              </div>
            )}
          </div>

          <h3 className="font-sans text-xl font-normal text-text-primary leading-snug">
            {episode.title}
          </h3>

          <p className="text-xs text-text-secondary">
            {episode.designation}
          </p>

          <div className="flex flex-col gap-3 mt-1">
            {episode.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-text-secondary leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Footer — only for released episodes */}
          {episode.status === "released" && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto pt-3 border-t border-border">
              {/* Transcript */}
              <div className="flex items-center gap-4">
                {episode.transcriptUrl ? (
                  <Link
                    href={episode.transcriptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-primary hover:text-iima-blue transition-colors underline underline-offset-2"
                  >
                    Transcript
                  </Link>
                ) : (
                  <span className="text-xs text-text-primary opacity-40">Transcript</span>
                )}
              </div>
              {/* Watch + Listen */}
              <div className="flex items-center gap-4">
                {episode.youtubeUrl ? (
                  <Link
                    href={episode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-primary hover:text-red-500 transition-colors"
                  >
                    Watch Podcast
                    <LucideYoutube size={14} />
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-text-primary opacity-40">
                    Watch Podcast
                    <LucideYoutube size={14} />
                  </span>
                )}
                {episode.spotifyUrl ? (
                  <Link
                    href={episode.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-text-primary hover:text-green-500 transition-colors"
                  >
                    Listen on Spotify
                    <Music2 size={14} />
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-text-primary opacity-40">
                    Listen on Spotify
                    <Music2 size={14} />
                  </span>
                )}
              </div>
            </div>
          )}
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
          <span className="text-xs font-sans font-normal text-iima-blue uppercase tracking-widest">
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
        <h3 className="font-sans text-base font-normal text-text-primary leading-snug line-clamp-2">
          {episode.title}
        </h3>

        {/* Speaker info */}
        <p className="text-xs text-text-secondary">{episode.designation}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Calendar size={11} />
            <span>{episode.releaseDate}</span>
          </div>
          <span className="text-xs font-normal text-iima-blue flex items-center gap-1 hover:gap-2 transition-all">
            Know More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}