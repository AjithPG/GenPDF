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
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
          voluptatem quaerat distinctio architecto qui, animi, consequatur et
          accusantium nesciunt numquam eos natus beatae.
        </p>

        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
          voluptatem quaerat distinctio architecto qui, animi, consequatur et
          accusantium nesciunt numquam eos natus beatae.
        </p>

        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
          voluptatem quaerat distinctio architecto qui, animi, consequatur et
          accusantium nesciunt numquam eos natus beatae.
        </p>

        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
          voluptatem quaerat distinctio architecto qui, animi, consequatur et
          accusantium nesciunt numquam eos natus beatae.
        </p>

        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          quasi explicabo? Voluptatibus, incidunt! Ipsam pariatur, optio
          voluptatem quaerat distinctio architecto qui, animi, consequatur et
          accusantium nesciunt numquam eos natus beatae.
        </p>
        <footer className=" bottom-0 w-full text-center text-red-600">
          PDF Export
        </footer>
      </div>
    </div>
  );
}
