import styled from "@emotion/styled";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

const FormControlAnswers = () => {
  const [answer, setAnswer] = useState("");
  const answers = [
    {
      label: "Newsletter",
    },
    {
      label: "Friends",
    },
    {
      label: "Facebook",
    },
    {
      label: "Instagram",
    },
    {
      label: "Google",
    },
    {
      label: "University Career Centre",
    },
    {
      label: "Student Associations",
    },
    {
      label: "Others (Please fill in)",
    },
  ];
  return (
    <FormControl>
      <QuestionTitle id="demo-controlled-radio-buttons-group">
        How did you hear about this program?
      </QuestionTitle>
      <GroupQuestions
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={answer}
        onChange={(e) => console.log(e)}
      >
        {answers.map(({ label }, idx) => {
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />;
          if (idx === answers.length - 1) {
            return (
              <ControlLabelAnswer
                value={label.toLowerCase()}
                control={<Radio />}
                label={label}
                onClick={() => setAnswer(label.toLowerCase())}
              />
            );
          }
          return (
            <ControlLabelAnswer
              value={label.toLowerCase()}
              control={<Radio />}
              label={label}
              onClick={() => setAnswer(label.toLowerCase())}
            />
          );
        })}
      </GroupQuestions>
    </FormControl>
  );
};

export default FormControlAnswers;

const QuestionTitle = styled(FormLabel)`
  color: #8c39e0;
  width: 800px;
  font-size: 32px;
  max-width: 95%;
  text-align: center;
  font-weight: 800;
  line-height: 1;
  font-family: "Gilroy-Medium", sans-serif;
  margin-bottom: 15px;
`;

const GroupQuestions = styled(RadioGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ControlLabelAnswer = styled(FormControlLabel)`
  min-width: 300px;
`;
