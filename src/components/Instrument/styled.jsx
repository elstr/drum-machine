import styled from "styled-components";

const Description = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  margin: 0 5px;
  vertical-align: middle;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  background-color: ${props => (props.color ? props.color : "palegreen")};
  border-radius: 8px;
  border: 4px solid black;
  min-height: 60px;
  margin: 5px 5px;
  float: left;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export {
  Description,
  Container
};
