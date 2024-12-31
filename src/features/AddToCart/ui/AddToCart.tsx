import { Icon } from "@gravity-ui/uikit";
import cls from "./AddToCart.module.scss";
import { Button } from "@/shared/ui/Button";
import { ShoppingCart } from "@gravity-ui/icons";
import { useTranslation } from "@/shared/hooks/useTranslation";

export const AddToCart = () => {
  const { t } = useTranslation();
  return (
    <Button className={cls.AddToCart}>
      {t("page.product.addToCart")}
      <Icon data={ShoppingCart} className={cls.icon} />
    </Button>
  );
};
