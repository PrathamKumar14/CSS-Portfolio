var isClick = true;

function handleClick() {
  if (isClick) {
    document.body.style.background = "#1c1c1c";
    document.getElementsByTagName("h1")[0].style.webkitTextStroke = "2px #e1e1e1";
    var y = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.color = "#bcbcbc";
    }
    isClick = false;
  } else {
    document.body.style.background = "#fff";
    document.getElementsByTagName("h1")[0].style.webkitTextStroke = "2px black";
    var y = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.color = "#545454";
    }
    isClick = true;
  }

}
