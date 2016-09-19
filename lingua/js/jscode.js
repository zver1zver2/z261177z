var pElement = [];
for(i=0; i<6; i++) {
  pElement[i] = document.getElementById("p"+(i+1));
  pElement[i].onmouseover = function(event) {
    this.style.color="#666";
    this.style.backgroundColor="#fff";
  }
  pElement[i].onmouseout=function(event){
    this.style.color="#FFF";
    this.style.backgroundColor="#666";
  }
}

var cardElement = new Array();
for(i=0; i<2; i++) {
  cardElement[i] = document.getElementById("card"+(i+1));
  cardElement[i].onmouseover = function(event) {
    this.style.color="#ccc";
    this.style.backgroundColor="#666";
  }
  cardElement[i].onmouseout = function(event) {
    this.style.color="#666";
    this.style.backgroundColor="#ccc";
  }
}
