import React, { FC } from "react";
import { Row } from "@/shared/ui/grid";
import cls from "../Product.module.scss";
import { IProduct } from "@/enitites/product";
import { useTranslation } from "@/shared/hooks/useTranslation";

interface IProductBodyProps {
  product: IProduct;
}

export const ProductBody: FC<IProductBodyProps> = ({ product }) => {
  const { currentLanguage } = useTranslation();
  return (
    <Row className={cls.ProductBody}>
      <p>Instruction : {product?.instruction[currentLanguage] || "No data"}</p>
    </Row>
  );
};
