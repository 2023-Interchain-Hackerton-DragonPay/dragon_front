import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ElasticBlock from "components/utils/ElasticBlock";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";
import { FadeInOutKf } from "utils/animations/BasicAnimations";

const BigCircle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${setVw("width", 134)}
    ${setVw("height", 134)}
    border-radius: 100%;

    background-color: ${COLORS.simple_blue_1.withOpacity(0.15)};
`;

const SmallCircle = styled.div`
    ${setVw("width", 12)}
    ${setVw("height", 12)}
    border-radius: 100%;

    background-color: ${COLORS.simple_blue_1};

    animation: ${FadeInOutKf} 1.0s ease-in-out infinite alternate;
    ${({ delay }) => css`
        animation-delay: ${delay}ms;
    `}
`;
function CircleOpacityWaveLoading() {
    return (
        <BigCircle>
            <SmallCircle delay={0}></SmallCircle>
            <ElasticBlock w={10} />
            <SmallCircle delay={200}></SmallCircle>
            <ElasticBlock w={10} />
            <SmallCircle delay={400}></SmallCircle>
        </BigCircle>
    );
}

export default CircleOpacityWaveLoading;
