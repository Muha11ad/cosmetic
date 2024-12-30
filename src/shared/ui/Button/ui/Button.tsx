import React from "react";
import { Button as GravityButton, Icon } from "@gravity-ui/uikit";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = "l",
    view = "normal",
    width = "auto",
    children,
    className,
    iconSize = 14,
    iconStart,
    iconEnd,
    ...otherProps
  } = props;

  return (
    <GravityButton
      width={width}
      view={view}
      size={size}
      className={classNames(className)}
      {...otherProps}
    >
      {iconStart && <Icon data={iconStart} size={iconSize} />}
      {children}
      {iconEnd && <Icon data={iconEnd} size={iconSize} />}
    </GravityButton>
  );
};
