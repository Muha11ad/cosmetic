import {ButtonProps} from "@gravity-ui/uikit";
import {SVGIconData} from "@gravity-ui/uikit/build/esm/components/Icon/types";

export interface ILinkButton extends ButtonProps {
    iconStart?: string | SVGSVGElement | SVGIconData | any;
    iconEnd?: string | SVGSVGElement | SVGIconData | any;
    iconSize?: number;
    className?: string;
    children?: string | React.ReactNode;
    link: string;
}
