import { Icon } from "@gravity-ui/uikit";
import cls from "./FooterMenu.module.scss";
import { ShoppingCart } from "@gravity-ui/icons";
import { LinkButton } from "@/shared/ui/LinkButton";
import { SelectorLanguages } from "@/features/SelectorLanguages";

export const FooterMenu = () => {
  return (
    <footer className={cls.Footer}>
      <SelectorLanguages />
      <LinkButton className={cls.CartButton} link="/cart">
        <Icon data={ShoppingCart} className={cls.icon} />
      </LinkButton>
    </footer>
  );
};
