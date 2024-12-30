import React, { FC } from "react";
import cls from "./Text.module.scss";
import { spliceSentence } from "@/shared/lib/helpers";

interface IProductSubtitleProps {
  children: string;
  className?: string;
}

export const ProductSubtitle: FC<IProductSubtitleProps> = (props) => {
  const spliced: string = spliceSentence(props.children, 30);
  return <p className={cls.ProductCardSubtitle}>{spliced}</p>;
};
