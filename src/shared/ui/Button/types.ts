import { ButtonProps as GravityButtonProps } from "@gravity-ui/uikit";
import { PropsWithChildren } from "react";

export interface ButtonProps extends GravityButtonProps, PropsWithChildren {
  iconStart?: string | SVGSVGElement | any;
  iconEnd?: string | SVGSVGElement | any;
  iconSize?: number;
}
