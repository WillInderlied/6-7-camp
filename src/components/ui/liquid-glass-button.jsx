import React from "react";

export const LiquidGlassButton = ({ children, as: Component = "button", className = "", ...props }) => {
  return (
    <Component
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(14,165,233,0.3)] ${className}`}
      {...props}
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
      <span className="absolute inset-0 h-full w-full rounded-full border border-white/30 bg-white/10 opacity-100 transition-opacity duration-300 ease-out group-hover:bg-white/20"></span>
      <span className="absolute inset-0 h-full w-full opacity-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
      <span className="absolute -left-[100%] top-0 h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ease-in-out group-hover:left-[100%]"></span>
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">{children}</span>
    </Component>
  );
};
