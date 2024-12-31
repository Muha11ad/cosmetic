import { Col, Row } from "@/shared/ui/grid";
import React, { FC, useEffect } from "react";
import { ProductCard } from "@/widgets/ProductCard";
import { renderSkeleton } from "@/shared/lib/helpers";
import { IProduct, useProductStore } from "@/enitites/product";

interface IProductsListProps {
  categoryName: string;
}

export const ProductsList: FC<IProductsListProps> = ({ categoryName }) => {
  const { products, loading, error, getProductByCategoryName } =
    useProductStore((state) => state);

  useEffect(() => {
    getProductByCategoryName(categoryName);    
  }, [categoryName]);

  function renderProducts(products: IProduct[]) {
    return products.map((product) => (
      <Col key={product.id} md={6} sm={6} xs={6}>
        <ProductCard product={product} />
      </Col>
    ));
  }

  function renderContent() {
    if (loading) {
      return renderSkeleton();
    } else if (error) {
      return <h2>{error}</h2>;
    } else {
      console.log(products);
      
      return renderProducts(products);
    }
  }

  return (
    <Row align="center" justify="center">
      {renderContent()}
    </Row>
  );
};
