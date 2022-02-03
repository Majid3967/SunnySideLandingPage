function navbar() {
    let x = document.getElementById("navbar");
    let y = document.getElementById("header");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    if (y.className === "") {
        y.className += " resheader";
      } else {
        y.className = "";
      }
}