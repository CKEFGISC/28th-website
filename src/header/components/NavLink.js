export default function NavLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" {...props}>{props.children}</a>
    </li>
  );
}