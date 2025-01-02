import cls from "./Cart.module.scss";
import { Link } from "@/shared/ui/link";
import { Container } from "@/shared/ui/grid";
import { useTranslation } from "@/shared/hooks/useTranslation";

export const Cart = () => {
  const { t } = useTranslation();
  return (
    <Container className="mt-4">
      <Link className={cls.ToOrderLink} href="/order">
        {t("page.cart.linkToOrder")}
      </Link>
    </Container>
  );
};
