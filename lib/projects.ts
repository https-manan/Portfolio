import Image from "next/image";
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
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "nexusroom",
    index: "01",
    name: "NexusRoom",
    category: "Dev",
    oneLiner: "A 2D metaverse where players roam rooms and video-call whoever they walk up to.",
    detail:
      "A fully backed 2D virtual space with a real-time room and movement engine. Players roam a shared map, and when two players are close enough, a live video call opens automatically between them. Rooms and presence run over WebSockets; calls run peer-to-peer over WebRTC. Built as a TypeScript monorepo with Prisma handling persistence.",
    stack: ["TypeScript", "WebSockets", "WebRTC", "Prisma", "Monorepo"],
    liveUrl: "https://nexus-room.vercel.app/",
    repoUrl: "https://github.com/https-manan",
    images: ["/projects/nexusroom/1.png", "/projects/nexusroom/2.png","/projects/nexusroom/3.png", "/projects/nexusroom/4.png","/projects/nexusroom/5.png"],
  },
  {
    slug: "seatlock",
    index: "02",
    name: "SeatLock",
    category: "Dev",
    oneLiner: "A BookMyShow-style seat booking system that handles real concurrency, not just UI.",
    detail:
      "A high-concurrency seat booking system where every user sees seat locks update live as others select them. Redis handles short-lived seat locks so two people can never book the same seat, with the lock state broadcast instantly over Socket.IO. Built to survive real race conditions using atomic NX/EX operations, not just optimistic UI.",
    stack: ["TypeScript ", "Express.js","Redis", "Socket.IO","MongoDB","cloudinary"],
    liveUrl: "https://seatlocking.vercel.app/",
    repoUrl: "https://github.com/https-manan",
    images: ["/projects/seatLocking/1.png", "/projects/seatLocking/2.png","/projects/seatLocking/3.png", "/projects/seatLocking/4.png","/projects/seatLocking/5.png","/projects/seatLocking/6.png", "/projects/seatLocking/7.png","/projects/seatLocking/8.png"],
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
    liveUrl: "https://resumeiq-1.streamlit.app/",
    repoUrl: "https://github.com/https-manan",
    images: ["/projects/resumeIQ/1.png", "/projects/resumeIQ/2.png","/projects/resumeIQ/3.png", "/projects/resumeIQ/4.png","/projects/resumeIQ/5.png", "/projects/resumeIQ/6.png"],
  },
  {
    slug: "classroll-ai",
    index: "04",
    name: "ClassRoll AI",
    category: "ML",
    oneLiner: "Marks attendance from a single group photo using face and voice recognition.",
    detail:
      "A dual-portal attendance system for teachers and students, built with Streamlit. Teachers create a class with a join code; students register with a face image and an optional voice embedding. Teachers then upload one group photo, and attendance is marked automatically using SVM classification, correctly handling students who appear in more than one photo.",
    stack: ["Streamlit", "SVM", "Image Detection", "Voice Embeddings"],
    liveUrl: "https://classai-1.streamlit.app/",
    repoUrl: "https://github.com/https-manan",
    images:  ["/projects/classRollAI/1.png", "/projects/classRollAI/2.png","/projects/classRollAI/3.png", "/projects/classRollAI/4.png","/projects/classRollAI/5.png","/projects/classRollAI/6.png", "/projects/classRollAI/7.png","/projects/classRollAI/8.png"],
  },
  {
    slug: "stylefusion",
    index: "05",
    name: "StyleFusion",
    category: "ML",
    oneLiner: "Repaints any photo in the style of another, using a decoder trained from scratch.",
    detail:
      "A neural style transfer system that blends a content image with a chosen style image using a CNN pipeline with an AdaIN layer at its core. Uses a pretrained VGG encoder paired with a decoder trained entirely from scratch, run and validated locally end to end rather than relying on an off-the-shelf style-transfer model.",
    stack: ["CNN", "AdaIN", "VGG Encoder", "Custom Decoder"],
    liveUrl: "https://stylefusion-cxts.onrender.com/x",
    repoUrl: "https://github.com/https-manan",
    images: ["/projects/styleFusion/1.png", "/projects/styleFusion/2.png","/projects/styleFusion/3.png", "/projects/styleFusion/4.png",],
  },
];


