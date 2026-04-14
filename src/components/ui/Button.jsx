import Link from "next/link";

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  href,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-between gap-6 transition-all duration-500 font-bold uppercase tracking-[0.3em] text-xs transition-all duration-500 rounded-none";
  
  const variants = {
    primary: "bg-zinc-950 text-white hover:bg-emerald-700",
    secondary: "bg-white text-zinc-950 border border-zinc-200 hover:border-zinc-950 shadow-sm hover:shadow-xl",
    outline: "bg-transparent border border-zinc-200 text-zinc-950 hover:border-zinc-950",
    ghost: "bg-transparent text-zinc-500 hover:text-zinc-950",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-10 py-5",
    lg: "px-12 py-6 text-sm",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}