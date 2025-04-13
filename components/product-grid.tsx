"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import ProductDrawer from "./product-drawer";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer transition-transform hover:scale-105"
          onClick={() => handleProductClick(product)}
        >
          <div className="aspect-square bg-zinc-800 mb-3 relative">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-red-500 font-bold">${product.basePrice}</p>
        </div>
      ))}

      <ProductDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
