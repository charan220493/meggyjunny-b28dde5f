import { Region } from "@/lib/currency";

export interface Product {
  id: string;
  name: string;
  category: string;
  priceUSD: number;
  priceINR: number;
  image: string;
  description: string;
  availableIn: Region[];
}

export interface CartItem extends Product {
  quantity: number;
}

export const getProductPrice = (product: Product, region: Region): number => {
  return region === 'US' ? product.priceUSD : product.priceINR;
};
