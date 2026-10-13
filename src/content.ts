// All site content lives here. The CV is the source of truth: when it
// changes, update this file and the pages follow.

import type { CurveVariant } from "./components/Curves";

import futureReadyLogo from "./assets/logos/future-ready.webp";
import senecLogo from "./assets/logos/senec.webp";
import sintefLogo from "./assets/logos/sintef.webp";
import uioLogo from "./assets/logos/uio.webp";

export const profile = {
  name: "Steinn Hauser Magnússon",
  location: "Berlin, DE",
  email: "hausersteinn@gmail.com",
  phone: "+49 179 6047 257",
  headline: "Cloud Operator @ SENEC · Berlin",
  // Home page heading (the gold full stop is added by the page).
  greeting: "Hi, I'm Steinn",
  // The CV as a PDF, served from public/cv/.
  cvUrl: `${import.meta.env.BASE_URL}cv/Steinn-Hauser-Magnusson-CV.pdf`,
  // Home page introduction. Written as a professional summary: role and
  // scope first, then the background that sets it apart.
  welcome: [
    "As a cloud operator and software engineer in Berlin, I run " +
      "large-scale Kubernetes platforms at SENEC and build the " +
      "infrastructure as code, GitOps delivery and automation that keep " +
      "them secure, observable and up to date.",
    "My background is in computational physics and data science: an MSc " +
      "from the University of Oslo, peer-reviewed research in computational " +
      "neuroscience, and production machine-learning work. I work in four " +
      "languages: English, Icelandic, Norwegian and German.",
  ],
  // About page narrative: what I do, how I work, and how I lead.
  about: [
    "I work in platform operations: Kubernetes clusters managed with " +
      "Terragrunt, Helm and ArgoCD, GitLab CI/CD pipelines, and " +
      "observability with Prometheus, Grafana and Alertmanager.",
    "I enjoy building architectures from scratch and joining projects " +
      "early, while there is still room to shape them: map the problem, " +
      "research the options, prove the idea, then build it properly. I care " +
      "about modular, reusable infrastructure code, strict access policies " +
      "and secure networking, and about changes that are reviewed and " +
      "promoted through environments before they reach production.",
    "I have led and worked closely with UX and design, frontend and backend " +
      "teams, and I enjoy onboarding and training new team members.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/steinnhauser/", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/steinnhauser/",
    icon: "linkedin",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/13819183/steinn-hauser-magnusson/",
    icon: "stackoverflow",
  },
] as const;

type Position = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  slug: string;
  // Title shown on the home page tile.
  tileTitle: string;
  company: string;
  // Shorter company name for the home page tile, if `company` is long.
  shortCompany?: string;
  logo: string;
  curves: CurveVariant;
  positions: Position[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    slug: "senec-cloud-operator",
    tileTitle: "Cloud Operator",
    company: "SENEC GmbH",
    logo: senecLogo,
    curves: 6,
    positions: [
      {
        title: "Cloud Operator",
        period: "February 2026 - Present",
        bullets: [
          "Management of multiple large-scale Kubernetes clusters using Terragrunt, GitLab CI/CD, Helm templating with 10+ custom charts, and ArgoCD, integrated with monitoring systems such as Grafana, Prometheus, and Alertmanager.",
          "Operation of 50+ Ansible-managed servers, including in-depth development of a secure pipeline for automated maintenance updates on WireGuard-connected hosts, with a strong focus on strict access policies and secure networking.",
          "Oversight and development of an automated server update and maintenance system featuring custom aptly-based repository mirrors, an API gateway for scheduling host update maintenance slots, dashboards for host package lists and update overviews, and a lightweight Go-based client for automated and mTLS-secured maintenance checks.",
        ],
      },
    ],
    tags: [
      "Kubernetes",
      "Terragrunt",
      "Helm",
      "ArgoCD",
      "GitLab CI/CD",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Ansible",
      "WireGuard",
      "Go",
      "mTLS",
    ],
  },
  {
    slug: "senec-software-developer",
    tileTitle: "Software Developer",
    company: "SENEC GmbH",
    logo: senecLogo,
    curves: 2,
    positions: [
      {
        title: "Software Developer",
        period: "March 2023 - January 2026",
        bullets: [
          "Oversaw development, maintenance, and migration of multiple Azure Function App microservices integrating enterprise solutions (CRM, Business Central) with internal and external services.",
          "Focused on architectural design and implementation using Terraform and Terragrunt, delivering modularized releases and modern CI/CD pipelines.",
          "Contributed significantly to developing a containerized deployment framework for microservices, enforcing strict governance-compliant policies across Azure Key Vault, Storage Account, MongoDB/PostgreSQL, Virtual Network, API Management Service, and Service Bus resources.",
          "Demonstrated leadership and communication through team management, stakeholder coordination, and development of frameworks for onboarding and training new team members.",
        ],
      },
    ],
    tags: [
      "Azure Functions",
      "Terraform",
      "Terragrunt",
      "Docker",
      "CI/CD",
      "Azure Key Vault",
      "API Management",
      "Service Bus",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    slug: "future-ready",
    tileTitle: "Senior Data Scientist",
    company: "Future Ready AS",
    logo: futureReadyLogo,
    curves: 5,
    positions: [
      {
        title: "Senior Data Scientist",
        period: "January 2022 - February 2023",
        bullets: [
          "Developed and maintained an application for LLM chatbot technology, providing an online learning platform to simulate call-center conversations using Django, Flask APIs, and an Azure-based architecture.",
          "Managed frontend and UX developer teams to design and build an interactive online learning platform.",
          "Leadership and communication experience through management meetings with external shareholders and investors, alongside training and management of new team members.",
        ],
      },
      {
        title: "Data Scientist",
        period: "November 2020 - December 2021",
        bullets: [
          "Provided sales analytics of telecommunications data to identify strengths in sales representatives.",
          "Developed a natural language processing model capable of transcribing calls and capturing key sales techniques which lead to product sales.",
          "Extensive use of Python libraries such as Rasa, NumPy, pandas, Django, and PySpark.",
        ],
      },
    ],
    tags: [
      "Python",
      "LLMs",
      "NLP",
      "Rasa",
      "Django",
      "Flask",
      "Azure",
      "Docker",
      "MongoDB",
      "pandas",
      "PySpark",
    ],
  },
  {
    slug: "sintef",
    tileTitle: "Junior Software Developer",
    company: "SINTEF Energi AS",
    logo: sintefLogo,
    curves: 7,
    positions: [
      {
        title: "Junior Software Developer",
        period: "June 2020 - August 2020",
        bullets: [
          "Developed a graphical user interface for the IEC 61850 digital substation communication protocol.",
          "Extensive use of C (libIEC61850) and Python (PyQt, ZeroMQ), with a focus on high-performance data pipelines, data processing and data visualization.",
        ],
      },
    ],
    tags: ["C", "libIEC61850", "Python", "PyQt", "ZeroMQ"],
  },
  {
    slug: "uio",
    tileTitle: "Cluster Project Manager",
    company: "University of Oslo, Physics Department",
    shortCompany: "University of Oslo",
    logo: uioLogo,
    curves: 8,
    positions: [
      {
        title: "Cluster Project Manager",
        period: "February 2020 - July 2020",
        bullets: [
          "Built a rack of computational nodes for the physics department using hardware donated from the Abel supercomputer.",
          "Set up cluster software and node connectivity using the ROCKS High-Performance Computing ISO.",
          "Collaborated with members of USIT to assemble the cabinet from unused supercomputing parts, resulting in no additional costs.",
        ],
      },
    ],
    tags: ["HPC", "ROCKS", "Linux", "Networking"],
  },
];

// "2020 - 2021" / "2026 - now" for a tile, from its positions' periods.
export function experienceYears(exp: Experience): string {
  const periods = exp.positions.map((p) => p.period).join(" ");
  const years = (periods.match(/\d{4}/g) ?? []).map(Number);
  const end = /present/i.test(periods) ? "now" : String(Math.max(...years));
  const start = String(Math.min(...years));
  return start === end ? start : `${start} - ${end}`;
}

export const skillGroups = [
  {
    title: "Cloud & Infrastructure as Code",
    skills: ["Azure", "AWS", "Terraform", "Terragrunt", "Linux"],
  },
  {
    title: "Containers & GitOps",
    skills: ["Kubernetes", "Docker", "Helm", "ArgoCD"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitLab CI/CD", "GitHub Actions", "Ansible", "Git"],
  },
  {
    title: "Observability",
    skills: ["Prometheus", "Grafana", "Alertmanager"],
  },
  {
    title: "Networking & Security",
    skills: ["WireGuard", "mTLS", "Azure Key Vault", "API Management"],
  },
  {
    title: "Programming & Data",
    skills: [
      "Python",
      "Go",
      "TypeScript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "pandas",
      "PySpark",
    ],
  },
];

export const certifications = [
  {
    code: "AZ-104",
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    caption: "Microsoft Certified Azure Administrator Associate",
  },
  {
    code: "ITIL 4",
    title: "ITIL 4 Foundation",
    issuer: "PeopleCert · IT Service Management",
    caption: "Foundation in IT Service Management · PeopleCert",
  },
];

export const languages = [
  { language: "English", level: "Native" },
  { language: "Icelandic", level: "Native" },
  { language: "Norwegian", level: "Fluent" },
  { language: "German", level: "Working proficiency" },
];

// Key figures for the home page hero. Every figure must be backed by the CV
// (docs/cv/cv.md); the certification figures come straight from the list
// above so the two never drift apart.
export const highlights: { value: string; label: string }[] = [
  { value: "6+", label: "years across cloud, software and data roles" },
  { value: "50+", label: "production servers automated with Ansible" },
  { value: "MSc", label: "Computational Science: Physics · Grade A" },
  ...certifications.map((c) => ({ value: c.code, label: c.caption })),
];

export type AcademicEntry = {
  period: string;
  title: string;
  institution: string;
  details: string[];
  link?: { label: string; href: string };
};

export const academics: AcademicEntry[] = [
  {
    period: "2022",
    title: "Publication",
    institution: "PLOS Computational Biology 18(8): e1010353",
    details: [
      'Hagen E, Magnusson SH, et al. "Brain signal predictions from multi-scale networks using a linearized framework."',
    ],
    link: {
      label: "doi.org/10.1371/journal.pcbi.1010353",
      href: "https://doi.org/10.1371/journal.pcbi.1010353",
    },
  },
  {
    period: "August 2019 - June 2021",
    title: "MSc. in Computational Science: Physics",
    institution: "University of Oslo, Norway",
    details: [
      "Thesis: 'Evaluating Approximate Methods for Computing Extracellular Potentials from Neuronal Networks'. Grade: A.",
      "Specialization in computational neuroscience, simulating neuronal networks in Python with LFPy.",
    ],
  },
  {
    period: "Spring Semester 2019",
    title: "Theoretical Physics (exchange)",
    institution: "McGill University, Montréal, Canada",
    details: [],
  },
  {
    period: "August 2016 - June 2019",
    title: "BSc. in Physics and Astronomy",
    institution: "University of Oslo, Norway",
    details: [
      "Specialization in mathematics, statistics and computer science.",
      "4D Space Numerical Workshop, Kobe University: simulated ionospheric effects on the NORSAT-1 satellite.",
      "CaNoRock XVI, Andøya: simulated rocket trajectories to estimate drag coefficient and landing site.",
    ],
  },
];

export const volunteering = [
  {
    period: "September 2024 - January 2025",
    title: "Guest Developer",
    organization: "Max Planck Institute for Human Cognitive and Brain Sciences",
    description:
      "Helped develop, package and formalize a tool for cardiac artefact removal in spinal electrophysiology data as part of the open-source MNE-Python library.",
    link: {
      label: "mne-python pull request #13037",
      href: "https://github.com/mne-tools/mne-python/pull/13037",
    },
  },
  {
    period: "January 2017 - June 2020",
    title: "Mathematics Tutor",
    organization: "ENT3R",
    // Provided by the owner; the CV lists only the title and dates.
    description:
      "Alongside my own university classes, I tutored students aged 16 to 18, " +
      "helping them prepare for their final exams in advanced mathematics " +
      "and the sciences.",
  },
];
