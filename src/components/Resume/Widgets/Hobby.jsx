import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "@hooks/useImportWidget";

const HobbyItem = ({ name, descriptionHtml, idx }) => {
  useImportWidget({ html: descriptionHtml, elId: "HOBBY_" + idx });
  return (
    <div className="hobby-content" id={"HOBBY_" + idx}>
      <h4>{name}</h4>
    </div>
  );
};

const Hobby = () => {
  const { hobby } = useSelector((state) => state.resume);
  return (
    <HobbyContainer>
      <div className="hobby">
        <div className="title">
          <span>Sở thích cá nhân</span>
        </div>

        {hobby.map(({ name, descriptionHtml }, idx) => {
          return (
            <HobbyItem
              name={name}
              descriptionHtml={descriptionHtml}
              idx={idx}
              key={idx}
            />
          );
        })}
      </div>
    </HobbyContainer>
  );
};

export default Hobby;

const HobbyContainer = styled.div`
  width: 100%;
  color: #ffffff;
  margin-top: 20px;

  .hobby {
    width: 100%;
    .title {
      background: #453a98;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

      span {
        margin-left: 0px;
      }
    }

    h4 {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 22px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    .hobby-content {
      margin-left: 6px;
      h4 {
        min-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        margin: 0px;
        font-size: 22px;
        font-family: Cambria, Georgia, serif;
        font-weight: 600;
      }
      ul,
      ol,
      p {
        font-size: 20px;
        font-family: Cambria, Georgia, serif;
        margin: 0;
      }
    }
  }
`;
