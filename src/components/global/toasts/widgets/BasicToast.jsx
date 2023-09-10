import styled from "@emotion/styled";
import ToastWrapper from "./ToastWrapper";
import { COLORS } from "styles/global/globalColors";
import { useToast } from "components/providers/ToastProvider";
import { FadeInKf } from "utils/animations/BasicAnimations";
import { FadeOutKf } from "utils/animations/BasicAnimations";
import { TopToBottomKf } from "utils/animations/BasicAnimations";

const BackBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    width: 320px;
    height: max-content;

    margin-bottom: 200px;
    padding: 20px 28px;

    border-radius: 10px;
    background-color: ${COLORS.gray_1};
    color: ${COLORS.white};

    /* FadeIn an Out, Top to down animation */
    animation: ${FadeInKf} 800ms ease-in-out,
        ${FadeOutKf} 1500ms ease-in-out 4700ms,
        ${TopToBottomKf} 1500ms ease-in-out 4700ms;
`;

function BasicToast() {
    const { params } = useToast();

    return (
        <ToastWrapper>
            <BackBoard>{params?.content}</BackBoard>
        </ToastWrapper>
    );
}

export default BasicToast;
