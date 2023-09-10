import styled from "@emotion/styled";
import DropdownBtn from "components/global/btns/DropdownBtn";
import SimpleBtn from "components/global/btns/SimpleBtn";
import SquareBtn from "components/global/btns/SquareBtn";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import Column from "components/utils/Column";
import Divider from "components/utils/Divider";
import ElasticBlock from "components/utils/ElasticBlock";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import Row from "components/utils/Row";
import SizedBox from "components/utils/SizedBox";
import Spacer from "components/utils/Spacer";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useState } from "react";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import { setVw } from "styles/global/globalScreen";
import Osmo from "assets/imgs/pngaaa.com-6470657.png"

/**
 * make long term qr
 * make -> save at blockchain -> save at db
 * buy -> compare qr with blockchain -> send money to seller -> view transaction history -> save at db
 *
 * make short term qr
 * make -> save at db
 * buy -> send money to seller -> view transaction history -> save at db
 */

const ProfileImg = styled.img`
  ${setVw("width", 180)};
  ${setVw("height", 180)};

  background-color: ${COLORS.blue_16};

  border-radius: 100%;
`;

const ProfileName = styled.h1`
  ${GlobalFont({
    size: 24,
    weight: "bold",
    color: COLORS.dark_1,
  })}
`;

const ProfileEmail = styled.h2`
  ${GlobalFont({
    size: 18,
    weight: "bold",
    color: COLORS.gray_2,
  })}
`;

const BankTitle = styled.h1`
  ${GlobalFont({
    size: 24,
    weight: "bold",
    color: COLORS.dark_1,
  })}
`;

const BankAmount = styled.h2`
  ${GlobalFont({
    size: 18,
    weight: "bold",
    color: COLORS.dark_1,
  })}
`;

function ProfilePage() {
  const list = ["Osmosis", "Star", "Testnet", "Mainnet"];
  const [index, setIndex] = useState(0);

  const moveMakeQRHandler = (mode) => {
    window.location.href = `/makeqr/${mode}`;
  }

  const moveScanQRHandler = () => {
    window.location.href = `/scanqr`;
  }

  return (
    <BasicLayout>
      <InnerLayout>
        <ElasticBlock h={70} />
        <ProfileImg src={Osmo}/>

        <ElasticBlock h={30} />
        <ProfileName>user name</ProfileName>

        <ElasticBlock h={10} />
        <ProfileEmail>useremail@gmail.com</ProfileEmail>

        <ElasticBlock h={20} />
        <Divider thick={2} c={COLORS.gray_3} />

        <ElasticBlock h={20} />
        <Row fullWidth={true} main={LayerAlign.start} cross={LayerAlign.start}>
          <Column cross={LayerAlign.start}>
            <BankTitle>Bank Amount</BankTitle>

            <ElasticBlock h={10} />
            <BankAmount>100,000 osmo</BankAmount>

            <ElasticBlock h={18} />
            <BankTitle>Today Total</BankTitle>
            <ElasticBlock h={10} />
            <BankAmount>100,000 osmo</BankAmount>
          </Column>

          <Spacer />
          <ElasticSizedBox w={140} h="max-content">
            <DropdownBtn list={list} index={index} setIndex={setIndex} />
          </ElasticSizedBox>
        </Row>

        <ElasticBlock h={24} />
        <Divider thick={2} c={COLORS.gray_3} />
        <ElasticBlock h={20} />
        {/* pay for product */}
        <SimpleBtn onClick={moveScanQRHandler}>pay for product</SimpleBtn>

        <ElasticBlock h={20} />

        {/* make product qr */}
        <Row fullWidth={true}>
          <ElasticSizedBox w={200} h={200}>
            <SquareBtn fontSize={20} onClick={() => moveMakeQRHandler(0)}>
              make qr <br /> ( long type )
            </SquareBtn>
          </ElasticSizedBox>

          <ElasticBlock w={18} />
          <ElasticSizedBox w={200} h={200}>
            <SquareBtn fontSize={20} onClick={() => moveMakeQRHandler(1)}>
              make qr <br /> ( short type )
            </SquareBtn>
          </ElasticSizedBox>
        </Row>
        {/* make long term qr, make short term qr */}
      </InnerLayout>
    </BasicLayout>
  );
}

export default ProfilePage;
