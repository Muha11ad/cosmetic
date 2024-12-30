import { Flex } from "@/shared/ui/grid";
import cls from "../Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import React from "react";
import Link from "next/link";
import { LinkButton } from "@/shared/ui/LinkButton";

export const NavLinkButtons: React.FC = () => {
  return (
    <Flex align="center">
      <LinkButton
        link={"/signUp"}
        className={classNames([cls.RegistrationButton])}
        size={"l"}
      >
        Регистрация
      </LinkButton>
      <Link href={"/signIn"} className={classNames([cls.SignInButton, "ms-4"])}>
        Войти
      </Link>
    </Flex>
  );
};
