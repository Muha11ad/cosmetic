import { useState } from "react";
import { Icon } from "@gravity-ui/uikit";
import cls from "./AddToCart.module.scss";
import { Button } from "@/shared/ui/Button";
import { Counter } from "@/shared/ui/Counter";
import { ShoppingCart } from "@gravity-ui/icons";
import { useTranslation } from "@/shared/hooks/useTranslation";

export const AddToCart = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  function renderContent() {
    if (count === 0) {
      return (
        <Button className={cls.AddToCart} onClick={() => setCount(count + 1)}>
          {t("page.product.addToCart")}
          <Icon data={ShoppingCart} className={cls.icon} />
        </Button>
      );
    } else {
      return <Counter value={count} setValue={setCount} />;
    }
  }
  return renderContent();
};
