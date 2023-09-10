import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import { useModal } from "components/providers/ModalProvider";
import ElasticBlock from "components/utils/ElasticBlock";
import { useEffect } from "react";
import GlobalFont from "styles/global/globalFonts";

const Title = styled.h1`
  ${GlobalFont({
    style: "normal",
    size: 30,
    color: "#000000",
  })};
`;

const SubTitle = styled.h2`
  ${GlobalFont({
    style: "normal",
    size: 20,
    color: "#000000",
  })};
`;

const ResultText = styled.p`
  ${GlobalFont({
    style: "normal",
    size: 16,
    color: "#000000",
  })};
`;

function CompletePage() {
  const { data } = useModal();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <BasicLayout>
      <InnerLayout>
        <ElasticBlock h={80}/>
        <Title>Well Received!</Title>

        <ElasticBlock h={40}/>
        <SubTitle>From</SubTitle>

        <ElasticBlock h={10}/>
        <ResultText>osmo1wz6c88h9zray9236jh9cw4ddx0h02qljcljv9r</ResultText>

        <ElasticBlock h={10}/>
        <SubTitle>Amount</SubTitle>
        <ElasticBlock h={10}/>
        <ResultText>10</ResultText>
      </InnerLayout>
    </BasicLayout>
  );
}

export default CompletePage;
