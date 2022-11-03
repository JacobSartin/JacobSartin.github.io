document.getElementById("cards").onmousemove = ev => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = ev.clientX - rect.left,
            y = ev.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
