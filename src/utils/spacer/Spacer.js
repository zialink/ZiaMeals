import styled from "styled-components";

export const Spacer = styled.View.attrs((props) => ({
  top: props.top || 5,
  bottom: props.bottom || 5,
  left: props.left || 0,
  right: props.right || 0,
}))`
  margin-top: ${(props) => props.top}px;
  margin-bottom: ${(props) => props.bottom}px;
  margin-left: ${(props) => props.left}px;
  margin-right: ${(props) => props.right}px;
`;
