import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { PDFContainer } from "./PDFDisplay.styled";

const PDFDisplay = () => {
  /* const [file, setFile] = useState("/images/feedback-01.pdf"); */
  const [file, setFile] = useState("/images/RitsIILCS_22.1pp.7-18_HOANG.pdf");

  /* const [file, setFile] = useState("/images/simcareer-not-label.png"); */
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    if (pageNumber <= 1) {
      return;
    }
    changePage(-1);
  }

  function changePageNext() {
    if (pageNumber >= numPages) {
      return;
    }
    changePage(+1);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <PDFContainer>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page key={`page_${pageNumber}`} pageNumber={pageNumber} />
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="btn-container">
          <Button
            variant="contained"
            size="medium"
            style={{
              marginTop: "0px",
              padding: "5px 5px",
              background: "#fff",
              color: "#000",
              textTransform: "none",
              width: "130px",
              alignSelf: "center",
              fontFamily: "Muli",
              fontWeight: 700,
            }}
            onClick={changePageBack}
          >
            Previous Page
          </Button>
          <Button
            variant="contained"
            size="medium"
            style={{
              marginTop: "0px",
              padding: "5px 5px",
              background: "#fff",
              color: "#000",
              textTransform: "none",
              width: "130px",
              alignSelf: "center",
              fontFamily: "Muli",
              fontWeight: 700,
            }}
            onClick={changePageNext}
          >
            Next Page
          </Button>
        </div>
      </Document>
    </PDFContainer>
  );
};

export default PDFDisplay;
