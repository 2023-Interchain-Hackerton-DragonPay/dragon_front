import styled from "@emotion/styled";
import ModalWrapper from "./ModalWrapper";
import CircleOpacityWaveLoading from "components/global/loading/CircleOpacityWaveLoading";
import { setVw } from "styles/global/globalScreen";
import ElasticBlock from "components/utils/ElasticBlock";

const Container = styled.div`
  ${setVw("width", 300)};
  ${setVw("height", 300)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;

  border-radius: 16px;
`;

function LoadingModal() {
  return (
    <ModalWrapper>
      <Container>
        <CircleOpacityWaveLoading />

        <ElasticBlock h={20} />
        <h1>Loading...</h1>
      </Container>
    </ModalWrapper>
  );
}

export default LoadingModal;
