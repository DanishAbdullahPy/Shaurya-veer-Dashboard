import React from "react";
// import { Document, Page } from "react-pdf";

function PDFViewer({ pdfUrl }) {
  return (
    <div style={{ height: "230vh" }}>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
}

export default PDFViewer;
