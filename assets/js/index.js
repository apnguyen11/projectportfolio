let FG = 1;
FGslide(FG)

function FGClick(n){
  FGSlide((FG += n))
}

function FGSlide(n){
  var i;
  var x = document.getElementsByClassName('FG')
  console.log(x)
  if (n > x.length) {
    pickup = 1;
  }
  if (n < 1) {
    pickup = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[pickup - 1].style.display = "block";

}

