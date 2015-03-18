window.onload = function () {
  

  document.onmouseup = function () {
    getSelectionText();
  } 

  function getSelectionText () {
    var selection = window.getSelection().toString().trim();
    var url = document.URL;
    if( selection && selection !== "" ){
      alert("selection: " + "\n" + selection + "\n\n" + "from: " + url );
    }
    return selection;
  }

}
