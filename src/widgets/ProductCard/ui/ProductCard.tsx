import React, { FC } from "react";
import { Card } from "@/shared/ui/Card";
import { Link } from "@/shared/ui/link";
import { Flex } from "@/shared/ui/grid";
import { Button } from "@/shared/ui/Button";
import cls from "./ProductCard.module.scss";
import { AddToCart } from "@/features/AddToCart";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { ProductCardTitle, ProductPrice } from "@/shared/ui/Text";
import { ProductSubtitle } from "@/shared/ui/Text/ui/ProductSubtitle";

interface IProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    purpose: string;
    imageUrl: string;
    available: boolean;
  };
}

export const ProductCard: FC<IProductCardProps> = (props) => {
  const { t } = useTranslation();
  const { name, price, purpose, imageUrl } = props.product;
  return (
    <Card className={cls.ProductCardWrapper} view="clear">
      <Link href={`/product/${props.product.id}`}>
        <Flex column>
          <img alt={name} src={imageUrl} className={cls.ProductCardImage} />
          <ProductCardTitle children={name} />
          <ProductSubtitle children={purpose} />
          <ProductPrice children={price} />
        </Flex>
      </Link>
      <AddToCart />
    </Card>
  );
};
