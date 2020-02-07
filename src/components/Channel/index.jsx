import React, { useEffect, useState } from "react";

import { PROPERTIES, DIRECTIONS } from "../../utils/constants";
import { buildStepPattern, updateExistingPattern } from "../../utils/helpers";

// Components
import { RemoveIcon } from "../../assets/svg";
import Instrument from "../Instrument";
import Step from "../Step";

import {
  UpdateBtn,
  RemoveBtn,
  ButtonContainer,
  Container,
  PatternContainer,
  InstrumentContainer,
  IconContainer,
  StyledDownIcon,
  StyledUpIcon
} from "./styled";

const Channel = props => {
  const [pattern, setPattern] = useState([]);

  useEffect(() => {
    let newPattern;
    if (pattern.length === 0) {
      newPattern = buildStepPattern(props.id);
    } else {
      newPattern = updateExistingPattern({
        existingPattern: pattern,
        newChannelId: props.id
      });
    }
    setPattern(newPattern);
  }, [props.soundSrc]);

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

  const {
    id,
    type,
    solo,
    mute,
    updateChannel,
    soundSrc,
    removeChannel,
    changeInstrument
  } = props;

  return (
    <Container id={id}>
      <ButtonContainer>
        <UpdateBtn
          data-testid={`solo-${id}`}
          solo={solo}
          onClick={() => updateChannel(id, PROPERTIES.SOLO)}
        >
          S
        </UpdateBtn>
        <UpdateBtn
          data-testid={`mute-${id}`}
          mute={mute}
          onClick={() => updateChannel(id, PROPERTIES.MUTE)}
        >
          M
        </UpdateBtn>
      </ButtonContainer>
      <InstrumentContainer>
        <IconContainer>
          <StyledUpIcon onClick={() => changeInstrument({ id, type }, DIRECTIONS.UP)} />
          <StyledDownIcon
            onClick={() => changeInstrument({ id, type }, DIRECTIONS.DOWN)}
          />
        </IconContainer>
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
