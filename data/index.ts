import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Web3 T-Shirt",
    description:
      "A stylish t-shirt with HIGH QUALITY WEB3 logo front and back print",
    basePrice: 70,
    imageUrl: "/images/t-shirt-logo-web3.jpg",
    images: {
      white: {
        front: "/images/t-shirt-logo-web3.jpg",
        back: "/images/t-shirt-phrase-web3.jpg",
      },
      black: {
        front: "/images/t-shirt-logo-web3-black.jpg",
        back: "/images/t-shirt-phrase-web3-black.jpg",
      },
    },
    variations: [
      {
        variationId: "1-s-black",
        size: "S",
        color: "black",
        sku: "WLT-S-BLK",
        stock: 20,
      },
      {
        variationId: "1-m-black",
        size: "M",
        color: "black",
        sku: "WLT-M-BLK",
        stock: 25,
      },
      {
        variationId: "1-l-black",
        size: "L",
        color: "black",
        sku: "WLT-L-BLK",
        stock: 15,
      },
      {
        variationId: "1-s-white",
        size: "S",
        color: "white",
        sku: "WLT-S-WHT",
        stock: 18,
      },
      {
        variationId: "1-m-white",
        size: "M",
        color: "white",
        sku: "WLT-M-WHT",
        stock: 22,
      },
      {
        variationId: "1-l-white",
        size: "L",
        color: "white",
        sku: "WLT-L-WHT",
        stock: 12,
      },
      {
        variationId: "1-xl-white",
        size: "XL",
        color: "white",
        sku: "WLT-XL-WHT",
        stock: 12,
      },
    ],
  },
  {
    id: "2",
    name: "High Quality Web3 Hoodie",
    description: "A comfortable hoodie with the HIGH QUALITY WEB3 logo",
    basePrice: 120,
    imageUrl: "/images/hoodie-logo-web3-black.jpg",
    images: {
      black: {
        front: "/images/hoodie-logo-web3-black.jpg",
      },
      white: {
        front: "/images/hoodie-logo-web3.jpg",
      },
    },
    variations: [
      {
        variationId: "2-m-black",
        size: "M",
        color: "black",
        sku: "WH-M-BLK",
        stock: 7,
      },
      {
        variationId: "2-l-black",
        size: "L",
        color: "black",
        sku: "WH-L-BLK",
        stock: 3,
      },
      {
        variationId: "2-xl-black",
        size: "XL",
        color: "black",
        sku: "WH-XL-BLK",
        stock: 5,
      },
      {
        variationId: "2-m-white",
        size: "M",
        color: "white",
        sku: "WH-M-WHT",
        stock: 6,
      },
      {
        variationId: "2-l-white",
        size: "L",
        color: "white",
        sku: "WH-L-WHT",
        stock: 4,
      },
    ],
  },
  {
    id: "3",
    name: "Quality Web3 Hoodie",
    description: "A comfortable hoodie with the HIGH QUALITY WEB3 logo",
    basePrice: 120,
    imageUrl: "/images/hoodie-phrase-web3.jpg",
    images: {
      black: {
        front: "/images/hoodie-phrase-web3-black.jpg",
      },
      white: {
        front: "/images/hoodie-phrase-web3.jpg",
      },
    },
    variations: [
      {
        variationId: "2-m-black",
        size: "M",
        color: "black",
        sku: "WH-M-BLK",
        stock: 7,
      },
      {
        variationId: "2-l-black",
        size: "L",
        color: "black",
        sku: "WH-L-BLK",
        stock: 3,
      },
      {
        variationId: "2-xl-black",
        size: "XL",
        color: "black",
        sku: "WH-XL-BLK",
        stock: 5,
      },
      {
        variationId: "2-m-white",
        size: "M",
        color: "white",
        sku: "WH-M-WHT",
        stock: 6,
      },
      {
        variationId: "2-l-white",
        size: "L",
        color: "white",
        sku: "WH-L-WHT",
        stock: 4,
      },
    ],
  },
];
