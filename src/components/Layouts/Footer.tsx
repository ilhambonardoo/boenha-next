"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  COMPANY_INFO,
  SOCIAL_LINKS,
  FOOTER_QUICK_LINKS,
  BUSINESS_LINES_FOOTER,
  SOCIAL_MEDIA_LINKS,
  STYLES,
} from "../../constants";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white ">
      <div className={`${STYLES.container} ${STYLES.sectionPadding}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t("footer.subtitle")}
            </p>
            <div className="flex gap-3 flex-wrap">
              {SOCIAL_MEDIA_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`p-3 rounded-full bg-gray-700 ${social.color} ${social.bgColor} transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 border-b-2 border-amber-400 pb-2">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                  >
                    → {link.labelI18n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 border-b-2 border-amber-400 pb-2">
              {t("footer.businessLines")}
            </h4>
            <ul className="space-y-2">
              {BUSINESS_LINES_FOOTER.map((link) => (
                <li key={link.path || link.labelI18n}>
                  {link.path ? (
                    <Link
                      href={link.path}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      → {link.labelI18n}
                    </Link>
                  ) : (
                    <span className="text-gray-300 text-sm">
                      → {link.labelI18n}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400 border-b-2 border-amber-400 pb-2">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-amber-400 group-hover:scale-125 transition-transform" />
                <span className="text-gray-300 text-xs leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="shrink-0 text-amber-400 group-hover:scale-125 transition-transform" />
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm "
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhone className="shrink-0 text-amber-400 group-hover:scale-125 transition-transform" />
                <a
                  href={SOCIAL_LINKS.phone}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className={`${STYLES.container} py-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-400 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Made with <span className="text-red-500">❤️</span> for Quality &
              Trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
