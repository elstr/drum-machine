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
  const [pattern, setPattern] = useState([]);

  useEffect(() => {
    const pattern = buildStepPattern(props.id);
    setPattern(pattern);
  }, []);

  const handleStepClick = id => {
    const stepIndex = pattern.findIndex(step => step.id === id);
    const updatedStep = Object.assign({}, pattern[stepIndex], {
      volume: pattern[stepIndex].volume + 1
    });

    if (updatedStep.volume === 3) updatedStep.volume = 0;

    const updatedPattern = [
      ...pattern.slice(0, stepIndex),
      updatedStep,
      ...pattern.slice(stepIndex + 1)
    ];

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
        {pattern.map((step, i) => (
          <Step
            mute={mute}
            key={`step${i}`}
            {...step}
            soundSrc={soundSrc}
            onClick={handleStepClick}
          />
        ))}
      </PatternContainer>
    </Container>
  );
};

export default Channel;
