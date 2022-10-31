import React, { useEffect, useRef, useState } from "react";
import {
  LoginContainer,
  LoginContent,
  LoginLeftBtnContainer,
  LoginLeftContainer,
  LoginLeftForm,
  LoginLeftFormItem,
  LoginRightContainer,
} from "./LoginPage.styled";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import useScript from "~/hooks/useScript";

const LoginPage = () => {
  const [passVisible, setPassVisible] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  useScript("/assets/js/custom-slick.js");

  return (
    <LoginContainer>
      <LoginContent>
        <LoginLeftContainer>
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
                        required
                        onFocus={(e) =>
                          e.target.parentElement.classList.add("focus")
                        }
                        onBlur={(e) =>
                          e.target.parentElement.classList.remove("focus")
                        }
                      />
                      <div className="form-input-content-icon">
                        <AiOutlineMail />
                      </div>
                    </div>
                    <p className="form-input-error">You must enter a email</p>
                  </div>
                </LoginLeftFormItem>
                <LoginLeftFormItem>
                  <div className="form-input-type">Password</div>
                  <div className="form-input-container">
                    <div className="form-input-content">
                      <input
                        type={passVisible ? "password" : "text"}
                        name="password"
                        required
                        onFocus={(e) =>
                          e.target.parentElement.classList.add("focus")
                        }
                        onBlur={(e) =>
                          e.target.parentElement.classList.remove("focus")
                        }
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
                    <p className="form-input-error">
                      Please enter your password.
                    </p>
                  </div>
                </LoginLeftFormItem>
                <Link to="/forget_password">Forget Password ?</Link>
              </LoginLeftForm>
              <LoginLeftBtnContainer>
                <button type="submit">Log in</button>
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
                {/* <GoogleLogout */}
                {/*   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" */}
                {/*   buttonText="Logout" */}
                {/*   onLogoutSuccess={(s) => console.log(s)} */}
                {/* ></GoogleLogout> */}
              </div>
            </div>
          </div>

          <div className="login-left-register">
            <div className="login-left-register-text">
              <span>Don't have an account? </span>
              <Link to="/register">Sign up</Link>
            </div>
          </div>
        </LoginLeftContainer>
        <LoginRightContainer id="login-right-container">
          <div className="login-right-content">
            <img src="/images/simcareer.png" alt="" />
            <div className="slick-img-content">
              <div className="slick-img-backup"></div>
              <img
                src="https://d2cgute8qahbr9.cloudfront.net/screenshot/chp_dashboard_screenshot.png"
                alt=""
              />
              <img
                src="https://d2cgute8qahbr9.cloudfront.net/screenshot/alphasights_screenshot.png"
                alt=""
                className="hidden"
              />
              <img
                src="https://d2cgute8qahbr9.cloudfront.net/screenshot/kinetix_screenshot.png"
                alt=""
                className="hidden"
              />
            </div>
            <div className="slick-img-title">
              Immersive Virtual Intern Experience
            </div>
            <div className="slick-img-description">
              Receive the most comprehensive and structured trainings from top
              industry leaders in different industries, eg. hedge fund,
              investment banking, management consulting etc.
            </div>
            <div className="slick-btn">
              <div className="slick-btn-back">
                <IoArrowBackCircle />
              </div>
              <div className="slick-dots">
                <div className="dot-active"></div>
                <div></div>
                <div></div>
              </div>
              <div className="slick-btn-forward">
                <IoArrowForwardCircle />
              </div>
            </div>
          </div>
        </LoginRightContainer>
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
