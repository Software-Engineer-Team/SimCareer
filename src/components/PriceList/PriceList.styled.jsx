import styled from "styled-components";

export const PriceListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PriceListContent = styled.div`
  --border-color: #857877;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 50px 50px 100px 120px;
  max-width: 1940px;
  margin: 0 auto;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .inner-price-content {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    margin: 0 auto;
    .price-content {
      --min-max-height-width: 350px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      border: 3px solid var(--border-color);
      box-sizing: border-box;
      border-top: 0;
      transition: all 300ms ease-in;
      min-width: var(--min-max-height-width);
      max-width: var(--min-max-height-width);
      .image-price {
        position: relative;
        img {
          width: 100%;
          min-width: var(--min-max-height-width);
          max-width: var(--min-max-height-width);
          min-height: var(--min-max-height-width);
          height: 100%;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .price {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 55px;
          bottom: 0;
          color: #fff;
          font-size: 35px;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
          letter-spacing: 2px;
        }
      }
      .price-content-column {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .price-content-description {
          height: 100%;
          .break-line {
            display: flex;
            flex-direction: column;
            align-items: center;
            & > div {
              height: 2px;
              width: 70%;
              background-color: #e2dfdf;
            }
          }
          .text {
            text-align: center;
            font-family: Cambria, Georgia, serif;
            padding: 20px;
            margin: 0;
            min-height: 155px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.last-row-text {
              min-height: 0px !important;
            }
          }
          .text-more {
            text-align: center;
            font-family: Cambria, Georgia, serif;
            padding: 10px;
            font-size: 23px;
            margin: 0;
            min-height: 55px;
          }
        }
      }
    }
  }
`;

export const PriceBtn = styled.div`
  --btn-color: ${({ btnColor }) => btnColor};
  &.price-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .price-btn-content {
      padding: 5px 0px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--btn-color);
      border-radius: 10px;
      color: #ffffff;
      transition: all 100ms ease-in;
      border: 1px solid var(--btn-color);
      cursor: pointer;
      text-decoration: none;

      &:hover {
        background-color: #ffffff;
        color: var(--btn-color);
      }

      & > span {
        font-family: "Anton", sans-serif;
        font-size: 17px;
        text-transform: uppercase;
        font-weight: 400 !important;
      }
    }
  }
`;
