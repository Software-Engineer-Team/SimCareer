import React, { useEffect, useState } from "react";
import {
  LoginLeftBtnContainer,
  LoginLeftForm,
  LoginLeftFormItem,
} from "./LoginLeft.styled";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { validateEmail } from "@utils/utils";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const LoginLeftContent = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");

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

  return (
    <>
      <div className="login-left-content">
        <div className="login-left-content-inner">
          <div className="login-left-title">Login in</div>
          <div className="login-left-welcome">
            Welcome to SimCareer, please login below to start your career
            hacking journey with us!
          </div>
          <LoginLeftForm>
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
            <Link to="/forget_password">Forget Password ?</Link>
          </LoginLeftForm>
          <LoginLeftBtnContainer>
            <button
              type="submit"
              className={
                password && email && errorPass === null && errorEmail === null
                  ? ""
                  : "disabled"
              }
            >
              Log in
            </button>
          </LoginLeftBtnContainer>
          <div className="break-line">
            <div></div>
          </div>
          <div className="login-google">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={(s) => console.log(s)}
              onFailure={() => console.log("Success")}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>

      <div className="login-left-register">
        <div className="login-left-register-text">
          <span>Don't have an account? </span>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default LoginLeftContent;
