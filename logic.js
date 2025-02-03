let title = document.querySelector(".title");
let squareContainer = document.querySelectorAll(".square")
let turn = "X";
arraySquare = [];


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
};

function checkedWinner(){
    for(let i = 1 ; i < 10; i++){
      arraySquare[i] = document.getElementById(`item${i}`).innerHTML;      
    }
    if(arraySquare[1] == arraySquare[2] && arraySquare[2] == arraySquare[3] && arraySquare[3] != ""){
      Winner(1,2,3);
    }else if(arraySquare[4] == arraySquare[5] && arraySquare[5] == arraySquare[6] && arraySquare[6] != ""){
      Winner(4,5,6);
    }else if(arraySquare[7] == arraySquare[8] && arraySquare[8] == arraySquare[9] && arraySquare[9] != ""){
      Winner(7,8,9);
    }else if(arraySquare[1] == arraySquare[4] && arraySquare[4] == arraySquare[7] && arraySquare[7] != ""){
      Winner(1,4,7);
    }else if(arraySquare[2] == arraySquare[5] && arraySquare[5] == arraySquare[8] && arraySquare[8] != ""){
      Winner(2,5,8);
    }else if(arraySquare[3] == arraySquare[6] && arraySquare[6] == arraySquare[9] && arraySquare[6] != ""){
      Winner(3,6,9);
    }else if(arraySquare[1] == arraySquare[5] && arraySquare[5] == arraySquare[9] && arraySquare[9] != ""){
      Winner(1,5,9);
    }else if(arraySquare[3] == arraySquare[5] && arraySquare[5] == arraySquare[7] && arraySquare[7] != ""){
      Winner(3,5,7);
    }else if(arraySquare[1] != "" &&
            arraySquare[2] != "" && 
            arraySquare[3] != "" &&
            arraySquare[4] != "" &&
            arraySquare[5] != "" &&
            arraySquare[6] != "" &&
            arraySquare[7] != "" &&
            arraySquare[8] != "" &&
            arraySquare[9] != "" ){
              title.innerHTML = "Draw";

              setInterval(() => {
                title.innerHTML += "."
              }, 1000);
            
              setTimeout(() => {
                location.reload();
              }, 4000);
      
    }
}

function Winner(num1, num2, num3){
  title.innerHTML = `${arraySquare[num1]} : Winner`;
  document.getElementById(`item${num1}`).style.backgroundColor = "#000";
  document.getElementById(`item${num2}`).style.backgroundColor = "#000";
  document.getElementById(`item${num3}`).style.backgroundColor = "#000";

  setInterval(() => {
    title.innerHTML += "."
  }, 1000);

  setTimeout(() => {
    location.reload();
  }, 4000);

  squareContainer.forEach(ele=>ele.disabled = true);
}











