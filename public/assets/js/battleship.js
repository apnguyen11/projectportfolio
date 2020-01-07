
let BS = 1;
slideBS(BS)

function BSClick(n){
  slideBS((BS += n))
}

function slideBS(n){
  var i;
  var x = document.getElementsByClassName('battleShip')
  console.log(x)
  if (n > x.length) {
    BS = 1;
  }
  if (n < 1) {
    BS = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[BS - 1].style.display = "block";
}
