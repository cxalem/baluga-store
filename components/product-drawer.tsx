"use client";

import { useState, useEffect } from "react";
import type { Product, SelectedVariation } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import ProductGallery from "./product-gallery";

interface ProductDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductDrawer({
  isOpen,
  onClose,
  product,
}: ProductDrawerProps) {
  const [selectedVariation, setSelectedVariation] = useState<SelectedVariation>(
    {
      size: null,
      color: null,
    }
  );
  const [currentView, setCurrentView] = useState<"front" | "back">("front");

  // Reset selection when product changes
  useEffect(() => {
    if (product) {
      setSelectedVariation({
        size: null,
        color: product.variations[0]?.color || null,
      });
      setCurrentView("front");
    }
  }, [product]);

  if (!product) return null;

  // Get unique sizes and colors from variations
  const availableSizes = Array.from(
    new Set(product.variations.map((v) => v.size))
  );
  const availableColors = Array.from(
    new Set(product.variations.map((v) => v.color))
  );

  // Check if the current selection is in stock
  const getStockForSelection = () => {
    if (!selectedVariation.size || !selectedVariation.color) return 0;

    const variation = product.variations.find(
      (v) =>
        v.size === selectedVariation.size && v.color === selectedVariation.color
    );

    return variation ? variation.stock : 0;
  };

  const isSelectionComplete = selectedVariation.size && selectedVariation.color;
  const stockAvailable = getStockForSelection();
  const canAddToCart = isSelectionComplete && stockAvailable > 0;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-neutral-900/80 md:bg-neutral-900/20 backdrop-blur-md border-none px-4 text-white">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl text-white">{product.name}</SheetTitle>
          <SheetDescription className="text-white/70">
            {product.description}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6">
          <ProductGallery
            productName={product.name}
            selectedColor={selectedVariation.color}
            productImage={
              selectedVariation.color
                ? product.images[selectedVariation.color]
                : undefined
            }
            defaultImage={product.imageUrl}
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setSelectedVariation((prev) => ({ ...prev, size }))
                    }
                    className={cn(
                      "h-10 min-w-10 rounded-md px-3 flex items-center justify-center text-sm font-medium transition-all cursor-pointer",
                      selectedVariation.size === size
                        ? "bg-neutral-700 text-white"
                        : "bg-neutral-400 hover:bg-accent hover:text-accent-foreground"
                    )}
                    aria-checked={selectedVariation.size === size}
                    role="radio"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-4">
                {availableColors.map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 cursor-pointer rounded transition-all ${
                      color === "black"
                        ? "bg-black"
                        : "bg-white border border-gray-300"
                    } ${
                      selectedVariation.color === color
                        ? "ring-2 ring-offset-2 ring-offset-background ring-primary"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedVariation((prev) => ({
                        ...prev,
                        color: color,
                      }))
                    }
                    aria-label={color}
                    role="radio"
                    aria-checked={selectedVariation.color === color}
                  />
                ))}
              </div>
            </div>

            {isSelectionComplete && (
              <div className="text-sm">
                {stockAvailable > 0 ? (
                  <p className="text-green-500">{stockAvailable} in stock</p>
                ) : (
                  <p className="text-red-500">Out of stock</p>
                )}
              </div>
            )}

            <Button
              className="w-full cursor-pointer bg-neutral-800 hover:bg-neutral-700"
              disabled={!canAddToCart}
              onClick={() => {
                // This would handle the checkout process in a real app
                alert("Added to cart!");
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
