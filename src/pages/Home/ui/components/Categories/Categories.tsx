import React from "react";
import { Card } from "@/shared/ui/Card";
import { Link } from "@/shared/ui/link";
import cls from "../../home.module.scss";
import { ICategoriesProps } from "./types";
import { Col, Row } from "@/shared/ui/grid";
import { CardTitle } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";

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

  const CardStyle = {
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  return (
    <section className={classNames([cls.MainHeader, className])}>
      <Row align="center" justify="between">
        {categories.map((category) => (
          <Col key={category.name.en} lg={12} md={12} sm={12}>
            <Card className={cls.CategoryCard} style={CardStyle} view="clear">
              <Link
                className={cls.CategoryLink}
                href={`/category/${category.name.en}`}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name.en}
                  className={cls.CategoryImage}
                />
              </Link>
              <CardTitle>{category.name.en}</CardTitle>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
