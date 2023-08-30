export default function OffLink(props) {
  return (
    <li className="offcanvas-item">
      <a {...props}>{props.children}</a>
    </li>
  );
}