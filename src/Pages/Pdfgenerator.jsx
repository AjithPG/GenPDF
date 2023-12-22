import MyDocument from "../Components/MyDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Pdfgenerator() {
  return (
    <div>
      <div className="w-100 text-center mb-10">
        <p>PDF Generator</p>
        <PDFDownloadLink
          document={<MyDocument data="This is a pdf file" />}
          fileName="form"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
