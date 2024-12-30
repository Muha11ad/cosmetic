import React from "react";
import { Categories } from "./components";
import { Header } from "@/widgets/Header";
import { Container } from "@/shared/ui/grid";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Categories />
      </Container>
    </>
  );
};
