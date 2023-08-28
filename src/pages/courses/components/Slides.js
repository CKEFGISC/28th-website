export default function Slides(props) {
  return (
    <iframe
      {...props}
      style={{ borderRadius: "10px", flexShrink: 0 }}
      className="slides"
      title={props.title}
      src={`${props.src}/embed`} 
      width={props.width || 400}
      height={props.height || 340} 
      allowFullScreen
    ></iframe>
  )
}