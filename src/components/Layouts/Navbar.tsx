"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../utils/Feature/LanguageSwitcher";
import Image from "next/image";
import { ROUTES } from "../../constants/routes";

const NAV_LINKS = [
  { path: ROUTES.HOME, key: "nav.home" },
  { path: ROUTES.BUSINESS_LINES, key: "nav.lini_bisnis" },
  { path: ROUTES.PRODUCTS, key: "nav.products" },
  { path: ROUTES.GALLERY, key: "nav.gallery" },
  { path: ROUTES.CONTACT, key: "nav.contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const pathWithoutLocale = pathname.replace(/^\/(id|en)/, "");
  const isActive = (path: string) =>
    pathWithoutLocale === path || (path === "/" && pathWithoutLocale === "");

  return (
    <>
      <nav className="h-16 w-full bg-white backdrop-blur-md fixed z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={ROUTES.HOME} className="shrink-0">
              <Image
                src="/assets/logo/logo.png"
                alt="logo boenha"
                height={60}
                width={150}
              />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-[#fc812b] font-bold"
                      : "text-black font-medium hover:text-[#fc812b]"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            <button
              className="md:hidden p-2 text-slate-900 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#fc812b]">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#fc812b] font-bold"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  );
}
