import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <p className="text-2xl bold ">PDF Generators</p>
      <div className="w-3/6 flex flex-row flex-wrap gap-8 text-center">
        <div className="flex flex-col">
          <p>Custom PDF Generator</p>
          <Link to={"/Pdfgenerator"}>
            <button>PDF Generator</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p>Webpage to PDF</p>
          <Link to={"/Pdfexport"}>
            <button>PDF Export</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p>PDF Viewer using Plugin</p>
          <Link to={"/PdfView"}>
            <button>Open PDF</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p>PDF Popup View</p>
          <Link to={"/displaypdf"}>
            <button>PDF View</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p>Embeded PDF in browser</p>
          <Link to={"/embededpdf"}>
            <button>Embeded PDF</button>
          </Link>
        </div>
        <div className="flex flex-col">
          <p>Download PDF files</p>
          <a href="document.pdf" download>
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
