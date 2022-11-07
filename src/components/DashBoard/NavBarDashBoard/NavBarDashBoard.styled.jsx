import styled from "styled-components";
export const LiTag = styled.li`
  list-style: none;
  height: 100%;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
  color: #9e9e9e;
  & .svg {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: ${(props) => props.w};
      height: ${(props) => props.h};
    }
  }
  span {
    margin-left: 10px;
    opacity: 0;
    min-width: 250px;
    transition: opacity 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 70px;
  height: 100%;
  padding: 0.75rem 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  z-index: 1000;

  div.menu-container {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    margin-left: 18px;
    .menu-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 35px;
        height: 35px;
        object-fit: cover;
      }
      div {
        font-family: "Anton", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        height: 15px;
      }
    }
    svg {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }

  & > a {
    width: 100%;
    height: 52px;
    background-color: rgba(192, 0, 0, 0.03);
    border-radius: 4px;
    margin: 10px 0;
    text-decoration: none;
    color: black;
    img {
      width: 100%;
      height: 100%;
      color: #9e9e9e;
      font-size: 23px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  &:hover {
    /* width: 250px; */
    ${LiTag} {
    }
  }
`;

export const UlNav = styled.ul`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  list-style: none;
  padding-left: 0;
  margin-top: 20px;
  & a {
    text-decoration: none;
    position: relative;
    width: 100%;
    height: 70px;
    &:hover {
      transition: all 0.2s ease;
    }
    &.active {
      background-color: rgba(192, 0, 0, 0.03);
      span {
        color: #000;
        font-weight: 700;
      }
      & li svg {
        color: #000;
      }
      &::after {
        content: "";
        right: 0;
        height: 100%;
        top: 0;
        border-radius: 10px;
        width: 4px;
        opacity: 1;
        position: absolute;
        background: #000;
      }
    }
    transition: all 220ms ease-in;

    &:hover {
      background-color: rgba(192, 0, 0, 0.03);
      span {
        color: #000;
        font-weight: 700;
      }
      & li svg {
        color: #000;
      }
    }
  }
`;
