import styled from "@emotion/styled";
import { FormControlLabel, RadioGroup } from "@mui/material";
export const GroupQuestions = styled(RadioGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ControlLabelAnswer = styled(FormControlLabel)`
  min-width: ${({ radiorow }) => (radiorow === "true" ? " 320px" : "0")};
  margin: 0;
  span {
    font-weight: 500 !important;
    font-family: "Gilroy-Regular";
  }
`;
