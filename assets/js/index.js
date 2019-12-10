let pickup = 1;
slidePickup(pickup)

function plusDivPickup(n){
  slidePickup((pickup += n))
}

function slidePickup(n){
  var i;
  var x = document.getElementsByClassName('pickup')
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

