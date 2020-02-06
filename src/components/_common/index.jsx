import styled from "styled-components";

const RoundButton = styled.button`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to top, #ffffff, #e6e6e6);
  font-size: 15px;
  height: 32px;
  width: 33px;
  border-radius: 53%;
  vertical-align: middle;
  margin: 5px 0;
  padding: 0;
`;

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

export { RoundButton, Button };
