import $ from 'jquery';

export default function Scroll(props) {
  return (
    <span style={{ cursor: "pointer" }} onClick={() => {
      $(props.to)[0].scrollIntoView();
    }} {...props}>{props.children}</span>
  );
}