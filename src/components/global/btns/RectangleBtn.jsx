import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.button`
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    transition: all 0.2s ease-in-out;

    ${({ disabled, backColor, textColor, fontSize, round }) => css`
        cursor: ${disabled ? "auto" : "pointer"};
        background-color: ${backColor};
        border-radius: ${round};

        color: ${textColor};
        font-size: ${fontSize}px;
    `}

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        ${({ disabled, round }) => css`
            border-radius: ${round};
            background-color: ${disabled
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(0, 0, 0, 0)"};
        `}
    }
`;
function RectangleBtn({
    children,
    onClick,
    active = true,
    backColor = "black",
    textColor = "white",
    fontSize = 16,
    round = "0px",
}) {
    return (
        <Container
            onClick={onClick}
            disabled={!active}
            backColor={backColor}
            textColor={textColor}
            fontSize={fontSize}
            round={round}>
            {children}
        </Container>
    );
}

export default RectangleBtn;
