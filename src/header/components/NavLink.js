export default function NavLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.href} target={props.target} rel={props.rel}>{props.children}</a>
    </li>
  );
}