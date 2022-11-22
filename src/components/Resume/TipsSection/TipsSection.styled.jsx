import styled from "styled-components";

export const TipsSectionContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  max-height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const TipsSectionContent = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 670px;
  padding: 25px 25px 30px 25px;
  background: #fff;
  z-index: 100;
  border: 1px solid #d7dde2;
  box-shadow: 0 0 10px 2px rgb(17 17 17 / 4%);
  transition: all ease 0.3s;
  transform: translateY(0);
  border-radius: 3px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    z-index: 100;
  }
  p {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 20px;
  }

  .modal-tip-dialog {
    height: 100%;
    overflow: auto;
    .modal-tip-content {
      .modal-tip-header {
        position: absolute;
        right: 20px;
        top: 10px;
        color: #d7dde2;
        border: none;
        background: none;
        svg {
          font-size: 24px;
          cursor: pointer;
        }
      }
    }

    .modal-tip-body {
      font-size: 22px;
      line-height: 1.54;
      text-align: left;
      .list-tips {
        border: none;
        background-color: #f6f8fa;
        margin: 25px 0 10px;
        padding: 26px 21px;
        li {
          font-size: 19px;
          padding-left: 10px;
          list-style: disc;
          margin: 0 0 8px 20px;
          &.outline-none {
            list-style: none;
          }
        }
      }
      .title-tip {
        text-transform: uppercase;
        color: #00b384;
        font-weight: 600;
        font-size: 19px;
        font-family: HK Grotesk, sans-serif;
      }
    }
  }
`;
