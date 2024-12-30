import React from "react";
import { Link } from "@gravity-ui/uikit";
import cls from "../Navbar.module.scss";
import { RowOrFlexProps } from "@/shared/ui/grid/row-or-flex";
import { classNames } from "@/shared/lib/classNames/classNames";

export const NavLinks: React.FC<RowProps> = ({ noMargin, className }) => {
  const location = window.location;

  const linkList: Array<{ name: string; path: string }> = [
    { name: "Лицензия", path: "/license/facebook" },
    { name: "Конфиденциальность", path: "/privacy/facebook" },
  ];

  function isCurrentPage(currentPath: string, path: string): boolean {
    return currentPath === path;
  }

  function printNavLinks(
    links: Array<{ name: string; path: string }>
  ): JSX.Element[] {
    return links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.path}
          className={classNames({
            [cls.ActiveLink]: isCurrentPage(location.pathname, link.path),
          })}
        >
          {link.name}
        </Link>
      </li>
    ));
  }

  function prepareClass({ noMargin, className }: RowProps): string[] {
    const classProps = [cls.NavLinks];

    if (className) {
      classProps.push(className);
    }

    if (noMargin) {
      classProps.push("mx-0");
    }

    return classProps;
  }

  const options = {
    className,
    noMargin,
  };

  return (
    <ul className={classNames(prepareClass(options))}>
      {printNavLinks(linkList)}
    </ul>
  );
};

export interface RowProps extends Omit<RowOrFlexProps, "type"> {
  noMargin?: boolean;
}
