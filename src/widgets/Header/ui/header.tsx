import React from "react";
import cls from "./header.module.scss";
import { Searchbar } from "@/features/Searchbar";
import { Col, Container, Flex, Row } from "@/shared/ui/grid";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SelectorLanguages } from "@/features/SelectorLanguages";

export const Header: React.FC = () => {
  return (
    <header
      className={classNames([cls.Header, "d-flex", "align-items-center"])}
    >
      <Container>
        <Flex column justify="center" align="center">
          <Searchbar
            onUpdate={function (value: string): void {
              alert(value);
            }}
          />
        </Flex>
      </Container>
    </header>
  );
};
