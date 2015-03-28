// // Create a parent item and two children.


chrome.contextMenus.create({
  "title": "Hoard This",
  "id": "hoard",
  "contexts": ["image", "selection"],
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler (info, tab) {

  var hoard = {
    snippet: info.selectionText,
    url: info.pageUrl
  };

  $.post("http://localhost:4000/api/hoards", hoard, function (data) {
    console.log("Yay! You successfully saved that snippet");
  });
}
  