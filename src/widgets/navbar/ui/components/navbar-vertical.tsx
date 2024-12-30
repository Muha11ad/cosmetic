import React from "react";
import { NavLinks } from "./nav-links";
import cls from "../navbar.module.scss";
import { NavLinkButtons } from "./navlink-button";
import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import { classNames } from "@/shared/lib/classNames/classNames";
import { BrandLogoFull } from "@/shared/ui/Logo";
import Link from "next/link";

export const NavbarVertical: React.FC = () => {
  return (
    <Container
      fluid
      className={classNames([cls.Navbar, cls.Vertical, "h-100"])}
    >
      <Row className="h-100 align-content-between">
        <Col xs={12}>
          <Flex column align="start">
            <Link href={"/"}>
              <BrandLogoFull width={160} height={15} />
            </Link>
            <NavLinks className={classNames([cls.NavLinks, "p-0"])} />
          </Flex>
        </Col>
        <Col xs={12}>
          <Flex
            column
            justify="end"
            className={classNames([cls.NavLinkButtons])}
          >
            <NavLinkButtons />
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};
