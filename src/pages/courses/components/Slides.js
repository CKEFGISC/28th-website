export default function Slides(props) {
  return (
    <iframe
      {...props}
      className="slides"
      title={props.title}
      src={`${props.url}/embed`} 
      width={props.width || 400}
      height={props.height || 340} 
      style={{ borderRadius: 6, maxWidth: "98%", maxHeight: "50dvw" }}
      allowFullScreen
    ></iframe>
  )
}