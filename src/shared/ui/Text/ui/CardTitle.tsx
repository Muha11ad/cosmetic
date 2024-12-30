import { FC } from "react";
import cls from "./CardTitle.module.scss";

interface CardTitleProps {
  children: string;
  className?: string;
}

export const CardTitle: FC<CardTitleProps> = (props) => (
  <div className={cls.CardTitleWrapper}>
    <h3 className={cls.CardTitle}>{props.children}</h3>
  </div>
);
