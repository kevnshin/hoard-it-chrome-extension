chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelection") {
    var snippet = {
      snippet: window.getSelection().toString().trim(),
      url: document.URL
    }
    sendResponse(snippet);
  } else {
    sendResponse({message: "Did not recognize that request"});
  }
});