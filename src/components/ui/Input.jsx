export default function Input({ 
  label, 
  error, 
  className = "", 
  containerClassName = "",
  id,
  ...props 
}) {
  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.4em] mb-3 ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          id={id}
          className={`
            w-full px-5 py-4 bg-zinc-50 border border-zinc-200 
            text-zinc-950 font-medium tracking-wide text-sm
            focus:outline-none focus:bg-white focus:border-emerald-500
            hover:border-zinc-300 transition-all duration-300
            placeholder:text-zinc-300 placeholder:font-light
            rounded-none
            ${error ? 'border-rose-500' : ''}
            ${className}
          `}
          {...props}
        />
        {/* Animated focus border bottom accent */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-500 group-focus-within:w-full"></span>
      </div>
      {error && (
        <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-2 ml-1">
          {error}
        </span>
      )}
    </div>
  );
}