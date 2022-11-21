import styled from "styled-components";

export const TipsSectionContainer = styled.div`
  visibility: visible;
  opacity: 1;
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370px;
  padding: 25px 25px 30px 25px;
  background: #fff;
  z-index: 11;
  border: 1px solid #d7dde2;
  box-shadow: 0 0 10px 2px rgb(17 17 17 / 4%);
  transition: all ease 0.3s;
  transform: translateY(0);
  border-radius: 6px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  .modal-tip-dialog {
    .modal-tip-content {
      .modal-tip-header {
        position: absolute;
        right: 20px;
        top: 10px;
        color: #d7dde2;
        font-size: 12px;
        border: none;
        background: none;
        svg {
          font-size: 20px;
          cursor: pointer;
        }
      }
    }

    .modal-tip-body {
      font-size: 13px;
      line-height: 1.54;
      text-align: left;
      .list-tips {
        border: none;
        background-color: #f6f8fa;
        margin: 25px 0 0;
        padding: 26px 21px;
        li {
          font-size: 12px;
          padding-left: 10px;
          list-style: disc;
          margin: 0 0 8px 20px;
        }
      }
      .title-tip {
        text-transform: uppercase;
        color: #00b384;
        font-weight: 600;
        font-size: 13px;
        font-family: HK Grotesk, sans-serif;
      }
    }
  }
`;