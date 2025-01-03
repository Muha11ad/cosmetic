import { useEffect } from "react";
import cls from "./Product.module.scss";
import { useParams } from "next/navigation";
import { AddToCart } from "@/features/AddToCart";
import { renderSkeleton } from "@/shared/lib/helpers";
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

  function renderProduct() {
    return (
      <>
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
            <AddToCart
              buttonClass={cls.ProductAddToCart}
              product={(product as IProduct) || {}}
            />
          </Col>
          <Col>
            <ProductPrice
              className={cls.ProductPrice}
              children={product?.price || 999999}
            />
          </Col>
        </Row>
        <ProductBody product={product as IProduct} />
      </>
    );
  }
  function renderContent() {
    if (loading) {
      return renderSkeleton();
    }
    if (error) {
      return <h1>Error</h1>;
    }
    return renderProduct();
  }
  useEffect(() => {
    getProductById(id as string);
  }, [id]);

  return <Container>{renderContent()}</Container>;
};
