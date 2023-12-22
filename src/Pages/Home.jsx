import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <p className="text-2xl bold mb-10">PDF Generators</p>
      <div className="w-3/6 flex flex-row flex-wrap gap-8 text-center">
        <div className="flex flex-col">
          <p className="mb-4">Custom PDF Generator</p>
          <a className="mb-4" href="https://react-pdf.org/">
            react-pdf
          </a>
          <Link to={"/Pdfgenerator"}>
            <button>PDF Generator</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">Webpage to PDF</p>
          <div className="flex">
            <a
              className="mb-4"
              href="https://www.npmjs.com/package/html2canvas"
            >
              html2canvas
            </a>
            &
            <a className="mb-4" href="https://www.npmjs.com/package/jspdf">
              jspdf
            </a>
          </div>

          <Link to={"/Pdfexport"}>
            <button>PDF Export</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">PDF Viewer using Plugin</p>
          <a className="mb-4" href="https://www.npmjs.com/package/react-pdf">
            react pdf
          </a>
          <Link to={"/PdfView"}>
            <button>Open PDF</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">PDF Popup View</p>
          <Link to={"/displaypdf"}>
            <button>PDF View</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">Embeded PDF in browser</p>
          <Link to={"/embededpdf"}>
            <button>Embeded PDF</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="mb-4">Download PDF files</p>
          <a href="document.pdf" download className="mb-4">
            Download PDF
          </a>
          <a href="document.pdf" target="_blank">
            View PDF
          </a>
        </div>
      </div>
    </div>
  );
}
