"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,14,39,0.8)] backdrop-blur-lg border-b border-[rgba(45,212,191,0.1)] animate-slideDown">
      <div className="container flex justify-between items-center py-4 relative">
        {/* Logo */}
        <a
          href="./"
          className="logo text-2xl font-bold bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)] bg-clip-text text-transparent"
        >
          LIDANOVA
        </a>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(45,212,191,0.1)] text-[var(--color-blue)] hover:bg-[rgba(45,212,191,0.2)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="./lirasoft"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
            >
              Lirasoft
            </a>
          </li>
          <li>
            <a
              href="./lidasoft"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
            >
              Lidasoft
            </a>
          </li>
          <li>
            <a
              href="./cubicaje-3d"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
            >
              Cubicaje
            </a>
          </li>
          <li>
            <a
              href="./chatbots"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
            >
              Agentes de IA
            </a>
          </li>
        </ul>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[rgba(10,14,39,0.95)] backdrop-blur-md shadow-lg z-40 flex flex-col md:hidden">
            <a
              href="./lirasoft"
              className="block w-full text-center py-4 text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ paddingBottom: "15px" }}
            >
              Lirasoft
            </a>
            <a
              href="./lidasoft"
              className="block w-full text-center py-4 text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ paddingBottom: "15px" }}
            >
              Lidasoft
            </a>
            <a
              href="./cubicaje-3d"
              className="block w-full text-center py-4 text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ paddingBottom: "15px" }}
            >
              Cubicaje
            </a>
            <a
              href="./chatbots"
              className="block w-full text-center py-4 text-[var(--color-text-muted)] hover:text-[var(--color-blue)] transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ paddingBottom: "15px" }}
            >
              Agentes de IA
            </a>
          </div>
     )}
      </div>
    </header>
  );
}