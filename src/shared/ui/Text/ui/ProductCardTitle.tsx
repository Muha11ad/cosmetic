import React, { FC } from "react";
import cls from "./Text.module.scss";

interface IProductCardTitleProps {
  children: string;
  className?: string;
}

export const ProductCardTitle: FC<IProductCardTitleProps> = (props) => {
  return <h4 className={cls.ProductCardTitle}>{props.children}</h4>;
};
