import styled from "styled-components";

import { DownIcon, UpIcon } from "../../assets/svg";
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  top: 17px;
  left: 15px;
`;

const StyledIcon = `
  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
  border-radius: 10px;
  padding: 2px;
  cursor: pointer;
`;

const StyledUpIcon = styled(UpIcon)`
  ${StyledIcon};
  margin-bottom: 5px;
`;

const StyledDownIcon = styled(DownIcon)`
  ${StyledIcon};
`;

export {
  UpdateBtn,
  RemoveBtn,
  ButtonContainer,
  Container,
  PatternContainer,
  InstrumentContainer,
  IconContainer,
  StyledDownIcon,
  StyledUpIcon
};
