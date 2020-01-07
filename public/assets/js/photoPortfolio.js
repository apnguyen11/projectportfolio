
let PH = 1;
slidePH(PH)

function PHClick(n){
  slidePH((PH += n))
}

function slidePH(n){
  var i;
  var x = document.getElementsByClassName('portfolioSite')
  console.log(x)
  if (n > x.length) {
    PH = 1;
  }
  if (n < 1) {
    PH = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[PH - 1].style.display = "block";
}
