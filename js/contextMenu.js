// // Create a parent item and two children.


chrome.contextMenus.create({
  "title": "Hoard This",
  "id": "hoard",
  "contexts": ["image", "selection"],
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler (info, tab) {

    // var selection = getSelectionText();
    // var hoard = {
    //   snippet: selection.snippet,
    //   url: selection.url
    // };
    // var hoard = {
    //   snippet: "Samps Bruh",
    //   url: "http://www.google.com"
    // };
    // $.post("http://localhost:4000/api/hoards", hoard, function (data) {
    //   console.log("Sent data to database!");
    // });
    // 
  var hoard = {};
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request);
      hoard.snippet = request.snippet;
      hoard.url = request.url;
      console.log(hoard);
    }
  );

  jQuery.ajax({
    type: "POST",
    url: "http://localhost:4000/api/hoards",
    data: hoard,
    success: function(data) {
      console.log("successfully posted " + data);
    }
  });
  console.log("Test");

  }

// function onClickHandler(info, tab) {
//   var sText = info.selectionText;
//   addHistory(sText);
//   openDefinitionPage(sText);
// };

// function openDefinitionPage(sText) {
//   var encodedQuery = encodeURIComponent("define " + sText);
//   var url = "https://www.google.com/search?q=" + encodedQuery;
//   window.open(url, '_blank');
// }

// chrome.contextMenus.onClicked.addListener(onClickHandler);

// // Set up context menu at install time.
// chrome.runtime.onInstalled.addListener(function() {
//   var context = "selection";
//   var title = "Hoard It";
//   var id = chrome.contextMenus.create({"title": title, "contexts":["selection", "image"],
//                                          "id": "context" + context});  
// });
// 