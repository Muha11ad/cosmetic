import { useEffect } from "react";
import cls from "./Product.module.scss";
import { useParams } from "next/navigation";
import { Container, Row } from "@/shared/ui/grid";
import { IProduct, useProductStore } from "@/enitites/product";
import { ProductCarousel } from "@/widgets/ProductCarousel";
import { ProductCardTitle, ProductPrice } from "@/shared/ui/Text";
import { ProductBody } from "./components/ProductBody";
import { AddToCart } from "@/features/AddToCart";

export const Product = () => {
  const params = useParams();
  const id = params?.id;
  const { getProductById, loading, error, product } = useProductStore(
    (state) => state
  );

  useEffect(() => {
    getProductById(id as string);
  }, [id]);

  return (
    <Container>
      <Row>
        <ProductCarousel Images={product?.Images || []} />
      </Row>
      <Row className={cls.ProductBodyTop}>
        <ProductCardTitle
          className={cls.ProductTitle}
          children={product?.name || "Product name"}
        />
        <ProductPrice
          className={cls.ProductPrice}
          children={product?.price || 999999}
        />
      </Row>
      <ProductBody product={product as IProduct} />
      <AddToCart  />
    </Container>
  );
};
