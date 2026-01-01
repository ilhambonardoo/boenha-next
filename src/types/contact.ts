export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
}

export interface SocialLinks {
  whatsapp: string;
  email: string;
  phone: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  shopee?: string;
}

export interface SocialMediaLink {
  icon: React.ComponentType<{ size?: number }>;
  url: string;
  label: string;
  color: string;
  bgColor: string;
}

export interface OperatingHours {
  day: string;
  time: string;
}

export interface NavLink {
  path: string;
  key: string;
}

export interface FooterLink {
  path: string;
  labelI18n: string;
}
