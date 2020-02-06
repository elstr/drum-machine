import styled from "styled-components";
import { RoundButton } from "../_common";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3% 12% auto;
  margin: 5px 0;
`;

const PatternContainer = styled.div`
  display: flex;
  flex-direction: rowflex;
  justify-content: centerflex;
  align-items: center;
`;

const InstrumentContainer = styled.div`
  position: relative;
`;

const RemoveBtn = styled(RoundButton)`
  height: 32px;
  width: 33px;
  padding: 0 0 0 0.5px;
  position: absolute;
  top: -6px;
  right: 0;
`;
const UpdateBtn = styled(RoundButton)`
  opacity: ${props => (props.solo || props.mute ? 1 : 0.5)};
`;

export {
  UpdateBtn,
  RemoveBtn,
  ButtonContainer,
  Container,
  PatternContainer,
  InstrumentContainer
};
