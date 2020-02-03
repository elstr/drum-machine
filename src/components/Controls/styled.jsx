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
  border-radius: 4px;
  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
  border: 1px solid #cccccc;
`;

const Container = styled.div`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: 3em 3em 8em 3em; */
`;
const BPMContainer = styled.div`
  display: flex;
  /* display: grid; */
  /* grid-template-columns: 3em 3em 8em 3em; */
`;

export { Button, BPMContainer, Container };
