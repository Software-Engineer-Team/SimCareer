import React, { useEffect, useRef, useState } from "react";
import {
  LoginLeftBtnContainer,
  LoginLeftForm,
  LoginLeftFormItem,
} from "./LoginLeft.styled";
import { validateEmail } from "@utils/utils";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import ReactInputVerificationCode from "react-input-verification-code";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { CircularProgress } from "..";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPass = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [step, setStep] = useState(1);
  const btnRef = useRef(null);

  useEffect(() => {
    const stepCircles = document.querySelectorAll(
      ".forgot-pass-steps-breadcrumb .step-circle"
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

  const verificationCodeHandler = (value) => {
    setVerificationCode(value);
  };

  const buttonHandler = async () => {
    setIsFetching(true);
    try {
      switch (step) {
        case 1: {
          const res = await axios.post(
            `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/forgot-pass`,
            null,
            { params: { email } }
          );
          console.log(res);
          break;
        }
        case 2: {
          const res = await axios.post(
            `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/forgot-pass-verify`,
            null,
            { params: { code: verificationCode } }
          );
          console.log(res);
          break;
        }
        case 3: {
          const res = await toast.promise(
            axios.post(
              `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/forgot-pass-update`,
              { email, password }
            ),
            {
              success: "You have already get your password 👌",
              error: "Get your password fail 🤯",
            }
          );
          console.log(res);
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
      toast.error(error.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
      });
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
        style={{ minHeight: step === 1 ? 620 : step === 2 ? 730 : 610 }}
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
              Recover your Password
            </div>

            <div className="forgot-pass-steps-breadcrumb">
              <div className="step-circle"></div>
              <div className="next-line"></div>
              <div className="step-circle"></div>
              <div className="next-line"></div>
              <div className="step-circle"></div>
            </div>

            {step === 1 ? (
              <Fade right>
                <div className="forgot-pass-content">What's your email ?</div>
              </Fade>
            ) : (
              step === 2 && (
                <Fade right>
                  <div className="registration-content-verification">
                    A verification code has been sent to your email address:
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
                  <LoginLeftFormItem type="forgot-pass">
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
                </>
              ) : step === 3 ? (
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

            {step === 2 && (
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
                  step === 1 && email
                    ? ""
                    : step === 3 &&
                      ((errorPass === null && errorConfirmPass === null) ||
                        (password && confirmPass && password === confirmPass))
                    ? ""
                    : step === 2 && verificationCode !== "······"
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

      <div className="forgot-pass-left">
        <div className="forgot-pass-left-text">
          <span>Go back to </span>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <ToastContainer style={{ width: "380px" }} position="top-center" />
    </>
  );
};

export default ForgotPass;
