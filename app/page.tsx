/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroIllustration from "./components/HeroIllustration";
import {
  ArrowRight,
  BarChart3,
  BarChart2,
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
  Quote,
  CheckCircle2,
  Code2,
  Play
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
          <div className="block">
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-white bg-clip-text text-transparent">
              Where Premium Design Meets Strategic Engineering
            </span>
          </div>
        </FadeIn>
      </h1>

      {/* Description */}
      <FadeIn delay={600}>
        <p className="text-[18px] md:text-[20px] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          UI/UX, web, and product engineering for startups and growing companies.
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
            {[
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4,c0aede,ffd5dc",
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=b6e3f4,c0aede,ffd5dc",
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=b6e3f4,c0aede,ffd5dc"
            ].map((avatarUrl, i) => (
              <img
                key={i}
                src={avatarUrl}
                alt={`Reviewer ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= 4) {
                // Full stars for first 4
                return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
              } else {
                // 5th star: 80% filled (4.8/5 visual representation)
                return (
                  <div key={i} className="relative w-4 h-4 inline-block">
                    <Star className="w-4 h-4 fill-yellow-400/20 text-yellow-400/20 absolute inset-0" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                );
              }
            })}
          </div>
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
const ProductDesignAnimation = () => {
  const [step, setStep] = useState(0);

  // Animation sequence controller
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    switch (step) {
      case 0: timeout = setTimeout(() => setStep(1), 500); break; // Start
      case 1: timeout = setTimeout(() => setStep(2), 1000); break; // Move to sidebar
      case 2: timeout = setTimeout(() => setStep(3), 400); break; // Click
      case 3: timeout = setTimeout(() => setStep(4), 800); break; // Items appear -> Move to button
      case 4: timeout = setTimeout(() => setStep(5), 1000); break; // Hover button spot
      case 5: timeout = setTimeout(() => setStep(6), 600); break; // Button appears -> Move to selection
      case 6: timeout = setTimeout(() => setStep(7), 1000); break; // Hover selection spot
      case 7: timeout = setTimeout(() => setStep(8), 500); break; // Box appears small
      case 8: timeout = setTimeout(() => setStep(9), 1200); break; // Dragging...
      case 9: timeout = setTimeout(() => setStep(0), 3000); break; // Finished, hold then reset
      default: break;
    }

    return () => clearTimeout(timeout);
  }, [step]);

  // Cursor Position Logic
  const getCursorPos = () => {
    switch (step) {
      case 0: return { x: '110%', y: '110%' }; // Off screen
      case 1: return { x: '15%', y: '25%' };   // Sidebar top
      case 2: return { x: '15%', y: '25%' };   // Click sidebar
      case 3: return { x: '15%', y: '40%' };   // Move down slightly
      case 4: return { x: '80%', y: '40%' };   // Button position
      case 5: return { x: '80%', y: '40%' };   // Click button
      case 6: return { x: '30%', y: '75%' };   // Start of selection box
      case 7: return { x: '30%', y: '75%' };   // Click start
      case 8: return { x: '60%', y: '75%' };   // Dragging right
      case 9: return { x: '65%', y: '80%' };   // End drag position (slightly offset)
      default: return { x: '110%', y: '110%' };
    }
  };

  const cursorPos = getCursorPos();
  const isClicking = step === 2 || step === 5 || step === 7 || step === 8;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* The "Browser/App" Window Frame */}
      <div className="relative w-full max-w-lg aspect-[4/3] bg-white dark:bg-zinc-900 overflow-hidden flex flex-col">
        
        {/* Window Header */}
        <div className="h-10 border-b border-zinc-100 dark:border-zinc-800 flex items-center px-4 space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
        </div>

        {/* Window Content */}
        <div className="flex-1 flex relative">
          
          {/* Sidebar */}
          <div className={`w-24 border-r border-zinc-100 dark:border-zinc-800 h-full p-4 flex flex-col gap-3 transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            {/* Skeleton Sidebar items */}
            <div className={`h-4 w-3 bg-pink-500 dark:bg-pink-400 rounded-sm mb-4 transition-all duration-500 delay-100 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></div>
            <div className={`h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full transition-all duration-500 delay-200 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></div>
            <div className={`h-3 w-4/5 bg-zinc-100 dark:bg-zinc-800 rounded-full transition-all duration-500 delay-300 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></div>
            <div className={`h-3 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full transition-all duration-500 delay-400 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}></div>
          </div>

          {/* Main Canvas Area */}
          <div className="flex-1 relative p-8">
            
            {/* Blinking Cursor (Text) - Decorative */}
            <div className="absolute top-8 left-8 w-0.5 h-5 bg-zinc-900 dark:bg-white animate-pulse"></div>

            {/* Floating Button */}
            <div 
              className={`absolute top-[35%] right-[10%] bg-pink-500 dark:bg-pink-400 text-white px-6 py-2.5 rounded-lg shadow-sm font-medium transform transition-all duration-500 ease-out
                ${step >= 5 ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4'}
              `}
            >
              Button
            </div>

            {/* Dashed Selection Box */}
            <div 
              className={`absolute bottom-[20%] left-[20%] border-2 border-dashed border-pink-400 dark:border-pink-500 rounded-lg bg-pink-50/50 dark:bg-pink-900/20 transition-all duration-700 ease-out
                ${step >= 7 ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                width: step >= 9 ? '180px' : (step >= 7 ? '40px' : '0px'),
                height: '40px',
              }}
            >
                {/* Inner content of selection (fades in late) */}
                <div className={`w-full h-full flex items-center justify-center transition-opacity duration-300 ${step >= 9 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-3/4 h-2 bg-pink-300 dark:bg-pink-600 rounded-full"></div>
                </div>

                {/* Resize Handle */}
                <div className={`absolute -right-1 -bottom-1 w-2 h-2 bg-white dark:bg-zinc-900 border border-pink-400 dark:border-pink-500 rounded-full shadow-sm z-20 ${step >= 7 ? 'scale-100' : 'scale-0'}`}></div>
                
                {/* Figma-style Selection Label/Tooltip */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 dark:bg-pink-400 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm opacity-0 transition-opacity duration-300 ${step === 8 || step === 9 ? 'opacity-100' : ''}`}>
                    {step >= 9 ? '180px' : 'Dragging...'}
                </div>
            </div>

          </div>
        </div>

        {/* Animated Cursor Overlay */}
        <div 
          className="absolute pointer-events-none z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          <div className={`relative transition-transform duration-150 ${isClicking ? 'scale-90' : 'scale-100'}`}>
            {/* Cursor Body */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <path 
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
                fill="rgb(236 72 153)" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Username Tag (Figma style) */}
            <div 
                className="absolute top-5 left-4 bg-pink-500 dark:bg-pink-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md rounded-bl-md rounded-tr-md shadow-sm whitespace-nowrap"
            >
                Designer
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const BrandIdentityAnimation = () => {
  const [step, setStep] = useState(0);

  // Animation sequence controller
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const next = (s: number, ms: number) => {
      timeout = setTimeout(() => setStep(s), ms);
    };

    switch (step) {
      case 0: next(1, 1000); break;  // Start -> Move to center
      case 1: next(2, 600); break;   // Hover -> Start Drag
      case 2: next(3, 800); break;   // Dragging -> Text Appears
      case 3: next(4, 800); break;   // Text Done -> Move to Palette 1
      case 4: next(5, 500); break;   // Hover 1 -> Click
      case 5: next(6, 400); break;   // Click 1 -> Move to 2
      case 6: next(7, 500); break;   // Hover 2 -> Click
      case 7: next(8, 400); break;   // Click 2 -> Move to 3
      case 8: next(9, 500); break;   // Hover 3 -> Click
      case 9: next(10, 400); break;  // Click 3 -> Move to 4
      case 10: next(11, 500); break; // Hover 4 -> Click
      case 11: next(0, 3000); break; // Finished -> Reset
      default: break;
    }

    return () => clearTimeout(timeout);
  }, [step]);

  // Cursor Position Logic
  const getCursorPos = () => {
    switch (step) {
      case 0: return { x: '110%', y: '110%' }; // Off screen
      case 1: return { x: '25%', y: '40%' };   // Center-left (Text start)
      case 2: return { x: '45%', y: '55%' };   // Center-right (Text drag end)
      case 3: return { x: '45%', y: '55%' };   // Hold
      case 4: return { x: '65%', y: '35%' };   // Color 1 position
      case 5: return { x: '65%', y: '35%' };   // Click
      case 6: return { x: '75%', y: '35%' };   // Color 2 position
      case 7: return { x: '75%', y: '35%' };   // Click
      case 8: return { x: '65%', y: '55%' };   // Color 3 position
      case 9: return { x: '65%', y: '55%' };   // Click
      case 10: return { x: '75%', y: '55%' };  // Color 4 position
      case 11: return { x: '75%', y: '55%' };  // Click
      default: return { x: '110%', y: '110%' };
    }
  };

  const cursorPos = getCursorPos();
  // Steps where click animation happens
  const isClicking = [2, 5, 7, 9, 11].includes(step);
  // Specific states for drag selection visualization
  const isDragging = step === 2;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* The "Artboard" Frame */}
      <div className="relative w-full max-w-lg aspect-[4/3] bg-white dark:bg-zinc-900 overflow-hidden flex flex-col">
        
        {/* Artboard Header */}
        <div className="h-8 border-b border-zinc-50 dark:border-zinc-800 flex items-center justify-between px-4 bg-white dark:bg-zinc-900">
          <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Artboard 1</span>
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-700"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-700"></div>
          </div>
        </div>

        {/* Artboard Content */}
        <div className="flex-1 relative p-8">
          
          {/* 1. Typography Element "Aa" */}
          <div 
            className={`absolute top-[30%] left-[20%] transition-all duration-700 ease-out flex flex-col items-center justify-center
              ${step >= 3 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}
            `}
          >
            <div className="text-8xl font-serif text-zinc-900 dark:text-white leading-none">
              Aa
            </div>
            {/* Font info tag */}
            <div className={`mt-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] px-2 py-1 rounded opacity-0 transition-opacity duration-500 delay-500 ${step >= 3 ? 'opacity-100' : ''}`}>
              Garamond Premier Pro
            </div>
          </div>

          {/* Selection Box for Text (Appears while dragging) */}
          <div 
            className={`absolute top-[30%] left-[20%] border border-amber-400 dark:border-amber-500 bg-amber-50/50 dark:bg-amber-900/20 pointer-events-none transition-all duration-75
              ${isDragging ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              width: isDragging ? '140px' : '0px',
              height: isDragging ? '140px' : '0px',
            }}
          />

          {/* 2. Color Palette Elements */}
          <div className="absolute top-[30%] right-[20%] grid grid-cols-2 gap-3">
            {/* Color 1 */}
            <div className={`w-12 h-12 rounded-full bg-amber-500 dark:bg-amber-400 shadow-sm transition-all duration-500 ease-spring ${step >= 5 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
            {/* Color 2 */}
            <div className={`w-12 h-12 rounded-full bg-amber-400 dark:bg-amber-500 shadow-sm transition-all duration-500 ease-spring ${step >= 7 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
            {/* Color 3 */}
            <div className={`w-12 h-12 rounded-full bg-amber-300 dark:bg-amber-600 shadow-sm transition-all duration-500 ease-spring ${step >= 9 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
            {/* Color 4 */}
            <div className={`w-12 h-12 rounded-full bg-amber-200 dark:bg-amber-700 shadow-sm transition-all duration-500 ease-spring ${step >= 11 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
          </div>

          {/* Decorative Guides (Faint) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black dark:bg-white"></div>
             <div className="absolute top-1/2 left-0 right-0 h-px bg-black dark:bg-white"></div>
          </div>

        </div>

        {/* Animated Cursor Overlay */}
        <div 
          className="absolute pointer-events-none z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          <div className={`relative transition-transform duration-150 ${isClicking ? 'scale-90' : 'scale-100'}`}>
            {/* Cursor Body */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
            >
              <path 
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
                fill="black" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Username Tag */}
            <div 
                className="absolute top-5 left-4 bg-amber-500 dark:bg-amber-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md rounded-bl-md rounded-tr-md shadow-sm whitespace-nowrap"
            >
                Brand Lead
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const DevelopmentAnimation = () => {
  const [step, setStep] = useState(0);

  // Animation sequence controller
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const next = (s: number, ms: number) => {
      timeout = setTimeout(() => setStep(s), ms);
    };

    switch (step) {
      case 0: next(1, 1000); break;  // Start -> Line 1
      case 1: next(2, 400); break;   // Line 2
      case 2: next(3, 400); break;   // Line 3
      case 3: next(4, 400); break;   // Line 4
      case 4: next(5, 400); break;   // Line 5
      case 5: next(6, 800); break;   // Code done -> Open Terminal
      case 6: next(7, 600); break;   // Terminal Open -> Type Command
      case 7: next(8, 800); break;   // Command Typed -> Running
      case 8: next(9, 1500); break;  // Running -> Success
      case 9: next(0, 3000); break;  // Success -> Reset
      default: break;
    }

    return () => clearTimeout(timeout);
  }, [step]);

  // Cursor Position Logic
  const getCursorPos = () => {
    switch (step) {
      case 0: return { x: '110%', y: '110%' };
      case 1: return { x: '40%', y: '30%' };   // Typing...
      case 2: return { x: '45%', y: '35%' };
      case 3: return { x: '50%', y: '40%' };
      case 4: return { x: '45%', y: '45%' };
      case 5: return { x: '40%', y: '50%' };   // Code finish
      case 6: return { x: '90%', y: '90%' };   // Move to terminal area
      case 7: return { x: '10%', y: '85%' };   // Terminal prompt
      default: return { x: '100%', y: '100%' }; // Move away
    }
  };

  const cursorPos = getCursorPos();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Code Editor Window */}
      <div className="relative w-full max-w-lg aspect-[4/3] bg-[#1e1e2e] dark:bg-zinc-900 overflow-hidden flex flex-col">
        
        {/* Window Header */}
        <div className="h-9 bg-[#252535] dark:bg-zinc-800 border-b border-white/5 dark:border-zinc-700/50 flex items-center px-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <div className="ml-4 text-xs text-zinc-400 dark:text-zinc-500 font-mono">App.tsx</div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 p-6 font-mono text-sm md:text-base leading-relaxed text-zinc-300 dark:text-zinc-400 relative">
          
          {/* Line Numbers */}
          <div className="absolute left-4 top-6 text-zinc-600 dark:text-zinc-600 select-none text-right w-4 flex flex-col gap-1">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>

          {/* Code Lines */}
          <div className="pl-8 flex flex-col gap-1">
            
            <div className={`transition-opacity duration-300 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-purple-400 dark:text-purple-400">const</span> <span className="text-blue-400 dark:text-blue-400">App</span> = <span className="text-yellow-400 dark:text-yellow-400">()</span> <span className="text-purple-400 dark:text-purple-400">=&gt;</span> {'{'}
            </div>
            
            <div className={`pl-4 transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-purple-400 dark:text-purple-400">return</span> (
            </div>
            
            <div className={`pl-8 transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
              &lt;<span className="text-red-400 dark:text-red-400">h1</span>&gt;
              <span className="text-green-400 dark:text-green-400">Hello World</span>
              &lt;/<span className="text-red-400 dark:text-red-400">h1</span>&gt;
            </div>

            <div className={`pl-4 transition-opacity duration-300 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
              )
            </div>

            <div className={`transition-opacity duration-300 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
              {'}'}
            </div>

            {/* Blinking Cursor */}
            <div 
                className={`w-2 h-5 bg-zinc-500 dark:bg-zinc-400 animate-pulse absolute`}
                style={{
                    top: `${(Math.min(step, 5) * 28)}px`,
                    left: '20px',
                    transition: 'top 0.2s ease'
                }} 
            />
          </div>

        </div>

        {/* Terminal Panel (Slides up) */}
        <div className={`absolute bottom-0 left-0 right-0 bg-[#0f0f16] dark:bg-zinc-950 border-t border-white/10 dark:border-zinc-700/50 transition-all duration-500 ease-out flex flex-col
          ${step >= 6 ? 'h-32' : 'h-0'}
        `}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 dark:border-zinc-700/50 bg-[#181825] dark:bg-zinc-900">
                <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold">
                    <Terminal size={12} /> Terminal
                </div>
            </div>
            <div className="p-4 font-mono text-xs md:text-sm text-zinc-300 dark:text-zinc-400">
                <div className="flex gap-2">
                    <span className="text-green-400 dark:text-green-500">➜</span>
                    <span className="text-blue-400 dark:text-blue-400">~/project</span>
                    {step >= 7 && <span className="text-zinc-100 dark:text-zinc-300">npm run build</span>}
                </div>
                
                {step >= 8 && (
                    <div className="mt-2 text-zinc-400 dark:text-zinc-500">
                        Building production bundle...
                        <div className="w-full bg-zinc-800 dark:bg-zinc-800 h-1 mt-2 rounded-full overflow-hidden">
                            <div className={`h-full bg-zinc-500 dark:bg-zinc-400 transition-all duration-[1500ms] ease-out ${step >= 9 ? 'w-full' : 'w-[10%]'}`}></div>
                        </div>
                    </div>
                )}

                {step >= 9 && (
                    <div className="mt-2 flex items-center gap-2 text-green-400 dark:text-green-500 font-bold animate-in fade-in slide-in-from-left-2">
                        <CheckCircle2 size={14} /> Build Complete (1.2s)
                    </div>
                )}
            </div>
        </div>

        {/* Success Overlay Badge */}
         <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-700 dark:bg-zinc-600 text-white px-6 py-3 rounded-full shadow-2xl shadow-zinc-500/30 flex items-center gap-3 font-bold transform transition-all duration-500 z-20
            ${step >= 9 ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-8'}
            `}
        >
            <CheckCircle2 className="text-white" size={24} />
            <span>Deployed</span>
        </div>

        {/* Animated Cursor Overlay */}
        <div 
          className="absolute pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          <div className="relative transition-transform duration-150">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <path 
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
                fill="white" 
                stroke="black" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute top-5 left-4 bg-zinc-700 dark:bg-zinc-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md rounded-bl-md rounded-tr-md shadow-sm">
                Engineer
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const GrowthAnimation = () => {
  const [step, setStep] = useState(0);

  // Animation sequence controller
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const next = (s: number, ms: number) => {
      timeout = setTimeout(() => setStep(s), ms);
    };

    switch (step) {
      case 0: next(1, 1000); break;  // Start -> Move to Button
      case 1: next(2, 600); break;   // Hover
      case 2: next(3, 400); break;   // Click
      case 3: next(4, 300); break;   // Start Growth Animation
      case 4: next(5, 800); break;   // Bars done -> Line Chart
      case 5: next(6, 1000); break;  // Line done -> Move to Peak
      case 6: next(7, 500); break;   // Hover Peak
      case 7: next(8, 2000); break;  // Hold tooltip -> Reset
      case 8: next(0, 1000); break;  // Reset
      default: break;
    }

    return () => clearTimeout(timeout);
  }, [step]);

  // Cursor Position Logic
  const getCursorPos = () => {
    switch (step) {
      case 0: return { x: '110%', y: '110%' };
      case 1: return { x: '80%', y: '20%' };   // Button Position
      case 2: return { x: '80%', y: '20%' };
      case 3: return { x: '80%', y: '20%' };
      case 4: return { x: '90%', y: '50%' };   // Move away slightly
      case 5: return { x: '75%', y: '45%' };   // Move towards peak
      case 6: return { x: '72%', y: '42%' };   // On Peak
      case 7: return { x: '72%', y: '42%' };   // Hold
      default: return { x: '110%', y: '110%' };
    }
  };

  const cursorPos = getCursorPos();
  const isClicking = step === 3;
  const isGrowthActive = step >= 4;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dashboard Window */}
      <div className="relative w-full max-w-lg aspect-[4/3] bg-white dark:bg-zinc-900 overflow-hidden flex flex-col">
        
        {/* Dashboard Header */}
        <div className="h-12 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between px-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                <TrendingUp size={14} />
             </div>
             <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Analytics Pro</span>
          </div>
          
          {/* The Action Button */}
          <div 
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all duration-200 flex items-center gap-1
              ${isClicking ? 'bg-blue-600 dark:bg-blue-500 scale-95' : 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500'} 
              text-white shadow-sm ring-2 ring-transparent ${step === 2 ? 'ring-blue-200 dark:ring-blue-700' : ''}
            `}
          >
            {isGrowthActive ? 'Running Test...' : 'Run A/B Test'}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 relative flex flex-col">
          
          {/* Stat Cards Row */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-700/50">
               <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold mb-1">Users</div>
               <div className="text-xl font-bold text-zinc-800 dark:text-zinc-200 flex items-end gap-2">
                 {isGrowthActive ? '12.5k' : '4.2k'}
                 <span className={`text-[10px] mb-1 transition-colors duration-500 ${isGrowthActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-400 dark:text-zinc-500'}`}>
                    {isGrowthActive ? '+128%' : '+2%'}
                 </span>
               </div>
            </div>
            <div className="flex-1 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-700/50">
               <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold mb-1">Conv. Rate</div>
               <div className="text-xl font-bold text-zinc-800 dark:text-zinc-200 flex items-end gap-2">
                 {isGrowthActive ? '4.8%' : '1.2%'}
                 <span className={`text-[10px] mb-1 transition-colors duration-500 ${isGrowthActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-400 dark:text-zinc-500'}`}>
                    {isGrowthActive ? '+300%' : '0%'}
                 </span>
               </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 relative flex items-end justify-between px-2 pb-2 gap-4">
             
             {/* Grid Lines (Background) */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-full h-px bg-zinc-100 dark:bg-zinc-800 border-t border-dashed border-zinc-200 dark:border-zinc-700"></div>
                ))}
             </div>

             {/* Bar 1 */}
             <div className="w-full bg-blue-300 dark:bg-blue-600 rounded-t-sm relative transition-all duration-700 ease-out" 
                  style={{ height: isGrowthActive ? '45%' : '30%' }}></div>
             
             {/* Bar 2 */}
             <div className="w-full bg-blue-400 dark:bg-blue-500 rounded-t-sm relative transition-all duration-700 ease-out delay-75" 
                  style={{ height: isGrowthActive ? '55%' : '35%' }}></div>
             
             {/* Bar 3 */}
             <div className="w-full bg-blue-500 dark:bg-blue-400 rounded-t-sm relative transition-all duration-700 ease-out delay-100" 
                  style={{ height: isGrowthActive ? '75%' : '25%' }}></div>
             
             {/* Bar 4 (The Big One) */}
             <div className="w-full bg-blue-600 dark:bg-blue-300 rounded-t-sm relative transition-all duration-700 ease-out delay-150" 
                  style={{ height: isGrowthActive ? '92%' : '40%' }}>
                    
                    {/* Peak Point Dot */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-700 dark:bg-blue-500 border-2 border-white dark:border-zinc-900 rounded-full shadow-md z-10 transition-all duration-500 delay-500
                         ${step >= 5 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    `}></div>

                    {/* Tooltip */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] py-1 px-2 rounded shadow-xl whitespace-nowrap transition-all duration-300
                        ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}>
                        <div className="font-bold">Record High</div>
                        <div className="text-blue-400 dark:text-blue-500">+145% vs last week</div>
                        {/* Little triangle arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
                    </div>
             </div>

             {/* Trend Line (SVG Overlay) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" preserveAspectRatio="none">
                <path 
                    d={isGrowthActive 
                        ? "M 10 90 L 80 75 L 150 45 L 220 15" // High path
                        : "M 10 115 L 80 110 L 150 120 L 220 100" // Low path
                    }
                    fill="none"
                    stroke="rgb(59 130 246)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-1000 ease-out"
                    style={{
                        opacity: step >= 5 ? 0.6 : 0,
                        strokeDasharray: '300',
                        strokeDashoffset: step >= 5 ? '0' : '300' // Draw animation
                    }}
                />
             </svg>

          </div>
        </div>

        {/* Animated Cursor Overlay */}
        <div 
          className="absolute pointer-events-none z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
          }}
        >
          <div className={`relative transition-transform duration-150 ${isClicking ? 'scale-90' : 'scale-100'}`}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl"
            >
              <path 
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
                fill="black" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Tag */}
            <div 
                className="absolute top-5 left-4 bg-blue-500 dark:bg-blue-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md rounded-bl-md rounded-tr-md shadow-sm whitespace-nowrap"
            >
                Growth PM
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

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
              <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-zinc-200/80 dark:group-hover:bg-zinc-700/70 group-hover:rotate-3 transition-all duration-500">
                <LayoutGrid className="w-8 h-8 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-500" />
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
            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-700/70 group-hover:rotate-3 transition-all duration-500">
                  <Briefcase className="w-6 h-6 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-[24px] font-semibold text-zinc-900 dark:text-white">
                  Brand Identity
                </h3>
              </div>
              <p className="text-[16px] text-zinc-500 dark:text-zinc-400 leading-[1.6] max-w-md mb-6">
                Strategy and logo design that cuts through the noise.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Logo Design", "Visual Identity", "Typography", "Color Theory"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-zinc-800 dark:text-zinc-200 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center h-40 md:h-auto w-full mt-8 md:mt-0 relative overflow-hidden">
              <BrandIdentityAnimation />
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-1">
        <FadeIn delay={400} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 min-h-[450px] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-700/70 group-hover:rotate-3 transition-all duration-500">
                <Terminal className="w-6 h-6 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[24px] text-zinc-900 dark:text-white font-semibold mb-2">
                Development
              </h4>
              <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-[1.6] mb-6">Robust engineering for scalable applications.</p>
              <div className="h-64 w-full rounded-lg overflow-hidden bg-zinc-900/5 dark:bg-zinc-800/30 border border-black/5 dark:border-white/5">
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
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.15)] hover:border-zinc-300/40 dark:hover:border-zinc-600/30 transition-all duration-500 ease-out hover:-translate-y-1 min-h-[450px] group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-100/80 dark:group-hover:bg-zinc-700/70 group-hover:rotate-3 transition-all duration-500">
                <BarChart3 className="w-6 h-6 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-[24px] text-zinc-900 dark:text-white font-semibold mb-2">Growth</h4>
              <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-[1.6] mb-6">Data-driven strategies for user acquisition.</p>
              <div className="h-64 w-full rounded-lg overflow-hidden bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 p-2">
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
        </main>

        <Dock scrollToSection={scrollToSection} onSettings={() => setIsSettingsOpen(true)} />
      </div>
    </div>
  );
};

export default HomePage;

