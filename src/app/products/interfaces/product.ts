export interface Product {
  id: number;
  active: number;
  category?: category;
  image?: image;
  master?: master;
  description: string;
  name: string;
  slug: string;
}

export interface category {
  id: number;
  name: string;
  slug: string;
}

export interface image {
  id: number;
  url?: string;
}

export interface master {
  id: number;
  price: number;
  stock: number;
}
