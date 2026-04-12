import Image from "next/image";

export default function TestimonialCard({ testimonial, className = "" }) {
  return (
    <div
      className={`group bg-white p-8 sm:p-10 border border-zinc-200 transition-all duration-500 hover:border-zinc-950 shadow-sm hover:shadow-xl hover:-translate-y-1 relative flex flex-col ${className}`}
    >
      <div className="absolute top-6 right-6 text-zinc-100 transition-colors duration-500 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Star Rating mapped to solid sharp shapes to match aesthetics */}
      <div className="flex items-center gap-1.5 mb-8 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-zinc-950"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="orange"
            stroke="orange"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-zinc-700 text-lg font-medium leading-relaxed mb-auto pb-8 relative z-10">
        &quot;{testimonial.text}&quot;
      </p>

      {/* User Profile Container */}
      <div className="flex items-center gap-5 mt-auto border-t border-zinc-100 pt-6 relative z-10 transition-colors duration-500 group-hover:border-zinc-200">
        <div className="relative w-14 h-14 overflow-hidden bg-zinc-200 rounded-full border border-zinc-200 shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="56px"
            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-in-out"
          />
        </div>
        <div>
          <h4 className="font-bold text-zinc-950 tracking-tight text-[15px]">
            {testimonial.name}
          </h4>
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-semibold mt-1">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
}
