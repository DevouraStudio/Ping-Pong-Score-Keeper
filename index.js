const spanOne = document.querySelector('#Span-1')
const spanTwo = document.querySelector('#Span-2')
const buttonOne = document.querySelector('#Button-1')
const buttonTwo = document.querySelector('#Button-2')
const buttonThree = document.querySelector('#Button-3')
const select = document.querySelector('select')
let score = 0
let score2 = 0
let maxScore = parseInt(select.value)
let gameOver = false
buttonOne.addEventListener('click', function () {
	maxScore = parseInt(select.value)
	if (!gameOver) {
		score++
		if (score === maxScore) {
			gameOver = true
			buttonTwo.disabled = true
			buttonOne.disabled = true
			spanOne.style.color = 'green'
			spanTwo.style.color = 'red'
			console.log('Max Score Reached! Player One Won!')
		}
	}
	spanOne.textContent = score
}
)




buttonTwo.addEventListener('click', function () {
	maxScore = parseInt(select.value)
	if (!gameOver) {
		score2++
		if (score2 === maxScore) {
			gameOver = true
			buttonTwo.disabled = true
			buttonOne.disabled = true
			spanOne.style.color = 'red'
			spanTwo.style.color = 'green'
			console.log('Max Score Reached! Player Two Won!')
		}
	}
	spanTwo.textContent = score2
})

buttonThree.addEventListener('click', reset)

select.addEventListener('change', reset)

function reset() {
	spanOne.style.color = 'black'
	spanTwo.style.color = 'black'
	buttonOne.disabled = false
	buttonTwo.disabled = false
	score = 0
	score2 = 0
	spanOne.textContent = score
	spanTwo.textContent = score2
}