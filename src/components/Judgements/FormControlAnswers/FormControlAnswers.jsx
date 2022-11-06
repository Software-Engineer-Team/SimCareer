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
        Q1/3 How did you hear about this program?
      </QuestionTitle>
      <GroupQuestions
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={answer}
        onChange={(e) => console.log(e)}
      >
        {answers.map(({ label }, idx) => {
          if (idx === answers.length - 1) {
            return (
              <ControlLabelAnswer
                value={label.toLowerCase()}
                control={<Radio sx={{ color: "#8c39e0" }} color="secondary" />}
                label={
                  answer === label.toLowerCase() ? (
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      placeholder={label}
                      style={{ fontWeight: "400 !important" }}
                    />
                  ) : (
                    <TextField
                      disabled
                      placeholder={label}
                      variant="standard"
                      style={{ fontWeight: "400 !important" }}
                    />
                  )
                }
                onClick={() => setAnswer(label.toLowerCase())}
              />
            );
          }
          return (
            <ControlLabelAnswer
              value={label.toLowerCase()}
              control={<Radio sx={{ color: "#8c39e0" }} color="secondary" />}
              label={label}
              onClick={() => setAnswer(label.toLowerCase())}
            />
          );
        })}
        <Button
          variant="contained"
          size="medium"
          style={{
            marginTop: "30px",
            padding: "10px 50px",
            background: "#fff",
            color: "#000",
            textTransform: "none",
            fontFamily: "Gilroy",
          }}
        >
          Continue
        </Button>
      </GroupQuestions>
    </FormControl>
  );
};

export default FormControlAnswers;

const QuestionTitle = styled(FormLabel)`
  color: #8c39e0 !important;
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
  span {
    font-weight: 600 !important;
    font-family: Gilroy;
  }
`;
