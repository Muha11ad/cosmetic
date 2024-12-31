import React, { FC } from "react";
import cls from "./Text.module.scss";
import { addThousandSeparators } from "@/shared/lib/helpers";

interface IProductPriceProps {
  children: number;
  className?: string;
}

export const ProductPrice: FC<IProductPriceProps> = (props) => {
  return (
    <p className={[cls.ProductCardPrice, props.className].join(" ")}>
      {addThousandSeparators(props.children)} sum
    </p>
  );
};
