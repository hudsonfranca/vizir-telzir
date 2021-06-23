import React from "react";

import styled from "styled-components";

const NavContainer = styled.div`
  width: 100vw;
  height: 66px;
  background-color: red;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <p>NavBar</p>
    </NavContainer>
  );
};
