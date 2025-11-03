import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nwagba Okechukwu Martin",
  initials: "NOM",
  location: "Lagos, Nigeria, WAT",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Dart, Flutter, React, React Native, Kotlin, Node.js, and Nest.js. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/24194413?s=400&u=988c708592b9f755ee5356629d39829851041724&v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "nwagba001@gmail.com",
    tel: "+2347056322074",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Enigma-I-am",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/okechukwunwagba/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Nigeria Nsukka",
      degree: "Bachelor's Degree Electronic Engineering",
      start: "2015",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Moniepoint",
      link: "https://moniepoint.com/ng/business",
      badges: ["Remote"],
      title: "Senior Mobile Engineer",
      logo: ParabolLogo,
      start: "Sept 2024",
      end: "Present",
      description: "Developing custom UI kits for Android using Jetpack Compose and Flutter, leveraging native functionalities to ensure seamless integration across products. Building custom packages for React Native and Flutter that bridge native Android and iOS APIs. Utilizing MVC and MVVM architectures to deliver maintainable, testable, and scalable mobile solutions while implementing CI/CD pipelines for streamlined deployment and version management.",
    },
    {
      company: "Juicyway",
      link: "https://www.juicyway.com/",
      badges: ["Remote"],
      title: "Senior Mobile Engineer",
      logo: ParabolLogo,
      start: "Sept 2024",
      end: "Present",
      description: "Architected and developed a mobile application for international money transfers and multi-currency management using Flutter and Riverpod. Built robust financial transaction features ensuring secure and efficient cross-border payment processing for thousands of users across multiple countries.",
    },
    {
      company: "Varscon",
      link: "https://varscon.com/",
      badges: ["Remote"],
      title: "Mobile Engineer → Full Stack Developer",
      logo: ParabolLogo,
      start: "Sept 2018",
      end: "Present",
      description: "Built and maintained mobile applications enabling businesses to manage operations and customer interactions efficiently. Transitioned to full-stack engineering, architecting and building Nwahia, a WhatsApp AI business assistant that handles customer inquiries autonomously. Developed the complete system using TypeScript, React, and Nest.js, implementing AI-powered conversational flows that enable businesses to maintain 24/7 customer engagement. Designed scalable backend architecture and integrated WhatsApp Business API for seamless communication.",
    },
    {
      company: "Lance Credit",
      link: "https://www.lancecredit.com/",
      badges: ["Remote"],
      title: "Mobile Engineer → Full Stack Developer",
      logo: ParabolLogo,
      start: "Sept 2021",
      end: "Present",
      description: "Built and maintained a mobile application for requesting and dispensing loans while helping users build their credit scores using Flutter and Riverpod. Developed secure loan application workflows, disbursement systems, and credit scoring mechanisms that enable users to access financial services and establish creditworthiness. Transitioned to full-stack development, architecting and building the Express.js backend infrastructure that powers the lending platform. Designed scalable APIs for loan processing, risk assessment algorithms, credit score calculation, and repayment management systems serving borrowers across multiple segments.",
    },
    {
      company: "Edenlife",
      link: "https://ouredenlife.com/",
      badges: ["Remote"],
      title: "Senior Mobile Engineer",
      logo: ParabolLogo,
      start: "Aug 2022",
      end: "Jul 2024",
      description: "Led a mobile team of 3 engineers as part of a Product Lead Growth initiative, implementing gifting and virality features that increased user signups by over 300%. Spearheaded development of same-day delivery capabilities serving 1000+ customers. Implemented Over-The-Air (OTA) updates using Shorebird, enabling rapid bug fixes and seamless solution delivery that enhanced user experience and reduced downtime. Maintained and improved CI/CD pipelines to ensure reliable application releases.",
    },
    {
      company: "GetStream.io",
      link: "https://getstream.io/",
      badges: ["Remote"],
      title: "SDK Engineer React Native",
      logo: ClevertechLogo,
      start: "Jan 2022",
      end: "Aug 2022",
      description: "Implemented secure file extension validation for the React Native SDK, ensuring safe and efficient handling of uploads. Integrated Right-to-Left (RTL) language support for seamless international compatibility. Authored comprehensive unit tests for SDK components and hooks to ensure code robustness and reliability. Built a high-performance Twitch clone application showcasing the stream-chat React Native SDK's capabilities in handling chat-heavy applications.",
    },
    {
      company: "OurPass",
      link: "https://bsgroup.eu/",
      badges: ["Remote"],
      title: "Mobile Engineer → Lead Mobile Developer",
      logo: JojoMobileLogo,
      start: "Jan 2021",
      end: "Jan 2022",
      description: "Led a mobile team of 3 engineers to deliver features supporting 1000+ businesses in streamlining their operations. Implemented a money transfer feature that achieved 100% user adoption post-deployment. Established CI/CD pipelines using Fastlane and GitHub Actions for reliable releases, and integrated analytics services including OneSignal, Mixpanel, and Intercom for comprehensive user insights.",
    },
    {
      company: "Remote Africa",
      link: "https://remoteafrica.io/",
      badges: ["Remote"],
      title: "Mobile Engineer",
      logo: NSNLogo,
      start: "Aug 2019",
      end: "May 2021",
      description: "Owned the complete lifecycle of multiple mobile applications from development through maintenance, ensuring consistent quality and performance. Implemented CI/CD pipelines for smooth and reliable application releases across all projects.",
    },
  ],
  projects: [
    {
      title: "Nwahia",
      techStack: [
        "TypeScript",
        "React",
        "Nest.js"
      ],
      description: "A Whatsapp AI business assistant that attends to customers when you are offline",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://nwahia.com",
      },
    },
    {
      title: "Lance Credit",
      techStack: [
        "Dart",
        "Typescript",
        "Express.js",
        "Flutter",
        "Riverpod"
      ],
      description: "A mobile application for requesting and dispensing loans while helping users build their credit scores",
      logo: ConsultlyLogo,
      link: {
        label: "google play link",
        href: "https://apps.apple.com/ng/app/ourpass-business-bank/id1627209061",
      },
    },
    {
      title: "Juicyway Mobile",
      techStack: [
        "Dart",
        "Flutter",
        "Riverpod"
      ],
      description: "A mobile application for international money transfers and multi-currency management",
      logo: ConsultlyLogo,
      link: {
        label: "google play link",
        href: "https://play.google.com/store/apps/details?id=com.juicyway.mobile&hl=en",
      },
    },
    {
      title: "Eden Mobile",
      techStack: [
        "Dart",
        "Flutter",
        "Riverpod"
      ],
      description: "A mobile application for subscribing and managing cleaning, meal and laundry services",
      logo: ConsultlyLogo,
      link: {
        label: "google play link",
        href: "https://play.google.com/store/apps/details?id=com.ouredenlife.app&hl=en",
      },
    },
    {
      title: "OurPass Mobile",
      techStack: [
        "Dart",
        "Flutter",
        "Riverpod"
      ],
      description: "A mobile application for managing your business banking needs effortlessly with our all-in-one app",
      logo: ConsultlyLogo,
      link: {
        label: "google play link",
        href: "https://apps.apple.com/ng/app/ourpass-business-bank/id1627209061",
      },
    },
    {
      title: "Getstream.io react native SDK",
      techStack: [
        "Typescript",
        "React",
        "React Native",
      ],
      description: "React Native chat SDK for get stream.io",
      logo: ConsultlyLogo,
      link: {
        label: "google play link",
        href: "https://github.com/GetStream/stream-chat-react-native",
      },
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Dart",
    "Node.js",
    "Kotlin/Android",
    "Nest.js",
    "React/Next.js/Remix",
    "Flutter/Provider/Riverpod/Bloc",
  ],

} as const;
