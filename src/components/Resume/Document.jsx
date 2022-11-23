import React, { useRef } from "react";
import { dragElement } from "@utils/drag-element";
import {
  Body,
  BodyLeft,
  BodyRight,
  DocumentContainer,
  DocumentContent,
  JoinWithUsContainer,
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
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

let a = 0.544816,
  b = 0,
  c = 0,
  d = 0.544816,
  tx = 232.161,
  ty = 195.849;

const Document = ({ closeResumeRight, toggleCloseResumeRight }) => {
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
      tx = tx + 13;
      ty = ty + 20;
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    } else {
      a = a + 0.02;
      d = d + 0.02;
      tx = tx - 13;
      ty = ty - 20;
      docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
    }
  };

  const zoomInHandler = () => {
    a = a + 0.05;
    d = d + 0.05;
    tx = tx - 17;
    ty = ty - 20;
    docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
  };

  const zoomOutHandler = () => {
    a = a - 0.05;
    d = d - 0.05;
    tx = tx + 17;
    ty = ty + 20;
    docContentRef.current.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${tx}, ${ty})`;
  };

  const focusStrong = () => {
    a = 1;
    d = 1;
    tx = -30.161;
    ty = 105.849;
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
              <Achivements />
              <Hobby />
            </BodyRight>
          </Body>
        </DocumentContent>
      </DocumentContainer>

      {!closeResumeRight && (
        <JoinWithUsContainer>
          <Fade bottom>
            <h3>Tham gia ngay cùng SIMCareer để gia tăng cơ hội tuyển dụng</h3>
            <div className="join-logo">
              <img src="/images/simcareer-not-label.png" alt="" />
            </div>
            <div className="join-btn">
              <Link to={"/skill-trees"} className="join-btn-content">
                <span>Tiếp tục</span>
              </Link>
            </div>
          </Fade>
        </JoinWithUsContainer>
      )}
      <PageController
        zoomInHandler={zoomInHandler}
        zoomOutHandler={zoomOutHandler}
        focusStrong={focusStrong}
        printDocument={printDocument}
        handlePrint={handlePrint}
        closeResumeRight={closeResumeRight}
        toggleCloseResumeRight={toggleCloseResumeRight}
      />
    </>
  );
};

export default Document;
