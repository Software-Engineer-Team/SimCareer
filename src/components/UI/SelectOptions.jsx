import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
const SelectOptions = ({ width, widthContainer }) => {
  return (
    <SelectionOptionsContainer width={width} widthContainer={widthContainer}>
      <div className="form-type">
        <label>Start date</label>
      </div>
      <div className="form-container">
        <div className="form-content">
          <div className="form-month">
            <select data-value="01">
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <div className="btn-list">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="form-year">
            <select data-value="01">
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <div className="btn-list">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </SelectionOptionsContainer>
  );
};

export default SelectOptions;

export const SelectionOptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  width: ${({ widthContainer }) => (widthContainer ? widthContainer : "100%")};

  .form-type {
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    color: #52525a;
    margin-bottom: 0.25rem;
    font-family: "Poppins", sans-serif;
  }

  .form-container {
    width: 100%;
    .form-content {
      display: flex;
      align-items: center;

      .form-month,
      .form-year {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #efefef;
        select {
          padding: 10px 20px;
          width: ${({ width }) => (width ? width : "100%")};
          border: 0;
          outline: none;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: "";
          /* --tw-text-opacity: 1; */
          /* color: rgb(162 162 168 / var(--tw-text-opacity)); */
          option {
            /* --tw-bg-opacity: 1; */
            /* background-color: rgb(255 255 255 / var(--tw-bg-opacity)); */
          }
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

      .form-month {
        margin-right: 8px;
      }
    }
  }
`;
