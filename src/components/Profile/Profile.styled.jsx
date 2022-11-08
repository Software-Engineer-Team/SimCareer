import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileContent = styled.div`
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

  .inner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;

    .profile-img {
      display: flex;
      flex-direction: column;

      .img {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;

        & > img {
          width: 150px;
          height: 150px;
          object-fit: cover;
        }

        .edit {
          cursor: pointer;
          position: absolute;
          right: 0;
          bottom: -10px;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }

      .profile-title {
        font-family: "Anton", sans-serif;
        font-size: 36px;
        text-transform: uppercase;
      }
    }

    .input-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      max-width: 900px;
      gap: 30px;
    }

    .submit-cv {
      margin-top: 42px;
      font-weight: 600;
      font-size: 18px;
      width: 890px;
      padding: 10px 0;
      text-align: left;
      font-family: Cambria, Georgia, serif;
      display: flex;
      & > label {
        align-self: center;
      }

      & > span {
        color: red;
        position: relative;
        margin-left: 3px;
      }

      .btn-submit {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 20px;

        .btn-submit-content {
          padding: 2.5px 24px;
          text-align: center;
          background-color: #6a3ce8;
          border-radius: 37px;
          color: #ffffff;
          transition: all 100ms ease-in;
          border: 1px solid #6a3ce8;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;

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
