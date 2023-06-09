import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 100%;
  height: 250px;
  color: #168afb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 0 0 5px #168afb;
  overflow: hidden;
  cursor: ${(props) =>
    props.isWeb || props.refillable ? "pointer" : "default"};
`;

export const DeleteDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fff;
  color: #168afb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  left: 0;
  border-radius: 2px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 5px gray;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px #aaa;
  }
`;

export const StyledVideoInput = styled.input`
  display: none;
`;
