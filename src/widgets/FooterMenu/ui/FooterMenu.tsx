import { Icon } from "@gravity-ui/uikit";
import cls from "./FooterMenu.module.scss";
import { Col, Row } from "@/shared/ui/grid";
import { ShoppingCart } from "@gravity-ui/icons";
import { LinkButton } from "@/shared/ui/LinkButton";
import { SelectorLanguages } from "@/features/SelectorLanguages";

export const FooterMenu = () => {
  return (
    <footer className={cls.Footer}>
      <Row align="center" justify="around">
        <Col>
          <SelectorLanguages />
        </Col>
        <Col>
          <LinkButton className={cls.CartButton} link="/cart">
            <Icon data={ShoppingCart} className={cls.icon} />
          </LinkButton>
        </Col>
      </Row>
    </footer>
  );
};
