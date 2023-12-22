import GenericPdfDownloader from "../Components/PdfDownloader";
export default function Pdfexport() {
  return (
    <div>
      <p>PDF from HTML</p>
      <GenericPdfDownloader
        downloadFileName="CustomPdf"
        rootElementId="testId"
      />
      <div id="testId">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
        quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
        voluptatem quaerat distinctio architecto qui, animi, consequatur et
        accusantium nesciunt numquam eos natus beatae.
      </div>
    </div>
  );
}
