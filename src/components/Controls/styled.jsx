import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  cursor: pointer;
  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
  border: 1px solid #cccccc;
`;

const Container = styled.div`
  display: flex;
  margin: 1rem 0 1.5rem 3rem;
`;

const PlayPauseBtn = styled(Button)`
  margin: 0 1rem 0 0.3rem;
  border-radius: 4px;
`;

const BPMContainer = styled.div`
  display: flex;
`;

const BPMValue = styled.span`
  font-size: 18px;
  width: 6em;
  text-align: center;
  margin: 0;
  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
  padding: 5px;
  border: none;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

const BPMPlus = styled(Button)`
  border-radius: 0px 4px 4px 0px;
`;
const BPMLess = styled(Button)`
  border-radius: 4px 0px 0px 4px;
`;

export {
  Button,
  BPMContainer,
  Container,
  BPMValue,
  PlayPauseBtn,
  BPMPlus,
  BPMLess
};
