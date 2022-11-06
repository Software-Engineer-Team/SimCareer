import styled from "styled-components";

export const WeeklyNewsItem = styled.div`
  position: relative;
  .content {
    display: flex;
    flex-direction: ${({ flexReverse }) =>
      flexReverse ? "row-reverse" : "row"};
    margin-bottom: 30px;

    .news-img {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border-radius: 20px;
        min-width: 190px;
        max-height: 160px;
        object-fit: cover;
      }
    }

    .news-title,
    .specific-time,
    .specific-content {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: 700;
      font-size: 15px;
    }

    .news-content {
      margin-left: ${({ flexReverse }) => (flexReverse ? "0px" : "20px")};
      font-family: "Source Code Pro", monospace;
      text-transform: uppercase;

      .day-time {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;

        .specific-time {
          -webkit-line-clamp: 1;
        }

        .specific-time > span {
          font-size: 11.3px;
          font-weight: 400;
          font-family: "Source Code Pro", monospace;
          text-transform: none;
          font-style: italic;
          line-height: 2.2;
          margin-right: 30px;
        }

        .news-read {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .news-read-content {
            padding: 0px 34px;
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
              font-size: 14px;
              text-transform: uppercase;
              font-weight: 400 !important;
            }
          }
        }
      }

      .specific-content {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
        text-transform: none;
        font-size: 13px;
        font-weight: 500;
        margin-top: 10px;
      }
    }
  }
`;
