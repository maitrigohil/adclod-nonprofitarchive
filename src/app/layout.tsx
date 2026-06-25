import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "ADCLOD Podcast Series with Social Impact Leaders",
  description:
    "An initiative of the Ashank Desai Centre for Leadership and Organisational Development (ADCLOD) at IIM Ahmedabad, documenting journeys, decisions, and dilemmas of leaders shaping social impact in India.",
  keywords: ["podcast", "social impact", "IIM Ahmedabad", "leadership", "nonprofit", "social enterprise"],
  openGraph: {
    title: "ADCLOD Podcast Series with Social Impact Leaders",
    description:
      "An initiative of the Ashank Desai Centre for Leadership and Organisational Development (ADCLOD) at IIM Ahmedabad, documenting journeys, decisions, and dilemmas of leaders shaping social impact in India.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
