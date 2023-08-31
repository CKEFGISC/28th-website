import $ from "jquery";

function closeOffcanvas() {
  $(".offcanvas-close").trigger("click");
}

export default function OffLink(props) {
  return (
    <a {...props} className="offcanvas-item" onClick={closeOffcanvas}>
      {props.children}
    </a>
  );
}