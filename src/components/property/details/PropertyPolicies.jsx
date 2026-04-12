export default function PropertyPolicies({ policies }) {
  if (!policies) return null;

  return (
    <div className="pb-8 border-b border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-950 mb-6 font-display uppercase tracking-tight">Property Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {policies.map((policy, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-zinc-100 shrink-0">
               {/* Simplified dynamic icon based on policy label */}
               <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
               </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-1">{policy.label}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">{policy.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
