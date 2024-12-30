import React from "react";
import { Col, Row } from "@/shared/ui/grid";
import { ProductCard } from "@/widgets/ProductCard";

export const ProductsList = () => {
  const products = [
    {
      id: 1,
      price: 10000,
      available: true,
      name: "Product 1",
      purpose: "This is a product for you",
      imageUrl:
        "https://deoprocemarket.ru/upload/resize_cache/iblock/f7a/400_400_140cd750bba9870f18aada2478b24840a/2ty1ernt53ye489j5f0w2w074bkv08pe.jpg",
    },
    {
      id: 2,
      price: 100,
      available: true,
      name: "Product 1",
      purpose: "This is a product for you",
      imageUrl:
        "https://deoprocemarket.ru/upload/resize_cache/iblock/f7a/400_400_140cd750bba9870f18aada2478b24840a/2ty1ernt53ye489j5f0w2w074bkv08pe.jpg",
    },
    {
      id: 3,
      price: 100,
      available: true,
      name: "Product 1",
      purpose: "This is a product for you",
      imageUrl:
        "https://deoprocemarket.ru/upload/resize_cache/iblock/f7a/400_400_140cd750bba9870f18aada2478b24840a/2ty1ernt53ye489j5f0w2w074bkv08pe.jpg",
    },
    {
      id: 3,
      price: 100,
      available: true,
      name: "Product 1",
      purpose: "This is a product for you",
      imageUrl:
        "https://deoprocemarket.ru/upload/resize_cache/iblock/f7a/400_400_140cd750bba9870f18aada2478b24840a/2ty1ernt53ye489j5f0w2w074bkv08pe.jpg",
    },
  ];
  return (
    <Row align="center" justify="center">
      {products.map((product) => (
        <Col key={product.id} md={6} sm={6} xs={6}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
