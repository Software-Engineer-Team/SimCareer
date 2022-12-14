import { Button } from "@mui/material";
import styled from "styled-components";
import FormControlAnswers from "./FormControlAnswers/FormControlAnswers";
import NestedListQuestion from "./FormControlAnswers/NestedListContainer/NestedListQuestion";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useDispatch, useSelector } from "react-redux";
import { judgementActions } from "~/store/judgement-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { introductionJudgement, questions } from "@assets/data/judgements";
import { postData } from "@utils/utils";

const Judgement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { questionNumber, firstAnswer, secondAnswer } = useSelector(
    (state) => state.judgement
  );
  const user = useSelector((state) => state.user);

  const clickButtonHandler = async () => {
    if (questionNumber === -1)
      return dispatch(
        judgementActions.setQuestionNumber({
          questionNumber: (questionNumber % questions.length) + 1,
        })
      );

    const questionNum = questionNumber;
    if (questionNumber === 0) {
      if (firstAnswer.answer1 === "")
        return toast.error("Vui lòng chọn một lựa chọn!");
      if (firstAnswer.answer2 === "")
        return toast.error("Vui lòng chọn một trường đại học!");
      if (firstAnswer.answer3 === "")
        return toast.error("Vui lòng chọn một chuyên ngành!");
    } else if (questionNumber === 1) {
      if (secondAnswer === "")
        return toast.error("Vui lòng chọn một lựa chọn!");
    }
    /* else if (questionNumber === 2) { */
    /*   if (thirdAnswer === "") return toast.error("Vui lòng chọn một lựa chọn!"); */
    /* } */

    dispatch(
      judgementActions.setQuestionNumber({
        questionNumber: (questionNumber % questions.length) + 1,
      })
    );
    if (questionNum === questions.length - 1) {
      postData(
        {
          user: { email: user.email },
          firstAnswer,
          secondAnswer,
        },
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/answers`
      ).then((data) => {
        console.log(data);
      });

      navigate("/dash-board");
    }
  };

  return (
    <Container>
      <ToastContainer style={{ width: "380px" }} position="top-center" />
      {questionNumber === -1 && (
        <Fade top>
          <div className="introductionJudgement">{introductionJudgement}</div>
        </Fade>
      )}
      {questions.map((_question, idx) => {
        return (
          idx === questionNumber && (
            <FormControlAnswers
              answers={questions[questionNumber]?.answers}
              titleHeader={questions[questionNumber]?.titleHeader}
              clickButtonHandler={clickButtonHandler}
              key={idx}
            />
          )
        );
      })}

      {questionNumber === 0 && (
        <>
          <NestedListQuestion
            label={"Trường đại học"}
            array={questions[0]?.universities}
            type={"answer2"}
          />
          <NestedListQuestion
            label={"Chuyên ngành"}
            array={questions[0]?.majors}
            type={"answer3"}
          />
        </>
      )}

      <Button
        variant="contained"
        size="medium"
        className="btn"
        style={{
          marginTop: "30px",
          padding: "15px 55px",
          background: "#fff",
          color: "#000",
          textTransform: "none",
          width: "200px",
          alignSelf: "center",
          fontFamily: "Roboto",
          fontWeight: "300",
        }}
        onClick={clickButtonHandler}
      >
        <KeyboardReturnIcon
          style={{
            marginRight: "10px",
            transform: "rotate(180deg)",
          }}
        />
        Tiếp tục
      </Button>
    </Container>
  );
};

export default Judgement;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div.introductionJudgement {
    width: 900px;
    font-size: 25px;
    max-width: 95%;
    text-align: center;
    /* font-family: "Gilroy-Regular" !important; */
    font-family: "Roboto", "Open Sans", sans-serif !important;
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 500px) {
    div.introductionJudgement {
      width: auto;
      font-size: 15px;
    }

    button.btn {
      font-size: 12px;
      height: 40px;
    }
  }
`;
