import React, { useState } from "react";
import { validateEmail, validatePhoneNumber } from "@utils/utils";
import { ProfileContainer, ProfileContent } from "./Profile.styled";
import ProfileInput from "./ProfileInput/ProfileInput";
import SubmitCV from "./SubmitCV/SubmitCV";
import TableCV from "./TableCV/TableCV";
import { Fade, Flip, Slide, Zoom } from "react-reveal";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [errorAccountName, setErrorAccountName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [showFormSubmitCV, setShowFormSubmitCV] = useState(false);
  const [allFiles, setAllFiles] = useState([]);

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

  const accountNameHandler = (e) => {
    setAccountName(e.target.value);
    if (e.target.value === "") {
      setErrorAccountName("Please enter your account name.");
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorAccountName(null);
    }
  };

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value === "") {
      setErrorPhoneNumber("Please enter your phone number.");
      e.target.parentElement.classList.add("error");
    } else if (!validatePhoneNumber(e.target.value)) {
      setErrorPhoneNumber(
        "Please enter correct phone number (eg.XXX XXX XXXX)"
      );
      e.target.parentElement.classList.add("error");
    } else {
      e.target.parentElement.classList.remove("error");
      setErrorPhoneNumber(null);
    }
  };

  const submitHandler = () => {
    let timerInterval;
    Swal.fire({
      title: "<strong>Đang chờ xử lý...</strong>",
      html: "Vui lòng đợi trong giây lát!!!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "CV của bạn đã được gửi",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setAllFiles((preFiles) => {
            for (let index = 0; index < preFiles.length; index++) {
              preFiles[index].status = "Đã xem xét";
              return [...preFiles];
            }
          });
        });
      }
    });
  };

  return (
    <ProfileContainer>
      <ProfileContent>
        <div className="inner-content">
          <div className="profile-img">
            <Flip left>
              <div className="img">
                <img src="/images/simcareer-not-label.png" alt="" />
                <div className="edit">
                  <img src="/images/edit.png" alt="" />
                </div>
              </div>
            </Flip>
            <Fade bottom>
              <div className="profile-title">Your Profile</div>
            </Fade>
          </div>
          <div className="input-container">
            <Slide right>
              <ProfileInput
                type="text"
                label="Họ và tên"
                handler={fullNameHandler}
                value={fullName}
                error={errorFullName}
              />
              <ProfileInput
                type="text"
                label="Tên tài khoản"
                handler={accountNameHandler}
                value={accountName}
                error={errorAccountName}
              />
              <ProfileInput
                type="email"
                label="Email"
                handler={emailHandler}
                value={email}
                error={errorEmail}
                width="200px"
              />
              <ProfileInput
                type="tel"
                label="Số điện thoại"
                handler={phoneNumberHandler}
                value={phoneNumber}
                error={errorPhoneNumber}
              />
            </Slide>
          </div>

          <div className="submit-cv">
            <Flip right>
              <label>CV của bạn</label>
              <span>*</span>
            </Flip>
            <div className="btn-submit">
              <Zoom right>
                <div
                  className="btn-submit-content"
                  onClick={() => setShowFormSubmitCV(true)}
                >
                  <span>Tải lên</span>
                </div>
              </Zoom>
            </div>
          </div>

          {showFormSubmitCV && (
            <SubmitCV
              onShowFormSubmitCV={setShowFormSubmitCV}
              onSetFiles={setAllFiles}
              currentFile={allFiles[allFiles.length - 1]?.postTitle}
            />
          )}

          <Fade bottom>
            <TableCV rows={allFiles} />
          </Fade>

          <Fade right>
            <Button
              variant="contained"
              size="medium"
              style={{
                marginTop: "0px",
                padding: "5px 5px",
                background: "#fff",
                color: "#000",
                textTransform: "none",
                width: "130px",
                alignSelf: "center",
                fontFamily: "Muli",
                fontWeight: 700,
              }}
              onClick={submitHandler}
            >
              Nộp lên
            </Button>
          </Fade>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
