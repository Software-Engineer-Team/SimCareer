import styled from "styled-components";

export const Container = styled.div`
  --position-ob: 10px;
  width: 100%;
  height: 100%;
  padding: var(--position-ob);
  z-index: 1000;

  position: relative;
  .image-logo {
    position: absolute;
    top: var(--position-ob);
    left: var(--position-ob);
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;
