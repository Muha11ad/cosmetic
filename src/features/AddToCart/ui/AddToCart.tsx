import { FC, useState } from "react";
import cls from "./AddToCart.module.scss";
import { Button } from "@/shared/ui/Button";
import { Counter } from "@/shared/ui/Counter";
import { ShoppingCart } from "@gravity-ui/icons";
import { ButtonWidth, Icon } from "@gravity-ui/uikit";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { classNames } from "@/shared/lib/classNames/classNames";

interface IAddToCartProps {
  buttonClass?: string;
}

export const AddToCart: FC<IAddToCartProps> = ({ buttonClass }) => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  function renderContent() {
    if (count === 0) {
      return (
        <Button
          className={classNames([cls.AddToCart, buttonClass])}
          onClick={() => setCount(count + 1)}
        >
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
