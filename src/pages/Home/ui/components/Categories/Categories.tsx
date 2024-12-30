import React from "react";
import { Card } from "@/shared/ui/Card";
import { Link } from "@/shared/ui/link";
import cls from "../../home.module.scss";
import { ICategoriesProps } from "./types";
import { Col, Row } from "@/shared/ui/grid";
import { CategoryCardTitle } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "@/shared/hooks/useTranslation";

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
  const categories = [
    {
      name: {
        en: "Toner",
        ru: "Тонер",
        uz: "Toner",
      },
      imageUrl:
        "https://kmall.uz/image/cache/catalog/toner_face/1/ge-catalog-toner_face-1-ge-catalog-toner_face-1-ge-catalog-customer_30-1676541279__57-700x700.jpg",
    },
    {
      name: {
        en: "Masks",
        ru: "Маски",
        uz: "Maskalar",
      },
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/ko8xtow0/face-pack/a/z/i/200-beauty-facial-sheet-mask-for-skin-lightening-glowing-original-imag2ry4hfhefzrp.jpeg?q=90&crop=false",
    },
    {
      name: {
        en: "Anti acne",
        ru: "Против акне",
        uz: "Ugriga qarshi",
      },
      imageUrl:
        "https://img.freepik.com/premium-vector/women-skin-types-with-acne-problem-skin-enlarged-area-cosmetology-acne-wrinkles-age-spots-caring-skin-vector_454120-123.jpg?semt=ais_hybrid",
    },
  ];
  const { currentLanguage } = useTranslation();
  const CardStyle = {
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  function renderCategories() {
    return categories.map((category) => (
      <Col key={category.name.en} md={6} sm={6} xs={6}>
        <Card className={cls.CategoryCard} style={CardStyle} view="clear">
          <Link className={cls.CategoryLink} href={`/${category.name.en}`}>
            <img
              src={category.imageUrl}
              alt={category.name.en}
              className={cls.CategoryImage}
            />
          </Link>
          <CategoryCardTitle>
            {category.name[currentLanguage]}
          </CategoryCardTitle>
        </Card>
      </Col>
    ));
  }
  return (
    <section className={classNames([cls.MainHeader, className])}>
      <Row align="center" justify="between">
        {renderCategories()}
      </Row>
    </section>
  );
};
