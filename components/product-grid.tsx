"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import ProductDrawer from "./product-drawer";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden border-none cursor-pointer hover:shadow-lg gap-0 transition-shadow bg-neutral-800/30 p-0"
          onClick={() => handleProductClick(product)}
        >
          <div className="aspect-square relative">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg line-clamp-1 text-neutral-100">
              {product.name}
            </h2>
            <p className="text-muted-foreground line-clamp-2 text-sm mt-1">
              {product.description}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <span className="font-bold text-neutral-100">
              ${product.basePrice}
            </span>
            <Button variant="secondary" size="sm" className="cursor-pointer">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}

      <ProductDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
