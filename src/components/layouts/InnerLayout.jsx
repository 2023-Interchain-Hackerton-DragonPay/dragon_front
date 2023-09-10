import styled from "@emotion/styled";
import { initVwViewport } from "styles/global/globalScreen";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    min-height: 100vh;
    max-height: max-content;

    max-width: ${initVwViewport}px;

    background-color: white;
    padding: 0 21px;
    box-sizing: border-box;

    transition: all 0.2s ease-in-out;
`;
function InnerLayout({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}

export default InnerLayout;
