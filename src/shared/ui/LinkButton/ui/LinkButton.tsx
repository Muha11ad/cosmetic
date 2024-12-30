import React from "react";
import cls from "./LinkButton.module.scss";
import { Button as GravityButton, Icon } from "@gravity-ui/uikit";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ILinkButton } from "../types";
import Link from "next/link";

export const LinkButton: React.FC<ILinkButton> = (props) => {
  const {
    size = "l",
    iconSize = 14,
    view = "normal",
    width = "auto",
    children,
    iconStart,
    iconEnd,
    className,
    onClick,
    link,
  } = props;

  return (
    <Link href={link}>
      <GravityButton
        width={width}
        view={view}
        size={size}
        onClick={onClick}
        className={classNames([cls.Button, className])}
      >
        {iconStart && <Icon data={iconStart} size={iconSize} />}
        {children}
        {iconEnd && <Icon data={iconEnd} size={iconSize} />}
      </GravityButton>
    </Link>
  );
};
