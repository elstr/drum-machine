import React, { useEffect, useState } from "react";

import { PROPERTIES } from "../../utils/constants";
import { buildStepPattern } from "../../utils/helpers";
import { RemoveIcon } from "../../assets/svg";

// Components
import Instrument from "../Instrument";
import Step from "../Step";

import {
  UpdateBtn,
  RemoveBtn,
  ButtonContainer,
  Container,
  PatternContainer,
  InstrumentContainer
} from "./styled";

const Channel = props => {
  const [pattern, setPattern] = useState({});

  useEffect(() => {
    const pattern = buildStepPattern(props.id);
    setPattern(pattern);
  }, []);

  const handleStepClick = id => {
    const selectedStep = pattern[`${id}`];
    const updatedStep = Object.assign({}, selectedStep, {
      volume: selectedStep.volume + 1
    });

    if (updatedStep.volume === 3) updatedStep.volume = 0;

    const updatedPattern = Object.assign({}, pattern);
    updatedPattern[`${updatedStep.id}`] = updatedStep;
    setPattern(updatedPattern);
  };

  const { id, solo, mute, updateChannel, soundSrc, removeChannel } = props;
  return (
    <Container id={id}>
      <ButtonContainer>
        <UpdateBtn
          solo={solo}
          onClick={() => updateChannel(id, PROPERTIES.SOLO)}
        >
          S
        </UpdateBtn>
        <UpdateBtn
          mute={mute}
          onClick={() => updateChannel(id, PROPERTIES.MUTE)}
        >
          M
        </UpdateBtn>
      </ButtonContainer>
      <InstrumentContainer>
        <Instrument {...props} />
        <RemoveBtn onClick={() => removeChannel(id)}>
          <RemoveIcon />
        </RemoveBtn>
      </InstrumentContainer>
      <PatternContainer>
        {Object.keys(pattern).map((key, i) => (
          <Step
            mute={mute}
            key={`step${i}`}
            {...pattern[key]}
            soundSrc={soundSrc}
            onClick={handleStepClick}
          />
        ))}
      </PatternContainer>
    </Container>
  );
};

export default Channel;
