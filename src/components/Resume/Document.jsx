import React, { useRef } from "react";
import { dragElement } from "@utils/drag-element";
import {
  Body,
  BodyLeft,
  BodyRight,
  DocumentContainer,
  DocumentContent,
} from "./Document.styled";
import Achivements from "./Widgets/Achivements";
import Certificate from "./Widgets/Certificate";
import Education from "./Widgets/Education";
import Experience from "./Widgets/Experience";
import Heading from "./Widgets/Heading";
import Hobby from "./Widgets/Hobby";
import Skill from "./Widgets/Skill";
import Summary from "./Widgets/Summary";
let a = 0.754816,
  b = 0,
  c = 0,
  d = 0.754816,
  tx = 100.161,
  ty = 119.849;

const Document = () => {
  const docRef = useRef(null);
  const docContentRef = useRef(null);

  dragElement(docRef.current);

  const documentWheelHandler = (e) => {
    if (e.deltaY > 0) {
      a = a - 0.02;
      d = d - 0.03;
      tx = tx + 32;
      ty = ty + 28;
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    } else {
      a = a + 0.02;
      d = d + 0.03;
      tx = tx - 20;
      ty = ty - 20;
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    }
  };
  return (
    <DocumentContainer onWheel={documentWheelHandler} ref={docRef}>
      <DocumentContent ref={docContentRef} id="document-content-id">
        <Heading />
        <Body>
          <BodyLeft>
            <Summary />
            <Experience />
            <Skill />
          </BodyLeft>
          <BodyRight>
            <Education />
            <Certificate />
            <Hobby />
            <Achivements />
          </BodyRight>
        </Body>
      </DocumentContent>
    </DocumentContainer>
  );
};

export default Document;
