import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
const CustomSelections = ({
  width,
  widthContainer,
  formType,
  selectOptionsHandler,
  selectVal,
  options,
  children,
}) => {
  const selectHandler = (e) => {
    selectOptionsHandler(e.target.value);
  };

  return (
    <CustomSelectionsContainer>
      <SelectionOptionsContainer width={width} widthContainer={widthContainer}>
        <div className="form-type">
          <label>{formType}</label>
        </div>
        <div className="form-container">
          <div className="form-content">
            <div className="form-select">
              <select value={selectVal} onChange={selectHandler}>
                {options?.map((opVal, idx) => (
                  <option value={opVal} key={idx}>
                    {opVal}
                  </option>
                ))}
              </select>
              <div className="btn-list">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </SelectionOptionsContainer>
      {children}
    </CustomSelectionsContainer>
  );
};

export default CustomSelections;

export const CustomSelectionsContainer = styled.div`
  display: flex;
`;

export const SelectionOptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  width: ${({ widthContainer }) => (widthContainer ? widthContainer : "100%")};
  margin-top: 5px;
  padding: 5px 0;

  .form-type {
    height: 24px;
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    color: #52525a;
    margin-bottom: 0.25rem;
    font-family: Cambria, Georgia, serif;
  }

  .form-container {
    height: 100%;
    width: 100%;
    .form-content {
      display: flex;
      height: 38px;
      width: 100%;

      .form-select {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #f4f4f5;
        width: ${({ width }) => (width ? width : "100%")};

        select {
          padding: 10px 20px;
          width: 100%;
          border: 0;
          outline: none;
          cursor: pointer;
          font-size: 15px;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: "";
        }

        .btn-list {
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;
          padding: 5px;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
