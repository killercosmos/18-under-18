function openNav() {
    document.getElementById("mySidenav").style.width = "250px";  
    document.getElementsByClassName("hero").style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("hero").style.backgroundColor = "white";
  }