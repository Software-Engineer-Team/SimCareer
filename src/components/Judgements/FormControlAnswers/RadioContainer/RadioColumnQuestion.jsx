import { Radio, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { judgementActions } from "~/store/judgement-slice";
import { ControlLabelAnswer, GroupQuestions } from "./RadioContainer.styled";

const RadioColumnQuestion = ({ arrayVal, clickButtonHandler }) => {
  const textFieldEl = useRef("");

  const dispath = useDispatch();
  const { questionNumber, firstAnswer, secondAnswer, thirdAnswer } =
    useSelector((state) => state.judgement);

  const groupQuestionsValue = () => {
    if (questionNumber === 0) return firstAnswer?.answer1;
    else if (questionNumber === 1) return secondAnswer;
    else if (questionNumber === 2) return thirdAnswer;
  };

  const answerHandler = (value) => {
    if (value === "" || value === null) return;
    if (questionNumber === 0)
      dispath(judgementActions.setFirstAnswer1({ answer1: value }));
    else if (questionNumber === 1)
      dispath(judgementActions.setSecondAnswer({ secondAnswer: value }));
    else if (questionNumber === 2)
      dispath(judgementActions.setThirdAnswer({ thirdAnswer: value }));
  };

  return (
    <>
      <GroupQuestions value={groupQuestionsValue()}>
        <Fade top>
          {arrayVal?.map(({ value }, idx) => {
            return (
              <ControlLabelAnswer
                value={value.toLowerCase()}
                control={<Radio sx={{ color: "#8c39e0" }} color="secondary" />}
                key={idx}
                label={
                  idx !== arrayVal.length - 1 ? (
                    value
                  ) : (
                    <TextField
                      variant="standard"
                      placeholder={value}
                      style={{ fontWeight: "400 !important" }}
                      onChange={(e) => answerHandler(e.target.value)}
                      ref={textFieldEl}
                    />
                  )
                }
                radiorow={"true"}
                onClick={() => answerHandler(value.toLowerCase())}
              />
            );
          })}
        </Fade>
      </GroupQuestions>
    </>
  );
};

export default RadioColumnQuestion;
