import { useEffect } from "react";

export default function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | 建北電資 28th` || "";
  }, [ props.title ]);

  return props.children;
};