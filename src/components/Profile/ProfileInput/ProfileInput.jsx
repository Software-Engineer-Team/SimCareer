import React from "react";
import { ProfileInputContainer } from "./ProfileInput.styled";

const ProfileInput = ({ type, value, handler, error, label }) => {
  return (
    <ProfileInputContainer>
      <div className="form-input-type">
        <label>{label}</label>
        <span>*</span>
      </div>
      <div className="form-input-container">
        <div className="form-input-content">
          <input
            type={type}
            name="email"
            value={value}
            required
            onFocus={(e) => e.target.parentElement.classList.add("focus")}
            onBlur={(e) => e.target.parentElement.classList.remove("focus")}
            onChange={handler}
          />
        </div>
        <p className="form-input-error">{error}</p>
      </div>
    </ProfileInputContainer>
  );
};

export default ProfileInput;
