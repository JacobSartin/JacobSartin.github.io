document.getElementById("cards").onmousemove = ev => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = ev.clientX - rect.left,
            y = ev.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  //create a function copyToClipboard that copies the url to the user's clipboard
  function copyURLToClipboard() {
    //get the url
    var url = window.location.href;

    //copy the url to the clipboard
    navigator.clipboard.writeText(url);

    //alert the user that the url has been copied
    alert("Copied the url: " + url);
  }

  //create a function that will open the url in a new tab
  function openURLInNewTab() {
    //get the url
    var url = window.location.href;

    //open the url in a new tab
    window.open(url);
  }

  function closeTab() {
    window.close();
  }
