import hljs from "highlight.js/lib/core";
// 导入需要的语言高亮
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import csharp from "highlight.js/lib/languages/csharp";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import objectivec from "highlight.js/lib/languages/objectivec";
import bash from "highlight.js/lib/languages/bash";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("php", php);
hljs.registerLanguage("python", python);
hljs.registerLanguage("objectivec", objectivec);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("typescript", typescript);
export default hljs;
