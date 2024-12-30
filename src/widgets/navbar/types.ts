export enum TypesNavbar {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    HORIZONTAL_AUTHORIZED = "horizontal_authorized",
    VERTICAL_AUTHORIZED = "vertical_authorized",
}

export interface NavbarProps {
    type: TypesNavbar;
}
