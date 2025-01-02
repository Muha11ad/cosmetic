import { useEffect } from "react";
import cls from "./Product.module.scss";
import { useParams } from "next/navigation";
import { AddToCart } from "@/features/AddToCart";
import { Col, Container, Row } from "@/shared/ui/grid";
import { ProductBody } from "./components/ProductBody";
import { ProductCarousel } from "@/widgets/ProductCarousel";
import { IProduct, useProductStore } from "@/enitites/product";
import { ProductCardTitle, ProductPrice } from "@/shared/ui/Text";

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
      </Row>
      <Row align="center" justify="around">
        <Col>
          <AddToCart buttonClass={cls.ProductAddToCart} />
        </Col>
        <Col>
          <ProductPrice
            className={cls.ProductPrice}
            children={product?.price || 999999}
          />
        </Col>
      </Row>
      <ProductBody product={product as IProduct} />
    </Container>
  );
};
