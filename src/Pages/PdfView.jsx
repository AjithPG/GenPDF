import { Link } from "react-router-dom";
import PdfViewer from "../Components/PdfViewer";
export default function PdfView() {
  return (
    <div
      className="absolute top-2/4 left-2/4"
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <PdfViewer />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
