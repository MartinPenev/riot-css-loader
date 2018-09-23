/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Martin Penev
*/
var riot = require('riot-compiler');
var path = require('path');

module.exports = function(content, map, meta) {
  this.cacheable && this.cacheable();
  this.value = content;

  let name = path.basename(this.resource, ".css");
  return "module.exports = " + JSON.stringify(riot.style(content.toString(), name));
}
module.exports.raw = true;
