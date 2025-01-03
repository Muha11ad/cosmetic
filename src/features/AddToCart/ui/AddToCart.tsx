import { Icon } from "@gravity-ui/uikit";
import cls from "./AddToCart.module.scss";
import { Button } from "@/shared/ui/Button";
import { Counter } from "@/shared/ui/Counter";
import { IProduct } from "@/enitites/product";
import { useCartStore } from "@/enitites/cart";
import { FC, useEffect, useState } from "react";
import { ShoppingCart } from "@gravity-ui/icons";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { classNames } from "@/shared/lib/classNames/classNames";

interface IAddToCartProps {
  product: IProduct;
  buttonClass?: string;
}

export const AddToCart: FC<IAddToCartProps> = ({ product, buttonClass }) => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  const { addToCart, updateQuantity, deleteFromCart, cart } = useCartStore(
    (state) => state
  );

  function getImageUrl(): string {
    if (product.Images.length > 0) {
      return product.Images[0].imageUrl;
    }
    return "";
  }

  useEffect(() => {
    if (cart[product.id]) {
      if (count > 0) {
        updateQuantity(product.id, count);
      } else {
        deleteFromCart(product.id);
      }
    } else if (count > 0) {
      const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: getImageUrl(),
        quantity: count,
      };
      addToCart(cartProduct);
    }
  }, [count]);

  function renderContent() {
    if (count > 0) {
      return <Counter value={count} setValue={setCount} />;
    }
    return (
      <Button
        onClick={() => setCount(count + 1)}
        className={classNames([cls.AddToCart, buttonClass])}
      >
        {t("page.product.addToCart")}
        <Icon data={ShoppingCart} className={cls.icon} />
      </Button>
    );
  }

  return renderContent();
};
