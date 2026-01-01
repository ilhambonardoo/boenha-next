export const STYLES: Record<string, string> = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  sectionPadding: "py-12 sm:py-20",
  largeSectionPadding: "py-20",

  heading1: "text-4xl sm:text-5xl font-bold",
  heading2: "text-2xl sm:text-3xl font-bold",
  heading3: "text-xl sm:text-2xl font-semibold",
  heading4: "text-lg font-semibold",
  bodyText: "text-base text-gray-700",
  smallText: "text-sm text-gray-600",

  linkDefault: "text-black hover:text-neutral-600 transition-colors text-sm",
  linkActive: "text-amber-300",
  linkInactive: "text-white hover:text-amber-200",

  buttonPrimary:
    "bg-boen-accent text-white rounded-lg text-sm font-medium text-center hover:bg-orange-600 transition-colors px-4 py-2",
  buttonSecondary: "px-4 py-2 rounded-lg text-sm font-medium transition-colors",

  gridAuto: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  gridTwoCols: "grid grid-cols-1 md:grid-cols-2 gap-8",
  gridFourCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",

  gap4: "gap-4",
  gap6: "gap-6",
  gap8: "gap-8",
  gap12: "gap-12",

  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between items-center",
  flexCol: "flex flex-col",
} as const;

export const BREAKPOINTS: Record<string, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
