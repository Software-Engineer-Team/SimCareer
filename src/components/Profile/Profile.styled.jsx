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
`;
