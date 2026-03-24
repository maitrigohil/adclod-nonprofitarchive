export interface Episode {
  id: string
  number: number
  title: string
  speakerName: string
  designation: string
  organisation: string
  description: string
  releaseDate: string
  status: "released" | "coming-soon"
  photoUrl: string
  youtubeUrl?: string
  spotifyUrl?: string
  podcastUrl?: string
  blogUrl?: string
  transcriptUrl?: string
}

export const episodes: Episode[] = [
  {
    id: "ep-01",
    number: 1,
    title: "Bhushan Punani · Blind People’s Association (BPA)",
    speakerName: "Bhushan Punani",
    designation: "Social sector leader",
    organisation: "Blind People’s Association (BPA)",
    description:
      "Bhushan Punani reflects on building Blind People’s Association (BPA) and the work of disability rights, inclusion, and accessibility in India.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/1-bhushan-punani.jpeg",
  },
  {
    id: "ep-02",
    number: 2,
    title: "Mirai Chatterjee · SEWA",
    speakerName: "Mirai Chatterjee",
    designation: "Social sector leader",
    organisation: "SEWA",
    description:
      "Mirai Chatterjee talks about nurturing worker-owned institutions and the practice of collective leadership at SEWA.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/2-mirai.jpeg",
  },
  {
    id: "ep-03",
    number: 3,
    title: "Chetna Gala Sinha · Mann Deshi Foundation",
    speakerName: "Chetna Gala Sinha",
    designation: "Social sector leader",
    organisation: "Mann Deshi Foundation",
    description:
      "Chetna Gala Sinha discusses the work of organizing women for dignity and rights.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/3-chetna.jpeg",
  },
  {
    id: "ep-04",
    number: 4,
    title: "Safeena Hussain · Educate Girls",
    speakerName: "Safeena Hussain",
    designation: "Social sector leader",
    organisation: "Educate Girls",
    description:
      "Safeena Hussain talks about building large-scale education programs with communities and the practice of leadership in collective impact.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/4-safeena.jpeg",
  },
  {
    id: "ep-05",
    number: 5,
    title: "Sunitha Krishnan · Prajwala",
    speakerName: "Sunitha Krishnan",
    designation: "Social sector leader",
    organisation: "Prajwala",
    description:
      "Sunitha Krishnan reflects on building Prajwala and the work of combating human trafficking and supporting survivors.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/5-sunitha.jpeg",
  },
  {
    id: "ep-06",
    number: 6,
    title: "Ramji Raghavan · Agastya International Foundation",
    speakerName: "Ramji Raghavan",
    designation: "Social sector leader",
    organisation: "Agastya International Foundation",
    description:
      "Ramji Raghavan on taking science education on the road and building curiosity-led learning ecosystems.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/6-ramji.jpeg",
  },
  {
    id: "ep-07",
    number: 7,
    title: "Vishal Talreja · Dream a Dream",
    speakerName: "Vishal Talreja",
    designation: "Social sector leader",
    organisation: "Dream a Dream",
    description:
      "Vishal Talreja reflects on turning urban discard into rural resource, and what it means to design for dignity in disaster response.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/7-vishal.jpeg",
  },
  {
    id: "ep-08",
    number: 8,
    title: "Ruchira Gupta · Apne Aap Women Worldwide",
    speakerName: "Ruchira Gupta",
    designation: "Social sector leader",
    organisation: "Apne Aap Women Worldwide",
    description:
      "Ruchira Gupta on building women-led movements and the practice of collective leadership.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/8-ruchira.jpeg",
  },
  {
    id: "ep-09",
    number: 9,
    title: "Abhay and Rani Bang · SEARCH",
    speakerName: "Abhay and RaniBang",
    designation: "Social sector leader",
    organisation: "SEARCH",
    description:
      "Abhay and Rani Bang talk about building the SEARCH Foundation and the work of rural health, livelihoods, and community-driven research in Gadchiroli.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/9-abhayrani.jpeg",
  },
  {
    id: "ep-10",
    number: 10,
    title: "Anshu Gupta · GOOONJ",
    speakerName: "Anshu Gupta",
    designation: "Social sector leader",
    organisation: "GOOONJ",
    description:
      "Anshu Gupta discusses building GOOONJ and the work of turning urban discard into rural resource, and what it means to design for dignity in disaster response.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/10-anshu.jpeg",
  },
  {
    id: "ep-11",
    number: 11,
    title: "Shaheen Mistri · Teach For India",
    speakerName: "Shaheen Mistri",
    designation: "Social sector leader",
    organisation: "Teach For India",
    description:
      "Shaheen Mistri talks about building leadership pipelines in education and the tensions of working inside and outside systems.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/11-shaheen.jpeg",
  },
  {
    id: "ep-12",
    number: 12,
    title: "Suhani Jalota · Myna Mahila Foundation",
    speakerName: "Suhani Jalota",
    designation: "Social sector leader",
    organisation: "Myna Mahila Foundation",
    description:
      "Suhani Jalota reflects on building child protection systems, helplines, and cross-border networks for vulnerable children.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/12-suhani.jpeg",
  },
  {
    id: "ep-13",
    number: 13,
    title: "Karthee Vidya · Team Everest",
    speakerName: "Karthee Vidya",
    designation: "Social sector leader",
    organisation: "Team Everest",
    description:
      "Karthee Vidya discusses volunteering at scale and building citizen-led movements for education and inclusion.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/13-karthee.jpeg",
  },
  {
    id: "ep-14",
    number: 14,
    title: "Armida Fernandeez · SNEHA",
    speakerName: "Armida Fernandeez",
    designation: "Social sector leader",
    organisation: "SNEHA",
    description:
      "Armida Fernandeez on the work of palliative care, pain relief, and building compassionate health systems.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/14-armida.jpeg",
  },
  {
    id: "ep-15",
    number: 15,
    title: "Ashif Shaikh · Jan Sahas",
    speakerName: "Ashif Shaikh",
    designation: "Social sector leader",
    organisation: "Jan Sahas",
    description:
      "Ashif Shaikh talks about organizing with communities facing caste-based violence and the legal and political work that follows.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/15-asif.jpeg",
  },
  {
    id: "ep-16",
    number: 16,
    title: "Aditya Natraj · Primal Foundation",
    speakerName: "Aditya Natraj",
    designation: "Social sector leader",
    organisation: "Primal Foundation",
    description:
      "Aditya Natraj reflects on decades of work in rural health and community-driven research in Gadchiroli.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/16-aditya.jpeg",
  },
  {
    id: "ep-17",
    number: 17,
    title: "Neelam Chhibber · Industree Foundation",
    speakerName: "Neelam Chhibber",
    designation: "Social sector leader",
    organisation: "Industree Foundation",
    description:
      "Neelam Chhibber reflects on taking science education on the road and building curiosity-led learning ecosystems.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/17-neelam.jpeg",
  },
  {
    id: "ep-18",
    number: 18,
    title: "Rukmini Banerjee · Pratham",
    speakerName: "Rukmini Banerjee",
    designation: "Social sector leader",
    organisation: "Pratham",
    description:
      "Rukmini Banerjee discusses life-skills education, working with adolescence, and building organizations that center emotional safety.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/18-rukmini.jpeg",
  },
  {
    id: "ep-19",
    number: 19,
    title: "Urvashi Sahni · SHEF",
    speakerName: "Urvashi Sahni",
    designation: "Social sector leader",
    organisation: "SHEF",
    description:
      "Urvashi Sahni reflects on her work with SHEF and the importance of community-driven approaches to social change.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/19-urvashi.jpeg",
  },
  {
    id: "ep-20",
    number: 20,
    title: "Harish Hande · SELCO Foundation",
    speakerName: "Harish Hande",
    designation: "Social sector leader",
    organisation: "SELCO Foundation",
    description:
      "Harish Hande discusses the work of SELCO Foundation and the practice of leadership in collectives.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/20-harish.jpeg",
  },
]
