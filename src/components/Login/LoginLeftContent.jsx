import React, { useEffect, useRef, useState } from "react";
import {
  LoginLeftBtnContainer,
  LoginLeftForm,
  LoginLeftFormItem,
} from "./LoginLeft.styled";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { postData, validateEmail } from "@utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Zoom } from "react-reveal";
import { CircularProgress } from "@components/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "@store/user-slice";
import { isMobile } from "react-device-detect";

const LoginLeftContent = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

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
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorPass(null);
    }
  };

  const submitHandler = async () => {
    try {
      setIsFetching(true);
      const { data } = await postData(
        { email, password },
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/sign-in`
      );
      dispatch(
        login({
          email,
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        })
      );

      const isSignedIn = localStorage.getItem("isSignedIn") === "true";
      if (isSignedIn) {
        navigate("/dash-board");
      } else {
        localStorage.setItem("isSignedIn", true);
        navigate("/judgements");
      }
      setPassword("");
      setEmail("");
    } catch (err) {
      if (err.response?.data.error === "Bad credentials") {
        return toast.error("Incorrect username or password", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } finally {
      setIsFetching(false);
    }
  };

  const googleSubmitHandler = async (s) => {
    try {
      setIsFetching(true);
      const { data } = await postData(
        {
          email: s.profileObj.email,
          password: "",
          name: s.profileObj.name,
          imgUrl: s.profileObj.imageUrl,
        },
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/user/sign-in-google`
      );
      const isSignedIn = localStorage.getItem("isSignedIn") === "true";
      if (isSignedIn) {
        navigate("/dash-board");
      } else {
        localStorage.setItem("isSignedIn", true);
        navigate("/judgements");
      }
    } catch (err) {
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <>
      <Zoom>
        <div className="login-left-content">
          <div className="login-left-content-inner">
            <div className="login-left-title">Đăng nhập</div>
            <div className="login-left-welcome">
              Chào mừng bạn đến với SimCareer, vui lòng đăng nhập bên dưới để
              bắt đầu hành trình hack sự nghiệp của bạn với chúng tôi!
            </div>
            <LoginLeftForm>
              <LoginLeftFormItem>
                <div className="form-input-type">E-mail</div>
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
                <div className="form-input-type">Mật Khẩu</div>
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
              <Link to="/forgot-password">Quên mật khẩu?</Link>
            </LoginLeftForm>
            <LoginLeftBtnContainer>
              <button
                type="submit"
                className={
                  password && email && errorPass === null && errorEmail === null
                    ? ""
                    : "disabled"
                }
                onClick={submitHandler}
              >
                {isFetching ? <CircularProgress top="-5" /> : "Đăng nhập"}
              </button>
            </LoginLeftBtnContainer>
            <div className="break-line">
              <div></div>
            </div>
            <div className="login-google">
              <GoogleLogin
                disabled={isMobile ? true : false}
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Đăng nhập bằng Google"
                onSuccess={googleSubmitHandler}
                onFailure={() => console.log("Failure")}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                prompt="select_account"
              />
            </div>
          </div>
        </div>
      </Zoom>

      <div className="login-left-register">
        <div className="login-left-register-text">
          <span>Không có tài khoản?</span>
          <Link to="/register"> Đăng ký</Link>
        </div>
      </div>

      <ToastContainer style={{ width: "380px" }} />
    </>
  );
};

export default LoginLeftContent;
