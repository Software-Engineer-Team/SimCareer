import styled from "styled-components";

const Button = ({ children, onClick, style }) => {
  return (
    <ButtonContainer style={style} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  --tw-border-opacity: 1;
  border: 1px solid rgb(162 162 168 / var(--tw-border-opacity));
  padding: 0.45rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f9f6fe;
    border-color: #5d25e7;
  }
  svg {
    font-size: 1.2rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;
