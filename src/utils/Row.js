export default function Row(props) {
  return (
    <div className="row" {...props}>{props.children}</div>
  )
}