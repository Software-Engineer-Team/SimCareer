import React, { useEffect, useRef, useState } from "react";
import {
  LoginLeftBtnContainer,
  LoginLeftForm,
  LoginLeftFormItem,
} from "./LoginLeft.styled";
import { validateEmail } from "@utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import ReactInputVerificationCode from "react-input-verification-code";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "..";

const Registration = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [errorUniversity, setErrorUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [errorMajor, setErrorMajor] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [errorGraduationYear, setErrorGraduationYear] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1);
  const btnRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stepCircles = document.querySelectorAll(
      ".registration-steps-breadcrumb .step-circle"
    );
    stepCircles[step - 1]?.classList.add("current");

    return () => {
      stepCircles[step - 1]?.classList.remove("current");
    };
  }, [step]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setErrorEmail("You must enter a email.");
      e.target.parentElement.classList.add("error");
    } else if (!validateEmail(e.target.value)) {
      setErrorEmail("You must enter a valid email.");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorEmail(null);
    }
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setErrorPass("Please enter your password.");
      e.target.parentElement.classList.add("error");
    } else if (e.target.value.length < 8) {
      setErrorPass("Password is too short - should be 8 chars minimum.");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorPass(null);
    }
  };

  const confirmPassHandler = (e) => {
    setConfirmPass(e.target.value);
    if (e.target.value === "") {
      setErrorConfirmPass("Please enter your password again.");
      e.target.parentElement.classList.add("error");
    } else if (e.target.value !== password) {
      setErrorConfirmPass("Passwords must match");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorConfirmPass(null);
    }
  };

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
    if (e.target.value === "") {
      setErrorFullName("Please enter your full name.");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorFullName(null);
    }
  };

  const universityHandler = (e) => {
    setUniversity(e.target.value);
    if (e.target.value === "") {
      setErrorUniversity("You must enter an univeristy");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorUniversity(null);
    }
  };

  const majorHandler = (e) => {
    setMajor(e.target.value);
    if (e.target.value === "") {
      setErrorMajor("You must enter your major");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorMajor(null);
    }
  };

  const graduationYearHandler = (e) => {
    setGraduationYear(e.target.value);
    if (e.target.value === "") {
      setErrorGraduationYear("You must enter your graduation year");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorGraduationYear(null);
    }
  };

  const verificationCodeHandler = (value) => {
    setVerificationCode(value);
  };

  const buttonHandler = async () => {
    setIsFetching(true);
    try {
      switch (step) {
        case 1: {
          break;
        }
        case 2: {
          const res = await axios.post(
            `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/sign-up`,
            {
              email,
              password,
              major,
              graduationYear,
              university,
              imgUrl: "1111111",
              name: fullName,
            }
          );
          console.log(res);
          break;
        }
        case 3: {
          const res = await axios.post(
            `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/sign-up-verify`,
            null,
            { params: { code: verificationCode } }
          );

          console.log(res);

          toast
            .promise(
              axios.post(
                `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/sign-up-update`,
                {
                  email,
                  password,
                  major,
                  graduationYear,
                  university,
                  verificationCode: null,
                }
              ),
              {
                success: "Sign up successfully 👌",
                error: "Sign up fail 🤯",
              }
            )
            .then(() => {
              navigate("/login");
            });
          break;
        }
        default:
          break;
      }

      if (step !== 3) {
        setStep(step + 1);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setIsFetching(false);
    }
  };

  const getCodeAgainHandler = async () => {
    await toast.promise(
      axios.post(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/get-code-again`,
        null,
        {
          params: { email },
        }
      ),
      {
        success: "Verification code resent successfully 👌",
        error: "Verification code resent fail 🤯",
      }
    );
  };

  return (
    <>
      <div
        className="login-left-content"
        style={{ minHeight: step === 1 ? 820 : step === 2 ? 660 : 642 }}
      >
        <Fade right>
          <div
            className="login-left-content-inner"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="login-left-title"
              style={{
                marginBottom: "50px",
              }}
            >
              Account Registration
            </div>

            <div className="registration-steps-breadcrumb">
              <div className="step-circle"></div>
              <div className="next-line"></div>
              <div className="step-circle"></div>
              <div className="next-line"></div>
              <div className="step-circle"></div>
            </div>

            {step === 2 ? (
              <Fade right>
                <div className="registration-content">Choose your password</div>
              </Fade>
            ) : (
              step === 3 && (
                <Fade right>
                  <div className="registration-content-verification">
                    A verification code has been sent to your email address:{" "}
                    <br />
                    <span className="text-red">{email}</span>
                  </div>
                  <div className="enter-text">Enter the code here:</div>
                </Fade>
              )
            )}

            <LoginLeftForm>
              {step === 1 ? (
                <>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Full Name</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type="text"
                          name="fullName"
                          value={fullName}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={fullNameHandler}
                        />
                        <div className="form-input-content-icon">
                          <BsFillPersonFill />
                        </div>
                      </div>
                      <p className="form-input-error">{errorFullName}</p>
                    </div>
                  </LoginLeftFormItem>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Email</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={emailHandler}
                        />
                        <div className="form-input-content-icon">
                          <AiOutlineMail />
                        </div>
                      </div>
                      <p className="form-input-error">{errorEmail}</p>
                    </div>
                  </LoginLeftFormItem>
                  <LoginLeftFormItem>
                    <div className="form-input-type">University</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type="text"
                          name="university"
                          value={university}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={universityHandler}
                        />
                        <div className="form-input-content-icon">
                          <FaSchool />
                        </div>
                      </div>
                      <p className="form-input-error">{errorUniversity}</p>
                    </div>
                  </LoginLeftFormItem>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Major</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type="text"
                          name="major"
                          value={major}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={majorHandler}
                        />
                        <div className="form-input-content-icon">
                          <IoSchoolOutline />
                        </div>
                      </div>
                      <p className="form-input-error">{errorMajor}</p>
                    </div>
                  </LoginLeftFormItem>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Graduation Year</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type="date"
                          name="gradurationYear"
                          value={graduationYear}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={graduationYearHandler}
                        />
                      </div>
                      <p className="form-input-error">{errorGraduationYear}</p>
                    </div>
                  </LoginLeftFormItem>{" "}
                </>
              ) : step === 2 ? (
                <Fade right>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Password</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type={!passVisible ? "password" : "text"}
                          name="password"
                          value={password}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={passHandler}
                        />
                        <div
                          className="form-input-content-icon"
                          style={{ cursor: "pointer" }}
                          onClick={() => setPassVisible(!passVisible)}
                        >
                          {passVisible ? (
                            <MdOutlineVisibility />
                          ) : (
                            <MdOutlineVisibilityOff />
                          )}
                        </div>
                      </div>
                      <p className="form-input-error">{errorPass}</p>
                    </div>
                  </LoginLeftFormItem>
                  <LoginLeftFormItem>
                    <div className="form-input-type">Confirm Password</div>
                    <div className="form-input-container">
                      <div className="form-input-content">
                        <input
                          type={!confirmPassVisible ? "password" : "text"}
                          name="password"
                          value={confirmPass}
                          required
                          onFocus={(e) =>
                            e.target.parentElement.classList.add("focus")
                          }
                          onBlur={(e) =>
                            e.target.parentElement.classList.remove("focus")
                          }
                          onChange={confirmPassHandler}
                        />
                        <div
                          className="form-input-content-icon"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setConfirmPassVisible(!confirmPassVisible)
                          }
                        >
                          {confirmPassVisible ? (
                            <MdOutlineVisibility />
                          ) : (
                            <MdOutlineVisibilityOff />
                          )}
                        </div>
                      </div>
                      <p className="form-input-error">{errorConfirmPass}</p>
                    </div>
                  </LoginLeftFormItem>
                </Fade>
              ) : (
                <Fade right>
                  <ReactInputVerificationCode
                    value={verificationCode}
                    length={6}
                    onChange={verificationCodeHandler}
                    autoFocus
                  />
                </Fade>
              )}
            </LoginLeftForm>

            {step === 3 && (
              <Fade right>
                <div className="get-code-again" onClick={getCodeAgainHandler}>
                  Didn’t get a verfication code?
                </div>
              </Fade>
            )}

            <LoginLeftBtnContainer>
              <button
                type="submit"
                ref={btnRef}
                onClick={buttonHandler}
                className={
                  step === 1 &&
                  email &&
                  errorEmail === null &&
                  university &&
                  errorUniversity === null &&
                  major &&
                  errorMajor === null &&
                  graduationYear &&
                  errorGraduationYear === null
                    ? ""
                    : step === 2 &&
                      ((errorPass === null && errorConfirmPass === null) ||
                        (password && confirmPass && password === confirmPass))
                    ? ""
                    : step === 3 && verificationCode !== "······"
                    ? ""
                    : "disabled"
                }
              >
                {isFetching ? <CircularProgress top="-5" /> : "Next"}
              </button>
            </LoginLeftBtnContainer>
          </div>
        </Fade>
      </div>

      <div className="signup-left">
        <div className="signup-left-text">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <ToastContainer style={{ width: "380px" }} position="top-center" />
    </>
  );
};

export default Registration;
