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
  guestUrl?: string
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
      "Bhushan Punani has spent over four decades at the helm of the Blind People's Association in Ahmedabad, building it into one of India's foremost institutions for persons with disabilities. BPA's work spans education, rehabilitation, livelihoods, and legal advocacy — anchored in the belief that disability is not a personal tragedy but a social and political condition that demands a rights-based response.\n\nIn this conversation, he reflects on what it means to lead an institution over the long arc, how the disability movement in India has evolved from welfare to rights, and the unglamorous, persistent work of changing systems that were simply never designed with disabled people in mind.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/1-bhushan-punani.jpeg",
  },
  {
    id: "ep-02",
    number: 2,
    title: "Mirai Chatterjee · SEWA",
    speakerName: "Mirai Chatterjee",
    designation: "Director, SEWA Social Security",
    organisation: "SEWA",
    description:
      "Mirai Chatterjee has worked within SEWA — the Self-Employed Women's Association — for over three decades, helping build the institutions through which informal-sector women workers exercise ownership and voice. From healthcare cooperatives to financial services, SEWA's model rests on the premise that the women at the margins of the economy are not beneficiaries but leaders.\n\nIn this conversation, she reflects on what collective leadership looks like in practice — how decisions get made, how power is distributed, and how an organisation rooted in the daily struggles of poor women has held its values while growing to over two million members across India.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/2-mirai.jpeg",
  },
  {
    id: "ep-03",
    number: 3,
    title: "Ramji Raghavan · Agastya International Foundation",
    speakerName: "Ramji Raghavan",
    designation: "Founder & Chairman, Agastya International Foundation",
    organisation: "Agastya International Foundation",
    description:
      "Ramji Raghavan founded Agastya International Foundation on the premise that curiosity is the most powerful force in learning — and that children in India's most under-resourced communities deserve to experience the joy of scientific discovery. Through mobile labs, hands-on experiments, and a network of trained local instructors, Agastya has reached millions of children and teachers across rural India.\n\nIn this conversation, he reflects on the tension between scale and depth, the role of beauty and wonder in education, and what it takes to sustain an organisation whose core work is igniting something as difficult to measure as a child's curiosity.",
    releaseDate: "Released",
    status: "released",
    photoUrl: "/speakers/6-ramji.jpeg",
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
    title: "Aditya Natraj · Primal Foundation",
    speakerName: "Aditya Natraj",
    designation: "Founder, Primal Foundation",
    organisation: "Primal Foundation",
    description:
      "Aditya Natraj has spent decades working at the intersection of rural development, health systems, and community-driven change — first at PRADAN and later at the Primal Foundation. In this conversation, he reflects on the intellectual and ethical journey of understanding what it means to work 'with' communities rather than 'for' them, and how that distinction reshapes everything from programme design to organisational culture. He speaks about the role of research in grounding practice, the limits of expert knowledge, and what he has unlearned over years of field work.",
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
