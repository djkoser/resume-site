import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Resume(props: { pdf: any }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <section id="resume">
      <h2>My Resume</h2>
      <Document file={pdf} options={{ workerSrc: '/pdf.worker.js' }} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </button>
        <a href="/media/David_Koser_Web_Developer_Resume.pdf" target="_blank" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}
