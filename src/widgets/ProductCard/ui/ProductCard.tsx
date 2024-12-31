import React, { FC } from "react";
import { Card } from "@/shared/ui/Card";
import { Link } from "@/shared/ui/link";
import { Flex } from "@/shared/ui/grid";
import { Image } from "@/shared/ui/Image";
import cls from "./ProductCard.module.scss";
import { IProduct } from "@/enitites/product";
import { AddToCart } from "@/features/AddToCart";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { ProductCardTitle, ProductPrice } from "@/shared/ui/Text";
import { ProductSubtitle } from "@/shared/ui/Text/ui/ProductSubtitle";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { currentLanguage } = useTranslation();
  return (
    <Card className={cls.ProductCardWrapper} view="clear">
      <Link href={`/product/${product.id}`}>
        <Flex column>
          <Image
            alt={product.name}
            src={product.Images[0].imageUrl}
            className={cls.ProductCardImage}
          />
          <ProductCardTitle children={product.name} />
          <ProductSubtitle children={product.instruction[currentLanguage]} />
          <ProductPrice children={product.price} />
        </Flex>
      </Link>
      <AddToCart />
    </Card>
  );
};
