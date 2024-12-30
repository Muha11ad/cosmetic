import React from "react";
import { NavLinks } from "./nav-links";
import cls from "../Navbar.module.scss";
import { BrandLogoFull } from "@/shared/ui/Logo";
import { NavLinkButtons } from "./navlink-button";
import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SidebarToggleButton } from "@/features/SidebarToggleButton";
import Link from "next/link";

export const NavbarHorizontal: React.FC = () => {
  return (
    <Container className={classNames([cls.Navbar, cls.Horizontal])}>
      <Row className="h-100" align={"center"} noMargin>
        <Col xs={8}>
          <Flex align={"center"}>
            <Link href={"/"}>
              <BrandLogoFull width={160} height={15} />
            </Link>
            <NavLinks className={classNames([cls.NavLinks])} />
          </Flex>
        </Col>
        <Col xs={4}>
          <Flex
            justify="end"
            align="center"
            className={classNames([cls.SidebarToggleButton])}
          >
            <SidebarToggleButton />
          </Flex>
          <Flex justify="end" className={classNames([cls.NavLinkButtons])}>
            <NavLinkButtons />
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};
