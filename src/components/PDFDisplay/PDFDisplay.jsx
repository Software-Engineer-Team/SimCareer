import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import PdfFile from "@assets/data/Invoice_1123639657.pdf";
const PDFDisplay = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={"/images/RitsIILCS_22.1pp.7-18_HOANG.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFDisplay;
