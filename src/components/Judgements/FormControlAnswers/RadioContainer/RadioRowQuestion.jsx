import styled from "@emotion/styled";
import { Radio } from "@mui/material";
import { useState } from "react";
import { ControlLabelAnswer, GroupQuestions } from "./RadioContainer.styled";

const RadioRowQuestion = ({ title }) => {
  const [answer, setAnswer] = useState("");
  return (
    <SingleQuestion>
      <div className="question-title">{title}</div>
      <GroupQuestions row value={answer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
          <ControlLabelAnswer
            value={el}
            control={<Radio sx={{ color: "#8c39e0" }} color="secondary" />}
            label={el}
            labelPlacement="bottom"
            onClick={() => setAnswer(el)}
            radiorow={"false"}
          />
        ))}
      </GroupQuestions>
    </SingleQuestion>
  );
};

export default RadioRowQuestion;

const SingleQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .question-title {
    color: black;
    width: 800px;
    font-size: 14px;
    max-width: 95%;
    text-align: center;
    font-family: "Gilroy-Regular";
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
  }
`;
