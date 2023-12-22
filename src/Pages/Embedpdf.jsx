export default function Embedpdf() {
  return (
    <>
      {/* <div>
        <embed src="document.pdf" width="100%" height="100vh"></embed>
      </div> */}
      {/* <div>
        <object
          data="document.pdf"
          type="application/pdf"
          width="100%"
          height="100vh"
        ></object>
      </div> */}
      <div className="m-10">
        <div className="">
          <iframe src="document.pdf" width="100%" height="500"></iframe>
        </div>
      </div>
    </>
  );
}
