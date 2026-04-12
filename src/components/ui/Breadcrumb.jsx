import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex text-sm font-medium text-zinc-500" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-4">
        <li className="inline-flex items-center">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-zinc-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {item.href ? (
                <Link href={item.href} className="text-zinc-600 hover:text-emerald-700 ml-1 md:ml-2 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-900 ml-1 md:ml-2">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
