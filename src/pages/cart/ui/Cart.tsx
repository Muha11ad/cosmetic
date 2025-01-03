import { useEffect } from "react";
import cls from "./Cart.module.scss";
import { useCartStore } from "@/enitites/cart";
import { Col, Container, Row } from "@/shared/ui/grid";
import { CartProduct } from "./component/CartProduct";
import { useTranslation } from "@/shared/hooks/useTranslation";

export const Cart = () => {
  const { cart, loadCart } = useCartStore((state) => state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadCart();
    }
  }, []);

  function renderCart() {
    return Object.values(cart).map((cartItem) => {
      return (
        <Col key={cartItem.id} className={cls.CartProduct}>
          <CartProduct
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
            imageUrl={cartItem.imageUrl}
          />
        </Col>
      );
    });
  }

  function renderContent() {
    if (Object.keys(cart).length === 0) {
      return <h2>cart is empty</h2>;
    }
    return renderCart();
  }

  return (
    <Container className="mt-4">
      <Row>{renderContent()}</Row>
    </Container>
  );
};
