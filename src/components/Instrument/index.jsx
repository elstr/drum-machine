import React from "react";
import {
  Container,
  Description,
} from "./styled";

const Instrument = ({ description, color }) => {
  return (
    <Container color={color}>
      <Description>{description}</Description>
    </Container>
  );
};

export default Instrument;
