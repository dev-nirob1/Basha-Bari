"use client";

import { useState } from "react";
import { MOCK_USER } from "@/data/dashboard";

const inputCls = "w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600";
const labelCls = "block text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-2";

export default function OwnerProfilePage() {
  const [profile, setProfile] = useState({
    name: MOCK_USER.name,
    email: MOCK_USER.email,
    phone: "+880 1700 000000",
    company: "Ahmed Properties Ltd.",
    location: "Gulshan, Dhaka",
    bio: "Real estate professional with 10+ years of experience in premium residential listings across Dhaka.",
    avatar: MOCK_USER.avatar,
  });
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const [saved, setSaved] = useState(false);

  const field = (key) => (e) => setProfile((p) => ({ ...p, [key]: e.target.value }));
  const pwField = (key) => (e) => setPasswords((p) => ({ ...p, [key]: e.target.value }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const completion = [profile.name, profile.phone, profile.company, profile.location, profile.bio, profile.avatar]
    .filter(Boolean).length;
  const completionPct = Math.round((completion / 6) * 100);

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">My Profile</h2>
          <p className="text-zinc-500 text-xs font-medium mt-1">Manage your owner account and business information.</p>
        </div>
        <button
          onClick={handleSave}
          className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
            saved
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
              : "bg-emerald-500 hover:bg-emerald-600 text-white"
          }`}
        >
          {saved ? "✓ Saved" : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT: Avatar Card */}
        <div className="space-y-6">
          <div className="bg-zinc-800 border border-zinc-700 p-6 flex flex-col items-center text-center gap-4">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.avatar} alt={profile.name} className="w-24 h-24 object-cover border-2 border-zinc-600" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-2 border-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">{profile.name}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">{profile.company}</p>
              <span className="inline-block mt-2 text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-2 py-1">
                Owner
              </span>
            </div>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 p-6">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-3">Profile Completion</p>
            <p className="text-3xl font-black text-emerald-400 tracking-tighter mb-3">{completionPct}%</p>
            <div className="h-1.5 bg-zinc-700">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${completionPct}%` }} />
            </div>
            <p className="text-[9px] text-zinc-600 mt-3">A complete profile builds trust with renters.</p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="xl:col-span-2 space-y-6">
          {/* Business Info */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-5">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-3">Business & Personal Info</h3>
            <div>
              <label className={labelCls}>Avatar URL</label>
              <input value={profile.avatar} onChange={field("avatar")} placeholder="https://..." className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Full Name</label>
                <input value={profile.name} onChange={field("name")} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Company / Agency Name</label>
                <input value={profile.company} onChange={field("company")} placeholder="e.g. Ahmed Properties Ltd." className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Email Address (readonly)</label>
                <input value={profile.email} readOnly className={`${inputCls} opacity-50 cursor-not-allowed`} />
              </div>
              <div>
                <label className={labelCls}>Phone Number</label>
                <input value={profile.phone} onChange={field("phone")} placeholder="+880 1X00 000000" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Office Location</label>
              <input value={profile.location} onChange={field("location")} placeholder="Area, City" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>About / Bio</label>
              <textarea
                value={profile.bio}
                onChange={field("bio")}
                rows={3}
                placeholder="Describe your experience and specialties..."
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-zinc-800 border border-zinc-700 p-6 space-y-5">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-3">Change Password</h3>
            <div>
              <label className={labelCls}>Current Password</label>
              <input type="password" value={passwords.old} onChange={pwField("old")} placeholder="••••••••" className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>New Password</label>
                <input type="password" value={passwords.new} onChange={pwField("new")} placeholder="••••••••" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Confirm Password</label>
                <input type="password" value={passwords.confirm} onChange={pwField("confirm")} placeholder="••••••••" className={inputCls} />
              </div>
            </div>
            <button className="px-6 py-3 text-xs font-bold text-white uppercase tracking-widest border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
