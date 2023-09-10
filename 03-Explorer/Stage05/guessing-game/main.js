const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(randomNumber);

function handleClick(event) {
	event.preventDefault();

	const inputNumber = document.querySelector("#inputNumber");
	const finalText = `You Guessed it in ${xAttempts} attempts`;

	if (Number(inputNumber.value) == randomNumber) {
		document.querySelector(".screen01").classList.add("hide");
		document.querySelector(".screen02").classList.remove("hide");
		document.querySelector(".screen02 h2").innerText = finalText;
	}
	
	xAttempts++;
}
