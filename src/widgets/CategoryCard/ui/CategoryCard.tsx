import React, { FC } from "react";
import { Col } from "@/shared/ui/grid";
import { Link } from "@/shared/ui/link";
import { Card } from "@/shared/ui/Card";
import { Image } from "@/shared/ui/Image";
import cls from "./CategoryCard.module.scss";
import { ICategory } from "@/shared/api/category";
import { CategoryCardTitle } from "@/shared/ui/Text";
import { useTranslation } from "@/shared/hooks/useTranslation";

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ category }) => {
  const CardStyle = {
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const { id, name, imageUrl } = category;

  const { currentLanguage } = useTranslation();

  return (
    <Col key={name.en} md={6} sm={6} xs={6}>
      <Card className={cls.CategoryCard} style={CardStyle} view="clear">
        <Link className={cls.CategoryLink} href={`/category/${name.en}`}>
          <Image src={imageUrl} alt={name.en} />
        </Link>
        <CategoryCardTitle>{name[currentLanguage]}</CategoryCardTitle>
      </Card>
    </Col>
  );
};
