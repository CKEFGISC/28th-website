function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}

function FALinkIcon() {
  return (<i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>);
}

function ListLink(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <li className="list-group-item list-group-item-action">
        {props.children} <FALinkIcon />
      </li>
    </a>
  );
}

export default function Museum() {
  return (<>
    <section id="title-bar">歷屆博物館</section>
    <section id="museum">
      <div className="container py-3">
        <ul className="list-group">
          <ListLink href="/">28<Up>th</Up> 社網</ListLink>
          <ListLink href="https://27th.ckefgisc.org">27<Up>th</Up> 社網</ListLink>
        </ul>
      </div>
    </section>
  </>);
}