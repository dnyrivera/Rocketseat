const randomNumber = Math.round(Math.random() * 10);
const screen01 = document.querySelector(".screen01");
const screen02 = document.querySelector(".screen02");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let xAttempts = 1;

console.log(randomNumber);

//Events
btnTry.addEventListener("click", handleClickTry);
btnReset.addEventListener("click", handleClickReset);

//Functions
function handleClickTry(event) {
	event.preventDefault();

	const inputNumber = document.querySelector("#inputNumber");
	const h2Text = document.querySelector(".screen02 h2");
	const finalText = `You Guessed it in ${xAttempts} attempts`;

	if (Number(inputNumber.value) == randomNumber) {
		toggleAttributes();
		h2Text.innerText = finalText;
	}
	inputNumber.value = "";
	xAttempts++;
	// console.log(xAttempts);
}
function handleClickReset(event) {
	toggleAttributes();
	xAttempts = 1;
}
function toggleAttributes() {
	screen01.classList.toggle("hide");
	screen02.classList.toggle("hide");
}
