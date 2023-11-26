/** 
 * I'm trying to make a markdown compiler, but it is too hard for me i think
 * @deprecated Use `Remarkable` instead
 * @see {@link ./Remarkable.js}
 */
var __md__construct___0;

var prefixes = [
  [ "> ", `<blockquote>%0</blockquote>` ],
  [ "# ", `<h1>%0</h1>` ],
  [ "## ", `<h2>%0</h2>` ],
  [ "### ", `<h3>%0</h3>` ],
  [ "#### ", `<h4>%0</h4>` ],
  [ "##### ", `<h5>%0</h5>` ],
  [ "###### ", `<h6>%0</h6>` ],
];
var syntaxes = [
  [ "[%0](%1)", `<a href="%1">%0</a>` ],
  [ "**%0**", "<strong>%0</strong>" ],
  [ "*%0*", "<em>%0</em>" ],
  [ "__%0__", "<u>%0</u>" ],
  [ "`%0`", "<code>%0</code>" ],
  [ "||%0||", `<span class="spoiler">%0</span>` ],
];

var x = {
  input: {
    components: [ "[", "%0", "](", "%1", ")" ],
    placeHolderCount: 2,
  },
  output: `<span class="spoiler">%0</span>`
}

/** @param {[ string, string ]} _syntax @returns {MarkdownSyntax} */
function processSyntax(_syntax) {
  /** @type {{ from: string, to: string }} */
  var syntax = { from: _syntax[0], to: _syntax[1] };

  /** @type {{ input: { components: Array<string>, placeholderCount: number }, output: string }} */
  let result = {
    input: {
      components: [],
      placeholderCount: 0
    },
    output: ""
  }

  var addComponent = d => result.input.components.push(d);
  var tempString = "";
  for (let i = 0; i < syntax.from.length; ++i) {
    let char = syntax.from[i];

    if (char === "%") {
      if (tempString) {
        addComponent(tempString);
        tempString = "";
      }

      addComponent(syntax.from.slice(i, i + 2));
      result.input.placeholderCount++;
      i++;
    }
    else {
      tempString += char;
    }
  }
  if (tempString) addComponent(tempString);

  result.output = syntax.to;

  return result;
};

/**
 * @param {Array<{ input: { components: Array<string>, placeholderCount: number }, output: string }>} syntaxes
 * @param {string} inputContent 
*/
function applySyntax(syntaxes, inputContent) {
  let output = "";

  for (let i = 0; i < inputContent.length; ++i) {
    let slicedContent = inputContent.slice(i);

    let hasSyntax = false;
    for (let j = 0; j < syntaxes.length; ++j) {
      if (slicedContent.startsWith(syntaxes[j].input.components[0])) {
        hasSyntax = true;

        let params = [], nextIndex = syntaxes[j].input.components[0].length;
        
        for (let k = 0; k < syntaxes[j].input.components.length; ++k) {
          let component = syntaxes[j].input.components[k],
              nextComponent = syntaxes[j].input.components[k + 1];
          if (!nextComponent) nextComponent = "";

          if (component[0] == "%")
            params.push(slicedContent.slice(
              nextIndex, 
              slicedContent.indexOf(nextComponent, nextIndex + 1)
            ));

          nextIndex = slicedContent.indexOf(nextComponent, nextIndex + 1) + nextComponent.length;
        }
        i = nextIndex;

        let toOutput = syntaxes[j].output;
        for (let k = 0; k < syntaxes[j].input.placeholderCount; ++k)
            toOutput = toOutput.replace(`%${k}`, params[k]);
                
        output += toOutput;
        break;
      }
    }

    // if (hasSyntax)

    output += inputContent[i];
  }

  console.log(output);
}

applySyntax(syntaxes.map(s => processSyntax(s)), "hello [world](https://google.com)");

/** @param {string} line @returns {string} */
function handleLine(line) {
  if (line == "") 
    return "\n";

  // let headerPrefix = line.split(" ")[0];
  // if (headerPrefix.split("").every(c => c === "#"))
  //   return handleLine(line.slice(headerPrefix.length + 1));
}

// export default 
function Markdown(props) {
  var inputContent = props.children;
  var inputLines = inputContent.split(/\r\n|\r|\n/g);

  var outputLines = [];
  for (let line of inputLines)
    outputLines.push(handleLine(line));
}

Markdown({ 
  children: require("fs").readFileSync("./src/utils/markdown.md").toString()
});