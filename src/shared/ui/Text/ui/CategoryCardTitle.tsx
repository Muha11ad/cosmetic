import { FC } from "react";
import cls from "./Text.module.scss";

interface CardTitleProps {
  children: string;
  className?: string;
}

export const CategoryCardTitle: FC<CardTitleProps> = (props) => (
  <div className={cls.CategoryCardTitleWrapper}>
    <h3 className={cls.CategoryCardTitle}>{props.children}</h3>
  </div>
);
