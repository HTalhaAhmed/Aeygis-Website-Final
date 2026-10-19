export const CONTACT_EMAIL = "info@aeygis.com";

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/aeygis-technologies/" },
  { label: "Instagram", href: "https://www.instagram.com/aeygis.technologies" },
  { label: "TikTok", href: "https://www.tiktok.com/@aeygistechnologies" },
  { label: "YouTube", href: "https://www.youtube.com/@aeygis" },
];

export interface OfferingSection {
  title: string;
  lede?: string;
  /** "cards" (default): numbered panels. "list": a compact row of names, e.g. who we serve. */
  variant?: "cards" | "list";
  items: { label?: string; title: string; body?: string }[];
}

export interface Offering {
  /** Route for the offering's page on this site: /<slug>. */
  slug: string;
  name: string;
  kind: "Software" | "Service";
  tagline: string;
  /** The offering's own website. Unset shows "Website coming soon" on its page. */
  website?: string;
  /** Decorative mark shown in the artwork column (see ServiceMark). */
  mark: "cadence" | "gantry" | "health" | "security";
  /** Loop that plays over the mark on hover. Swap for final footage in public/media/services/. */
  video: string;
  /** Opening paragraphs on the offering's page. */
  intro: string[];
  facts: { label: string; value: string }[];
  /** Band of headline figures under the intro. */
  stats?: { title: string; items: { value: string; label: string }[]; note?: string };
  sections?: OfferingSection[];
  /** Closing call-to-action panel at the foot of the page. */
  closing?: { title: string; body: string };
  /** Primary call to action on the offering's page. */
  cta: { label: string; href: string };
}

// "Our Software & Services" list, in display order.
// Known site, to set as `website` once it goes live:
//   Aeygis Health: https://health.aeygis.com/
export const OFFERINGS: Offering[] = [
  {
    slug: "cadence",
    name: "Cadence",
    kind: "Software",
    tagline: "Run a whole staffing agency in one place, from intake to payroll",
    website: "https://app-cadence.com/index.html",
    mark: "cadence",
    video: "/media/services/cadence.mp4",
    intro: [
      "Run your whole staffing agency in one place. Cadence takes the data entry, phone tag and paperwork out of staffing, from the first candidate intake to the final payroll run.",
      "Candidates onboard themselves, shifts fill without endless calls, and payroll and invoicing take a click. Everything is stored securely in Canada, built and supported by Aeygis.",
    ],
    facts: [
      { label: "Type", value: "Software" },
      { label: "Scope", value: "Intake to payroll" },
      { label: "Compliance", value: "PIPEDA · Canadian-hosted" },
      { label: "Built by", value: "Aeygis" },
    ],
    stats: {
      title: "Cadence by the numbers",
      items: [
        { value: "78%", label: "of weekly admin time handed back" },
        { value: "85%", label: "less time running payroll" },
        { value: "80%", label: "faster client invoicing" },
        { value: "75%", label: "of onboarding runs itself" },
        { value: "90%", label: "fewer manual profile and certification updates" },
        { value: "50%", label: "lower software spend" },
      ],
      note: "Averages modelled from the same calculator behind the Cadence savings survey.",
    },
    sections: [
      {
        title: "One platform, the whole agency",
        lede: "Every step of a placement, from the first email to the final payslip, in one system.",
        items: [
          { title: "Candidates and onboarding", body: "Candidates onboard themselves and keep their profiles current, so your office stops re-typing forms and chasing paperwork." },
          { title: "Certification tracking", body: "Certifications and licences are tracked automatically, with a warning before anything expires." },
          { title: "Shift coordination", body: "Offers, confirmations, assignments and sign-offs happen automatically, for your team and your clients." },
          { title: "AI email intake", body: "A built-in email client turns an email into jobs and hour sheets without leaving the app." },
          { title: "Payroll and payslips", body: "Generate payroll and payslips for every placement in one click." },
          { title: "Invoicing", body: "Built-in invoicing fills itself in from the hours already worked." },
        ],
      },
      {
        title: "Coordinate shifts without the phone tag",
        lede: "The calls and texts that used to fill your day now happen on their own.",
        items: [
          { title: "Automated notifications", body: "Employees hear about new offers and changes the moment they happen." },
          { title: "One-click assignment", body: "Assign a shift in one click, and the client is notified instantly." },
          { title: "Automatic e-signatures", body: "Signature requests go out on their own, with no printing or scanning." },
        ],
      },
      {
        title: "Built for compliance, not just convenience",
        lede: "Your candidates' data is protected to Canadian standards from the moment it arrives.",
        items: [
          { title: "PIPEDA-compliant storage", body: "Every record is encrypted and stored to PIPEDA requirements." },
          { title: "Canadian-hosted", body: "Data stays on Canadian infrastructure, in cloud storage with backups." },
          { title: "Role-based access", body: "Each person sees only what their role needs." },
          { title: "Full audit trail", body: "Every change is logged, so you can always show who did what and when." },
          { title: "Automatic archiving", body: "Old records are archived on schedule, without anyone remembering to do it." },
        ],
      },
    ],
    closing: {
      title: "See Cadence in action",
      body: "Try the live demo and see how much of your week Cadence can hand back.",
    },
    cta: { label: "Talk to us", href: "/#contact" },
  },
  {
    slug: "gantry",
    name: "Gantry",
    kind: "Service",
    tagline: "AWS infrastructure, designed, built and run",
    website: "https://gantry.aeygis.com/",
    mark: "gantry",
    video: "/media/services/gantry.mp4",
    intro: [
      "Your cloud is only as strong as the foundation under it. Gantry designs, builds and runs AWS for teams that have outgrown the setups they improvised.",
      "The name comes from the launch pad, where a gantry holds a rocket steady until launch. Reach beyond the cloud, shoot for the stars.",
    ],
    facts: [
      { label: "Focus", value: "AWS, end to end" },
      { label: "Industries", value: "Finance · Healthcare · Retail · Public sector · SaaS" },
      { label: "Contact", value: "cto.cloud@aeygis.com" },
    ],
    stats: {
      title: "Gantry at a glance",
      items: [
        { value: "5", label: "phases in every engagement, from the first look at your setup to ongoing optimization" },
        { value: "4", label: "compliance frameworks built into the baseline: SOC 2, HIPAA, PCI DSS and ISO 27001" },
        { value: "100%", label: "of infrastructure defined in code, so every change can be reviewed and reversed" },
      ],
    },
    sections: [
      {
        title: "Reinvent your cloud foundation",
        lede: "Everything it takes to run AWS well, from the first account to the on-call rota.",
        items: [
          { title: "Cloud foundations", body: "Start on a secure, multi-account landing zone with guardrails and central logging." },
          { title: "Migration and modernization", body: "Move off legacy hosting workload by workload, with every cutover rehearsed." },
          { title: "Managed operations", body: "Keep systems healthy with monitoring, patching, backups and an engineer on call." },
          { title: "Security and compliance", body: "Build SOC 2, HIPAA, PCI DSS and ISO 27001 controls into the baseline, not on top of it." },
          { title: "Cost optimization", body: "Cut waste with right-sizing, Savings Plans and tagging that shows where every dollar goes." },
          { title: "DevOps and delivery", body: "Ship faster with infrastructure as code (Terraform, CDK) and CI/CD pipelines." },
        ],
      },
      {
        title: "Countdown to launch",
        lede: "Every engagement runs through the same five phases.",
        items: [
          { label: "T-4", title: "Review", body: "A written picture of where your AWS stands today." },
          { label: "T-3", title: "Design", body: "An architecture you sign off before anything is provisioned." },
          { label: "T-2", title: "Build", body: "All in code, every change reversible." },
          { label: "T-1", title: "Operate", body: "Gantry runs it, hands it to your team, or both." },
          { label: "Lift off", title: "Optimize", body: "Quarterly reviews." },
        ],
      },
      {
        title: "Principles",
        items: [
          { title: "Design before build", body: "Nothing is provisioned until the architecture is agreed." },
          { title: "No lock-in", body: "You get the docs, the code and the training." },
          { title: "Waste is our failure", body: "Money lost to idle or oversized resources is ours to fix." },
          { title: "Real status, early", body: "You hear how things actually stand, while there is still time to act." },
        ],
      },
      {
        title: "Industries we support",
        variant: "list",
        items: [{ title: "Finance" }, { title: "Healthcare" }, { title: "Retail" }, { title: "Public sector" }, { title: "SaaS" }],
      },
    ],
    cta: { label: "Talk to Gantry", href: "mailto:cto.cloud@aeygis.com?subject=Gantry%20enquiry" },
  },
  {
    slug: "health",
    name: "Aeygis Health",
    kind: "Service",
    tagline: "Healthcare infrastructure, engineered like critical infrastructure",
    mark: "health",
    video: "/media/services/health.mp4",
    intro: [
      "Care depends on systems that never go down. Aeygis Health builds the infrastructure behind modern healthcare and engineers it to the standard of critical infrastructure.",
      "Patients expect easy access to care and clinicians need tools that keep up with them. We modernize the systems underneath, so care is easier to reach, records are safe, and teams can focus on patients.",
    ],
    facts: [
      { label: "Type", value: "Service" },
      { label: "Sector", value: "Healthcare" },
      { label: "Standard", value: "Critical infrastructure" },
    ],
    sections: [
      {
        title: "How we strengthen healthcare",
        lede: "From the records clinicians open every morning to the systems that keep a hospital running at night.",
        items: [
          { title: "Digital health foundations", body: "Modernize the core systems care runs on, to widen access and improve outcomes." },
          { title: "Clinician and patient experience", body: "Give clinicians tools that get out of their way, and patients an easier path to care." },
          { title: "Health operations", body: "Bring scheduling, staffing and supply into one view to raise quality and control cost." },
          { title: "Health records in the cloud", body: "Keep records secure, reliable and available wherever care happens." },
          { title: "Privacy and security", body: "Protect patient data with controls built for PHIPA, PIPEDA and HIPAA from day one." },
          { title: "Resilience and continuity", body: "Design for failover, backups and recovery, so care continues when systems are under strain." },
        ],
      },
      {
        title: "How we work",
        lede: "Every engagement follows the same path, so you always know what comes next.",
        items: [
          { title: "Assess", body: "We map your current systems, risks and the clinical workflows that depend on them." },
          { title: "Design", body: "An architecture built around uptime and privacy, agreed with you before any build starts." },
          { title: "Build", body: "We deliver in stages and test each one against real clinical use." },
          { title: "Operate", body: "We run it, hand it over to your team, or both, with monitoring around the clock." },
        ],
      },
      {
        title: "Who we support",
        variant: "list",
        items: [
          { title: "Hospitals and health systems" },
          { title: "Clinics and primary care" },
          { title: "Long-term and home care" },
          { title: "Public health agencies" },
          { title: "Health technology companies" },
        ],
      },
    ],
    closing: {
      title: "Build healthcare that stays up",
      body: "Tell us about the systems your care depends on. We will show you where they are strong, where they are at risk, and what to fix first.",
    },
    cta: { label: "Talk to our team", href: "/#contact" },
  },
  {
    slug: "security",
    name: "Aeygis Security",
    kind: "Service",
    tagline: "SOC 2 readiness, cyber assessments and CPCSC Level 1 preparation",
    mark: "security",
    video: "/media/services/security.mp4",
    intro: [
      "Aeygis Security gets organizations ready for SOC 2, runs cyber assessments, and prepares defence suppliers for the Canadian Program for Cyber Security Certification (CPCSC).",
      "CPCSC Level 1 is a yearly self-assessment against 13 security controls, and suppliers need it at contract award. We make sure what you attest to is true, so it holds up if anyone checks.",
    ],
    facts: [
      { label: "Compliance", value: "SOC 2 readiness" },
      { label: "Program", value: "CPCSC Level 1" },
      { label: "Renewal", value: "200+ Every Year" },
      { label: "Sector", value: "Defence supply chain" },
    ],
    stats: {
      title: "CPCSC now",
      items: [
        { value: "13", label: "security controls every supplier is checked against at Level 1" },
        { value: "1 year", label: "how long a Level 1 self-assessment lasts before it must be renewed" },
        { value: "3", label: "levels in the program, with Level 2 and 3 adding independent assessments" },
      ],
    },
    sections: [
      {
        title: "Build trust with security",
        lede: "Protect what you have built and prove it to the customers and programs that ask.",
        items: [
          { title: "SOC 2 readiness", body: "Get audit-ready with controls and evidence your customers can trust." },
          { title: "Cyber assessments", body: "Find the weak points in your systems before someone else does." },
          { title: "CPCSC Level 1 preparation", body: "Meet the 13 controls and attest with confidence." },
          { title: "Level 2 readiness", body: "Prepare early for the third-party assessment your contracts may require." },
          { title: "Policies and controls", body: "Put written policies and working controls in place, sized to your team." },
          { title: "Ongoing compliance", body: "Keep controls running and evidence current between audits and renewals." },
        ],
      },
      {
        title: "How we help with SOC 2",
        lede: "From a first look at your controls to the day your auditor signs off.",
        items: [
          { title: "Scope and gap assessment", body: "We map your systems against the Trust Services Criteria you need and show exactly where the gaps are." },
          { title: "Controls and policies", body: "We help you put the missing controls and written policies in place, sized to how your team actually works." },
          { title: "Evidence readiness", body: "We set up the evidence your auditor will ask for, so collecting it is routine rather than a scramble." },
          { title: "Type I and Type II support", body: "We prepare you for the Type I point-in-time review, then keep controls running through the Type II observation period." },
          { title: "Audit day support", body: "We work alongside your independent CPA auditor, answering requests and closing findings quickly." },
        ],
      },
      {
        title: "How we help with CPCSC Level 1",
        lede: "From a first gap check to a clean attestation.",
        items: [
          { title: "Gap check", body: "We check your systems against the 13 Level 1 controls and show you exactly what is missing." },
          { title: "Fix the gaps", body: "We put the missing controls and written policies in place, sized to how your team actually works." },
          { title: "Evidence on file", body: "We set up proof for each control, so your attestation is backed up if a contracting officer asks." },
          { title: "Self-assessment", body: "We walk you through the government's self-assessment and getting the proof of attestation and its expiry date onto your file." },
          { title: "Ready for Level 2", body: "If your contracts will need Level 2, we build toward the third-party assessment from day one." },
        ],
      },
    ],
    closing: {
      title: "Know where you stand",
      body: "A readiness check shows which controls you already meet, which you don't, and what it takes to close the gap before your next contract or audit.",
    },
    cta: { label: "Book a readiness check", href: "/#contact" },
  },
];

export interface UpdateItem {
  id: string;
  /** Short label for the topic chip row. */
  chip: string;
  tag: string;
  date: string;
  title: string;
  body: string;
  /** Drop Midjourney loops into public/media/updates/ and point here. */
  video?: string;
  poster?: string;
  cta?: { label: string; href: string };
}

export const UPDATES: UpdateItem[] = [
  {
    id: "cadence",
    chip: "Cadence",
    tag: "Cadence",
    date: "Now available",
    title: "Cadence is now here",
    body: "Run your whole staffing agency in one place. Self-serve onboarding, automatic shift coordination, AI email intake and one-click payroll and invoicing, all PIPEDA-compliant and hosted in Canada.",
    video: "/media/services/cadence.mp4",
    cta: { label: "Explore Cadence", href: "/cadence/" },
  },
  {
    id: "cpcsc-2027",
    chip: "CPCSC Level 1",
    tag: "Aeygis Security · CPCSC",
    date: "2027 Program",
    title: "Get ready for CPCSC Level 1",
    body:
      "Defence suppliers now need a CPCSC Level 1 self-assessment to win federal contracts. Aeygis Security checks you against the 13 controls, fixes the gaps, and walks you through the attestation.",
    video: "/media/updates/cpcsc.mp4",
    cta: { label: "Book a readiness check", href: "/security/" },
  },
  {
    id: "gantry",
    chip: "Gantry",
    tag: "Gantry",
    date: "Upcoming",
    title: "Meet Gantry: AWS infrastructure, built and run",
    body: "The fourth offering in the Aeygis group designs, builds and runs AWS for teams that have outgrown the setups they improvised.",
    video: "/media/updates/gantry.mp4",
    cta: { label: "Explore Gantry", href: "/gantry/" },
  },
];
