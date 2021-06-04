import React from "react";
import PDFDisplay from "./PDFDisplay";
import resume from "../PDFs/David Koser Web Developer Resume.pdf";

export default function Home() {
  return <PDFDisplay pdf={resume} />;
}
