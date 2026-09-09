
"use client";

import { useEffect, useState } from "react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#43291c]/80 bg-[#1a0f0a]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Voxvera home"
          className="text-lg font-semibold tracking-[-0.02em] text-[#f8f3ed] transition-opacity duration-200 hover:opacity-80"
        >
          VOXVERA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm text-[#c5b8ae] transition-colors duration-200 hover:text-[#f8f3ed]"
            >
              {item.name}
            </a>
          ))}

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              backgroundColor: "#f8f3ed",
              color: "#1a0f0a",
              border: "1px solid #f8f3ed",
            }}
          >
            <span style={{ color: "#1a0f0a" }}>Get Started</span>

            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-200 hover:translate-x-0.5"
              style={{ color: "#1a0f0a" }}
            >
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#43291c] bg-[#1a0f0a]/60 text-[#f8f3ed] transition-all duration-200 hover:border-[#5a3827] hover:bg-[#24150e] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className="text-xl leading-none"
            aria-hidden="true"
          >
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#43291c] bg-[#1a0f0a]/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#c5b8ae] transition-colors duration-200 hover:bg-[#24150e] hover:text-[#f8f3ed]"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-lg"
              style={{
                backgroundColor: "#f8f3ed",
                color: "#1a0f0a",
                border: "1px solid #f8f3ed",
              }}
            >
              <span style={{ color: "#1a0f0a" }}>Get Started</span>

              <span
                aria-hidden="true"
                className="ml-2"
                style={{ color: "#1a0f0a" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


