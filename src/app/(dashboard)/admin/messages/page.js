"use client";

import { useState } from "react";
import { MOCK_MESSAGES } from "@/data/dashboard";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all"); // all | unread | read

  const filtered = messages.filter((m) =>
    filter === "all" ? true : filter === "unread" ? !m.read : m.read
  );

  const markRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
    setSelected((prev) => (prev?.id === id ? { ...prev, read: true } : prev));
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">Messages</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">
            {unreadCount} unread · {messages.length} total
          </p>
        </div>
        <div className="flex gap-2">
          {["all", "unread", "read"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                filter === f
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Message List */}
        <div className="xl:col-span-2 bg-zinc-800 border border-zinc-700 overflow-hidden">
          <div className="px-5 py-3 border-b border-zinc-700 bg-zinc-900">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">
              {filtered.length} conversations
            </p>
          </div>
          <div className="divide-y divide-zinc-700 overflow-y-auto max-h-[600px]">
            {filtered.map((msg) => (
              <button
                key={msg.id}
                onClick={() => { setSelected(msg); markRead(msg.id); }}
                className={`w-full text-left flex items-start gap-4 px-5 py-4 transition-colors ${
                  selected?.id === msg.id
                    ? "bg-emerald-500/10 border-l-2 border-emerald-500"
                    : "hover:bg-zinc-700/50 border-l-2 border-transparent"
                }`}
              >
                {/* Avatar */}
                <div className="w-9 h-9 bg-zinc-700 border border-zinc-600 flex items-center justify-center shrink-0 text-xs font-bold text-zinc-300">
                  {msg.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className={`text-xs font-bold truncate ${!msg.read ? "text-white" : "text-zinc-400"}`}>
                      {msg.name}
                    </p>
                    {!msg.read && <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />}
                  </div>
                  <p className="text-[10px] text-zinc-500 truncate">{msg.subject}</p>
                  <p className="text-[9px] text-zinc-600 mt-1">{msg.date}</p>
                </div>
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="px-5 py-12 text-center">
                <p className="text-sm text-zinc-600">No messages found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="xl:col-span-3 bg-zinc-800 border border-zinc-700">
          {selected ? (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-8 py-6 border-b border-zinc-700 bg-zinc-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{selected.subject}</h3>
                    <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-medium">
                      <span>From: <span className="text-zinc-300">{selected.name}</span></span>
                      <span>·</span>
                      <span>{selected.email}</span>
                      <span>·</span>
                      <span>{selected.date}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-1 border ${
                    selected.read
                      ? "border-zinc-700 text-zinc-500"
                      : "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                  }`}>
                    {selected.read ? "Read" : "New"}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 px-8 py-8">
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  {selected.message}
                </p>
              </div>

              {/* Reply */}
              <div className="px-8 py-6 border-t border-zinc-700 bg-zinc-900">
                <label className="block text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">
                  Reply
                </label>
                <textarea
                  rows={3}
                  placeholder={`Reply to ${selected.name}...`}
                  className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600 resize-none"
                />
                <div className="flex justify-between items-center mt-3">
                  <button className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-rose-400 transition-colors">
                    Delete Message
                  </button>
                  <button className="px-6 py-2.5 text-xs font-bold text-white uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 transition-colors">
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center py-32">
              <div className="text-center">
                <div className="w-16 h-16 border border-zinc-700 flex items-center justify-center mx-auto mb-4 text-zinc-600">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="square" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-zinc-600 text-sm">Select a message to read</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
