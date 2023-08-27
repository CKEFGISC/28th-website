export default function Scroll(props) {
  return (
    <span style={{ cursor: "pointer" }} onClick={() => {
      document.querySelector(".main-wrapper")
        ?.scrollTo({ 
          top: document.querySelector(props.to)?.getBoundingClientRect()?.top, 
          behavior: "smooth" 
        });
    }} {...props}>{props.children}</span>
  );
}