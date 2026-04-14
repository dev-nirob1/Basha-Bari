export default function PropertyMap() {
  return (
    <div className="pb-8 border-b border-zinc-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-950 font-display uppercase tracking-tight">Location</h2>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Gulshan+2,+Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-medium hover:underline flex items-center gap-1"
        >
          View on Google Maps
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <div className="w-full aspect-[16/7] bg-zinc-100 overflow-hidden relative">
        {/* Google Maps Iframe */}
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gulshan%202,%20Dhaka+(BashaBari)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Property Location"
          className="border-0"
        ></iframe>
      </div>
      <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
        Located in one of Dhaka's most secure and accessible areas. Close to
        parks, high-end restaurants, and international schools.
      </p>
    </div>
  );
}
