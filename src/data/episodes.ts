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
  transcriptUrl?: string
  guestUrl?: string
  guestPdfUrl?: string
  organisationUrl?: string
}

export const episodes: Episode[] = [
  {
    id: "ep-01",
    number: 1,
    title: "Bhushan Punani · Blind People's Association (BPA)",
    speakerName: "Bhushan Punani",
    designation: "Executive Director, Blind People's Association",
    organisation: "Blind People's Association (BPA)",
    description:
      "In this episode of the ADCLOD Podcast with Social Sector Leaders, Prof. Neharika Vohra speaks with Bhushan Punani, Executive Director of the Blind People's Association (BPA), about building a mission-driven organization that has transformed the lives of persons with disabilities for over four decades. He reflects on BPA's culture of trust, collective leadership, and commitment to empowering people rather than controlling them.\n\nThe conversation explores institution-building, partnerships with government, innovation in disability inclusion, and the importance of transparency and accountability in the social sector. Punani also shares lessons on succession planning, nurturing future leaders, and creating sustainable impact that extends beyond the organization itself.\n\nThrough stories from BPA's journey, the episode offers valuable insights for leaders, practitioners, and students interested in social impact, inclusive development, and values-based leadership.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/1-bhushan-punani.jpeg",
    youtubeUrl: "https://youtu.be/kabulnw-7ao?si=ChzgjcQ5tJcKJhmf",
    spotifyUrl: "https://open.spotify.com/episode/3TW7WzbEsbAWMwAgbuHyXl?si=v9Y4j0pwSWix49KybD04cg",
    guestPdfUrl: "/guests/Bhushan Punani ADCLOD Research.pdf",
    organisationUrl: "/guests/BPA ADCLOD Research.pdf",
  },
  {
    id: "ep-02",
    number: 2,
    title: "Mirai Chatterjee · SEWA",
    speakerName: "Mirai Chatterjee",
    designation: "Director, SEWA Social Security",
    organisation: "SEWA",
    description:
      "What does it take to build a movement that empowers millions of women across generations? In this episode of the ADCLOD Podcast with Social Sector Leaders, Prof. Neharika Vohra speaks with Mirai Chatterjee of SEWA, whose four-decade journey offers a rare window into the evolution of one of India's most influential grassroots organizations.\n\nMirai traces SEWA's growth from a small union of self-employed women workers to a nationwide movement spanning 20 states and 3.8 million members. She shares how listening to women at the grassroots led to pioneering innovations in financial inclusion, healthcare, childcare, insurance, and cooperative enterprise, while also shaping SEWA's distinctive approach to leadership and institution-building.\n\nThe conversation explores collective leadership, succession planning, advocacy, and the power of organizing from the ground up. At its heart, the episode is a reflection on trust — in people's capabilities, in community-led solutions, and in the belief that lasting social change is built not through individual heroes, but through empowered communities working together.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/2-mirai.jpeg",
    youtubeUrl: "https://youtu.be/SFFH9o4DiH8?si=ODh1F9r2TLwsfaxd",
    spotifyUrl: "https://open.spotify.com/episode/5b6IbAweeYzUTDeFfIWm6f?si=qifREiv0TFK6YWyOuQqt0Q",
    guestPdfUrl: "/guests/Mirai Chatterjee ADCLOD Research.pdf",
    organisationUrl: "/guests/SEWA ADCLOD Research.pdf",
  },
  {
    id: "ep-03",
    number: 3,
    title: "Ramji Raghavan · Agastya International Foundation",
    speakerName: "Ramji Raghavan",
    designation: "Founder & Chairman, Agastya International Foundation",
    organisation: "Agastya International Foundation",
    description:
      "What happens when a successful investment banker leaves a global career to reimagine how children learn? In this episode of the ADCLOD Podcast with Social Sector Leaders, Prof. Neharika Vohra speaks with Ramji Raghavan, founder of Agastya International Foundation, about his journey from international finance to building one of the world's largest experiential learning initiatives.\n\nRamji reflects on Agastya's evolution from a bold idea into a movement that has reached millions of children through mobile science labs, innovation centers, and community-based learning programs across India. He shares insights on nurturing curiosity, building a culture of innovation, managing large-scale social impact, and creating learning experiences that inspire children to ask questions, experiment, and imagine new possibilities.\n\nThe conversation offers a compelling perspective on purpose-driven leadership, institution-building, and the power of curiosity as a force for individual and societal transformation.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/6-ramji.jpeg",
    youtubeUrl: "https://youtu.be/oJhe_KZo4QE?si=CQP7JCPRChD_wdUE",
    spotifyUrl: "https://open.spotify.com/episode/3xVhjJF8YKETvA6YJcZEB2?si=6df530edefda4ef4",
    guestPdfUrl: "/guests/Ramji Raghavan ADCLOD Research.pdf",
    organisationUrl: "/guests/Agastya International Foundation ADCLOD Research.pdf",
  },
  {
    id: "ep-04",
    number: 4,
    title: "Harish Hande · SELCO Foundation",
    speakerName: "Harish Hande",
    designation: "Co-founder, SELCO India & SELCO Foundation",
    organisation: "SELCO Foundation",
    description:
      "Harish Hande built SELCO around a simple but contested idea: that the poorest households in India are fully capable of accessing, affording, and maintaining quality sustainable energy — if solutions are designed honestly around their lives rather than around donor timelines or investor returns. Over two decades, SELCO has made that case not through argument but through practice, working directly with underserved communities across Karnataka and beyond.\n\nIn this conversation, he speaks about the political economy of energy poverty, the deliberate choice to stay small and locally rooted rather than chase scale, and what it means to hold an uncomfortable position in a sector that constantly rewards the legible and the large.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/20-harish.jpeg",
    youtubeUrl: "https://youtu.be/vYgy1VMwEP4?si=fx7FRay_nceZU_94",
    spotifyUrl: "https://open.spotify.com/episode/0Dikf7ZjOft5iP6fbOrt5q?si=BW5dbE9dT_Sj1DyfhGQ2tA",
  },
  {
    id: "ep-05",
    number: 5,
    title: "Chetna Gala Sinha · Mann Deshi Foundation",
    speakerName: "Chetna Gala Sinha",
    designation: "Founder & Chairperson, Mann Deshi Foundation",
    organisation: "Mann Deshi Foundation",
    description:
      "Chetna Gala Sinha started Mann Deshi Foundation in Maharashtra's drought-prone Satara district with a group of rural women who had been denied a bank account because they were deemed too poor to be creditworthy. What began as a fight for basic financial inclusion grew into a movement — a bank, a business school, a sports academy, and a chamber of commerce, all built by and for rural women. In this conversation, she reflects on what it takes to organise women across caste and class lines, how she navigated institutional resistance, and the kind of leadership that emerges from listening rather than directing.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/3-chetna.jpeg",
  },
  {
    id: "ep-06",
    number: 6,
    title: "Aditya Natraj · Piramal Foundation",
    speakerName: "Aditya Natraj",
    designation: "Founder, Piramal Foundation",
    organisation: "Piramal Foundation",
    description:
      "Aditya Natraj has spent decades working at the intersection of rural development, health systems, and community-driven change — first at PRADAN and later at the Piramal Foundation. In this conversation, he reflects on the intellectual and ethical journey of understanding what it means to work 'with' communities rather than 'for' them, and how that distinction reshapes everything from programme design to organisational culture. He speaks about the role of research in grounding practice, the limits of expert knowledge, and what he has unlearned over years of field work.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/16-aditya.jpeg",
  },
  {
    id: "ep-07",
    number: 7,
    title: "Saroj Mahapatra · PRADAN",
    speakerName: "Saroj Mahapatra",
    designation: "Executive Director, PRADAN",
    organisation: "PRADAN",
    description:
      "Saroj Mahapatra shares reflections on leadership, institution-building, and social change at PRADAN.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/images/saroj.jpeg",
  },
  {
    id: "ep-08",
    number: 8,
    title: "Sunitha Krishnan · Prajwala",
    speakerName: "Sunitha Krishnan",
    designation: "Co-founder & Chief Functionary, Prajwala",
    organisation: "Prajwala",
    description:
      "Sunitha Krishnan reflects on building Prajwala and the work of combating human trafficking and supporting survivors.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/5-sunitha.jpeg",
  },
  {
    id: "ep-09",
    number: 9,
    title: "Vishal Talreja · Dream a Dream",
    speakerName: "Vishal Talreja",
    designation: "Co-founder & CEO, Dream a Dream",
    organisation: "Dream a Dream",
    description:
      "Vishal Talreja reflects on life-skills education and building organizations that center emotional safety.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/7-vishal.jpeg",
  },
  {
    id: "ep-10",
    number: 10,
    title: "Urvashi Sahni · SHEF",
    speakerName: "Urvashi Sahni",
    designation: "Founder & CEO, Study Hall Educational Foundation",
    organisation: "SHEF",
    description:
      "Urvashi Sahni reflects on her work with SHEF and the importance of community-driven approaches to social change.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/19-urvashi.jpeg",
  },
  {
    id: "ep-11",
    number: 11,
    title: "Neelam Chhiber · Industree Foundation",
    speakerName: "Neelam Chhiber",
    designation: "Co-founder & Managing Director, Industree Foundation",
    organisation: "Industree Foundation",
    description:
      "Neelam Chhiber reflects on building artisan-led enterprises and creating dignified livelihoods at scale.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/17-neelam.jpeg",
  },
  {
    id: "ep-12",
    number: 12,
    title: "Ravi Sreedharan · ISDM",
    speakerName: "Ravi Sreedharan",
    designation: "Founder & Director, Indian School of Development Management",
    organisation: "ISDM",
    description:
      "Ravi Sreedharan shares reflections on leadership, institution-building, and social change at ISDM.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/images/ravi.avif",
  },
  {
    id: "ep-13",
    number: 13,
    title: "Minar Pimple · MP Consulting",
    speakerName: "Minar Pimple",
    designation: "Founder, MP Consulting",
    organisation: "MP Consulting",
    description:
      "Minar Pimple shares reflections on leadership, institution-building, and social change at MP Consulting.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/images/minar.jpeg",
  },
  {
    id: "ep-14",
    number: 14,
    title: "Anshu Gupta · GOONJ",
    speakerName: "Anshu Gupta",
    designation: "Founder & Director, GOONJ",
    organisation: "GOONJ",
    description:
      "Anshu Gupta discusses building GOONJ and the work of turning urban discard into rural resource, and what it means to design for dignity in disaster response.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/10-anshu.jpeg",
  },
  {
    id: "ep-15",
    number: 15,
    title: "Rukmini Banerji · Pratham",
    speakerName: "Rukmini Banerji",
    designation: "CEO, Pratham Education Foundation",
    organisation: "Pratham",
    description:
      "Rukmini Banerji discusses building large-scale learning assessment systems and what it takes to sustain education reform across India.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/18-rukmini.jpeg",
  },
  {
    id: "ep-16",
    number: 16,
    title: "Shaheen Mistri · Teach For India",
    speakerName: "Shaheen Mistri",
    designation: "Founder & CEO, Teach For India",
    organisation: "Teach For India",
    description:
      "Shaheen Mistri talks about building leadership pipelines in education and the tensions of working inside and outside systems.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/11-shaheen.jpeg",
  },
  {
    id: "ep-17",
    number: 17,
    title: "Rajendra Joshi · Saath Charitable Trust",
    speakerName: "Rajendra Joshi",
    designation: "Executive Director, Saath Charitable Trust",
    organisation: "Saath Charitable Trust",
    description:
      "Rajendra Joshi shares reflections on leadership, institution-building, and social change at Saath Charitable Trust.",
    releaseDate: "Coming Soon",
    status: "coming-soon",
    photoUrl: "/speakers/images/rajendra.jpeg",
  },
]
