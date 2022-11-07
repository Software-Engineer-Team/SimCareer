import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Fade } from "react-reveal";
import RadioColumnQuestion from "./RadioContainer/RadioColumnQuestion";
import RadioRowQuestion from "./RadioContainer/RadioRowQuestion";

const FormControlAnswers = ({ titleHeader, answers, clickButtonHandler }) => {
  return (
    <Fade top>
      <FormControl>
        <QuestionTitle>{titleHeader}</QuestionTitle>
        <RadioColumnQuestion
          arrayVal={answers}
          clickButtonHandler={clickButtonHandler}
        />

        {/* Array(3) */
        /*   .fill(undefined) */
        /*   .map((_el, idx) => ( */
        /*     <RadioRowQuestion title="How much do you know about Kinetix?" /> */
        /*   )) */}
      </FormControl>
    </Fade>
  );
};

export default FormControlAnswers;

const QuestionTitle = styled(FormLabel)`
  color: #8c39e0 !important;
  width: 800px;
  font-size: 32px;
  max-width: 95%;
  text-align: center;
  font-weight: 600;
  line-height: 1;
  font-family: "Gilroy-Medium", sans-serif;
  margin-bottom: 30px;
`;
