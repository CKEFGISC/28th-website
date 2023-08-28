import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export default function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | 建北電資 28th` || "";
  }, [ props.title ]);

  return props.children;
};

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="container py-5 d-flex flex-column align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status}: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}