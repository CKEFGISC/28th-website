export default function Scroll(props) {
  return (
    <span style={{ cursor: "pointer" }} onClick={() => {
      document.querySelector(props.to)?.scrollIntoView({ behavior: "smooth" });
    }} {...props}>{props.children}</span>
  );
}