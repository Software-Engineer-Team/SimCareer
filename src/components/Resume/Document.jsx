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
import PageController from "./PageController/PageController";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useReactToPrint } from "react-to-print";

let a = 0.544816,
  b = 0,
  c = 0,
  d = 0.544816,
  tx = 232.161,
  ty = 375.849;

const Document = () => {
  const docRef = useRef(null);
  const docContentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => docContentRef.current,
    documentTitle: "Resume",
  });

  dragElement(docRef.current);

  const documentWheelHandler = (e) => {
    if (e.deltaY > 0) {
      a = a - 0.02;
      d = d - 0.02;
      /* tx = tx + 32; */
      /* ty = ty + 28; */
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    } else {
      a = a + 0.02;
      d = d + 0.02;
      /* tx = tx - 13; */
      /* ty = ty - 20; */
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    }
  };

  const zoomInHandler = () => {
    a = a + 0.05;
    d = d + 0.05;
    docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
  };

  const zoomOutHandler = () => {
    a = a - 0.05;
    d = d - 0.05;
    docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
  };

  const focusStrong = () => {
    a = 1;
    d = 1;
    docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
  };

  const printDocument = () => {
    const input = document.getElementById("document-content-id");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      let width = pdf.internal.pageSize.getWidth;
      let height = pdf.internal.pageSize.getHeight;
      pdf.addImage(imgData, "png", 0, 0, width(), height());
      pdf.save("download.pdf");
    });
  };

  return (
    <>
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
      <PageController
        zoomInHandler={zoomInHandler}
        zoomOutHandler={zoomOutHandler}
        focusStrong={focusStrong}
        printDocument={printDocument}
        handlePrint={handlePrint}
      />
    </>
  );
};

export default Document;
