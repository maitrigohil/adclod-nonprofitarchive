import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ADCLOD Podcast Series with Social Impact Leaders",
  description:
    "An initiative of the Ashank Desai Centre for Leadership and Organisational Development (ADCLOD) at IIM Ahmedabad, documenting journeys, decisions, and dilemmas of leaders shaping social impact in India.",
  openGraph: {
    title: "ADCLOD Podcast Series with Social Impact Leaders",
    description:
      "An initiative of the Ashank Desai Centre for Leadership and Organisational Development (ADCLOD) at IIM Ahmedabad, documenting journeys, decisions, and dilemmas of leaders shaping social impact in India.",
  },
}

export default function PodcastsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
