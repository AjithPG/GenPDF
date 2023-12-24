import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pdfgenerator from "./Pages/Pdfgenerator";
import Home from "./Pages/Home";
import Pdfexport from "./Pages/Pdfexport";
import PdfViewer from "./Pages/PdfView";
import Displaypdf from "./Pages/Displaypdf";
import Embedpdf from "./Pages/Embedpdf";
import ReactCalender from "./Pages/ReactCalendar";
import ReactCalender2 from "./Pages/ReactCalendar2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactCalender />} />
          <Route path="/calendar-2" element={<ReactCalender2 />} />
          <Route path="/pdf" element={<Home />} />
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
