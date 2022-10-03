import React, { FC } from "react";
import styled from "styled-components";

interface IPageButtonProps {
  buttonType: string;
  buttonName: string;
  buttonBgColor: string;
  ButtonTxtColor: string;
  buttonSize: string;
  buttonPadding?: string;
  buttonFontSize?: string;
  quantity?: number;
  action?: () => void;
}

type PageButtonStylesProps = {
  buttonBgColor: string;
  ButtonTxtColor: string;
  buttonSize: string;
  buttonPadding?: string;
  buttonFontSize?: string;
  quantity?: number;
};

export const PageButton: FC<IPageButtonProps> = (props) => {
  const {
    buttonName,
    buttonBgColor,
    ButtonTxtColor,
    buttonSize,
    buttonPadding,
    buttonFontSize,
    action,
    quantity
  } = props;

  return (
    <PageButtonWrapper
      buttonBgColor={buttonBgColor}
      buttonSize={buttonSize}
      ButtonTxtColor={ButtonTxtColor}
      buttonPadding={buttonPadding}
      buttonFontSize={buttonFontSize}
      quantity={quantity}
    >
      <button type="button" onClick={quantity && quantity > 0 ? action : () => null}>{buttonName}</button>
    </PageButtonWrapper>
  );
};

const PageButtonWrapper = styled.div<PageButtonStylesProps>`
  button {
    width: ${(props) => (props.buttonSize === "big" ? 100 + "%" : 80 + "%")};
    background-color: ${(props) => props.quantity === undefined ? props.buttonBgColor : props.quantity > 0 ? props.buttonBgColor : "#b99983dd"};
    color: ${(props) => props.ButtonTxtColor};
    outline: none;
    border: none;
    padding: ${(props) =>
      props.buttonPadding ? props.buttonPadding : "0.8rem 1.3rem"};
    border-radius: 5px;
    cursor: ${(props) => props.quantity === undefined ? "pointer" : props.quantity > 0 ? "pointer" : "not-allowed"};
    font-weight: bold;
    font-size: ${(props) => (props.buttonFontSize ? props.buttonFontSize : "")};
  }
`;
