import {
  Card as GravityCard,
  CardProps as GravityCardProps,
} from "@gravity-ui/uikit";
import { FC } from "react";

export interface CardProps extends GravityCardProps {}

export const Card: FC<CardProps> = (props) => <GravityCard {...props} />;
