export interface PortfolioProject {
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Engineering" | "Architecture" | "Automations" | "Leadership";
  bio: string;
  avatar?: string;
  location?: string;
  skills: string[];
  socialLinks: {
    portfolio?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  portfolios: PortfolioProject[];
}

/**
 * SaqrFlow Team & Portfolio Registry
 * 
 * To add a new team member or update your portfolio:
 * 1. Add your details to the TEAM_MEMBERS array below.
 * 2. Add your personal portfolio links and case studies under `portfolios`.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "mouaaz",
    name: "Mouaaz",
    role: "Founder & Lead Systems Architect",
    department: "Leadership",
    location: "London, UK",
    bio: "Systems architect specializing in high-throughput enterprise pipelines, multi-tenant agency infrastructure, and programmatic CRM workflows.",
    skills: [
      "Enterprise Architecture",
      "Next.js & React 19",
      "GoHighLevel API",
      "n8n & Webhook Pipelines",
      "PostgreSQL",
      "Lead Routing Engines",
    ],
    socialLinks: {
      email: "mouaaz@saqrflow.com",
      portfolio: "https://saqrflow.com",
      github: "https://github.com/niyazai",
      linkedin: "https://linkedin.com",
    },
    portfolios: [
      {
        title: "Autonomous WhatsApp Lead Qualifier",
        description:
          "Conversational qualification pipeline that ingests paid ad traffic, enriches caller metadata, verifies intent within 60 seconds, and synchronizes qualified leads to CRM booking calendars.",
        impact: "Reduced lead leakage by 74% and accelerated speed-to-lead under 2 minutes.",
        tags: ["WhatsApp Business API", "Meta Webhooks", "GoHighLevel", "Node.js"],
        liveUrl: "https://saqrflow.com/#proof",
      },
      {
        title: "Multi-Agency CRM Integration Engine",
        description:
          "Centralized data routing hub connecting 120+ lead ingest sources to HubSpot, GoHighLevel, and custom PostgreSQL databases with idempotency and retry queues.",
        impact: "Zero drop-rate across 45,000+ monthly events with real-time audit logging.",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
        liveUrl: "https://saqrflow.com",
      },
      {
        title: "Executive Revenue & Funnel Telemetry",
        description:
          "Mission-control dashboard delivering real-time cost-per-qualified-lead (CPQL), sales stage velocity, and conversion attribution across client marketing campaigns.",
        impact: "Replaced 5 disconnected SaaS tools with a unified client-facing cockpit.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        liveUrl: "https://saqrflow.com",
      },
    ],
  },
  {
    id: "alex",
    name: "Alex Vance",
    role: "Principal Automation & Integration Engineer",
    department: "Automations",
    location: "Manchester, UK",
    bio: "Specializes in custom API middleware, serverless webhook routing, and bulletproof failover architectures for high-volume lead pipelines.",
    skills: [
      "Webhook Architecture",
      "TypeScript",
      "Node.js & Python",
      "Make & Zapier Enterprise",
      "HubSpot Operations Hub",
      "REST & GraphQL APIs",
    ],
    socialLinks: {
      portfolio: "https://github.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    portfolios: [
      {
        title: "High-Resilience Webhook Dispatcher",
        description:
          "Distributed event bridge capable of buffering spike traffic from Black Friday ad spikes without dropping payload states.",
        impact: "99.99% uptime processing 100k+ daily payloads.",
        tags: ["TypeScript", "AWS Lambda", "SQS", "DynamoDB"],
      },
      {
        title: "Automated Multi-Channel Follow-up Matrix",
        description:
          "Dynamic SMS, WhatsApp, and voice-drop cascade that stops automatically upon prospect response to eliminate redundant spam.",
        impact: "Lifted response rate from 14% to 41% across warm inbound inquiries.",
        tags: ["Twilio", "Meta Cloud API", "GoHighLevel", "Serverless"],
      },
    ],
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Senior Full-Stack & UI/UX Engineer",
    department: "Engineering",
    location: "Edinburgh, UK",
    bio: "Front-end craftswoman focused on Swiss typographic precision, performant data visualizations, and modern React 19 architectures.",
    skills: [
      "React 19 & Next.js",
      "Tailwind CSS v4",
      "Design Systems",
      "Client Portals",
      "Figma to Production",
      "Web Performance",
    ],
    socialLinks: {
      portfolio: "https://github.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    portfolios: [
      {
        title: "Client White-Label Portal & Dashboard",
        description:
          "Customizable multi-tenant client portal allowing agencies to deliver live analytics, lead logs, and pipeline statuses under their own domain and branding.",
        impact: "Sub-100ms page transitions and 100 Lighthouse performance score.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      },
      {
        title: "Enterprise Design System & Token Engine",
        description:
          "Cohesive design system encompassing 40+ accessible UI components, dark/light contrast tokens, and interactive audit utilities.",
        impact: "Accelerated frontend feature turnaround time by 60%.",
        tags: ["Design Systems", "Tailwind CSS", "Storybook"],
      },
    ],
  },
];
