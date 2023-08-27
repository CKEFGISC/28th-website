export default function Loading() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <div className="spinner-border text-secondary" style={{width: "3em", height: "3em"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}