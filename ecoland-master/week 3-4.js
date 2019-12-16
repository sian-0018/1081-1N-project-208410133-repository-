function changeNav(index) {
    var p = document.getElementById("section");
    switch (index) {
      case 1:
        p.innerHTML = '<iframe width=100% height=100% src="./week 1 -01.html">';
        p.style.backgroundColor = "azure";
        break;
  
      case 2:
        p.innerHTML = '<iframe width=100% height=100% src="./week 1 -02.html">';
        p.style.backgroundColor = "azure";
        break;
  
      case 3:
        p.innerHTML =
          '<iframe width=100% height=100% src="./week 2 -01.html ">';
        p.style.backgroundColor = "azure";
        break;
  
      case 4:
        p.innerHTML = '<iframe width=100% height=100% src="./week 2 -02.html">';
        p.style.backgroundColor = "azure";
        break;
  
      case 5:
        p.innerHTML = '<iframe width=100% height=100% src="./div dome.html">';
        p.style.backgroundColor = "azure";
        break;
  
      case 6:
        p.innerHTML = '<iframe width=100% height=100% src="./tku60.html">';
        p.style.backgroundColor = "azure";
        break;
    }
  }