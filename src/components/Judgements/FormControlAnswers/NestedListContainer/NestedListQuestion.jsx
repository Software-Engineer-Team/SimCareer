import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { judgementActions } from "~/store/judgement-slice";
import { Flip } from "react-reveal";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function NestedListQuestion({ array, label }) {
  const dispath = useDispatch();
  const { questionNumber, firstAnswer, secondAnswer, thirdAnswer } =
    useSelector((state) => state.judgement);

  const groupQuestionsValue = () => {
    if (questionNumber === 0) return firstAnswer?.answer2;
    else if (questionNumber === 1) return secondAnswer;
    else if (questionNumber === 2) return thirdAnswer;
  };

  const answerHandler = (value) => {
    if (value === "" || value === null) return;
    if (questionNumber === 0)
      dispath(judgementActions.setFirstAnswer2({ answer2: value }));
    else if (questionNumber === 1)
      dispath(judgementActions.setSecondAnswer({ secondAnswer: value }));
    else if (questionNumber === 2)
      dispath(judgementActions.setThirdAnswer({ thirdAnswer: value }));
  };

  const handleChange = (event) => {
    answerHandler(event.target.value);
  };

  return (
    <Container>
      <Flip left>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <InputLabel>{label}</InputLabel>
            <Select
              value={groupQuestionsValue()}
              label={label}
              onChange={handleChange}
              MenuProps={MenuProps}
            >
              {array.map((el, idx) => (
                <MenuItem key={idx} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flip>
    </Container>
  );
}

const Container = styled.div`
  --color-general: #8c39e0;
  label {
    color: #000 !important;
    font-size: 16px;
    /* font-family: "Gilroy-Regular"; */
    /* font-weight: 600 !important; */
    font-family: "Roboto", "Open Sans", sans-serif;
    font-weight: 300 !important;
  }
  fieldset {
    border-color: var(--color-general) !important;
  }
  svg {
    color: var(--color-general);
  }
`;
