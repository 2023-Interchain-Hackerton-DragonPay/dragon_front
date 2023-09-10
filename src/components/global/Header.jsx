import styled from "@emotion/styled";
import Row from "components/utils/Row";
import SizedBox from "components/utils/SizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { initVwViewport, setVw, setVwMulti } from "styles/global/globalScreen";
import { ReactComponent as Arrow } from "assets/icons/ic-arrow_left.svg";

const HeaderWrapper = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: max-content;
  background-color: transparent;
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: ${initVwViewport}px;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;

  ${setVwMulti("padding", [24, 20])};
`;

const ArrowWrapper = styled(Arrow)`
  cursor: pointer;

  ${setVw("width", 32)};
  ${setVw("height", 32)};
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        {window.location.pathname === "/" ||
        window.location.pathname === "/profile" ? null : (
          <ArrowWrapper
            onClick={() => {
              window.history.back();
            }}
          />
        )}
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default Header;
