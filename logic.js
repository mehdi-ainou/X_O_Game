let title = document.querySelector(".title");
let turn = "X";


function game(id) {
  let squareElement = document.getElementById(id);

  if (squareElement.innerHTML == "") {
    if (turn == "X") {
      squareElement.innerHTML = "X";
      turn = "O";
    } else {
      squareElement.innerHTML = "O";
      turn = "X";
    }

    title.innerHTML = `Turn : ${turn}`;

    checkedWinner();
  }
}

function checkedWinner() {
    const arraySquare = document.querySelectorAll(".square");
    
  let x = 0;
  let o = 0;
  let xItem = 0;
  let oItem = 0;

  arraySquare.forEach((ele)=>{
    const value = parseInt(ele.dataset.value);
    
    if(ele.innerHTML != ""){
        if(ele.innerHTML == "X" ){
            x += value
            xItem += 1;
        }else{
            o += value;
            oItem += 1;
        }
    }
  });

  if(x == 15 && xItem == 3 ){
    Winner("X")
    x = 0;
    xItem = 0;
   

  }else if( o == 15 && oItem == 3 ){
    Winner("O")
    o = 0;
    oItem = 0;

  }

  function Winner(w){
    title.innerHTML = `${w} Winner`;

    arraySquare.forEach((ele)=>{
       
        if(ele.innerHTML == w){
            
          ele.style.backgroundColor = "#000";
        }
      });

      arraySquare.forEach(ele=>ele.disabled = true);

    setInterval(() => {
        title.innerHTML += ".";
      }, 1000);
    
      setTimeout(() => {
        location.reload();
      }, 4000);
  }

}


