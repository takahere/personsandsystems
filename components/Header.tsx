"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-black">
      <div className="flex items-center justify-between h-full">
        {/* Left: Hamburger menu + Brand name */}
        <div className="flex items-center gap-3 px-4">
          <button className="flex flex-col gap-[5px] p-1 hover:opacity-70 transition-opacity">
            <span className="w-[18px] h-[1.5px] bg-white"></span>
            <span className="w-[18px] h-[1.5px] bg-white"></span>
          </button>
          <span className="text-white text-[11px] uppercase tracking-[0.12em] font-normal">
            Persons and Systems
          </span>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-white text-2xl font-bold italic"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            P&S
          </span>
        </div>

        {/* Right: Navigation buttons */}
        <nav className="flex items-center h-full">
          <a
            href="#"
            className="h-full px-6 flex items-center bg-cream hover:bg-cream-hover text-black text-[11px] uppercase tracking-[0.08em] font-medium transition-colors duration-200"
          >
            Join
          </a>
          <a
            href="#"
            className="h-full px-6 flex items-center bg-cream hover:bg-cream-hover text-black text-[11px] uppercase tracking-[0.08em] font-medium transition-colors duration-200 border-l border-black/10"
          >
            Gift
          </a>
          <a
            href="#"
            className="h-full px-6 flex items-center bg-cream hover:bg-cream-hover text-black text-[11px] uppercase tracking-[0.08em] font-medium transition-colors duration-200 border-l border-black/10"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
