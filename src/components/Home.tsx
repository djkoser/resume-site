import React from "react";
import PDFViewer from "./PDFViewer";
import resume from "../PDF/David_Koser_Web_Developer_Resume.pdf";

export default function Home() {
  return <PDFViewer pdf={resume} />;
}
