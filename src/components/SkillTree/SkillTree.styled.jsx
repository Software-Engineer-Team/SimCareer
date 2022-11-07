import styled from "styled-components";

export const SkillTreeContainer = styled.div`
  width: 100%;
  height: 100%;

  .blurry {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/images/blurry_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const SkillTreeContent = styled.div`
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

  .skill-tree-title {
    font-family: "Gilroy-Bold", sans-serif;
    font-size: 40px;
    text-transform: uppercase;
  }
`;
