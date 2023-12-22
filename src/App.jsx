import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pdfgenerator from "./Pages/Pdfgenerator";
import Home from "./Pages/Home";
import Pdfexport from "./Pages/Pdfexport";
import PdfViewer from "./Pages/PdfView";
import Displaypdf from "./Pages/Displaypdf";
import Embedpdf from "./Pages/Embedpdf";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdfgenerator" element={<Pdfgenerator />} />
          <Route path="/Pdfexport" element={<Pdfexport />} />
          <Route path="/PdfView" element={<PdfViewer />} />
          <Route path="/displaypdf" element={<Displaypdf />} />
          <Route path="/embededpdf" element={<Embedpdf />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
