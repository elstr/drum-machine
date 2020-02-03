import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  border: 2px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 50px;
  height: 50px;
  opacity: ${props => props.volume || 0.5 };
 
  &.step:nth-child(n + 1):nth-child(-n + 4) {
    background-color: yellow;
    border: ${props => props.volume  === 2 && "3px solid yellow" }; 
    box-shadow: ${props => props.volume  === 2 && "0px 0px 18px 5px yellow" }
  }
  &.step:nth-child(n + 5):nth-child(-n + 8) {
    background-color: blueviolet;
    border: ${props => props.volume  === 2 && "3px solid blueviolet" }; 
    box-shadow: ${props => props.volume  === 2 && "0px 0px 18px 5px blueviolet" }
  }
  &.step:nth-child(n + 9):nth-child(-n + 12) {
    background-color: orangered;
    border: ${props => props.volume  === 2 && "3px solid orangered" }; 
    box-shadow: ${props => props.volume  === 2 && "0px 0px 18px 5px orangered" }
  }
  &.step:nth-child(n + 13):nth-child(-n + 16) {
    background-color: turquoise;
    border: ${props => props.volume  === 2 && "3px solid turquoise" }; 
    box-shadow: ${props => props.volume  === 2 && "0px 0px 18px 5px turquoise" }
  }
`;



export default Button;
