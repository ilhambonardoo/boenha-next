import type { NavLink, FooterLink } from "../types";
import { ROUTES } from "./routes";

export const NAV_LINKS: NavLink[] = [
  { path: ROUTES.HOME, key: "nav.home" },
  { path: ROUTES.BUSINESS_LINES, key: "nav.lini_bisnis" },
  { path: ROUTES.PRODUCTS, key: "nav.products" },
  { path: ROUTES.GALLERY, key: "nav.gallery" },
  { path: ROUTES.CONTACT, key: "nav.contact" },
] as const;

export const FOOTER_QUICK_LINKS: FooterLink[] = [
  { path: ROUTES.HOME, labelI18n: "HOME" },
  { path: ROUTES.PRODUCTS, labelI18n: "PRODUCTS" },
  { path: ROUTES.CONTACT, labelI18n: "CONTACT" },
] as const;

export const BUSINESS_LINES_FOOTER: FooterLink[] = [
  { path: ROUTES.BUSINESS_LINES, labelI18n: "CHICKEN_FARMING" },
] as const;
