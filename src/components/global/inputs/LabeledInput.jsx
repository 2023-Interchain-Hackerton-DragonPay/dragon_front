import styled from "@emotion/styled";
import ElasticSizedBox from "components/utils/ElasticSizedBox";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import BasicInput from "./BasicInput";
import ElasticBlock from "components/utils/ElasticBlock";
import ElasticText from "components/utils/ElasticText";
import { setVw } from "styles/global/globalScreen";
import AllFullRow from "components/utils/AllFullRow";
import { LayerAlign } from "components/utils/WidgetUtils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    ${GlobalFont({
        size: 16,
        weight: 500,
        color: COLORS.black,
    })}

    span {
        color: ${COLORS.simple_blue_1};
    }

    p {
        display: inline-block;
        color: ${COLORS.black_op_1};
    }
`;

const UnitWrapper = styled(ElasticText)`
    white-space: nowrap;
    ${setVw("font-size", 16)};
`;

function LabeledInput({
    type = "text",
    value,
    setValue,
    placeholder = "Basic Input",
    title = "Title",
    unit,
    active = true,
    onClick = () => {},
    maxLength,
    ...props
}) {
    return (
        <Container {...props}>
            <Label>
                {title}
            </Label>

            <ElasticBlock h={12} />
            <ElasticSizedBox w={316} h={48}>
                <AllFullRow
                    cross={LayerAlign.center}
                    onClick={onClick}>
                    <BasicInput
                        type={type}
                        value={value}
                        setValue={setValue}
                        placeholder={placeholder}
                        round={"10px"}
                        disabled={!active}
                        maxLength={maxLength}
                    />
                    {unit === "" ? null : <ElasticBlock w={8} />}
                    <UnitWrapper weight={600}>{unit}</UnitWrapper>
                </AllFullRow>
            </ElasticSizedBox>
        </Container>
    );
}

export default LabeledInput;
