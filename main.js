/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
  "use strict";
  
  var LanguageManager = brackets.getModule("language/LanguageManager");
  var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
  
  // Custom rpm-spec mode to add enhancements over default codemirror version.
  require("rpm");
  
  LanguageManager.defineLanguage("rpm", {
            name: "RPM",
            mode: ["rpm-spec", "text/x-rpm-spec"],
            fileExtensions: ["spec"],
            lineComment: ["#"]
        });
});