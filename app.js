const boxes = document.querySelectorAll('.box');
const reset_btn = document.querySelector('#reset-btn');
const newGame = document.querySelector('#new-btn');
const msgContainer = document.querySelector('.msg-container');


const msg = document.querySelector('.msg');
let player_O =true;
const winPatterns = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[0,4,8],
];

for (const box of boxes) {
	box.addEventListener('click',()=>{
		if(player_O){
		box.innerText = "O";
		player_O = false;
	}
	else{
		box.innerText = "X";
		player_O = true;
	}
	box.disabled= true;

	checkWinner();
	})
}


const resetGame = ()=>{
	for (const box of boxes) {
		box.innerText ='';
		box.disabled= false;
	}
}
const showWinner = (winner)=>{
		msg.innerText =`Congratulation. Winner is ${winner}`;
		msgContainer.classList.remove("hide");
};

const gameDraw = ()=>{
	msg.innerText =`Match Draw`;
		msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
	for (const  win of winPatterns) {
		let pos1Val = boxes[win[0]].innerText;
		let pos2Val =boxes[win[1]].innerText;
		let pos3Val = boxes[win[2]].innerText;

		if(pos1Val != '' && pos2Val !='' && pos3Val !=''){
				if(pos1Val == pos2Val && pos2Val == pos3Val){
					console.log('winner is',pos1Val);
					for (const box of boxes) {
						box.disabled= true;
					}
				showWinner(pos1Val);
				}
		}else{
		}
	}
}

reset_btn.addEventListener('click',()=>{resetGame()});
newGame.addEventListener('click',()=>{
	msg.innerText =``;
		msgContainer.classList.add("hide");
	resetGame()}
	);



