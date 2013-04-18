// Importing the APIs we need.
var contextMenu = require("context-menu");
var tabs = require("tabs");
 
exports.main = function(options, callbacks) {
 
  // Create a new context menu item.
  var menuItem = contextMenu.Item({
    label: "Wiki It",
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    // When this item is clicked, post a message back with the selection
    contentScript: 'self.on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  self.postMessage(text);' +
                   '});',
    // When we receive a message, look up the item
    onMessage: function (item) {
      lookup(item);
    }
  });
};
 
function lookup(item) {
    tabs.open("http://en.wikipedia.org/w/index.php?title=" + encodeURIComponent(item));
}