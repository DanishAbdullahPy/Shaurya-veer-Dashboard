import React from "react";
import PDFViewer from "../../components/PDF/PDF";

function Colorbooth() {
  const pdfUrl = "./colorbooth.pdf";
  return (
    <div>
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default Colorbooth;
