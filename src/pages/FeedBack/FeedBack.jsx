import React from "react";
import {
  FeedBackContainer,
  FeedBackContent,
  FeedBackContentLeft,
  FeedBackContentRight,
  FeedBackHeader,
} from "./FeedBack.styled";

const FeedBack = () => {
  return (
    <FeedBackContainer>
      <FeedBackHeader />
      <FeedBackContent>
        <FeedBackContentLeft></FeedBackContentLeft>
        <FeedBackContentRight></FeedBackContentRight>
      </FeedBackContent>
    </FeedBackContainer>
  );
};

export default FeedBack;
