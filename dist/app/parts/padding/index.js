"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'padding', function (theme) {
  var name = 'padding';
  var abbr = theme.property.padding.abbr;
  var o = theme.size.spacing;
  var string = '';

  for (var i = 0; i < o.length; i++) {
    var modifier = o[i];
    string += ".".concat(abbr, "-").concat(i + 1, " {\n");
    string += "\t".concat(name, ": ").concat(modifier, "\n");
    string += "}\n";
  }

  for (var side in theme.property.padding) {
    if (side !== 'abbr') {
      var sideabbr = theme.property.padding[side].abbr;

      for (var _i = 0; _i < o.length; _i++) {
        var _modifier = o[_i];
        string += ".".concat(abbr).concat(sideabbr, "-").concat(_i, " {\n");
        string += "\t".concat(name, "-").concat(side, ": ").concat(_modifier, "\n");
        string += "}\n";
      }
    }
  }

  string += ".".concat(abbr, " {\n\t").concat(name, "-top: var(--pt, unset);\n\t").concat(name, "-right: var(--pr, unset);\n\t").concat(name, "-bottom: var(--pb, unset);\n\t").concat(name, "-left: var(--pl, unset);\n}\n.").concat(abbr, " > * {\n\t--pt: unset;\n\t--pr: unset;\n\t--pb: unset;\n\t--pl: unset;\n}\n.").concat(abbr, "-inherit {\n\tpadding: inherit;\n}\n.").concat(abbr, "t-inherit {\n\tpadding-top: inherit;\n}\n.").concat(abbr, "r-inherit {\n\tpadding-right: inherit;\n}\n.").concat(abbr, "b-inherit {\n\tpadding-bottom: inherit;\n}\n.").concat(abbr, "l-inherit {\n\tpadding-left: inherit;\n}");
  return string;
}];
exports["default"] = _default;
module.exports = exports.default;