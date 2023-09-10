import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import { FadeInKf } from "utils/animations/BasicAnimations";
import { BottomToTopKf } from "utils/animations/BasicAnimations";

const Container = styled.button`
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 25px;

    font-style: normal;
    font-weight: 600;
    line-height: normal;

    transition: all 0.2s ease-in-out;
    animation: ${FadeInKf} 0.6s ease-in-out, ${BottomToTopKf} 0.6s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    ${({ disabled, fontSize, round, fontColor, backColor }) => css`
        cursor: ${disabled ? "auto" : "pointer"};
        background-color: ${backColor};
        ${round};

        color: ${fontColor};
        font-size: ${fontSize}px;
    `}
`;

function SquareBtn({
    children,
    onClick,
    active = true,
    fontSize = 16,
    fontColor = "white",
    backColor = COLORS.blue_4.withOpacity(0.85),
    round = setVw("border-radius", 16)
}) {
    return (
        <Container
            onClick={onClick}
            disabled={!active}
            fontSize={fontSize}
            fontColor={fontColor}
            backColor={backColor}
            round={round}>
            {children}
        </Container>
    );
}

export default SquareBtn;
