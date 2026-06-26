// Single source of truth for the site's content.
// Edit here — every section reads from this file.

export const profile = {
  name: "Jesutoni Omiye",
  firstName: "Jesutoni",
  role: "Product Manager & Founder",
  location: "Lagos, Nigeria",
  available: "Open to founding and product roles",
  photo: "/jesutoni.jpg",
  photoAbout: "/jesutoni-hero.jpg",
  // Friendly greeting line above the headline.
  greeting: "Hi, I'm Jesutoni",
  // The big statement. The accent word "simple" is highlighted in the hero.
  headline: "I build AI products that make complicated things simple.",
  // A crisp, human hook for the hero, merged from the current portfolio.
  intro:
    "A product manager driven by data and user needs, I build impactful, scalable solutions through research, strategy, and teamwork. My latest is Plainly, an AI tool that turns Nigeria's most confusing documents into plain English. Let's create something great in 2026.",
  email: "jesutoniomiye@gmail.com",
  phone: "+234 807 168 4586",
  phoneHref: "tel:+2348071684586",
  whatsapp: "https://wa.me/2348071684586",
  cvUrl:
    "https://drive.google.com/file/d/1HyKy1XZckei-3ExKSNobVyNl76MlSozK/view?usp=sharing",
  links: {
    github: "https://github.com/Jesut0ni",
    linkedin: "https://www.linkedin.com/in/jesutoni-omiye/",
    twitter: "https://twitter.com/Jesut0ni",
    instagram: "https://www.instagram.com/jesutoni",
  },
};

// Short proof points for the hero strip.
export const stats = [
  { value: "4", label: "Products built from 0 to 1" },
  { value: "10,000+", label: "Users reached" },
  { value: "YC W22", label: "Product experience" },
];

// First-person, confident, selling. No dashes, no sickle-cell story.
export const about: string[] = [
  "I believe great products solve real problems, and I make sure they do. I'm a Product & Project Manager who takes products from idea to impact, combining strategic thinking, cross-functional leadership, and relentless execution to ship products users love and businesses can scale. I don't just manage timelines and deliverables; I align vision, team, and execution so products don't just launch, they thrive.",
  "Lately my work has gone deep into AI. My latest product, Plainly, reads Nigeria's most confusing documents and explains them in plain English, and I've built AgentGate and agent-tools, open-source infrastructure that lets AI agents act safely. Before that, as Co-Founder & Product Manager at JEAY Healthcare, I led a digital health platform from idea to launch and grew it past 3,000 users in six weeks, building in resource-constrained environments and delivering results that matter.",
  "I work hands-on with LLMs, RAG, and AI agents, with experience spanning health tech, insurance, and fintech. I'm now looking for Product Management roles in startups, consulting, or impact-driven teams. If you need a PM who can manage chaos, ship fast, and deliver products people actually use, let's talk.",
];

// Skills grouped so the AI building reads first.
export type SkillGroup = {
  title: string;
  items: { name: string; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Engineering",
    items: [
      { name: "LLM Application Development", note: "Shipping real product features on top of large language models" },
      { name: "AI Agents & Infrastructure", note: "Auth, registries, and the plumbing agents need to act safely" },
      { name: "Document AI & RAG", note: "Pulling meaning out of messy PDFs and explaining it plainly" },
      { name: "Prompt Engineering & Evals", note: "Designing prompts and testing them until the output holds up" },
      { name: "Building AI Agents", note: "Designing agents that plan, call tools, and finish real tasks" },
      { name: "Model Context Protocol (MCP)", note: "Standards-based tool integration so agents can call anything" },
      { name: "AI-Assisted Development", note: "Shipping faster with Claude Code and modern AI coding tools" },
      { name: "AI & Automation", note: "Putting models to work on the boring, high-volume problems" },
      { name: "OCR & NLP", note: "Turning scanned records and raw text into structured data" },
    ],
  },
  {
    title: "Product & Strategy",
    items: [
      { name: "Product Strategy", note: "Vision, positioning, and the bets worth making" },
      { name: "Roadmap Planning", note: "Sequencing work so the right things ship first" },
      { name: "User Research", note: "Talking to users before a single feature gets built" },
      { name: "User-Centered Design", note: "Designing around the person, not the feature" },
      { name: "Market Analysis", note: "Reading the landscape and finding the wedge" },
      { name: "Data Analysis", note: "Letting the numbers settle the argument" },
      { name: "Stakeholder Management", note: "Keeping teams, partners, and users aligned" },
      { name: "Agile & Scrum", note: "Shipping in tight, honest iterations" },
      { name: "Problem Solving", note: "Getting to the root, not just the symptom" },
    ],
  },
];

export type Project = {
  index: string;
  name: string;
  year: string;
  tagline: string;
  blurb: string;
  role: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Plainly",
    year: "2026",
    tagline: "AI for Nigeria's most confusing documents",
    blurb:
      "Upload a lease, a payslip, or an HMO plan and get plain English back, with red flags and clear next steps. It knows Nigerian rules and pricing tricks, so the advice actually fits. My latest AI build, shipping in the open.",
    role: "Founder",
    stack: ["Next.js", "TypeScript", "LLM pipeline", "OCR"],
    href: "https://plainlyai.vercel.app",
    hrefLabel: "Visit site",
  },
  {
    index: "02",
    name: "JEAY Healthcare",
    year: "2022",
    tagline: "Telemedicine for young Nigerians",
    blurb:
      "A telemedicine platform that connects young Nigerians to affordable doctors. Patients consult over video, audio, or chat for primary care, mental health, and reproductive health, then get medication delivered and lab tests done at home. We launched in six weeks and grew past 3,000 users across three states.",
    role: "Co-Founder & Product Manager",
    stack: ["Telehealth", "0 to 1", "Marketplace"],
    href: "https://ng.linkedin.com/company/jeay-healthcare",
    hrefLabel: "Company page",
  },
  {
    index: "03",
    name: "AgentGate",
    year: "2026",
    tagline: "OAuth for AI agents",
    blurb:
      "AgentGate lets developers control exactly what an AI agent is allowed to do. It grants scoped permissions, asks the user to approve sensitive actions, logs every call for auditing, and revokes access instantly, so teams can deploy agents without losing control. Open source.",
    role: "Creator",
    stack: ["TypeScript", "OAuth 2.0", "Node.js"],
    href: "https://github.com/Jesut0ni/agentgate",
    hrefLabel: "View on GitHub",
  },
  {
    index: "04",
    name: "agent-tools",
    year: "2026",
    tagline: "An open registry of tools for AI agents",
    blurb:
      "An open registry where developers publish typed, agent-callable tools, and AI agents discover and invoke them through one MCP-native endpoint. It's the companion to AgentGate: one decides what an agent may call, the other is the catalogue of what's callable.",
    role: "Creator",
    stack: ["MCP", "OpenAPI", "Node.js"],
    href: "https://github.com/Jesut0ni/agent-tools",
    hrefLabel: "View on GitHub",
  },
];

export type Job = {
  company: string;
  role: string;
  note: string;
  tag?: string;
  href?: string;
};

export const experience: Job[] = [
  {
    company: "Curacel",
    role: "Product Manager",
    tag: "YC W22",
    href: "https://www.curacel.co/",
    note: "AI for insurance across Africa. I work on claims automation, fraud detection, and the workflows insurers run every day.",
  },
  {
    company: "JEAY Healthcare",
    role: "Co-Founder & Product Manager",
    href: "https://ng.linkedin.com/company/jeay-healthcare",
    note: "Took the platform from idea to a live MVP in six weeks. Grew past 3,000 users across three states and cut patient onboarding time by 40%.",
  },
  {
    company: "HealthDocX",
    role: "Product Operations",
    href: "https://www.linkedin.com/company/healthdocx-org/",
    note: "An AI platform that digitizes medical records with OCR and NLP, with cloud storage and EMR/EHR integration.",
  },
  {
    company: "Jorrel Management",
    role: "Project Manager",
    href: "https://ng.linkedin.com/company/jorrelmanagement",
    note: "Ran strategic client projects and cross-functional delivery for business growth initiatives.",
  },
];

export type Article = {
  outlet: string;
  title: string;
  href: string;
};

export const articles: Article[] = [
  {
    outlet: "Techpoint Africa",
    title: "Nigerian JEAY is making healthcare accessible and affordable",
    href: "https://techpoint.africa/2023/02/20/jeay-affordable-accessible-healthcare-nigeria/",
  },
  {
    outlet: "Solutions Paper",
    title: "How JEAY Healthcare is bridging the healthcare gap in EKSU",
    href: "https://solutionspaper.com/how-jeay-healthcare-is-bridging-the-healthcare-gap-in-eksu/",
  },
  {
    outlet: "Newspread",
    title: "Two undergraduates build app for affordable, accessible healthcare",
    href: "https://newspread.ng/two-undergraduates-build-app-to-provide-affordable-accessible-healthcare/",
  },
  {
    outlet: "MedZone TV",
    title: "The challenges faced by medical students in Nigeria",
    href: "https://medzonetv.com/articles/the-challenges-faced-by-medical-students-in-nigeria/",
  },
];
