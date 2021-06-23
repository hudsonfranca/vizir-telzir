import React from "react";
import { Nav } from "../Nav";
import { Container } from "../Container";
import { Main } from "../Main";
import { Footer } from "../Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};
