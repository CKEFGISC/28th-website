const { Remarkable } = require("remarkable");

var md = new Remarkable({
  html: true,               // Enable HTML tags in source
  xhtmlOut: true,           // Use "/" to close single tags (<br />)
  breaks: false,            // Convert "\n" in paragraphs into <br>
  langPrefix: "language-",  // CSS language prefix for fenced blocks
});

console.log(md.render(require("fs").readFileSync("./src/utils/markdown.md").toString()));