export interface Product {
  id: number;
  image: string;
  ctaLink: string;
  name?: string;
  description?: string;
  specifications?: string[];
  ctaText?: string;
}

export interface ProductBenefit {
  emoji: string;
  title: string;
  desc: string;
}
