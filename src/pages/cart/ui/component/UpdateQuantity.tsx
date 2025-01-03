import { useCartStore } from "@/enitites/cart";
import { ICartItem } from "@/enitites/cart/types";
import { Counter } from "@/shared/ui/Counter";
import { FC, useEffect, useState } from "react";

interface IUpdateQuantityProps {
  count: number;
  product: ICartItem;
}

export const UpdateQuantity: FC<IUpdateQuantityProps> = ({
  count,
  product,
}) => {
  const [quantity, setQuantity] = useState<number>(count);
  const { updateQuantity, deleteFromCart, cart } = useCartStore(
    (state) => state
  );

  useEffect(() => {
    if (cart[product?.id] && quantity > 0) {
      updateQuantity(product.id, quantity);
    } else if (cart[product.id] && quantity === 0) {
      deleteFromCart(product.id);
    }
  }, [quantity]);

  return <Counter value={quantity} setValue={setQuantity} />;
};
