import React from "react";
import styled from "styled-components";

const FixedFooter = styled.footer`
  position: absolute;
  bottom: 20px;
  right: 46.5%;
`;

const Footer = () => (
  <FixedFooter>
    {`made with `}
    <span aria-label="love" role="img">
      ❤️
    </span>
  </FixedFooter>
);

export default Footer;
