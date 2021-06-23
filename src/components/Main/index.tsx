import React from "react";

import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Main: React.FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
