"use client";

import * as React from "react";
import {
  X,
  PhoneCall,
  MessageSquare,
  ShieldAlert,
  Flame,
  Zap,
  Droplets,
  KeyRound,
  AlertTriangle,
  Copy,
  Check,
} from "lucide-react";
import { emergencyContacts, societyOverview } from "@/data/society-data";

interface EmergencySosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencySosModal({ isOpen, onClose }: EmergencySosModalProps) {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case "Ambulance":
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case "Droplet":
        return <Droplets className="w-5 h-5 text-cyan-500" />;
      case "KeyRound":
        return <KeyRound className="w-5 h-5 text-emerald-500" />;
      default:
        return <PhoneCall className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-red-500/30 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-700 to-red-800 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
              <ShieldAlert className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Master City Emergency SOS &amp; Helplines
              </h2>
              <p className="text-xs text-red-100">
                24/7 Rapid Response Squads &amp; Society Emergency Command Desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close emergency modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto space-y-3.5 divide-y divide-zinc-100 dark:divide-zinc-800">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-xl p-3.5 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold">Life-safety emergency?</span> For immediate police, medical evacuation, or active fire, you can also dial national emergency lines (15 / 1122) while notifying society control room for instant gate clearance.
            </div>
          </div>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.id}
                className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-850/60 hover:border-red-400 dark:hover:border-red-500/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700 shrink-0">
                    {getIcon(contact.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                        {contact.title}
                      </h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-200/60 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 shrink-0">
                        {contact.available}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                      {contact.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {contact.phone}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyToClipboard(contact.phone, contact.id)}
                      className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 transition-colors"
                      title="Copy Number"
                    >
                      {copiedId === contact.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs shadow-sm transition-colors"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Call</span>
                    </a>

                    {contact.whatsapp && (
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Chat</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            <span>Direct WhatsApp Helpdesk: </span>
            <a
              href={`https://wa.me/${societyOverview.whatsappHelpline.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              {societyOverview.whatsappHelpline}
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium transition-colors"
          >
            Close Helplines
          </button>
        </div>
      </div>
    </div>
  );
}
