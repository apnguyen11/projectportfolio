
let BH = 1;
slideBH(BH)

function BHClick(n){
  slideBH((BH += n))
}

function slideBH(n){
  var i;
  var x = document.getElementsByClassName('bankhub')
  console.log(x)
  if (n > x.length) {
    BH = 1;
  }
  if (n < 1) {
    BH = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[BH - 1].style.display = "block";
}
