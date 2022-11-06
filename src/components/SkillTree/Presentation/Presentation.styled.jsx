import styled from "styled-components";

export const PresentationContainer = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0px;

  .back-drop {
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  }

  .dialog-container {
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    height: 100%;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .dialog-content {
      width: 900px;
      max-width: 900px;
      min-height: 200px;
      display: flex;
      max-height: calc(100% - 64px);
      flex-direction: column;
      margin: 32px;
      position: relative;
      box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
        0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: #fff;
      border-radius: 4px;

      .dialog-content-des {
        &:first-child {
          padding-top: 20px;
        }
        flex: 1 1 auto;
        padding: 8px 24px;
        overflow-y: auto;
        min-height: 200px;

        .virtual-env {
          padding-top: 2rem;
          width: 600px;
          margin: 0px auto;

          h1 {
            margin: 0px;
            padding: 0px;
            font-size: 44px;
            color: #292929;
            font-weight: 800;
            line-height: 40px;
            font-family: "Muli";
            margin-bottom: 5px;
          }

          p {
            margin: 0;
            font-size: 21px;
            color: #292929;
            font-weight: 400;
            font-family: "Muli";
            margin-bottom: 20px;
          }
          .text-muted {
            font-size: 18px;
            color: gray;
            font-weight: 300;
            font-family: "Muli";
            margin-bottom: 20px;
          }

          h2 {
            font-size: 27px;
            color: #292929;
            font-weight: 800;
            margin-bottom: 20px;
            margin-top: 20px;
          }
        }
      }

      .btn-container {
        flex: 0 0 auto;
        display: flex;
        padding: 8px;
        align-items: center;
        justify-content: flex-end;

        .btn {
          padding: 6px 8px;
          color: #3f51b5;
          font-size: 1rem;
          min-width: 64px;
          box-sizing: border-box;
          transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-weight: 500;
          line-height: 1.75;
          border-radius: 4px;
          letter-spacing: 0.02857em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          background-color: transparent;
          border: 0;
          &:hover {
            background-color: rgba(63, 81, 181, 0.04);
          }
        }
      }
    }
  }
`;
