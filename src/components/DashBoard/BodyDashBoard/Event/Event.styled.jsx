import styled from "styled-components";

export const EventItem = styled.div`
  &.event-item {
    display: flex;
    justify-content: space-between;
    --event-item-margin-bottom: 35px;
    margin-bottom: var(--event-item-margin-bottom);

    &:last-child {
      margin-bottom: 0px !important;
      .event-right-container {
        &:before {
          height: 100% !important;
        }
      }
    }

    .event-left-container {
      align-self: center;
      display: flex;
      min-width: 124px;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      position: relative;

      .day-time {
        min-width: 100%;
        font-family: "Anton", sans-serif;
        font-size: 20px;
        text-transform: uppercase;
      }

      .month-year {
        font-family: Cambria, Georgia, serif;
        font-size: 17px;
        text-align: left;
      }
    }

    .event-right-container {
      display: flex;
      flex-direction: column;
      position: relative;
      flex-wrap: wrap;
      --line: -40px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: calc(100% + var(--event-item-margin-bottom));
        background-color: #000000;
        left: var(--line);
      }

      &:after {
        left: var(--line);
        top: 60px;
        width: 30px;
        height: 1px;
      }

      .event-right-content {
        display: flex;

        .event-img {
          img {
            border-radius: 20px;
            width: 150px;
            height: 140px;
            object-fit: cover;
          }
        }
        .event-content {
          margin-left: 20px;
          font-family: "Source Code Pro", monospace;
          text-transform: uppercase;

          .title,
          .time {
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 700;
            font-size: 16px;
          }

          .time {
            -webkit-line-clamp: 3;
          }

          .time > span {
            font-size: 13.3px;
            font-weight: 400;
            font-family: "Source Code Pro", monospace;
            text-transform: none;
            font-style: italic;
          }
        }
      }
      .event-register {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;

        .event-register-content {
          min-width: 130px;
          text-align: center;
          background-color: #6a3ce8;
          border-radius: 37px;
          color: #ffffff;
          transition: all 100ms ease-in;
          border: 1px solid #6a3ce8;
          cursor: pointer;
          text-decoration: none;

          &:hover {
            background-color: #ffffff;
            color: #6a3ce8;
          }

          & > span {
            font-family: "Anton", sans-serif;
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 400 !important;
          }
        }
      }
    }
  }
`;
