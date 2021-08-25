var n1 = Math.random();
n1 = Math.floor(n1*6)+1;

var n2 = Math.random();
n2 = Math.floor(n2*6)+1;

if(n1>n2){
  document.querySelector("h1").textContent = "Player One Won";
}
else if(n2>n1){
  document.querySelector("h1").textContent = "Player Two Won";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}


document.querySelector(".playerOne").setAttribute("src","images/dice"+n1+".png");

document.querySelector(".playerTwo").setAttribute("src","images/dice"+n2+".png");
