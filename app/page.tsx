/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroIllustration from "./components/HeroIllustration";
import {
  ArrowRight,
  BarChart3,
  Battery,
  Cloud,
  CreditCard,
  ShoppingBag,
  Folder,
  Grid,
  Image as ImageIcon,
  LayoutGrid,
  Layers,
  List,
  Lock,
  Maximize2,
  MessageSquare,
  Minus,
  Moon,
  Power,
  Settings,
  Share2,
  Smartphone,
  Sun,
  Terminal,
  TrendingUp,
  Wifi,
  Zap,
  Globe,
  Cpu,
  FileText,
  Calendar,
  User,
  X,
  BookOpen,
  Home,
  Box,
  DollarSign,
  Briefcase,
  Palette,
  Code,
  Rocket,
  Sparkles,
  Star,
  Quote
} from "lucide-react";

type WindowState = "maximized" | "minimized" | "closed" | "normal";
type Theme = "light" | "dark";

type Category = {
  name: string;
  count: string;
  size: string;
  images: string[];
  projects: Project[];
};

type FileItem = {
  name: string;
  src: string | null;
  type: "image" | "document";
  client: string;
  scope: string;
  year: string;
  impact: string;
  meta: string;
  url?: string;
};

type Project = {
  name: string;
  url: string;
  image: string;
  scope: string;
  year: string;
  impact: string;
  meta: string;
  tags: string[];
};

const liveCategories: Category[] = [
  {
    name: "Campus & Marketplaces",
    count: "03",
    size: "+245% Growth",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.kampus.fun/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://shaadiverse.app/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.grogate.com/"
    ],
    projects: [
      {
        name: "Kampus",
        url: "https://www.kampus.fun/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.kampus.fun/",
        scope: "Student marketplace hub",
        year: "2025",
        impact: "250+ verified users",
        meta: "UF student marketplace for textbooks, rides, housing, and events with verified .edu users.",
        tags: ["Campus", "Marketplace", "Live"]
      },
      {
        name: "ShaadiVerse",
        url: "https://shaadiverse.app/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://shaadiverse.app/",
        scope: "Wedding vendor marketplace",
        year: "2025",
        impact: "10k+ verified vendors",
        meta: "Tier-2/3 India focus with transparent pricing and escrow protection.",
        tags: ["Marketplace", "Services", "Live"]
      },
      {
        name: "Grogate",
        url: "https://www.grogate.com/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.grogate.com/",
        scope: "Fresh produce to gated communities",
        year: "2025",
        impact: "Pilot waitlist",
        meta: "12-24h harvest-to-delivery, zero-waste model, traceable supply for communities.",
        tags: ["Agri", "Fresh Produce", "Coming Soon"]
      }
    ]
  },
  {
    name: "Commerce & Ops OS",
    count: "03",
    size: "$2.4M Revenue",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.menuos.app/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.homevisor.co/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.staylinq.co/"
    ],
    projects: [
      {
        name: "MenuOS",
        url: "https://www.menuos.app/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.menuos.app/",
        scope: "Restaurant operating system",
        year: "2025",
        impact: "10+ restaurants",
        meta: "QR ordering, captain app, KDS, and analytics—live in under 24 hours.",
        tags: ["Restaurant", "SaaS", "Live"]
      },
      {
        name: "Homevisor",
        url: "https://www.homevisor.co/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.homevisor.co/",
        scope: "Home maintenance OS",
        year: "2025",
        impact: "Waitlist live",
        meta: "Proactive home management with lifecycle tracking and sinking-fund planning.",
        tags: ["Home", "Maintenance", "Live"]
      },
      {
        name: "StayLinq",
        url: "https://www.staylinq.co/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.staylinq.co/",
        scope: "Vacation rental OS",
        year: "2025",
        impact: "Coming soon",
        meta: "Ops + guest experience for vacation rentals with automation and guest portal.",
        tags: ["Hospitality", "SaaS", "Coming Soon"]
      }
    ]
  },
  {
    name: "Product & Growth",
    count: "03",
    size: "+180% Growth",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://productjoy.co/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.distrohq.xyz/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.layr.plus/"
    ],
    projects: [
      {
        name: "ProductJoy",
        url: "https://productjoy.co/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://productjoy.co/",
        scope: "Design & engineering studio",
        year: "2025",
        impact: "Active client work",
        meta: "Strategic design and engineering studio delivering product, identity, WebGL, and growth.",
        tags: ["Design Agency", "Creative", "Live"]
      },
      {
        name: "DistroHQ",
        url: "https://www.distrohq.xyz/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.distrohq.xyz/",
        scope: "Content operations studio",
        year: "2025",
        impact: "Multi-M views case studies",
        meta: "Algorithm-optimized video, carousels, demos, and distribution for growth teams.",
        tags: ["Content", "Production", "Live"]
      },
      {
        name: "Layr",
        url: "https://www.layr.plus/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.layr.plus/",
        scope: "End-to-end builder suite",
        year: "2025",
        impact: "50k+ creators (claimed)",
        meta: "Concept-to-code platform with AI, design systems, export, and deploy.",
        tags: ["DevTools", "Design", "Coming Soon"]
      }
    ]
  },
  {
    name: "AI & Automation",
    count: "03",
    size: "98% Efficiency",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.workfloai.com/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.hackr.plus/",
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.bluebeetle.online/"
    ],
    projects: [
      {
        name: "WorkfloAI",
        url: "https://www.workfloai.com/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.workfloai.com/",
        scope: "No-config AI agents",
        year: "2025",
        impact: "2.3k+ leads handled",
        meta: "Industry-specific agents for real estate, construction, and hospitality—deploy instantly.",
        tags: ["AI Agents", "Automation", "Live"]
      },
      {
        name: "Hackr",
        url: "https://www.hackr.plus/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.hackr.plus/",
        scope: "Hackathon OS",
        year: "2025",
        impact: "Coming soon",
        meta: "AI-powered host/judge/hire platform spanning the hackathon lifecycle.",
        tags: ["Events", "AI", "Coming Soon"]
      },
      {
        name: "BlueBeetle",
        url: "https://www.bluebeetle.online/",
        image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://www.bluebeetle.online/",
        scope: "AI trading intelligence",
        year: "2025",
        impact: "Coming soon",
        meta: "AI-driven finance/trading assistant (early-stage placeholder).",
        tags: ["AI", "Trading", "Coming Soon"]
      }
    ]
  },
  {
    name: "Decor & Events",
    count: "03",
    size: "+150% Growth",
    images: [
      "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg",
      "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg",
      "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg"
    ],
    projects: [
      {
        name: "Elegant Wedding",
        url: "https://www.elegantwedding.ca/",
        image: "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg",
        scope: "Wedding decoration & events",
        year: "2025",
        impact: "Premium events delivered",
        meta: "Outdoor wedding decoration and elegant event design services.",
        tags: ["Events", "Decor", "Live"]
      },
      {
        name: "Event Design Studio",
        url: "#",
        image: "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg",
        scope: "Premium event decoration",
        year: "2025",
        impact: "Active projects",
        meta: "Custom event decoration and design services for special occasions.",
        tags: ["Events", "Design", "Live"]
      },
      {
        name: "Decorative Solutions",
        url: "#",
        image: "https://www.elegantwedding.ca/wp-content/uploads/2017/09/elegant-wedding-26-outdoor-wedding-decoration-ideas-featured-1.jpg",
        scope: "Interior & event decor",
        year: "2025",
        impact: "Coming soon",
        meta: "Comprehensive decoration services for events and spaces.",
        tags: ["Decor", "Interior", "Coming Soon"]
      }
    ]
  }
];

const useOnScreen = (
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
};

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

const useImagePreloader = (imageUrls: string[], enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled || imageUrls.length === 0) return;

    // Preload images with a small delay to avoid blocking initial render
    const timeoutId = setTimeout(() => {
      imageUrls.forEach((url) => {
        preloadImage(url).catch(() => {
          // Silently fail - image will load normally when needed
        });
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [imageUrls, enabled]);
};

const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

const useCountUp = (end: number, duration: number = 2000, startOnVisible: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnVisible);
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  useEffect(() => {
    if (startOnVisible && visible && !hasStarted) {
      setHasStarted(true);
    }

    if (!hasStarted) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (end - startValue) * easeOut);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasStarted, visible, startOnVisible]);

  return [ref, count] as const;
};

const WordReveal = ({
  text,
  delay = 0,
  className = ""
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const [ref, visible] = useOnScreen({ threshold: 0.01 });
  const [forceVisible, setForceVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = visible || forceVisible;

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.25em] ${className}`} style={className.includes('text-transparent') ? { WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : undefined}>
      {words.map((word, i) => (
        <span
          key={word + i}
          className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] inline-block ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-sm"
          }`}
          style={{ transitionDelay: `${delay + i * 40}ms` }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const FadeIn = ({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const GlassCard = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
    relative rounded-[24px] overflow-hidden ${className}
    bg-white/60 dark:bg-[#141414]/60 
    backdrop-blur-xl 
    border border-black/[0.04] dark:border-white/[0.06] 
    shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
  `}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/[0.02] dark:to-transparent pointer-events-none" />
    {children}
  </div>
);

const TrafficLights = ({
  onClose,
  onMinimize,
  onMaximize
}: {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}) => (
  <div className="flex gap-2 group">
    <button
      onClick={onClose}
      className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/50 shadow-inner flex items-center justify-center hover:bg-[#FF5F57]/80 transition-colors group/btn"
    >
      <X className="w-2 h-2 text-black/50 opacity-0 group-hover/btn:opacity-100" />
    </button>
    <button
      onClick={onMinimize}
      className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]/50 shadow-inner flex items-center justify-center hover:bg-[#FEBC2E]/80 transition-colors group/btn"
    >
      <Minus className="w-2 h-2 text-black/50 opacity-0 group-hover/btn:opacity-100" />
    </button>
    <button
      onClick={onMaximize}
      className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/50 shadow-inner flex items-center justify-center hover:bg-[#28C840]/80 transition-colors group/btn"
    >
      <Maximize2 className="w-2 h-2 text-black/50 opacity-0 group-hover/btn:opacity-100" />
    </button>
  </div>
);

const WindowFrame = ({
  children,
  className = "",
  windowState,
  setWindowState,
  url = "liftoff.design",
  showLoadingBar = false
}: {
  children: React.ReactNode;
  className?: string;
  windowState: WindowState;
  setWindowState: (state: WindowState) => void;
  url?: string;
  showLoadingBar?: boolean;
}) => {
  const isMaximized = windowState === "maximized";
  const isMinimized = windowState === "minimized";
  const isClosed = windowState === "closed";

  if (isClosed) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center border border-black/5 dark:border-white/5 rounded-[32px] bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="text-zinc-400 dark:text-zinc-500 mb-4 font-mono text-sm">
          SYSTEM_HALTED
        </div>
        <button
          onClick={() => setWindowState("normal")}
          className="px-6 py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-zinc-900 dark:text-white rounded-full text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Power className="w-4 h-4" />
          Reboot System
        </button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="h-[100px] flex items-center justify-center">
        <button
          onClick={() => setWindowState("normal")}
          className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center border border-black/10 dark:border-white/10">
            <Maximize2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono">Restore Window</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`
      relative flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
      ${
        isMaximized
          ? "fixed inset-0 z-[100] rounded-none bg-white dark:bg-[#0f0f0f]"
          : `w-full rounded-[20px] md:rounded-[32px] shadow-[0_48px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_48px_100px_-20px_rgba(0,0,0,0.7)] ring-1 ring-black/5 dark:ring-white/10 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-2xl ${className}`
      }
    `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/[0.03] dark:to-white/[0.01] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="h-12 min-h-[48px] border-b border-black/5 dark:border-white/[0.06] flex items-center justify-between px-4 md:px-6 z-50 select-none backdrop-blur-xl relative shrink-0">
        <div className="flex items-center gap-4 w-1/3">
          <TrafficLights
            onClose={() => setWindowState("closed")}
            onMinimize={() => setWindowState("minimized")}
            onMaximize={() => setWindowState(isMaximized ? "normal" : "maximized")}
          />
        </div>

        <div className="w-1/3 flex justify-center">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-black/20 rounded-lg border border-black/5 dark:border-white/5 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono shadow-inner w-full max-w-[340px] justify-center cursor-default group hover:bg-black/10 dark:hover:bg-black/30 transition-colors">
            <Lock className="w-3 h-3 text-zinc-400" />
            <span className="group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors truncate">
              {url}
            </span>
          </div>
          <div className="md:hidden text-zinc-500 font-bold tracking-widest text-[10px]">
            LIFTOFF™
          </div>
        </div>

        <div className="w-1/3 flex justify-end gap-2">
          {isMaximized && (
            <button
              onClick={() => setWindowState("normal")}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Restore window"
            >
              <Minus className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            </button>
          )}
        </div>

        {showLoadingBar && (
          <div className="absolute bottom-0 left-0 h-[2px] bg-blue-500 z-50 animate-loading-bar shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        )}
      </div>

      <div className="relative z-10 flex-1 overflow-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

const SettingsWindow = ({
  onClose,
  theme,
  setTheme
}: {
  onClose: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) => (
  <div className="fixed inset-0 z-[300] flex items-center justify-center px-4 pointer-events-none">
    <div className="absolute inset-0 pointer-events-auto" onClick={onClose} />

    <div
      className={`
        relative w-full max-w-sm bg-white dark:bg-[#141414] rounded-2xl border border-black/5 dark:border-white/10 
        shadow-2xl shadow-black/20 dark:shadow-black/50 pointer-events-auto overflow-hidden transition-all duration-200
      `}
    >
      <div className="h-10 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-4 bg-black/[0.02] dark:bg-white/[0.02]">
        <span className="text-xs font-medium text-zinc-500">System Preferences</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded"
          aria-label="Close settings"
        >
          <X className="w-3.5 h-3.5 text-zinc-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-1">
            Appearance
          </h3>
          <p className="text-xs text-zinc-500">
            Select your preferred system theme.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
              theme === "light"
                ? "bg-blue-50 border-blue-500/50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                : "border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500"
            }`}
          >
            <Sun className="w-5 h-5" />
            <span className="text-[10px] font-medium">Light</span>
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
              theme === "dark"
                ? "bg-blue-50 border-blue-500/50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                : "border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-zinc-500"
            }`}
          >
            <Moon className="w-5 h-5" />
            <span className="text-[10px] font-medium">Dark</span>
          </button>

          <button className="p-3 rounded-xl border border-black/5 dark:border-white/10 opacity-50 cursor-not-allowed flex flex-col items-center gap-2 text-zinc-400">
            <Settings className="w-5 h-5" />
            <span className="text-[10px] font-medium">Auto</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const FilePreviewWindow = ({
  file,
  onClose
}: {
  file: FileItem;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className="absolute inset-0 z-[250] flex items-center justify-center px-4 md:px-8 py-8 pointer-events-none">
      <div
        className={`absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        } pointer-events-auto`}
        onClick={handleClose}
      />

      <div
        className={`
        relative w-full max-w-5xl h-[80vh] bg-[#FAFAFA] dark:bg-[#141414] rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] flex overflow-hidden pointer-events-auto
        transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform
        ${isClosing ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"}
      `}
      >
        <div className="flex-1 bg-white dark:bg-[#0A0A0A] relative flex items-center justify-center p-8 border-r border-black/5 dark:border-white/5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />

          <div className="relative w-full h-full max-w-4xl max-h-[70vh] shadow-2xl rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
            {file.type === "image" && file.src ? (
              <img
                src={file.src}
                alt={file.name}
                className="w-full h-full object-contain bg-zinc-50 dark:bg-[#111]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-[#111] text-zinc-400 dark:text-zinc-500">
                <FileText className="w-24 h-24 mb-4 opacity-50" />
                <span className="font-mono text-sm">DOCUMENT_PREVIEW_MODE</span>
              </div>
            )}
          </div>
        </div>

        <div className="w-80 bg-[#FAFAFA] dark:bg-[#141414] flex flex-col">
          <div className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Project Details
            </span>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close preview"
            >
              <X className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div>
              <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center border border-blue-100 dark:border-blue-500/20 mb-4">
                {file.type === "image" ? (
                  <ImageIcon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                ) : (
                  <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                )}
              </div>
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-1 leading-snug break-words">
                {file.name}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{file.meta}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm py-2 border-b border-black/5 dark:border-white/5">
                <span className="text-zinc-500 flex items-center gap-2">
                  <User className="w-3.5 h-3.5" /> Client
                </span>
                <span className="text-zinc-800 dark:text-zinc-300 font-medium text-xs">
                  {file.client}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-black/5 dark:border-white/5">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> Scope
                </span>
                <span className="text-zinc-800 dark:text-zinc-300 font-medium text-xs">
                  {file.scope}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-black/5 dark:border-white/5">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> Year
                </span>
                <span className="text-zinc-800 dark:text-zinc-300 font-mono text-xs">
                  {file.year}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-black/5 dark:border-white/5">
                <span className="text-zinc-500 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5" /> Outcome
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">
                  {file.impact}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={file.url || "#"}
                target={file.url ? "_blank" : undefined}
                rel={file.url ? "noopener noreferrer" : undefined}
                className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-lg shadow-black/5 dark:shadow-white/5"
              >
                View Case Study <ArrowRight className="w-4 h-4" />
              </a>
              <button className="w-full py-3 mt-3 bg-white border border-black/10 dark:bg-white/5 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl font-medium text-sm hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
                Download Assets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to map project tags to service categories
const getServicesFromTags = (tags: string[]): string[] => {
  const serviceMap: { [key: string]: string } = {
    "Design Agency": "Brand",
    "Creative": "Brand",
    "UI/UX": "Product Design",
    "Design Systems": "Product Design",
    "Prototyping": "Product Design",
    "User Research": "Product Design",
    "Web Development": "Web Development",
    "SaaS": "Web Development",
    "DevTools": "Web Development",
    "Growth": "Growth & Marketing",
    "Content": "Growth & Marketing",
    "Production": "Growth & Marketing",
    "Marketing": "Growth & Marketing"
  };

  const services = new Set<string>();
  tags.forEach((tag) => {
    if (serviceMap[tag]) {
      services.add(serviceMap[tag]);
    }
  });

  // Default to "Product Design" if no services found
  if (services.size === 0) {
    services.add("Product Design");
  }

  return Array.from(services);
};

// Helper function to determine industry/type from scope or tags
const getIndustryType = (scope: string, tags: string[]): string => {
  const industryMap: { [key: string]: string } = {
    "marketplace": "Marketplace",
    "restaurant": "B2B SaaS",
    "operating system": "B2B SaaS",
    "OS": "B2B SaaS",
    "fintech": "Fintech Startup",
    "finance": "Fintech Startup",
    "payments": "Fintech Startup",
    "design agency": "Creative Agency",
    "studio": "Creative Agency",
    "content": "Content Studio",
    "growth": "Growth Studio",
    "education": "EdTech",
    "campus": "EdTech",
    "student": "EdTech",
    "ai": "AI Platform",
    "automation": "AI Platform",
    "agents": "AI Platform"
  };

  const lowerScope = scope.toLowerCase();
  const lowerTags = tags.map((t) => t.toLowerCase()).join(" ");

  for (const [key, value] of Object.entries(industryMap)) {
    if (lowerScope.includes(key) || lowerTags.includes(key)) {
      return value;
    }
  }

  return "Digital Product";
};

// Helper function to format impact as proof point
const formatProofPoint = (impact: string): string => {
  if (impact.toLowerCase().includes("coming soon")) {
    return "→ Launching soon";
  }
  if (impact.includes("→")) {
    return impact;
  }
  return `→ ${impact}`;
};

// Branded placeholder component for missing images
const ProjectPlaceholder = ({ name, tags }: { name: string; tags: string[] }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "from-zinc-300/20 to-zinc-400/20",
    "from-zinc-200/20 to-zinc-300/20",
    "from-zinc-400/20 to-zinc-500/20",
    "from-zinc-300/20 to-zinc-500/20"
  ];
  const colorIndex = name.length % colors.length;

  return (
    <div className={`w-full h-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
      <div className="relative z-10 text-center px-4">
        <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">{initials}</div>
        <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">{name}</div>
      </div>
    </div>
  );
};

const FolderWindow = ({
  category,
  onClose
}: {
  category: Category;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const prefersReducedMotion = useReducedMotion();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  // Preload all project images when folder opens
  const projectImages = category.projects.map((p) => p.image);
  useImagePreloader(projectImages, !isClosing);

  const projectCount = category.projects.length;

  // Handle image load errors
  const handleImageError = (projectName: string) => {
    setImageErrors((prev) => ({ ...prev, [projectName]: true }));
  };

  // Empty state
  if (projectCount === 0) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 pointer-events-none">
        <div
          className={`absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          } pointer-events-auto`}
          onClick={handleClose}
        />

        <div
          className={`
          relative w-full max-w-2xl bg-[#FAFAFA]/90 dark:bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden pointer-events-auto
          ${prefersReducedMotion ? "transition-opacity duration-150" : "transition-all duration-150 ease-out transform origin-center"}
          ${isClosing ? (prefersReducedMotion ? "opacity-0" : "scale-[0.97] opacity-0") : (prefersReducedMotion ? "opacity-100" : "scale-100 opacity-100")}
        `}
        >
          <div className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 relative z-10">
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              {category.name}
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            </button>
          </div>

          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 mx-auto mb-6 flex items-center justify-center border border-zinc-200 dark:border-zinc-700/50">
              <Sparkles className="w-8 h-8 text-zinc-700 dark:text-zinc-300" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              We're cooking up new {category.name} projects
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Check out our other work or get in touch to be featured here.
            </p>
            <a
              href="#contact"
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-medium text-sm hover:scale-105 active:scale-95 transition-transform"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 pointer-events-none">
      {selectedFile && (
        <FilePreviewWindow file={selectedFile} onClose={() => setSelectedFile(null)} />
      )}

      <div
        className={`absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        } pointer-events-auto`}
        onClick={handleClose}
      />

      <div
        className={`
        relative w-full max-w-6xl h-[85vh] md:h-[80vh] bg-[#FAFAFA]/90 dark:bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden pointer-events-auto
        ${prefersReducedMotion ? "transition-opacity duration-150" : "transition-all duration-150 ease-out transform origin-center"}
        ${isClosing ? (prefersReducedMotion ? "opacity-0" : "scale-[0.97] opacity-0") : (prefersReducedMotion ? "opacity-100" : "scale-100 opacity-100")}
      `}
      >
        {/* Header */}
        <div className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-white/[0.02] relative z-10">
          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">
              {category.name}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              ({projectCount} {projectCount === 1 ? "project" : "projects"})
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white dark:bg-zinc-800 rounded-lg p-1 border border-black/5 dark:border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar relative z-10">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, i) => {
                const hasImageError = imageErrors[project.name];
                const services = getServicesFromTags(project.tags);
                const industry = getIndustryType(project.scope, project.tags);
                const proofPoint = formatProofPoint(project.impact);

                return (
                  <div
                    key={project.name}
                    className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:ring-offset-2 rounded-xl"
                    style={
                      !prefersReducedMotion
                        ? {
                            animation: `fadeIn 0.3s ease-out ${i * 0.03}s forwards`,
                            opacity: 0
                          }
                        : undefined
                    }
                    onClick={() =>
                      setSelectedFile({
                        name: project.name,
                        src: project.image,
                        type: "image",
                        client: project.name,
                        scope: project.scope,
                        year: project.year,
                        impact: project.impact,
                        meta: project.meta,
                        url: project.url
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedFile({
                          name: project.name,
                          src: project.image,
                          type: "image",
                          client: project.name,
                          scope: project.scope,
                          year: project.year,
                          impact: project.impact,
                          meta: project.meta,
                          url: project.url
                        });
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${project.name} case study`}
                  >
                    <div
                      className={`bg-white dark:bg-zinc-800 rounded-xl border border-black/5 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl ${
                        prefersReducedMotion
                          ? "transition-shadow duration-150"
                          : "transition-all duration-150 ease-out transform hover:-translate-y-1"
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                        {hasImageError ? (
                          <ProjectPlaceholder name={project.name} tags={project.tags} />
                        ) : (
                          <>
                            <img
                              src={project.image}
                              alt={`${project.name} screenshot`}
                              className="w-full h-full object-cover transition-opacity duration-150"
                              loading={i < 6 ? "eager" : "lazy"}
                              decoding="async"
                              onError={() => handleImageError(project.name)}
                            />
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-end p-4"
                            >
                              <span className="text-white text-sm font-medium flex items-center gap-2">
                                View Case Study <ArrowRight className="w-4 h-4" />
                              </span>
                            </a>
                          </>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                          {project.name}
                        </h3>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                          {industry}
                        </div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                          {proofPoint}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700/50 text-xs text-zinc-700 dark:text-zinc-300 font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {category.projects.map((project, i) => {
                const hasImageError = imageErrors[project.name];
                const services = getServicesFromTags(project.tags);
                const industry = getIndustryType(project.scope, project.tags);
                const proofPoint = formatProofPoint(project.impact);

                return (
                  <div
                    key={project.name}
                    className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 focus:ring-offset-2 rounded-xl"
                    style={
                      !prefersReducedMotion
                        ? {
                            animation: `fadeIn 0.3s ease-out ${i * 0.03}s forwards`,
                            opacity: 0
                          }
                        : undefined
                    }
                    onClick={() =>
                      setSelectedFile({
                        name: project.name,
                        src: project.image,
                        type: "image",
                        client: project.name,
                        scope: project.scope,
                        year: project.year,
                        impact: project.impact,
                        meta: project.meta,
                        url: project.url
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedFile({
                          name: project.name,
                          src: project.image,
                          type: "image",
                          client: project.name,
                          scope: project.scope,
                          year: project.year,
                          impact: project.impact,
                          meta: project.meta,
                          url: project.url
                        });
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${project.name} case study`}
                  >
                    <div
                      className={`bg-white dark:bg-zinc-800 rounded-xl border border-black/5 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl ${
                        prefersReducedMotion ? "transition-shadow duration-150" : "transition-all duration-150 ease-out"
                      } flex`}
                    >
                      <div className="w-32 md:w-40 aspect-square relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0">
                        {hasImageError ? (
                          <ProjectPlaceholder name={project.name} tags={project.tags} />
                        ) : (
                          <img
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            className="w-full h-full object-cover"
                            loading={i < 3 ? "eager" : "lazy"}
                            decoding="async"
                            onError={() => handleImageError(project.name)}
                          />
                        )}
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                            {project.name}
                          </h3>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                            {industry}
                          </div>
                          <div className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                            {proofPoint}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {services.slice(0, 3).map((service) => (
                            <span
                              key={service}
                              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700/50 text-xs text-zinc-700 dark:text-zinc-300 font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="h-14 border-t border-black/5 dark:border-white/5 flex items-center justify-between px-6 bg-white/[0.02] relative z-10">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {projectCount} {projectCount === 1 ? "project" : "projects"} in {category.name}
          </div>
          <a
            href="#contact"
            onClick={handleClose}
            className="text-sm font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors flex items-center gap-2 group"
          >
            Want results like these? Start a project{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const FolderStack = ({
  category,
  delay,
  onClick
}: {
  category: Category;
  delay: number;
  onClick: () => void;
}) => {
  const CategoryIcon =
    {
      FinTech: CreditCard,
      "E-Commerce": ShoppingBag,
      SaaS: Cloud,
      Consumer: Smartphone
    }[category.name] || Folder;

  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  
  // Preload folder images when they come into view
  useImagePreloader(category.images, visible);

  return (
    <FadeIn delay={delay}>
      <div ref={ref} onClick={onClick} className="group relative w-full h-[450px] cursor-pointer perspective-1000">
        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500">
          <div
            className="absolute w-[80%] aspect-[3/4] bg-zinc-200 dark:bg-zinc-800 rounded-2xl border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500 ease-out transform
            translate-y-4 scale-90 rotate-6 opacity-60
            group-hover:translate-x-32 group-hover:rotate-12 group-hover:opacity-100 group-hover:scale-95 z-0"
          >
            <img
              src={category.images[2]}
              alt="Project"
              className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div
            className="absolute w-[80%] aspect-[3/4] bg-zinc-200 dark:bg-zinc-800 rounded-2xl border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500 ease-out transform
            translate-y-2 scale-95 -rotate-3 opacity-80
            group-hover:-translate-x-32 group-hover:-rotate-12 group-hover:opacity-100 group-hover:scale-95 z-10"
          >
            <img
              src={category.images[1]}
              alt="Project"
              className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div
            className="absolute w-[80%] aspect-[3/4] bg-white dark:bg-[#1A1A1A] rounded-2xl border border-black/5 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out transform
            group-hover:-translate-y-4 z-20 overflow-hidden flex flex-col justify-between p-8"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] dark:opacity-[0.03] pointer-events-none transform -rotate-12 scale-125">
              <CategoryIcon strokeWidth={0.5} size={300} className="text-zinc-900 dark:text-white" />
            </div>

            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                <Folder className="w-6 h-6 text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
              </div>
              <div className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border border-black/5 dark:border-white/5">
                {category.count} FILES
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                {category.name}
              </h3>
              <div className="space-y-2">
                <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-600 w-2/3 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  <span>SIZE</span>
                  <span>{category.size}</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/40 dark:bg-black/40 backdrop-blur-sm z-30">
              <div className="px-4 py-2 bg-white dark:bg-white/10 rounded-full border border-black/5 dark:border-white/20 text-xs font-medium text-zinc-900 dark:text-white flex items-center gap-2 shadow-lg">
                Click to Open <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [typedUrl, setTypedUrl] = useState("");
  const targetUrl = "liftoff.design";
  const [stage, setStage] = useState<"window-open" | "typing" | "loading" | "fade-out">(
    "window-open"
  );

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStage("typing");
    }, 800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (stage === "typing") {
      if (typedUrl.length < targetUrl.length) {
        const timeout = setTimeout(() => {
          setTypedUrl(targetUrl.slice(0, typedUrl.length + 1));
        }, 50 + Math.random() * 50);
        return () => clearTimeout(timeout);
      }
      setTimeout(() => setStage("loading"), 300);
    }
  }, [stage, typedUrl, targetUrl]);

  useEffect(() => {
    if (stage === "loading") {
      setTimeout(() => {
        setStage("fade-out");
        setTimeout(onComplete, 800);
      }, 1500);
    }
  }, [stage, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center transition-opacity duration-700 bg-[#F2F2F2] dark:bg-[#050505] ${
        stage === "fade-out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`
        w-full max-w-7xl px-4 md:px-12 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        ${stage === "window-open" ? "scale-90 opacity-0 translate-y-12" : "scale-100 opacity-100 translate-y-0"}
      `}
      >
        <WindowFrame
          windowState="maximized"
          setWindowState={() => {}}
          url={typedUrl}
          showLoadingBar={stage === "loading"}
          className="h-[75vh]"
        >
          <div className="flex items-center justify-center h-full bg-white/50 dark:bg-black/5" />
        </WindowFrame>
      </div>
    </div>
  );
};

const Hero = ({
  windowState,
  setWindowState
}: {
  windowState: WindowState;
  setWindowState: (state: WindowState) => void;
}) => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-[120px] overflow-hidden"
  >
    {/* Clean background with subtle gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-white to-[#F5F5F3] dark:from-[#0A0A0A] dark:via-[#050505] dark:to-[#0A0A0A]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.015),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.008),transparent_70%)]" />

    {/* Subtle floating testimonial cards - reduced prominence */}
    <div className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-72 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-xl border border-black/5 dark:border-white/5 shadow-lg p-5 -rotate-2 opacity-60 hover:opacity-90 transition-opacity hidden xl:block">
      <Quote className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mb-2" />
      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
        "LIFTOFF transformed our vision into a product that exceeded expectations."
      </p>
      <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium">
        — CEO, Grogate
      </p>
    </div>

    <div className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-72 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-xl border border-black/5 dark:border-white/5 shadow-lg p-5 rotate-2 opacity-60 hover:opacity-90 transition-opacity hidden xl:block">
      <Quote className="w-5 h-5 text-zinc-400 dark:text-zinc-500 mb-2" />
      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
        "Working with LIFTOFF was seamless. They delivered a world-class product."
      </p>
      <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium">
        — Founder, Homevisor
      </p>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
      {/* Urgency Banner */}
      <FadeIn delay={0}>
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full border border-black/5 dark:border-white/5 shadow-sm mb-10 md:mb-12">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
            Only 2 open slots available!
          </span>
          <ArrowRight className="w-3 h-3 text-zinc-500 flex-shrink-0" />
        </div>
      </FadeIn>

      {/* Main Headline */}
      <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-bold mb-8 leading-[1.15] tracking-[-0.02em] text-center">
        <FadeIn delay={200}>
          <div className="block mb-3 md:mb-4">
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
              World-Class Product Studio
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="block hidden md:block">
            <span className="bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 dark:from-zinc-300 dark:via-zinc-200 dark:to-zinc-300 bg-clip-text text-transparent">
              Engineering Your Success
            </span>
          </div>
        </FadeIn>
      </h1>

      {/* Description */}
      <FadeIn delay={600}>
        <p className="text-[18px] md:text-[20px] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Trusted by startups and enterprises to design, build, and scale products that perform globally.
        </p>
      </FadeIn>

      {/* CTA Button */}
      <FadeIn delay={800}>
        <a 
          href="https://calendly.com/5ha5hank/availability" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-16 px-12 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-base hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3 group mx-auto mb-10 inline-flex justify-center"
        >
          Start a Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </FadeIn>

      {/* Trust Indicators */}
      <FadeIn delay={1000}>
        <div className="flex items-center justify-center gap-4">
          {/* Avatar circles */}
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-zinc-300"
              >
                {i === 1 ? "TH" : i === 2 ? "JD" : "SM"}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-zinc-900 dark:text-white">4.8</span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">From 30+ reviews</span>
        </div>
      </FadeIn>
    </div>
  </section>
);

const StatCard = ({
  label,
  value,
  icon: Icon,
  delay
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  delay: number;
}) => {
  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [ref, count] = useCountUp(numericValue, 2000, true);

  const formatValue = () => {
    if (value.includes("$")) {
      if (value.includes("M")) {
        return `$${count}M${suffix.replace("$", "").replace("M", "")}`;
      }
      return `$${count}${suffix.replace("$", "")}`;
    }
    return `${count}${suffix}`;
  };

  return (
    <FadeIn delay={delay}>
      <div ref={ref}>
        <GlassCard className="p-8 h-full min-h-[240px] flex flex-col justify-between hover:bg-white/90 dark:hover:bg-white/[0.05] group cursor-default relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-200/50 dark:hover:border-zinc-700/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-300/20 dark:bg-zinc-600/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-zinc-300/30 dark:group-hover:bg-zinc-600/15 group-hover:scale-110 transition-all duration-500" />

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-200/80 dark:group-hover:bg-zinc-700/70 transition-all duration-300">
                <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                {label}
              </div>
            </div>

            <div className="text-5xl md:text-6xl font-medium tracking-tighter text-zinc-700 dark:text-zinc-300 group-hover:scale-105 transition-transform duration-300 origin-bottom-left">
              {formatValue()}
            </div>
          </div>
        </GlassCard>
      </div>
    </FadeIn>
  );
};

const Widgets = () => (
  <section className="px-4 md:px-8 pb-12 max-w-[1600px] mx-auto mt-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        label="Products Built"
        value="50+"
        icon={Box}
        delay={200}
      />
      <StatCard
        label="Client Funding"
        value="$25M+"
        icon={DollarSign}
        delay={300}
      />
      <StatCard
        label="Total VC investments in our clients"
        value="10+"
        icon={Briefcase}
        delay={400}
      />
    </div>
  </section>
);

const WorkSection = ({ onOpenFolder }: { onOpenFolder: (category: Category) => void }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  
  // Preload all folder images when section comes into view
  const allFolderImages = liveCategories.flatMap((cat) => cat.images);
  useImagePreloader(allFolderImages, visible);

  return (
    <section ref={ref} id="work" className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto overflow-hidden">
      <FadeIn className="mb-16 flex items-end justify-between px-2">
        <div>
          <h2 className="text-[22px] md:text-[28px] font-semibold text-zinc-900 dark:text-white flex items-center gap-3">
            Project Archives <span className="text-zinc-400 dark:text-zinc-600 font-light">/</span>{" "}
            <span className="text-zinc-400 dark:text-zinc-600 text-xl font-mono">projects.md</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {liveCategories.map((category, i) => (
          <FolderStack
            key={category.name}
            category={category}
            delay={i * 100}
            onClick={() => onOpenFolder(category)}
          />
        ))}
      </div>
    </section>
  );
};

// SVG Animation Components
const ProductDesignAnimation = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    style={{ willChange: 'transform' }}
  >
    <style>
      {`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes drawPath {
          0% { stroke-dashoffset: 100; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes selectElement {
          0% { opacity: 0; transform: scale(0.9); stroke-dasharray: 0; }
          20% { opacity: 1; transform: scale(1); }
          40% { stroke-dasharray: 4 2; }
          60% { stroke-dasharray: 4 2; }
          100% { opacity: 1; transform: scale(1); stroke-dasharray: 4 2; }
        }
        @keyframes moveElement {
          0% { transform: translate(0, 0); }
          50% { transform: translate(15px, -10px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes resizeHandle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes cursorMove {
          0% { transform: translate(45px, 55px); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(85px, 55px); }
          50% { transform: translate(85px, 75px); }
          70% { transform: translate(120px, 75px); }
          90% { opacity: 1; }
          100% { transform: translate(120px, 95px); opacity: 0.8; }
        }
        @keyframes layerHighlight {
          0%, 100% { fill: rgb(255 16 240 / 0.1); }
          50% { fill: rgb(255 16 240 / 0.3); }
        }
        .fade-in {
          animation: fadeInScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .draw-path {
          stroke-dasharray: 100;
          animation: drawPath 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .select-element {
          animation: selectElement 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
        .move-element {
          animation: moveElement 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 2s;
        }
        .resize-handle {
          animation: resizeHandle 1.5s ease-in-out infinite;
          animation-delay: 2.5s;
        }
        .cursor {
          animation: cursorMove 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 1s;
        }
        .layer-highlight {
          animation: layerHighlight 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}
    </style>
    {/* Figma Canvas Background */}
    <rect
      x="0"
      y="0"
      width="200"
      height="150"
      rx="6"
      fill="rgb(250 250 250)"
    />
    
    {/* Figma Top Toolbar */}
    <rect
      x="0"
      y="0"
      width="200"
      height="24"
      fill="rgb(255 255 255)"
      className="fade-in"
      style={{ animationDelay: "0s" }}
    />
    <rect
      x="0"
      y="24"
      width="200"
      height="1"
      fill="rgb(228 228 231 / 0.5)"
    />
    
    {/* Toolbar Icons */}
    <circle cx="12" cy="12" r="3" fill="rgb(113 113 122 / 0.3)" className="fade-in" style={{ animationDelay: "0.1s" }} />
    <rect x="20" y="9" width="12" height="6" rx="1" fill="rgb(113 113 122 / 0.3)" className="fade-in" style={{ animationDelay: "0.15s" }} />
    <rect x="36" y="9" width="8" height="6" rx="1" fill="rgb(113 113 122 / 0.3)" className="fade-in" style={{ animationDelay: "0.2s" }} />
    
    {/* Left Layers Panel */}
    <rect
      x="0"
      y="25"
      width="50"
      height="125"
      fill="rgb(255 255 255)"
      className="fade-in"
      style={{ animationDelay: "0.25s" }}
    />
    <rect
      x="50"
      y="25"
      width="1"
      height="125"
      fill="rgb(228 228 231 / 0.5)"
    />
    
    {/* Layer Items */}
    <rect x="8" y="35" width="34" height="8" rx="1" fill="rgb(113 113 122 / 0.15)" className="fade-in layer-highlight" style={{ animationDelay: "0.3s" }} />
    <rect x="8" y="47" width="28" height="8" rx="1" fill="rgb(113 113 122 / 0.1)" className="fade-in" style={{ animationDelay: "0.35s" }} />
    <rect x="8" y="59" width="32" height="8" rx="1" fill="rgb(113 113 122 / 0.1)" className="fade-in" style={{ animationDelay: "0.4s" }} />
    <rect x="8" y="71" width="24" height="8" rx="1" fill="rgb(113 113 122 / 0.1)" className="fade-in" style={{ animationDelay: "0.45s" }} />
    
    {/* Active Layer Indicator - using neon pink for highlight */}
    <rect x="4" y="35" width="2" height="8" rx="1" fill="#FF10F0" className="fade-in" style={{ animationDelay: "0.5s" }} />
    
    {/* Main Canvas Area */}
    <rect
      x="51"
      y="25"
      width="149"
      height="125"
      fill="rgb(250 250 250)"
      className="fade-in"
      style={{ animationDelay: "0.3s" }}
    />
    
    {/* Design Mockup - Card Component */}
    <g className="fade-in move-element" style={{ animationDelay: "0.6s" }}>
      {/* Card Container */}
      <rect
        x="65"
        y="45"
        width="80"
        height="60"
        rx="6"
        fill="rgb(255 255 255)"
        stroke="rgb(228 228 231)"
        strokeWidth="1"
        className="select-element"
        style={{ animationDelay: "1s" }}
      />
      
      {/* Card Header */}
      <rect
        x="70"
        y="50"
        width="70"
        height="12"
        rx="2"
        fill="rgb(113 113 122 / 0.2)"
      />
      
      {/* Card Content */}
      <rect
        x="70"
        y="68"
        width="50"
        height="8"
        rx="1"
        fill="rgb(113 113 122 / 0.15)"
      />
      <rect
        x="70"
        y="80"
        width="60"
        height="8"
        rx="1"
        fill="rgb(113 113 122 / 0.1)"
      />
      
      {/* Card Button - using neon pink for highlight */}
      <rect
        x="70"
        y="92"
        width="35"
        height="8"
        rx="4"
        fill="#FF10F0"
        className="select-element"
        style={{ animationDelay: "1.5s" }}
      />
      
      {/* Selection Handles - using neon pink for highlights */}
      <circle cx="65" cy="45" r="3" fill="#FF10F0" className="resize-handle" />
      <circle cx="145" cy="45" r="3" fill="#FF10F0" className="resize-handle" />
      <circle cx="65" cy="105" r="3" fill="#FF10F0" className="resize-handle" />
      <circle cx="145" cy="105" r="3" fill="#FF10F0" className="resize-handle" />
    </g>
    
    {/* Design Mockup - Button Component - using neon pink */}
    <g className="fade-in" style={{ animationDelay: "0.8s" }}>
      <rect
        x="155"
        y="50"
        width="35"
        height="20"
        rx="4"
        fill="#FF10F0"
        className="select-element"
        style={{ animationDelay: "2s" }}
      />
      <text
        x="172.5"
        y="63"
        textAnchor="middle"
        fontSize="8"
        fill="rgb(255 255 255)"
        fontFamily="system-ui"
        fontWeight="500"
      >
        Button
      </text>
    </g>
    
    {/* Design Mockup - Input Field */}
    <g className="fade-in" style={{ animationDelay: "1s" }}>
      <rect
        x="65"
        y="115"
        width="70"
        height="20"
        rx="4"
        fill="rgb(255 255 255)"
        stroke="rgb(228 228 231)"
        strokeWidth="1"
        className="select-element"
        style={{ animationDelay: "2.5s" }}
      />
      <rect
        x="70"
        y="120"
        width="40"
        height="6"
        rx="1"
        fill="rgb(113 113 122 / 0.2)"
      />
    </g>
    
    {/* Figma Cursor - using neon pink for highlight */}
    <g className="cursor">
      <defs>
        <filter id="cursorShadow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 45 55 L 45 65 L 50 62 L 45 59 Z"
        fill="#FF10F0"
        filter="url(#cursorShadow)"
      />
    </g>
    
    {/* Connection Lines (Design Flow) - using neon pink */}
    <line
      x1="105"
      y1="105"
      x2="105"
      y2="115"
      stroke="#FF10F0"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="3 3"
      className="draw-path"
      style={{ animationDelay: "3s" }}
    />
  </svg>
);

const BrandIdentityAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4">
    <svg
      viewBox="0 0 120 80"
      className="w-full h-full max-w-[180px]"
      xmlns="http://www.w3.org/2000/svg"
      style={{ willChange: 'transform' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <style>
        {`
          @keyframes morphLetter {
            0% { 
              font-weight: 100; 
              letter-spacing: -0.05em; 
              transform: scale(0.95);
            }
            25% { 
              font-weight: 400; 
              letter-spacing: 0em; 
              transform: scale(1);
            }
            50% { 
              font-weight: 700; 
              letter-spacing: 0.02em; 
              transform: scale(1.05);
            }
            75% { 
              font-weight: 900; 
              letter-spacing: 0.05em; 
              transform: scale(1);
            }
            100% { 
              font-weight: 100; 
              letter-spacing: -0.05em; 
              transform: scale(0.95);
            }
          }
          @keyframes rotateColor {
            0% { 
              fill: rgb(217 119 6 / 0.5); 
              transform: scale(1);
            }
            25% { 
              fill: rgb(245 158 11 / 0.6); 
              transform: scale(1.1);
            }
            50% { 
              fill: rgb(251 191 36 / 0.7); 
              transform: scale(1.15);
            }
            75% { 
              fill: rgb(245 158 11 / 0.6); 
              transform: scale(1.1);
            }
            100% { 
              fill: rgb(217 119 6 / 0.5); 
              transform: scale(1);
            }
          }
          @keyframes floatCircle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          .morph-text {
            animation: morphLetter 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            transform-origin: center;
          }
          .color-swatch {
            animation: rotateColor 5s cubic-bezier(0.4, 0, 0.2, 1) infinite, floatCircle 3s ease-in-out infinite;
            transform-origin: center;
          }
        `}
      </style>
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fontSize="42"
        fill="currentColor"
        className="morph-text"
        style={{
          color: "rgb(217 119 6 / 0.4)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          transformOrigin: "center"
        }}
      >
        Aa
      </text>
      <circle
        cx="85"
        cy="25"
        r="8"
        className="color-swatch"
        style={{ animationDelay: "0s" } as React.CSSProperties}
      />
      <circle
        cx="98"
        cy="25"
        r="8"
        className="color-swatch"
        style={{ animationDelay: "1.25s" } as React.CSSProperties}
      />
      <circle
        cx="85"
        cy="40"
        r="8"
        className="color-swatch"
        style={{ animationDelay: "2.5s" } as React.CSSProperties}
      />
      <circle
        cx="98"
        cy="40"
        r="8"
        className="color-swatch"
        style={{ animationDelay: "3.75s" } as React.CSSProperties}
      />
    </svg>
  </div>
);

const DevelopmentAnimation = () => (
  <svg
    viewBox="0 0 200 120"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    style={{ willChange: 'transform' }}
  >
    <style>
      {`
        @keyframes typeText {
          0% { width: 0; opacity: 0.8; }
          10% { opacity: 1; }
          90% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0.9; }
        }
        @keyframes blinkCursor {
          0%, 40% { opacity: 1; }
          41%, 49% { opacity: 0.2; }
          50%, 100% { opacity: 1; }
        }
        @keyframes fadeInCheck {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          15% { opacity: 1; transform: scale(1.2) rotate(0deg); }
          25% { transform: scale(1) rotate(0deg); }
          80% { opacity: 1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.8) rotate(180deg); }
        }
        @keyframes highlightSyntax {
          0%, 100% { fill: rgb(34 197 94 / 0.5); }
          50% { fill: rgb(22 163 74 / 0.7); }
        }
        @keyframes terminalGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .type-text {
          overflow: hidden;
          white-space: nowrap;
          animation: typeText 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .cursor-blink {
          animation: blinkCursor 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .syntax-highlight {
          animation: highlightSyntax 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .check-mark {
          animation: fadeInCheck 7s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          opacity: 0;
          transform-origin: center;
        }
        .terminal-glow {
          animation: terminalGlow 3s ease-in-out infinite;
        }
      `}
    </style>
    {/* Terminal background with subtle glow */}
    <rect
      x="10"
      y="10"
      width="180"
      height="100"
      rx="4"
      fill="rgb(9 9 11 / 0.85)"
      stroke="rgb(34 197 94 / 0.3)"
      strokeWidth="1.5"
      className="terminal-glow"
    />
    {/* Terminal header */}
    <rect
      x="10"
      y="10"
      width="180"
      height="20"
      rx="4"
      fill="rgb(39 39 42 / 0.95)"
    />
    <circle cx="20" cy="20" r="4.5" fill="rgb(113 113 122 / 0.5)" />
    <circle cx="32" cy="20" r="4.5" fill="rgb(113 113 122 / 0.5)" />
    <circle cx="44" cy="20" r="4.5" fill="rgb(113 113 122 / 0.5)" />
    {/* Code lines */}
    <text
      x="20"
      y="45"
      fontSize="10"
      fill="rgb(34 197 94 / 0.9)"
      fontFamily="monospace"
      className="type-text"
      style={{ animationDelay: "0s", animationDuration: "1.2s" } as React.CSSProperties}
    >
      const app = () =&gt; {"{"}
    </text>
    <text
      x="20"
      y="60"
      fontSize="10"
      fill="rgb(34 197 94 / 0.7)"
      fontFamily="monospace"
      className="type-text"
      style={{ animationDelay: "1.5s", animationDuration: "1.2s" } as React.CSSProperties}
    >
      &nbsp;&nbsp;return &lt;App /&gt;
    </text>
    <text
      x="20"
      y="75"
      fontSize="10"
      fill="rgb(34 197 94 / 0.7)"
      fontFamily="monospace"
      className="type-text"
      style={{ animationDelay: "3s", animationDuration: "0.8s" } as React.CSSProperties}
    >
      {"}"}
    </text>
    {/* Enhanced cursor with glow */}
    <rect
      x="20"
      y="85"
      width="8"
      height="12"
      fill="rgb(250 250 250 / 0.9)"
      className="cursor-blink"
      rx="1"
      style={{ animationDelay: "4.2s" } as React.CSSProperties}
    />
    {/* Success checkmark with enhanced animation */}
    <g className="check-mark" style={{ animationDelay: "4.8s" } as React.CSSProperties}>
      <defs>
        <filter id="checkGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="170"
        cy="70"
        r="14"
        fill="rgb(34 197 94 / 0.3)"
        filter="url(#checkGlow)"
      />
      <path
        d="M 164 70 L 168 74 L 176 66"
        stroke="rgb(34 197 94)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#checkGlow)"
      />
    </g>
  </svg>
);

const GrowthAnimation = () => (
  <svg
    viewBox="0 0 200 120"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    style={{ willChange: 'transform' }}
    preserveAspectRatio="xMidYMid meet"
  >
    <style>
      {`
        @keyframes growBar {
          0% { 
            height: 0; 
            opacity: 0.8;
            transform: scaleY(0);
          }
          10% { opacity: 1; }
          100% { 
            height: var(--target-height); 
            opacity: 1;
            transform: scaleY(1);
          }
        }
        @keyframes drawLine {
          0% { 
            stroke-dashoffset: 200; 
            opacity: 0;
          }
          10% { opacity: 1; }
          100% { 
            stroke-dashoffset: 0; 
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.7; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        @keyframes floatUp {
          0% { 
            transform: translateY(0) scale(0.8); 
            opacity: 0; 
          }
          15% { opacity: 1; }
          50% { transform: translateY(-20px) scale(1); }
          100% { 
            transform: translateY(-40px) scale(0.8); 
            opacity: 0; 
          }
        }
        @keyframes shimmer {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        .grow-bar {
          animation: growBar 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: bottom;
        }
        .draw-line {
          animation: drawLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .pulse-dot {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center;
        }
        .float-arrow {
          animation: floatUp 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center;
        }
        .shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}
    </style>
    {/* Chart background with subtle shimmer */}
    <rect
      x="20"
      y="20"
      width="160"
      height="75"
      rx="4"
      fill="rgb(250 250 250 / 0.6)"
      stroke="rgb(113 113 122 / 0.15)"
      strokeWidth="1.5"
      className="shimmer"
    />
    {/* Grid lines */}
    <line
      x1="20"
      y1="60"
      x2="180"
      y2="60"
      stroke="rgb(113 113 122 / 0.1)"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
    <line
      x1="20"
      y1="40"
      x2="180"
      y2="40"
      stroke="rgb(113 113 122 / 0.1)"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
    {/* Bars with enhanced styling - fixed boundaries */}
    <rect
      x="40"
      y="85"
      width="18"
      height="0"
      fill="rgb(113 113 122 / 0.35)"
      className="grow-bar"
      rx="2"
      style={{ "--target-height": "20px", animationDelay: "0.2s" } as React.CSSProperties}
    />
    <rect
      x="70"
      y="85"
      width="18"
      height="0"
      fill="rgb(113 113 122 / 0.35)"
      className="grow-bar"
      rx="2"
      style={{ "--target-height": "40px", animationDelay: "0.35s" } as React.CSSProperties}
    />
    <rect
      x="100"
      y="85"
      width="18"
      height="0"
      fill="rgb(63 63 70 / 0.5)"
      className="grow-bar"
      rx="2"
      style={{ "--target-height": "55px", animationDelay: "0.5s" } as React.CSSProperties}
    />
    <rect
      x="130"
      y="85"
      width="18"
      height="0"
      fill="rgb(39 39 42 / 0.6)"
      className="grow-bar"
      rx="2"
      style={{ "--target-height": "50px", animationDelay: "0.65s" } as React.CSSProperties}
    />
    {/* Data points - adjusted to fit within chart */}
    <circle
      cx="49"
      cy="75"
      r="2.5"
      fill="rgb(63 63 70 / 0.6)"
      className="pulse-dot"
      style={{ animationDelay: "1.8s" }}
    />
    <circle
      cx="79"
      cy="55"
      r="2.5"
      fill="rgb(63 63 70 / 0.6)"
      className="pulse-dot"
      style={{ animationDelay: "2s" }}
    />
    <circle
      cx="109"
      cy="35"
      r="2.5"
      fill="rgb(39 39 42 / 0.8)"
      className="pulse-dot"
      style={{ animationDelay: "2.2s" }}
    />
    <circle
      cx="139"
      cy="45"
      r="2.5"
      fill="rgb(63 63 70 / 0.6)"
      className="pulse-dot"
      style={{ animationDelay: "2.4s" }}
    />
    {/* Floating arrows */}
    <path
      d="M 109 30 L 109 20 L 106 23 L 109 20 L 112 23 Z"
      fill="rgb(39 39 42 / 0.6)"
      className="float-arrow"
      style={{ animationDelay: "2.5s" }}
    />
    <path
      d="M 115 25 L 115 15 L 112 18 L 115 15 L 118 18 Z"
      fill="rgb(39 39 42 / 0.5)"
      className="float-arrow"
      style={{ animationDelay: "3.5s" }}
    />
    {/* Line connecting points - adjusted to fit within chart */}
    <polyline
      points="49,75 79,55 109,35 139,45"
      fill="none"
      stroke="rgb(39 39 42 / 0.4)"
      strokeWidth="2"
      strokeDasharray="200"
      className="draw-line"
      style={{ animationDelay: "2.5s", animationDuration: "1.5s" } as React.CSSProperties}
    />
  </svg>
);

const Features = () => (
  <section id="features" className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto">
    <FadeIn className="mb-12">
      <h2 className="text-[22px] md:text-[28px] font-semibold text-zinc-900 dark:text-white flex items-center gap-3">
        Capabilities <span className="text-zinc-400 dark:text-zinc-600 font-light">/</span>{" "}
        <span className="text-zinc-400 dark:text-zinc-600 text-xl font-mono">SERVICES</span>
      </h2>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-1">
        <FadeIn delay={0} className="h-full">
          <GlassCard className="h-full p-8 md:p-12 flex flex-col md:flex-row gap-12 justify-between group min-h-[400px] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-white/[0.08]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-300/15 dark:bg-zinc-600/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 group-hover:bg-zinc-300/25 dark:group-hover:bg-zinc-600/12 group-hover:scale-110 transition-all duration-700" />

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-pink-50 dark:bg-pink-500/20 border border-pink-200 dark:border-pink-500/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-pink-100/80 dark:group-hover:bg-pink-500/30 group-hover:rotate-3 transition-all duration-500">
                <LayoutGrid className="w-8 h-8 text-[#FF10F0] dark:text-pink-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-[24px] font-semibold text-zinc-900 dark:text-white mb-6">
                Product Design
              </h3>
              <p className="text-[16px] text-zinc-500 dark:text-zinc-400 leading-[1.6] max-w-lg mb-8">
                Intuitive interfaces that connect users with your product.
                <br />
                Design systems and prototypes that turn vision into reality.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UI/UX", "Design Systems", "Prototyping", "User Research"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-zinc-800 dark:text-zinc-200 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-square md:aspect-[4/3] border border-black/5 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/60 dark:group-hover:bg-white/10 transition-colors p-8">
                <ProductDesignAnimation />
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-2">
        <FadeIn delay={200} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col md:flex-row items-center relative group overflow-hidden min-h-[300px] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/95 dark:hover:bg-white/[0.08]">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-transparent dark:from-amber-500/5 dark:to-transparent group-hover:from-amber-100/40 group-hover:dark:from-amber-500/8 transition-all duration-500" />

            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/20 border border-amber-100 dark:border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100/80 dark:group-hover:bg-amber-500/30 group-hover:rotate-3 transition-all duration-500">
                  <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-[24px] font-semibold text-zinc-900 dark:text-white">
                  Brand Identity
                </h3>
              </div>
              <p className="text-[16px] text-zinc-500 dark:text-zinc-400 leading-[1.6] max-w-md">
                Strategy and logo design that cuts through the noise.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center h-40 md:h-auto w-full mt-8 md:mt-0 relative overflow-hidden">
              <BrandIdentityAnimation />
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-1">
        <FadeIn delay={400} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 min-h-[300px] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/20 border border-green-100 dark:border-green-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-100/80 dark:group-hover:bg-green-500/30 group-hover:rotate-3 transition-all duration-500">
                <Terminal className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[24px] text-zinc-900 dark:text-white font-semibold mb-2">
                Development
              </h4>
              <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-[1.6] mb-6">Robust engineering for scalable applications.</p>
              <div className="h-24 w-full rounded-lg overflow-hidden bg-zinc-900/5 dark:bg-zinc-800/30 border border-black/5 dark:border-white/5">
                <DevelopmentAnimation />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["React", "Next.js", "WebGL", "Node"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-1">
        <FadeIn delay={500} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 min-h-[300px] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/20 border border-amber-100 dark:border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-100/80 dark:group-hover:bg-amber-500/30 group-hover:rotate-3 transition-all duration-500">
                <BarChart3 className="w-6 h-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[24px] text-zinc-900 dark:text-white font-semibold mb-2">Growth</h4>
              <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-[1.6] mb-6">Data-driven strategies for user acquisition.</p>
              <div className="h-24 w-full rounded-lg overflow-hidden bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 p-2">
                <GrowthAnimation />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["SEO", "Analytics", "Conversion", "A/B Testing"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer
    id="footer"
    className="bg-white dark:bg-white pt-24 pb-12 px-6"
  >
    <div className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 tracking-wide">
            LIFTOFF
          </h2>
          <p className="text-zinc-500 max-w-sm mb-8">
            Strategic digital infrastructure for the modern web.
            <br />
            San Francisco • New York • Tokyo
          </p>
          <button className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-900 dark:text-white text-sm font-medium border border-black/5 dark:border-white/10 transition-colors flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Start Conversation
          </button>
        </div>

        <div>
          <h4 className="text-zinc-900 dark:text-white font-medium mb-6">Directory</h4>
          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm">
            {["Work Index", "Capabilities", "Agency", "Careers"].map((item) => (
              <li
                key={item}
                className="hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors"
              >
                {item}
                {item === "Careers" && (
                  <span className="text-xs bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded ml-2">
                    Hiring
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-900 dark:text-white font-medium mb-6">Connect</h4>
          <div className="flex gap-4 mb-6">
            <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all">
              <Globe className="w-4 h-4" />
            </button>
          </div>
          <div className="text-zinc-500 text-xs">
            <div className="flex items-center gap-2 mb-2 group/status relative">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="cursor-help">Systems Normal</span>
              <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs rounded opacity-0 group-hover/status:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                All systems operational
              </div>
            </div>
            Last update: 12.12.2024
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center pt-8">
        <span className="text-zinc-500 text-xs whitespace-nowrap">© 2024 LIFTOFF. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit"
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-[60] text-xs font-medium select-none pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        <span className="font-bold tracking-wide text-zinc-900 dark:text-white bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">
          LIFTOFF
        </span>
      </div>
      <div className="flex items-center gap-3 pointer-events-auto bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-black/5 dark:border-white/5 shadow-sm">
        <Wifi className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
        <Battery className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
        <span className="tabular-nums text-zinc-700 dark:text-zinc-300 font-medium">{time} ET</span>
      </div>
    </div>
  );
};

const Dock = ({
  scrollToSection,
  onSettings
}: {
  scrollToSection: (id: string) => void;
  onSettings: () => void;
}) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
    <div className="flex items-center gap-2 px-3 py-2.5 bg-white/80 dark:bg-white/10 backdrop-blur-2xl border border-black/5 dark:border-white/20 rounded-2xl shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.6)]">
      {[
        { icon: LayoutGrid, label: "Dashboard", action: () => scrollToSection("hero") },
        { icon: Layers, label: "Projects", action: () => scrollToSection("work") },
        { icon: Cpu, label: "Features", action: () => scrollToSection("features") },
        { icon: Terminal, label: "Contact", action: () => scrollToSection("footer") },
        { icon: Settings, label: "Settings", action: onSettings }
      ].map((item) => (
        <div key={item.label} className="group relative">
          <button
            onClick={item.action}
            className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-3 hover:scale-110 hover:bg-black/5 dark:hover:bg-white/15 active:scale-95"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6 text-zinc-800 dark:text-white drop-shadow-md" strokeWidth={1.5} />
          </button>

          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-lg text-xs font-medium text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HomePage = () => {
  const [windowState, setWindowState] = useState<WindowState>("maximized");
  const [activeFolder, setActiveFolder] = useState<Category | null>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "hero" && (windowState === "minimized" || windowState === "closed")) {
        setWindowState("normal");
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#050505] text-zinc-900 dark:text-white font-sans selection:bg-indigo-500/30 transition-colors duration-500">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-indigo-300/20 dark:bg-indigo-900/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[180px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
        </div>

        {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

        <StatusBar />

        {isSettingsOpen && (
          <SettingsWindow
            onClose={() => setIsSettingsOpen(false)}
            theme={theme}
            setTheme={setTheme}
          />
        )}

        {activeFolder && (
          <FolderWindow category={activeFolder} onClose={() => setActiveFolder(null)} />
        )}

        <main
          className={`relative z-10 w-full overflow-x-hidden transition-opacity duration-1000 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Hero windowState={windowState} setWindowState={setWindowState} />
          <Widgets />
          <WorkSection onOpenFolder={setActiveFolder} />
          <Features />
          <Footer />
          <div className="h-12" />
        </main>

        <Dock scrollToSection={scrollToSection} onSettings={() => setIsSettingsOpen(true)} />
      </div>
    </div>
  );
};

export default HomePage;

