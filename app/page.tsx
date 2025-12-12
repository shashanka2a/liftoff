/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
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
  X
} from "lucide-react";

type WindowState = "maximized" | "minimized" | "closed" | "normal";
type Theme = "light" | "dark";

type Category = {
  name: string;
  count: string;
  size: string;
  images: string[];
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
};

const liveCategories: Category[] = [
  {
    name: "Kampus",
    count: "01",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.kampus.fun/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://www.kampus.fun/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://www.kampus.fun/"
    ]
  },
  {
    name: "MenuOS",
    count: "02",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.menuos.app/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://www.menuos.app/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://www.menuos.app/"
    ]
  },
  {
    name: "Homevisor",
    count: "03",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.homevisor.co/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://www.homevisor.co/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://www.homevisor.co/"
    ]
  },
  {
    name: "ShaadiVerse",
    count: "04",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://shaadiverse.app/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://shaadiverse.app/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://shaadiverse.app/"
    ]
  },
  {
    name: "DistroHQ",
    count: "05",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.distrohq.xyz/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://www.distrohq.xyz/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://www.distrohq.xyz/"
    ]
  },
  {
    name: "LetsVibe",
    count: "06",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://letsvibe.dev/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://letsvibe.dev/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://letsvibe.dev/"
    ]
  },
  {
    name: "ProductJoy",
    count: "07",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://productjoy.co/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://productjoy.co/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://productjoy.co/"
    ]
  },
  {
    name: "WorkfloAI",
    count: "08",
    size: "Live",
    images: [
      "https://image.thum.io/get/width/1200/crop/900/noanimate/https://www.workfloai.com/",
      "https://image.thum.io/get/width/1000/crop/760/noanimate/https://www.workfloai.com/",
      "https://image.thum.io/get/width/800/crop/640/noanimate/https://www.workfloai.com/"
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
    <div ref={ref} className={`flex flex-wrap gap-x-[0.25em] ${className}`}>
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
              <button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-lg shadow-black/5 dark:shadow-white/5">
                View Case Study <ArrowRight className="w-4 h-4" />
              </button>
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

const FolderWindow = ({
  category,
  onClose
}: {
  category: Category;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const handleFileClick = (file: FileItem) => {
    setSelectedFile(file);
  };

  const getMockData = (index: number, type: "image" | "doc" = "image") => {
    const clients: Record<string, string[]> = {
      FinTech: ["Stripe", "Mercury", "Brex", "Coinbase"],
      "E-Commerce": ["Shopify", "Nike", "Aesop", "Glossier"],
      SaaS: ["Vercel", "Linear", "Notion", "Figma"],
      Consumer: ["Spotify", "Airbnb", "Uber", "Duolingo"]
    };

    const categoryClients = clients[category.name] || clients["SaaS"];
    const client = categoryClients[index % categoryClients.length];

    return {
      client,
      scope: type === "image" ? "Product Design & System" : "Brand Strategy",
      year: "2024",
      impact: type === "image" ? "+40% Conversion" : "Market Leader",
      meta:
        type === "image"
          ? `High-fidelity interface design for ${client}'s core platform dashboard.`
          : `Strategic documentation outlining ${client}'s market positioning.`
    };
  };

  const CategoryIcon =
    {
      FinTech: CreditCard,
      "E-Commerce": ShoppingBag,
      SaaS: Cloud,
      Consumer: Smartphone
    }[category.name] || Folder;

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
        relative w-full max-w-4xl h-[70vh] bg-[#FAFAFA]/90 dark:bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden pointer-events-auto
        transition-all duration-300 transform origin-center
        ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"}
      `}
      >
        <div className="h-12 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-4 bg-white/[0.02] relative z-10">
          <div className="flex items-center gap-4 w-1/3">
            <TrafficLights
              onClose={handleClose}
              onMinimize={handleClose}
              onMaximize={() => {}}
            />
          </div>
          <div className="w-1/3 flex justify-center text-sm font-medium text-zinc-900 dark:text-white/80">
            {category.name}
          </div>
          <div className="w-1/3 flex justify-end gap-2 text-zinc-400 dark:text-zinc-500">
            <Grid className="w-4 h-4" />
            <List className="w-4 h-4 opacity-50" />
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden relative">
          <div className="w-48 border-r border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/20 p-4 hidden sm:block relative z-10 backdrop-blur-md">
            <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
              Locations
            </div>
            <div className="space-y-1">
              {["Desktop", "Documents", "Downloads", "AirDrop"].map((item) => (
                <div
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5 cursor-pointer flex items-center gap-2"
                >
                  <Folder className="w-3.5 h-3.5" /> {item}
                </div>
              ))}
            </div>
            <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mt-6 mb-4">
              Tags
            </div>
            <div className="space-y-1">
              <div className="px-3 py-1.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5 cursor-pointer flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" /> Urgent
              </div>
              <div className="px-3 py-1.5 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:text-white dark:hover:bg-white/5 cursor-pointer flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Active
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar relative z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.03] pointer-events-none transform -rotate-12 scale-125">
              <CategoryIcon strokeWidth={0.5} size={400} className="text-zinc-900 dark:text-white" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
              {category.images.map((img, i) => {
                const mockData = getMockData(i, "image");
                return (
                  <div
                    key={img}
                    className="group cursor-pointer"
                    onClick={() =>
                      handleFileClick({
                        name: `${mockData.client}_UI_v${i + 1}.jpg`,
                        src: img,
                        type: "image",
                        ...mockData
                      })
                    }
                  >
                    <div className="aspect-square rounded-xl bg-white dark:bg-zinc-800 overflow-hidden border border-black/5 dark:border-white/5 mb-3 relative shadow-sm dark:shadow-lg group-hover:ring-2 ring-blue-500/50 transition-all">
                      <img
                        src={img}
                        alt={`Project ${i}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <ImageIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-zinc-900 dark:text-white font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate">
                        {mockData.client}
                      </div>
                      <div className="text-[10px] text-zinc-500">{category.size} • JPG</div>
                    </div>
                  </div>
                );
              })}
              {[1, 2, 3].map((index) => {
                const mockData = getMockData(index + 3, "doc");
                return (
                  <div
                    key={`dummy-${index}`}
                    className="group cursor-pointer"
                    onClick={() =>
                      handleFileClick({
                        name: `${mockData.client}_Brief.pdf`,
                        src: null,
                        type: "document",
                        ...mockData
                      })
                    }
                  >
                    <div className="aspect-square rounded-xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-3 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-white/10 transition-colors shadow-sm">
                      <FileText className="w-8 h-8 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors truncate">
                        {mockData.client}_Doc
                      </div>
                      <div className="text-[10px] text-zinc-400 dark:text-zinc-600">124 KB • PDF</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-8 bg-white/[0.02] border-t border-black/5 dark:border-white/5 flex items-center px-4 text-[10px] text-zinc-400 dark:text-zinc-500 relative z-10">
          {category.images.length + 3} items selected • {category.size} available
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

  return (
    <FadeIn delay={delay}>
      <div onClick={onClick} className="group relative w-full h-[450px] cursor-pointer perspective-1000">
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
    className="pt-24 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto transition-all duration-500"
  >
    <WindowFrame
      windowState={windowState}
      setWindowState={setWindowState}
      className="min-h-[75vh] flex flex-col items-center justify-center relative w-full"
    >
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-200/40 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 flex flex-col items-start justify-center h-full">
        <FadeIn delay={100} className="flex justify-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-lg cursor-pointer hover:bg-white/50 dark:hover:bg-white/10 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-200 uppercase tracking-wider">
              System v4.2 Online
            </span>
          </div>
        </FadeIn>

        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-semibold tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[0.9] text-left">
          <WordReveal text="Strategic." delay={0} />
          <div className="h-2 md:h-4" />
          <WordReveal
            text="Digital Products."
            delay={200}
            className="text-zinc-400 dark:text-white/50"
          />
        </h1>

        <FadeIn delay={600}>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-[#A0A0A0] max-w-3xl leading-relaxed font-normal mb-12 text-left">
            A premium design and development agency crafting world-class digital products.
            We merge strategic branding with scalable engineering to build the infrastructure of
            tomorrow.
          </p>
        </FadeIn>

        <FadeIn delay={800} className="flex flex-col sm:flex-row items-center justify-start gap-4">
          <button className="h-14 px-10 rounded-xl bg-zinc-900 dark:bg-[#FAFAFA] text-white dark:text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] flex items-center gap-2 group w-full sm:w-auto justify-center">
            Initialize Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </FadeIn>
      </div>
    </WindowFrame>
  </section>
);

const Widgets = () => (
  <section className="px-4 md:px-8 pb-12 max-w-[1600px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "Products Built", value: "200+", color: "text-purple-600 dark:text-purple-300" },
        { label: "Client Funding", value: "$25M+", color: "text-purple-600 dark:text-purple-300" },
        { label: "Total VC investments in our clients", value: "80+", color: "text-purple-600 dark:text-purple-300" }
      ].map((item, i) => (
        <FadeIn key={item.label} delay={200 + i * 100}>
          <GlassCard className="p-8 h-full min-h-[240px] flex flex-col justify-between hover:bg-white/80 dark:hover:bg-white/[0.03] transition-colors group cursor-default relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </div>

              <div className={`text-5xl md:text-6xl font-medium tracking-tighter ${item.color}`}>
                {item.value}
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      ))}
    </div>
  </section>
);

const WorkSection = ({ onOpenFolder }: { onOpenFolder: (category: Category) => void }) => {
  return (
    <section id="work" className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto overflow-hidden">
      <FadeIn className="mb-16 flex items-end justify-between px-2">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white flex items-center gap-3">
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

const Features = () => (
  <section id="features" className="px-4 md:px-8 pb-32 max-w-[1600px] mx-auto">
    <FadeIn className="mb-12">
      <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white flex items-center gap-3">
        Capabilities <span className="text-zinc-400 dark:text-zinc-600 font-light">/</span>{" "}
        <span className="text-zinc-400 dark:text-zinc-600 text-xl font-mono">SERVICES</span>
      </h2>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-1">
        <FadeIn delay={0} className="h-full">
          <GlassCard className="h-full p-8 md:p-12 flex flex-col md:flex-row gap-12 justify-between group min-h-[400px]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-500/20 border border-purple-100 dark:border-purple-500/30 flex items-center justify-center mb-8">
                <LayoutGrid className="w-8 h-8 text-purple-500 dark:text-purple-300" />
              </div>
              <h3 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white mb-6">
                Product Design
              </h3>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">
                We craft intuitive, human-centric interfaces. From complex design systems to
                high-fidelity prototyping, we bridge the gap between user needs and business goals.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UI/UX", "Design Systems", "Prototyping", "User Research"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm text-zinc-600 dark:text-zinc-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="relative w-full aspect-square md:aspect-[4/3] border border-black/5 dark:border-white/10 rounded-2xl bg-white/40 dark:bg-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/60 dark:group-hover:bg-white/10 transition-colors">
                <div className="w-3/4 h-3/4 border border-dashed border-black/10 dark:border-white/20 rounded-xl flex items-center justify-center text-sm text-zinc-400 dark:text-zinc-500 font-mono tracking-widest">
                  INTERFACE_WIREFRAME_v2.0
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-2">
        <FadeIn delay={200} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col md:flex-row items-center relative group overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-transparent dark:from-blue-500/5 dark:to-transparent" />

            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                <h3 className="text-3xl font-medium text-zinc-900 dark:text-white">
                  Brand Identity
                </h3>
              </div>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md">
                Strategy, Logo Design, & Art Direction that cuts through the noise.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center h-40 md:h-auto w-full mt-8 md:mt-0 relative">
              <div className="text-8xl font-black text-black/5 dark:text-white/5 tracking-tighter group-hover:text-black/10 dark:group-hover:text-white/10 transition-colors select-none">
                Aa
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                TYPOGRAPHY_SYSTEM
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>

      <div className="col-span-1 md:col-span-1">
        <FadeIn delay={400} className="h-full">
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/80 dark:hover:bg-white/5 transition-colors min-h-[300px]">
            <div>
              <Terminal className="w-10 h-10 text-zinc-400 dark:text-zinc-300 mb-6" />
              <h4 className="text-3xl text-zinc-900 dark:text-white font-medium mb-2">
                Development
              </h4>
              <p className="text-zinc-500">Robust engineering for scalable applications.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["React", "Next.js", "WebGL", "Node"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-xs text-zinc-500 dark:text-zinc-400 font-mono"
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
          <GlassCard className="h-full p-10 flex flex-col justify-between hover:bg-white/80 dark:hover:bg-white/5 transition-colors min-h-[300px]">
            <div>
              <BarChart3 className="w-10 h-10 text-amber-500 dark:text-amber-400 mb-6" />
              <h4 className="text-3xl text-zinc-900 dark:text-white font-medium mb-2">Growth</h4>
              <p className="text-zinc-500">Data-driven strategies for user acquisition.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["SEO", "Analytics", "Conversion", "A/B Testing"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 text-xs text-zinc-500 dark:text-zinc-400 font-mono"
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
    className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5 pt-24 pb-48 px-6"
  >
    <div className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 tracking-wide">
            LIFTOFF™ STUDIO
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
          <ul className="space-y-4 text-zinc-500 text-sm">
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
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Systems Normal
            </div>
            Last update: 12.12.2024
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 dark:border-white/5 gap-4">
        <span className="text-zinc-500 text-xs">© 2024 LIFTOFF™ OS. All rights reserved.</span>
        <div className="flex gap-6 text-xs text-zinc-500">
          <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer">
            Privacy Protocol
          </span>
          <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer">
            Terms of Service
          </span>
        </div>
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
    <div className="fixed top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-[60] text-xs font-medium text-zinc-900 dark:text-white/70 select-none pointer-events-none mix-blend-difference">
      <div className="flex items-center gap-4 pointer-events-auto">
        <span className="font-bold tracking-wide">LIFTOFF™ OS</span>
      </div>
      <div className="flex items-center gap-4">
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
        <span className="tabular-nums">{time} ET</span>
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

