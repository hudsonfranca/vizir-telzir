import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  height: 66px;
  background-color: blue;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  );
};
