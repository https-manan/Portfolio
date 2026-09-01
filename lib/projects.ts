export type Project = {
  slug: string;
  index: string;
  name: string;
  category: "Dev" | "ML";
  oneLiner: string;
  detail: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nexusroom",
    index: "01",
    name: "NexusRoom",
    category: "Dev",
    oneLiner: "A 2D metaverse where players roam rooms and video-call whoever they walk up to.",
    detail:
      "A fully backed 2D virtual space with a real-time room and movement engine. Players roam in a shared room, and when two players are close enough, a live video call opens automatically between them. Rooms and presence run over WebSockets; calls run peer-to-peer over WebRTC. Built as a TypeScript monorepo with Prisma handling persistence.",
    stack: ["TypeScript", "WebSockets", "WebRTC", "Prisma", "Monorepo"],
    liveUrl: "",
    repoUrl: "https://github.com/https-manan",
    image: "",
  },
  {
    slug: "seatlock",
    index: "02",
    name: "SeatLock",
    category: "Dev",
    oneLiner: "A BookMyShow-style seat booking system that handles real concurrency, not just UI.",
    detail:
      "A high-concurrency seat booking system where every user sees seat locks update live as others select them. Redis handles short-lived seat locks so two people can never book the same seat, with the lock state broadcast instantly over Socket.IO. Built to survive real race conditions using atomic NX/EX operations, not just optimistic UI.",
    stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Socket.IO"],
    liveUrl: "",
    repoUrl: "https://github.com/https-manan",
    image: "",
  },
  {
    slug: "resumeiq",
    index: "03",
    name: "ResumeIQ",
    category: "ML",
    oneLiner: "Parses a resume and hands back a full report on exactly where it's falling short.",
    detail:
      "An ATS-style resume analyzer that parses a resume end-to-end and generates a full report on strengths and weak spots against real hiring criteria. Uses spaCy for structured parsing and a BERT model fine-tuned in-house to score and explain results, served through a FastAPI scoring engine with dedicated routes for each stage of analysis.",
    stack: ["spaCy", "BERT (fine-tuned)", "FastAPI", "File Parsing", "ATS Scoring Engine"],
    liveUrl: "",
    repoUrl: "https://github.com/https-manan",
    image: "",
  },
  {
    slug: "stylefusion",
    index: "04",
    name: "StyleFusion",
    category: "ML",
    oneLiner: "Repaints any photo in the style of another, using a decoder trained from scratch.",
    detail:
      "A neural style transfer system that blends a content image with a chosen style image using a CNN pipeline with an AdaIN layer at its core. Uses a pretrained VGG encoder paired with a decoder trained entirely from scratch, run and validated locally end to end rather than relying on an off-the-shelf style-transfer model.",
    stack: ["CNN", "AdaIN", "VGG Encoder", "Custom Decoder"],
    liveUrl: "",
    repoUrl: "https://github.com/https-manan",
    image: "",
  },
  {
    slug: "classroll-ai",
    index: "05",
    name: "ClassRoll AI",
    category: "ML",
    oneLiner: "Marks attendance from a single group photo using face and voice recognition.",
    detail:
      "A dual-portal attendance system for teachers and students, built with Streamlit. Teachers create a class with a join code; students register with a face image and an optional voice embedding. Teachers then upload one group photo, and attendance is marked automatically using SVM classification, correctly handling students who appear in more than one photo.",
    stack: ["Streamlit", "SVM", "Image Detection", "Voice Embeddings"],
    liveUrl: "",
    repoUrl: "https://github.com/https-manan",
    image: "",
  },
];