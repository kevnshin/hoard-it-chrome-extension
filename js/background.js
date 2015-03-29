chrome.contextMenus.create({
  "title": "Hoard This",
  "id": "hoard",
  "contexts": ["image", "selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  sendSnippet(tab);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  sendSnippet(tab);
});

function sendSnippet (tab) {
  chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){
     postSnippet(response);
  });
}

function postSnippet (message) {
  var hoard = {
    snippet: message.snippet,
    url: message.url
  };
  $.post("http://localhost:4000/api/hoards", hoard, function (data) {
    console.log("Successfully saved snippet");
  });
}
