export const ROUTES = {
  HOME: "/",
  BUSINESS_LINES: "/lini-bisnis",
  PRODUCTS: "/produk",
  GALLERY: "/galeri",
  CONTACT: "/kontak",
} as const;

export const ROUTE_VALUES = Object.values(ROUTES) as string[];

export type RouteKey = keyof typeof ROUTES;
