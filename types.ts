export type Size = "S" | "M" | "L" | "XL";
export type Color = "black" | "white";

export interface ProductImage {
  front: string;
  back?: string;
}

export interface Variation {
  variationId: string;
  size: Size;
  color: Color;
  sku: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  imageUrl: string;
  images: {
    [key in Color]?: ProductImage;
  };
  variations: Variation[];
}

export interface SelectedVariation {
  size: Size | null;
  color: Color | null;
}
