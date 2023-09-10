import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";

const Container = styled.button`
  pointer-events: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: relative;

  ${setVw("border-radius", 10)};
`;

const SelectedValue = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  ${setVw("height", 50)};

  ${setVw("line-height", 50)};
  ${setVw("font-size", 14)};
  text-align: left;

  padding-left: 16px;
  border-radius: 10px;
  border: none;

  background: ${COLORS.gray_4};

  transition: 0.2s;

  &:hover {
    background: ${COLORS.gray_3};
  }
`;

const OptionWrapper = styled.div`
  width: 100%;
  max-height: 0;

  opacity: 0;
  overflow-y: scroll;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: white;
  transition: 0.2s;
  position: absolute;
  ${setVw("top", 50)};

  ::-webkit-scrollbar {
    width: 3.5px;
    background: transparent;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.blue_8};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 3px;
    margin-bottom: 3px;
    background-clip: padding-box;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      max-height: calc(100% * 3);
      z-index: 1;
    `}
`;

const OptionItem = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;

  width: calc(100%);
  ${setVw("height", 50)};
  ${setVw("padding-left", 16)};
  background-color: ${({ selected }) =>
    selected ? COLORS.gray_3 : "transparent"};

  ${setVw("line-height", 50)};
  ${setVw("font-size", 14)};
  color: #000000;
  text-align: left;

  transition: 0.2s;

  &:hover {
    background-color: ${COLORS.gray_3};
  }
`;

function DropdownBtn({
  list = [],
  index = 0,
  setIndex = () => {},
  disabled = false,
}) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const clickEvent = (e) => {
    if (ref.current != null) {
      if (!ref.current.contains(e.target)) {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickEvent);

    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, []);

  return (
    <Container ref={ref} disabled={disabled}>
      <SelectedValue ref={ref} onClick={() => setActive(!active)}>
        {list[index]}
        {/* <Spacer /> */}
        {/* <DownArrowC active={active} /> */}
      </SelectedValue>
      <OptionWrapper active={active}>
        {list.map((value, idx) => (
          <OptionItem
            key={idx}
            selected={index === idx}
            onClick={() => {
              setIndex(idx);
              setActive(false);
            }}>
            {value}
          </OptionItem>
        ))}
      </OptionWrapper>
    </Container>
  );
}

export default DropdownBtn;
