import styled from "styled-components";

export const SkillTreeItemContainer = styled.div`
  width: 722px;
  height: 240px;
  border: 2px solid #000000;
  min-width: 1000px;
  background: rgba(251, 254, 251, 0.7);
  border-radius: 13px;
  position: relative;
  margin-top: 1.2rem;

  .skill-tree-content-title {
    color: #0f131a;
    font-size: 24px;
    margin-top: 12px;
    margin-left: 12px;
    text-transform: capitalize;
    font-weight: 800;
  }

  .skill-tree-content-list {
    display: flex;
    padding: 20px;

    .skill-tree-content {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 120px;
      height: 120px;
      position: relative;
      margin: 10px 20px 40px 20px;
      &:first-child {
        margin-left: 0px;
      }

      .skill-tree-content-img {
        width: 70px;
        min-height: 70px;
        border: 1px solid #545454;
        border-radius: 13px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 100ms ease-in;

        &:hover {
          background-color: #d9d0d0;
        }

        img {
          width: 100%;
          height: 100%;
          max-width: inherit !important;
          object-fit: cover;
        }
      }

      .skill-tree-text {
        width: 120px;
        font-size: 16px;
        margin-top: 5px;
        text-align: center;
        line-height: 1;
        /* font-family: "Gilroy-Bold"; */
        font-family: "Roboto", Helvetica, Arial, sans-serif !important;
        font-weight: 500;
      }

      .click-for-more {
        width: 17px;
        height: 17px;
        font-size: 10px;
        background: #9426e2;
        line-height: 0;
        margin-left: 5px;
        border-radius: 3px;
        position: absolute;
        right: 16px;
        top: -5px;
        display: flex;
        align-items: center;
        justify-content: center;

        .poppins {
          color: #ffffff;
          font-family: "Poppins", sans-serif;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    width: auto;
    min-width: auto;
    height: auto;
    .skill-tree-content-title {
      font-size: 15px;
      margin-top: 12px;
      font-weight: 500;
    }

    .skill-tree-content-list {
      padding: 10px;
      flex-wrap: wrap;

      .skill-tree-content {
        width: 50%;
        height: auto;
        position: relative;
        margin: 10px 0;
        justify-content: space-between;

        .skill-tree-content-img {
          width: 50px;
          min-height: 50px;
          border-radius: 6px;

          img {
            width: 100%;
            height: 100%;
            max-width: inherit !important;
            object-fit: cover;
          }
        }

        .skill-tree-text {
          width: 120px;
          font-size: 12px;
          margin-top: 5px;
          text-align: center;
          line-height: 1;
          /* font-family: "Gilroy-Bold"; */
          font-family: "Roboto", Helvetica, Arial, sans-serif !important;
          font-weight: 500;
        }

        .click-for-more {
          right: 52px;

          .poppins {
            color: #ffffff;
            font-family: "Poppins", sans-serif;
          }
        }
      }
    }
  }
`;
