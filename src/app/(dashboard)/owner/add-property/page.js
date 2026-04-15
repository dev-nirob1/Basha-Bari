"use client";

import { useState } from "react";

const STEPS = ["Basic Info", "Size & Pricing", "Availability", "Amenities", "Photos & Review"];

const AMENITIES_LIST = [
  "High-Speed WiFi", "Generator Backup", "Car Parking", "Bike Parking",
  "Lift / Elevator", "CCTV Security", "24/7 Security Guard", "Gas Line",
  "Rooftop Access", "Gym", "Swimming Pool", "Prayer Room",
];

const inputCls = "w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600";
const labelCls = "block text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-2";
const selectCls = `${inputCls} cursor-pointer`;

const INITIAL = {
  title: "", type: "Apartment", district: "", area: "", address: "", floor: "",
  beds: "", baths: "", area_sqft: "", rent: "", deposit: "", furnished: "Furnished",
  available_from: "", lease_duration: "1 year", tenant_pref: "Any", contact: "", negotiable: false,
  amenities: [],
  cover_image: "", images: ["", "", "", ""],
};

export default function AddPropertyPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL);

  const field = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: val }));
  };

  const toggleAmenity = (name) => {
    setForm((p) => ({
      ...p,
      amenities: p.amenities.includes(name)
        ? p.amenities.filter((a) => a !== name)
        : [...p.amenities, name],
    }));
  };

  const setImage = (idx, val) => {
    setForm((p) => {
      const imgs = [...p.images];
      imgs[idx] = val;
      return { ...p, images: imgs };
    });
  };

  const canNext = () => {
    if (step === 0) return form.title && form.district && form.area;
    if (step === 1) return form.beds && form.baths && form.rent;
    return true;
  };

  // ─── Step Content ────────────────────────────────────────────
  const renderStep = () => {
    if (step === 0) return (
      <div className="space-y-5">
        <div>
          <label className={labelCls}>Property Title *</label>
          <input value={form.title} onChange={field("title")} placeholder="e.g. Modern 3-Bedroom Apartment in Gulshan" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Property Type *</label>
          <select value={form.type} onChange={field("type")} className={selectCls}>
            {["Apartment", "House", "Villa", "Studio", "Duplex", "Penthouse"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>District *</label>
            <input value={form.district} onChange={field("district")} placeholder="e.g. Dhaka" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Area / Thana *</label>
            <input value={form.area} onChange={field("area")} placeholder="e.g. Gulshan 2" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Full Address</label>
          <input value={form.address} onChange={field("address")} placeholder="House #, Road #, Block..." className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Floor Number</label>
          <input value={form.floor} onChange={field("floor")} type="number" placeholder="e.g. 5" className={inputCls} />
        </div>
      </div>
    );

    if (step === 1) return (
      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Bedrooms *</label>
            <input value={form.beds} onChange={field("beds")} type="number" min={0} placeholder="3" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Bathrooms *</label>
            <input value={form.baths} onChange={field("baths")} type="number" min={0} placeholder="2" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Area (sqft)</label>
            <input value={form.area_sqft} onChange={field("area_sqft")} type="number" placeholder="1200" className={inputCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Monthly Rent (BDT) *</label>
            <input value={form.rent} onChange={field("rent")} type="number" placeholder="65000" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Security Deposit (BDT)</label>
            <input value={form.deposit} onChange={field("deposit")} type="number" placeholder="195000" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Furnished Status</label>
          <div className="grid grid-cols-3 gap-3">
            {["Furnished", "Semi-furnished", "Unfurnished"].map((opt) => (
              <label key={opt} className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-colors ${
                form.furnished === opt
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}>
                <input type="radio" name="furnished" value={opt} checked={form.furnished === opt} onChange={field("furnished")} className="sr-only" />
                <span className={`w-3 h-3 border ${form.furnished === opt ? "border-emerald-500 bg-emerald-500" : "border-zinc-600"}`} />
                <span className="text-xs font-medium">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    );

    if (step === 2) return (
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Available From</label>
            <input value={form.available_from} onChange={field("available_from")} type="date" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Lease Duration</label>
            <select value={form.lease_duration} onChange={field("lease_duration")} className={selectCls}>
              {["6 months", "1 year", "2 years", "Negotiable"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className={labelCls}>Preferred Tenant</label>
          <div className="grid grid-cols-3 gap-3">
            {["Family", "Bachelor", "Any"].map((opt) => (
              <label key={opt} className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-colors ${
                form.tenant_pref === opt
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
              }`}>
                <input type="radio" name="tenant_pref" value={opt} checked={form.tenant_pref === opt} onChange={field("tenant_pref")} className="sr-only" />
                <span className={`w-3 h-3 border ${form.tenant_pref === opt ? "border-emerald-500 bg-emerald-500" : "border-zinc-600"}`} />
                <span className="text-xs font-medium">{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className={labelCls}>Contact Phone</label>
          <input value={form.contact} onChange={field("contact")} type="tel" placeholder="+880 1X00 000000" className={inputCls} />
        </div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-5 h-5">
            <input type="checkbox" checked={form.negotiable} onChange={field("negotiable")} className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
            <div className="w-full h-full border border-zinc-600 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all" />
            <svg className="absolute inset-0 w-full h-full text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <span className="text-sm text-zinc-300 font-medium">Rent is negotiable</span>
        </label>
      </div>
    );

    if (step === 3) return (
      <div>
        <p className="text-xs text-zinc-400 mb-6 font-light">Select all amenities available at this property.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {AMENITIES_LIST.map((amenity) => {
            const checked = form.amenities.includes(amenity);
            return (
              <label key={amenity} className={`flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-200 ${
                checked
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-zinc-700 hover:border-zinc-600"
              }`}>
                <div className="relative w-4 h-4 shrink-0">
                  <input type="checkbox" checked={checked} onChange={() => toggleAmenity(amenity)} className="sr-only" />
                  <div className={`w-full h-full border transition-all ${checked ? "bg-emerald-500 border-emerald-500" : "border-zinc-600"}`} />
                  {checked && <svg className="absolute inset-0 w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>}
                </div>
                <span className={`text-xs font-medium ${checked ? "text-emerald-400" : "text-zinc-400"}`}>{amenity}</span>
              </label>
            );
          })}
        </div>
      </div>
    );

    if (step === 4) return (
      <div className="space-y-6">
        <div>
          <label className={labelCls}>Cover Image URL *</label>
          <input value={form.cover_image} onChange={field("cover_image")} placeholder="https://images.unsplash.com/..." className={inputCls} />
          {form.cover_image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={form.cover_image} alt="Cover" className="mt-3 h-40 w-full object-cover border border-zinc-700" />
          )}
        </div>
        <div>
          <label className={labelCls}>Additional Images (up to 4)</label>
          <div className="space-y-3">
            {form.images.map((img, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[9px] font-bold text-zinc-600 w-4 shrink-0">{i + 1}</span>
                <input value={img} onChange={(e) => setImage(i, e.target.value)} placeholder="https://..." className={inputCls} />
              </div>
            ))}
          </div>
        </div>

        {/* Review Summary */}
        <div className="border border-zinc-700 bg-zinc-900 p-6 space-y-4">
          <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em]">Review Before Publishing</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              ["Title", form.title || "—"],
              ["Type", form.type],
              ["Location", [form.area, form.district].filter(Boolean).join(", ") || "—"],
              ["Bedrooms / Baths", form.beds && form.baths ? `${form.beds} BD / ${form.baths} BA` : "—"],
              ["Rent", form.rent ? `৳${Number(form.rent).toLocaleString()} / mo` : "—"],
              ["Furnished", form.furnished],
              ["Available From", form.available_from || "—"],
              ["Lease", form.lease_duration],
              ["Preferred Tenant", form.tenant_pref],
              ["Amenities", form.amenities.length ? `${form.amenities.length} selected` : "None"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-0.5">{k}</p>
                <p className="text-xs text-zinc-300 font-medium">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h2 className="text-xl font-black text-white tracking-tighter">Add New Property</h2>
        <p className="text-zinc-500 text-xs font-medium mt-1">Complete all steps to publish your listing.</p>
      </div>

      {/* Progress Steps */}
      <div className="bg-zinc-800 border border-zinc-700 p-6">
        <div className="flex items-center gap-0">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <button
                onClick={() => i < step && setStep(i)}
                className={`flex flex-col items-center gap-1.5 min-w-[60px] group ${i < step ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className={`w-8 h-8 border-2 flex items-center justify-center text-xs font-black transition-all ${
                  i === step
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : i < step
                    ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400"
                    : "border-zinc-700 text-zinc-600"
                }`}>
                  {i < step ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`text-[8px] font-bold uppercase tracking-wider hidden sm:block whitespace-nowrap ${
                  i === step ? "text-emerald-400" : i < step ? "text-zinc-500" : "text-zinc-700"
                }`}>{s}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-2 transition-colors ${i < step ? "bg-emerald-500/40" : "bg-zinc-700"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-zinc-800 border border-zinc-700 p-6 sm:p-8">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-zinc-700 pb-4 mb-6">
          Step {step + 1}: {STEPS[step]}
        </h3>
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-6 py-3 text-xs font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className="px-8 py-3 text-xs font-bold text-white uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next Step →
          </button>
        ) : (
          <button className="px-8 py-3 text-xs font-bold text-white uppercase tracking-widest bg-emerald-500 hover:bg-emerald-600 transition-colors">
            Publish Listing
          </button>
        )}
      </div>
    </div>
  );
}
