import React, { FC } from "react";
import styled from "styled-components";

interface PageButtonProps {
  buttonType: string;
  buttonName: string;
  buttonBgColor: string;
  ButtonTxtColor: string;
  buttonSize: string;
  buttonPadding?: string;
  buttonFontSize?: string;
}

type PageButtonStylesProps = {
  buttonBgColor: string;
  ButtonTxtColor: string;
  buttonSize: string;
  buttonPadding?: string;
  buttonFontSize?: string;
};

export const PageButton: FC<PageButtonProps> = ({
  buttonType,
  buttonName,
  buttonBgColor,
  ButtonTxtColor,
  buttonSize,
  buttonPadding,
  buttonFontSize,
}) => {
  console.log(typeof buttonType);
  return (
    <PageButtonWrapper
      buttonBgColor={buttonBgColor}
      buttonSize={buttonSize}
      ButtonTxtColor={ButtonTxtColor}
      buttonPadding={buttonPadding}
      buttonFontSize={buttonFontSize}
    >
      <button type="button">{buttonName}</button>
    </PageButtonWrapper>
  );
};

const PageButtonWrapper = styled.div<PageButtonStylesProps>`
  button {
    width: ${(props) => (props.buttonSize === "big" ? 100 + "%" : 80 + "%")};
    background-color: ${(props) => props.buttonBgColor};
    color: ${(props) => props.ButtonTxtColor};
    outline: none;
    border: none;
    padding: ${(props) =>
      props.buttonPadding ? props.buttonPadding : "0.8rem 1.3rem"};
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${(props) => (props.buttonFontSize ? props.buttonFontSize : "")};
  }
`;
