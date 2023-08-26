import ReactMarkdown from "react-markdown";

export default function Courses() {
  const markdown = [
    "我不知道這裡要放什麼",
    "",
    "── 晴"
  ].reduce((prev, curr) => prev + curr + "\r\n", "");

  return (<>
    <section id="title-bar">
      課程介紹
    </section>
    <div className="container py-5">
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </div>
  </>);
}