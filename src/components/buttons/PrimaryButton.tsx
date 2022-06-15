import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
}
const PrimaryButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  padding: 10px 12px;
  font-size: 16px;
  color: ${(props: any) => props.theme.color["primary-dark"]};
  background-color: ${(props: any) => props.theme.color["yellow"]};
  font-weight: 600;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

export default PrimaryButton;
