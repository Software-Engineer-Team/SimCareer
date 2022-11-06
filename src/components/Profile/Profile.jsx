import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { validateEmail } from "@utils/utils";
import { ProfileContainer, ProfileContent } from "./Profile.styled";
import { ProfileInputContainer } from "./ProfileInput/ProfileInput.styled";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

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

  return (
    <ProfileContainer>
      <ProfileContent>
        <div className="inner-content">
          <div className="profile-img">
            <div className="img">
              <img src="/images/simcareer.png" alt="" />
            </div>
            <div className="profile-title">SIRI'S Profile</div>
          </div>
          <ProfileInputContainer>
            <div className="form-input-type">Email</div>
            <div className="form-input-container">
              <div className="form-input-content">
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  onFocus={(e) => e.target.parentElement.classList.add("focus")}
                  onBlur={(e) =>
                    e.target.parentElement.classList.remove("focus")
                  }
                  onChange={emailHandler}
                />
              </div>
              <p className="form-input-error">{errorEmail}</p>
            </div>
          </ProfileInputContainer>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;
