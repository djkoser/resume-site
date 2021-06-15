import { doc } from 'prettier';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [parentWidth, setParentWidth] = useState<undefined | number>(0);

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

  const windowResizeHandler = () => {
    const resume = document.getElementById('resume');
    if (resume?.parentElement) {
      const width = resume.parentElement.clientWidth;
      if (width < 1000) {
        setParentWidth(resume.parentElement.clientWidth);
      } else {
        setParentWidth(1000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
    windowResizeHandler();
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  return (
    <section id="resume">
      <h2 id="resumeHeader">My Resume</h2>
      <a id="downloadLink" href="/media/David_Koser_Web_Developer_Resume.pdf" target="_blank" download>
        Download
      </a>
      <a href="/media/David_Koser_Web_Developer_Resume.pdf" target="_blank" download>
        <Document
          file="/media/David_Koser_Web_Developer_Resume.pdf"
          options={{ workerSrc: '/pdf.worker.js' }}
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={parentWidth} />
        </Document>
      </a>
      <div id="pageButtonBox">
        <button className="pageButton" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <p id="pageIndicator">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button className="pageButton" disabled={pageNumber >= numPages} onClick={nextPage}>
          Next
        </button>
      </div>
    </section>
  );
}
