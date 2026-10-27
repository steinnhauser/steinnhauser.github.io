// All site content lives here. The CV is the source of truth: when it
// changes, update this file and the pages follow. The owner's GitHub profile
// is a second source: his open-source projects are highlighted here too.

import type { CurveVariant } from "./components/Curves";

import futureReadyLogo from "./assets/logos/future-ready.webp";
import senecLogo from "./assets/logos/senec.webp";
import sintefLogo from "./assets/logos/sintef.webp";
import uioLogo from "./assets/logos/uio.webp";
import minnumstShot from "./assets/projects/minnumst.webp";
import recipifyShot from "./assets/projects/recipify.webp";

export const profile = {
  name: "Steinn Hauser Magnússon",
  location: "Berlin, DE",
  email: "hausersteinn@gmail.com",
  phone: "+49 179 6047 257",
  headline: "Cloud Operator @ SENEC · Berlin",
  // Home page heading. The page adds a gold comma, and the first welcome
  // paragraph continues the sentence ("I'm Steinn, a cloud operator...").
  greeting: "I'm Steinn",
  // The CV as a PDF, served from public/cv/.
  cvUrl: `${import.meta.env.BASE_URL}cv/Steinn-Hauser-Magnusson-CV.pdf`,
  // Home page introduction. Written as a professional summary: role and
  // scope first, then the background that sets it apart. `[text](/path)`
  // becomes a link to a page of the site.
  welcome: [
    "a cloud operator and software engineer based in Berlin. At SENEC I " +
      "run large-scale Kubernetes platforms and build the infrastructure " +
      "as code, GitOps delivery and automation that keep them secure, " +
      "observable and up to date.",
    "My background is in computational physics and data science: an MSc " +
      "from the University of Oslo, peer-reviewed research in computational " +
      "neuroscience, and production machine-learning work. In my own time I " +
      "build open-source projects end to end, like [Minnumst](/project/minnumst) " +
      "and [recipify](/project/recipify). I " +
      "work in four languages: English, Icelandic, Norwegian and German.",
  ],
  // About page narrative: what I do, how I work, and how I lead.
  about: [
    "I'm a physicist turned platform engineer. My path started in " +
      "computational neuroscience, where I modelled brain signals at the " +
      "University of Oslo. From there I moved into data science and NLP, " +
      "then into building Azure microservices, and now I work in cloud " +
      "operations at SENEC.",
    "Day to day that means Kubernetes clusters managed with Terragrunt, " +
      "Helm and ArgoCD, GitLab CI/CD pipelines, and observability with " +
      "Prometheus, Grafana and Alertmanager. I like systems that are secure " +
      "by default, reproducible, and boring to run.",
    "I enjoy building architectures from scratch and joining projects " +
      "early, while there is still room to shape them: map the problem, " +
      "research the options, prove the idea, then build it properly. I care " +
      "about modular, reusable infrastructure code, strict access policies " +
      "and secure networking, and about changes that are reviewed and " +
      "promoted through environments before they reach production.",
    "I have led and worked closely with UX and design, frontend and backend " +
      "teams, and I enjoy onboarding and training new team members.",
    "Outside work I build open-source projects end to end, such as " +
      "Minnumst, a self-hosted family history archive, from the app down to " +
      "the hardened host it runs on, and recipify, a pipeline that turns a " +
      "kitchen's archive of recipe files into verified, searchable recipes.",
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

// Selected work for the home page. Work and research entries must come from
// the CV (docs/cv/cv.md). `personal` entries are the owner's own open-source
// projects, described as on his GitHub profile (github.com/steinnhauser);
// they are not on the CV. Every link must be cited in the CV or point to
// the owner's own GitHub or site (checked in cv.test.ts). Add measured outcomes only when the owner provides them.
export type Project = {
  title: string;
  context: string;
  summary: string;
  // Optional "how it fits together" flow, rendered as a small diagram.
  flow?: { label: string; detail: string }[];
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  personal?: boolean;
  // Experience page that tells more (for work done in a role).
  role?: string;
  // A screenshot, shown on the card and the project's own page.
  image?: { src: string; alt: string; width: number; height: number };
  // Projects with a `page` get their own page at #/project/:slug.
  page?: ProjectPage;
};

export type ProjectPage = {
  slug: string;
  curves: CurveVariant;
  intro: string;
  figures: { value: string; label: string }[];
  sections: { title: string; points: string[] }[];
};

export const projects: Project[] = [
  {
    title: "Automated server maintenance platform",
    context: "SENEC · Cloud Operator · 2026",
    summary:
      "A secure pipeline for automated maintenance updates across 50+ " +
      "Ansible-managed, WireGuard-connected servers, built with strict " +
      "access policies and secure networking. Hosts run a lightweight Go " +
      "client for mTLS-secured maintenance checks, an API gateway schedules " +
      "each host's maintenance slot, custom aptly-based repository mirrors " +
      "serve the packages, and dashboards give an overview of host package " +
      "lists and updates.",
    flow: [
      { label: "Go client", detail: "mTLS maintenance checks" },
      { label: "API gateway", detail: "schedules maintenance slots" },
      { label: "aptly mirrors", detail: "custom package repositories" },
      { label: "Dashboards", detail: "package lists and update overview" },
    ],
    tags: ["Go", "mTLS", "Ansible", "WireGuard", "aptly", "Linux"],
    featured: true,
    role: "senec-cloud-operator",
  },
  {
    title: "Minnumst: a self-hosted family history archive",
    context: "Open source · Personal project",
    summary:
      "A public archive, an editorial desk and an API that keeps every " +
      "story revision, built end to end from the app to the hardened host " +
      "it runs on. OpenTofu creates the Hetzner host, Ansible hardens it to " +
      "the CIS benchmarks (scored with Lynis in CI), and Traefik with " +
      "Authentik is the only way in. Releases are multi-arch images with an " +
      "SBOM and build provenance.",
    flow: [
      { label: "OpenTofu", detail: "Hetzner host, firewall, encrypted state" },
      { label: "Ansible", detail: "CIS-hardened host, scored with Lynis" },
      { label: "Traefik + Authentik", detail: "TLS edge, auth on every write" },
      { label: "The app", detail: "FastAPI, React and PostgreSQL" },
    ],
    tags: [
      "OpenTofu",
      "Ansible",
      "Docker Compose",
      "Traefik",
      "Authentik",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
    links: [
      {
        label: "Code on GitHub",
        href: "https://github.com/steinnhauser/minnumst",
      },
    ],
    featured: true,
    personal: true,
    image: {
      src: minnumstShot,
      width: 720,
      height: 634,
      alt: "Minnumst's public archive: a name search with a person's profile and story (fictional sample data)",
    },
    page: {
      slug: "minnumst",
      curves: 3,
      intro:
        'Minnumst (Icelandic: "let us remember") is a shared written ' +
        "history of our ancestors: a public archive for reading stories, an " +
        "editorial desk for writing them, and an API that keeps every story " +
        "revision. I built it end to end, from the app to the hardened host " +
        "it runs on, so that the only thing reachable from the internet is a " +
        "TLS-terminating proxy and every write is authenticated before it " +
        "reaches the application.",
      figures: [
        { value: "57 → 70", label: "Lynis hardening index, scored in CI" },
        {
          value: "254 → 0",
          label: "Trivy findings, API image moved to Alpine",
        },
        { value: "1", label: "public entry point: Traefik" },
      ],
      sections: [
        {
          title: "Network and access",
          points: [
            "Only Traefik publishes ports. HTTP redirects to HTTPS with Let's Encrypt certificates and HSTS, and the API is rate-limited.",
            "Authentik forward-auth, with TOTP MFA, guards the whole editorial desk and every write to the API; reads stay public and there is no in-app login to attack.",
            "PostgreSQL sits alone with the API on an internal network with no route in or out. Traefik discovers services through a socket proxy that only lists containers.",
          ],
        },
        {
          title: "Host, provisioned as code",
          points: [
            "OpenTofu creates the Hetzner server, firewall and data volume, with state encrypted before it leaves the operator's machine.",
            "Ansible hardens Ubuntu 24.04 to the CIS benchmark (Level 1, selected Level 2), with every setting citing its CIS section and NIST control: LUKS-encrypted data, unattended updates, key-only SSH, a default-deny nftables firewall and auditd.",
            "Nightly database backups are encrypted with age to a key that never touches the server, and CI restores one into a fresh database on every change.",
          ],
        },
        {
          title: "Containers and supply chain",
          points: [
            "Every container runs as non-root, with a read-only root filesystem, no Linux capabilities and no-new-privileges, on Alpine images pinned by digest.",
            "Dependencies are locked, every GitHub Action is pinned to a commit SHA, and CodeQL, Trivy and zizmor scan the code, images and workflow on every change.",
            "Releases are multi-arch images published with build provenance and an SBOM.",
          ],
        },
        {
          title: "Verified, not just configured",
          points: [
            "A CI job applies the host hardening to a real Ubuntu 24.04 VM, requires a second run to change nothing, and reports the Lynis index before and after.",
            "An end-to-end job runs the production Compose stack and checks the edge from outside: redirect, HSTS and CSP, refused unauthenticated writes, the rate limit and network isolation.",
            "Playwright browser tests of both frontends fail on any Content Security Policy violation.",
          ],
        },
      ],
    },
  },
  {
    title: "recipify: a verified document pipeline",
    context: "Open source · Personal project",
    summary:
      "Turns about 1,900 mixed recipe files (Word, PDF, spreadsheets, " +
      "scans) into 524 recipes, each checked word for word against its " +
      "source and traceable back to it. 100% test coverage, with a live " +
      "demo built by CI.",
    flow: [
      { label: "Inventory", detail: "hash, classify and triage each file" },
      { label: "Extract", detail: "poppler, python-docx, LibreOffice" },
      { label: "Structure", detail: "deterministic rules, no rewriting" },
      { label: "Assess", detail: "word-for-word check against the source" },
      { label: "Viewer", detail: "one offline HTML file" },
    ],
    tags: ["Python", "pytest", "poppler", "python-docx", "GitHub Actions"],
    links: [
      { label: "Live demo", href: "https://steinnhm.com/recipify/demo/" },
      {
        label: "Code on GitHub",
        href: "https://github.com/steinnhauser/recipify",
      },
    ],
    featured: true,
    personal: true,
    image: {
      src: recipifyShot,
      width: 880,
      height: 522,
      alt: "The recipify viewer: a recipe scaled to 2x with one ingredient ticked off",
    },
    page: {
      slug: "recipify",
      curves: 6,
      intro:
        "recipify started from a real archive: about 1,900 files collected " +
        "over many years by a professional kitchen, mostly in Icelandic. Word " +
        "documents, PDFs laid out in two or three columns, scanned notebooks, " +
        "photos, spreadsheets and many copies of the same files. It turns " +
        "them into verified, structured recipes, publishes them as one " +
        "offline HTML file that chefs can cook from, and holds back " +
        "everything it can't check, with the reason.",
      figures: [
        { value: "1,916", label: "source files in the real archive" },
        { value: "524", label: "recipes verified and published" },
        { value: "100%", label: "test coverage, enforced in CI" },
      ],
      sections: [
        {
          title: "The pipeline",
          points: [
            "Inventory hashes every file, classifies it by content rather than extension, merges identical copies and triages recipes from books and reference material.",
            "Extraction runs locally and for free: poppler in content-stream order (cross-checked against its layout rendering), Word XML including text boxes, and spreadsheets block by block.",
            "Documents holding several recipes are split only in clear cases, and every decision, split or not, is stored with its reason. Deterministic rules then structure each recipe into components, ingredients and steps.",
          ],
        },
        {
          title: "Why it can be trusted",
          points: [
            "Nothing is rewritten: the structurer only decides what each source line is, never changes the text.",
            "Every published recipe is checked word for word against its source (recall and precision of 1.0), and two extractors must agree on reading order.",
            "Hard cases are named, not hidden: the report lists every document that isn't ready, and why.",
          ],
        },
        {
          title: "Cheap to re-run, easy to trace",
          points: [
            "Every artifact is keyed by the source's SHA-256 and the engine version, so re-runs skip finished work, renamed files keep their results and earlier results are never overwritten.",
            "recipify trace follows a published recipe back to the file it came from and re-checks every link on the way.",
          ],
        },
        {
          title: "The viewer",
          points: [
            "One HTML file with no external requests: it works offline, can be emailed, and stays readable without JavaScript.",
            "Built for cooking: scale from ½× to 4×, tick off ingredients and steps, search that ignores accents, and filters with live counts.",
            "recipify lock encrypts the page with AES-256-GCM for public hosting; the key travels in the link's #fragment, which browsers never send to the server.",
          ],
        },
      ],
    },
  },
  {
    title: "Cardiac artefact removal for MNE-Python",
    context: "Max Planck Institute · Guest Developer · 2024-2025",
    summary:
      "Helped develop, package and formalize a tool that removes cardiac " +
      "artefacts from spinal electrophysiology data, contributed to the " +
      "open-source MNE-Python library.",
    tags: ["Python", "MNE-Python", "Signal processing", "Open source"],
    links: [
      {
        label: "Pull request #13037",
        href: "https://github.com/mne-tools/mne-python/pull/13037",
      },
    ],
  },
  {
    title: "Predicting brain signals from neuronal networks",
    context: "University of Oslo · MSc thesis & publication · 2021-2022",
    summary:
      "Evaluated the kernel and hybrid approximation methods for computing " +
      "local field potentials across a range of network conditions, " +
      "simulating neuronal networks in Python with LFPy. Published in PLOS " +
      "Computational Biology (2022).",
    tags: ["Python", "LFPy", "Computational neuroscience", "Simulation"],
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1371/journal.pcbi.1010353",
      },
      {
        label: "Thesis code",
        href: "https://github.com/steinnhauser/msc-thesis-lfp",
      },
    ],
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
    skills: ["Azure", "AWS", "Terraform", "Terragrunt", "OpenTofu", "Linux"],
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
      "Bash",
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
