function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}

function FALinkIcon() {
  return (<i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i>);
}

function ListLink(props) {
  return (
    <a 
      className="list-group-item list-group-item-action" 
      href={props.href} target="_blank" rel="noreferrer"
    >
        {props.children} <FALinkIcon />
    </a>
  );
}

export default function Museum() {
  return (<>
    <section id="title-bar">歷屆博物館</section>
    <section id="museum">
      <div className="container py-3">
        <div className="list-group rounded-3">
          <ListLink href="/">28<Up>th</Up> 社網</ListLink>
          <ListLink href="https://27th.ckefgisc.org">27<Up>th</Up> 社網</ListLink>
          <ListLink href="https://history.ckeisc.org">建電社史追溯計畫</ListLink>
        </div>
      </div>
    </section>
  </>);
}