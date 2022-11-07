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

const Judgement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const introductionJudgement =
    "Chào mừng bạn đến với SIMCareer! " +
    "Chúng tôi mong rằng bạn có thể hoàn thành một số câu hỏi dưới đây để đạt được trải nghiệm tốt nhất trên hành trình chinh phục nhà tuyển dụng";
  const questions = [
    {
      titleHeader: "Q1/3 Bạn hiện đang là sinh viên:",
      answers: [
        {
          value: "Năm 1",
        },
        {
          value: "Năm 2",
        },
        {
          value: "Năm 3",
        },
        {
          value: "Năm 4",
        },
        {
          value: "Đã tốt nghiệp",
        },
        {
          value: "Khác...",
        },
      ],
      universities: [
        "Đại học Văn Hiến",
        "Đại học Bách Khoa - ĐHQG TP.HCM",
        "Đại học Công nghệ Thành phố Hồ Chí Minh",
        "Đại học Công nghiệp Thành phố Hồ Chí Minh",
        "Đại học Công nghệ Thông tin - ĐH Quốc gia TP.HCM",
        "Đại học FPT Hồ Chí Minh",
        "Đại học Hoa Sen",
        "Đại học Khoa học Tự nhiên - ĐHQG TP Hồ Chí Minh",
        "Đại học Kinh tế - Luật (ĐH Quốc gia TP.HCM)",
        "Đại học Công nghiệp Thành phố Hồ Chí Minh",
        "Đại học Kinh tế - Tài chính TP.HCM",
        "Đại học Kinh tế TP. HCM",
        "Đại học Luật TP.HCM",
        "Đại học Mở Thành phố Hồ Chí Minh",
        "Đại học Ngân hàng TP. HCM",
        "Đại học Ngoại ngữ - Tin học TP.HCM",
        "Đại học Ngoại thương (Cơ sở TP.HCM)",
        "Đại học Quốc gia TP.HCM",
        "Đại học RMIT Nam Sài Gòn",
        "Đại học Quốc tế Sài Gòn",
        "Đại học Quốc tế Hồng Bàng",
        "Đại học Tài chính - Marketing",
        "Khác...",
      ],
    },
    {
      titleHeader:
        "Q2/3 Bạn mong muốn được làm việc ở lĩnh vực nào trong tương lai ?",
      answers: [
        {
          value: "Lập trình",
        },
        {
          value: "Marketing",
        },
        {
          value: "Bán hàng",
        },
        {
          value: "Tư vấn",
        },
        {
          value: "Khác...",
        },
      ],
    },
    {
      titleHeader: "Q3/3 Điều bạn mong muốn nhất khi sử dụng SIMCareer là ?",
      answers: [
        {
          value: "Hoàn thiện hồ sơ tuyển dụng (CV)",
        },
        {
          value: "Tìm hiểu về công ty dự định ứng tuyển",
        },
        {
          value: "Học hỏi kiến thức từ công việc",
        },
        {
          value: "Khác...",
        },
      ],
    },
  ];

  const { questionNumber, firstAnswer, secondAnswer, thirdAnswer } =
    useSelector((state) => state.judgement);
  /* console.log(firstAnswer); */
  /* console.log(secondAnswer); */
  /* console.log(thirdAnswer); */

  const clickButtonHandler = () => {
    if (questionNumber === -1)
      return dispatch(
        judgementActions.setQuestionNumber({
          questionNumber: (questionNumber % questions.length) + 1,
        })
      );

    const questionNum = questionNumber;
    if (questionNumber === 0) {
      if (firstAnswer.answer1 === "")
        return toast.error("Please choose an option!");
      if (firstAnswer.answer2 === "")
        return toast.error("Please choose an university!");
    } else if (questionNumber === 1) {
      if (secondAnswer === "") return toast.error("Please choose an option!");
    } else if (questionNumber === 2) {
      if (thirdAnswer === "") return toast.error("Please choose an option!");
    }

    dispatch(
      judgementActions.setQuestionNumber({
        questionNumber: (questionNumber % questions.length) + 1,
      })
    );
    if (questionNum === questions.length - 1) {
      navigate("/dash-board");

      // some logic
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
          />
        </>
      )}

      <Button
        variant="contained"
        size="medium"
        style={{
          marginTop: "30px",
          padding: "15px 55px",
          background: "#fff",
          color: "#000",
          textTransform: "none",
          width: "200px",
          alignSelf: "center",
          fontFamily: "Gilroy-Regular",
        }}
        onClick={clickButtonHandler}
      >
        <KeyboardReturnIcon
          style={{ marginRight: "10px", transform: "rotate(180deg)" }}
        />
        Continue
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
    width: 800px;
    font-size: 20px;
    max-width: 95%;
    text-align: center;
    font-family: "Gilroy-Regular" !important;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
