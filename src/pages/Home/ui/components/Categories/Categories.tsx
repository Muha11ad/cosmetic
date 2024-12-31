import { Row } from "@/shared/ui/grid";
import cls from "../../home.module.scss";
import { ICategoriesProps } from "./types";
import { ICategory } from "@/enitites/category";
import React, { useEffect, useState } from "react";
import { CategoryCard } from "@/widgets/CategoryCard";
import { renderSkeleton } from "@/shared/lib/helpers";
import { useCategoryStore } from "@/enitites/category/store";
import { classNames } from "@/shared/lib/classNames/classNames";

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
  const error = useCategoryStore((state) => state.error);
  const loading = useCategoryStore((state) => state.loading);
  const categories = useCategoryStore((state) => state.categories);
  const getAllCategories = useCategoryStore((state) => state.getAllCategories);

  useEffect(() => {
    getAllCategories();
  }, []);

  function renderCategories() {
    return categories.map((category: ICategory) => (
      <CategoryCard key={category.id} category={category} />
    ));
  }

  function renderContent() {
    if (loading) {
      return renderSkeleton();
    } else if (error) {
      return <p>{error}</p>;
    } else {
      return renderCategories();
    }
  }

  return (
    <section className={classNames([cls.MainHeader, className])}>
      <Row align="center" justify="between">
        {renderContent()}
      </Row>
    </section>
  );
};
