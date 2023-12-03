export default function Slides(props) {
  return (
    <iframe
      {...props}
      className="slides"
      title={props.title}
      src={`${props.url}/embed`} 
      width={props.width || 560}
      height={props.height || 410} 
      style={{ borderRadius: 6, maxWidth: "98%", maxHeight: "50dvw" }}
      allow="fullscreen"
    ></iframe>
  )
}
