export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Lead Mobile Engineer",
    company: "Wake Digital",
    location: "Remote",
    period: "Jun 2025 - Present",
    responsibilities: [
      "Engineered a custom Swift-to-TypeScript bridge to implement Apple's AlarmKit, filling a critical gap in the Expo ecosystem where no existing library supported the new framework.",
      "Secured App Store approval by resolving strict data privacy requirements, implementing clear user permission flows to validate the necessity of sensitive background data access.",
      "Architected an event-driven Firebase backend using Cloud Functions to process social interactions, optimizing Firestore schemas to decouple read costs from user volume growth.",
      "Established the team's CI/CD pipeline and code review standards, converting a chaotic prototype workflow into a stable production release cycle."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Nurbli",
    location: "Remote",
    period: "January 2025 - June 2025",
    responsibilities: [
      "Engineered the navigation state machine to handle cyclical playback and boundary detection, ensuring seamless transitions for linear and repeat-listening experiences.",
      "Implemented audio interruption handlers to gracefully manage application focus, ensuring proper UI state synchronization when external apps seize audio resources.",
      "Managed the full sprint lifecycle for the engineering team on Asana, driving sprint planning, backlog grooming, and retrospectives to ensure on-time delivery."
    ]
  },
  {
    title: "IT / Network Engineer Intern",
    company: "Camping & Education Foundation",
    location: "I-Falls, MN",
    period: "April - November 2024",
    responsibilities: [
      "Managed network availability for 50+ onsite users, diagnosing hardware/software issues, and overseeing a 20x bandwidth upgrade (50 Mbps to 1Gbps) to support remote operations"
    ]
  }
];
