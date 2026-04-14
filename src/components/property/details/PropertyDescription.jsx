export default function PropertyDescription({ description }) {
  if (!description) return null;

  return (
    <div className="pb-8 border-b border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-950 mb-6 font-display uppercase tracking-tight">About this Property</h2>
      <p className="text-zinc-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
}
