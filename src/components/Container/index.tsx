import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  width: 100vw;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const Container: React.FC = ({ children }) => {
  return <Grid>{children}</Grid>;
};
