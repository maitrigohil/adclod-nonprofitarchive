import Link from "next/link"
import { Youtube, Music2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const platformLinks = [
  {
    href: "https://www.youtube.com/@adclodiimahmedabad1496",
    label: "Watch Podcast",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    href: "https://spotify.com",
    label: "Listen on Spotify",
    icon: Music2,
    color: "hover:text-green-500",
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">

      {/* ── Mobile footer (< md) ── */}
      <div className="md:hidden px-6 py-8 flex flex-col items-center text-center gap-5">
        <div>
          <p className="text-[10px] font-sans font-medium text-text-muted uppercase tracking-widest mb-1">
            Ashank Desai Centre · IIM Ahmedabad
          </p>
          <h3 className="font-serif text-base font-semibold text-iima-blue">
            Social Impact Podcast Series
          </h3>
        </div>

        <div className="flex items-center gap-5">
          {platformLinks.map(({ href, label, icon: Icon, color }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs text-text-secondary ${color} transition-colors`}
            >
              <span>{label}</span>
              <Icon size={13} />
            </Link>
          ))}
        </div>

        <p className="text-[11px] text-text-muted">
          © {new Date().getFullYear()} IIM Ahmedabad. All rights reserved.
        </p>
      </div>

      {/* ── Desktop footer (≥ md) ── */}
      <div className="hidden md:block">
        <div className="section-container py-12">
          <div className="grid grid-cols-3 gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs font-sans font-medium text-text-muted uppercase tracking-widest mb-1">
                  Ashank Desai Centre for Leadership and Organisational Development
                </p>
                <h3 className="font-serif text-lg font-semibold text-iima-blue">
                  Social Impact Podcast Series
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Documenting journeys, decisions, and dilemmas of leaders shaping social change in India.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-sans font-semibold text-text-muted uppercase tracking-widest">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                {["Home", "About", "Podcasts", "Newsletter"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : item === "Podcasts" ? "/podcasts" : `/#${item.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-iima-blue transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Listen On */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-sans font-semibold text-text-muted uppercase tracking-widest">
                Listen On
              </h4>
              <div className="flex flex-col gap-3">
                {platformLinks.map(({ href, label, icon: Icon, color }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm text-text-secondary ${color} transition-colors`}
                  >
                    <span>{label}</span>
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-between gap-4 text-xs text-text-muted">
            <p>© {new Date().getFullYear()} Indian Institute of Management Ahmedabad. All rights reserved.</p>
            <p className="text-right">
              An initiative of the Ashank Desai Centre for Leadership and Organisational Development, IIM Ahmedabad.
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}
