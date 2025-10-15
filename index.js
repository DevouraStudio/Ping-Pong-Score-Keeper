const spanOne = document.querySelector('#Span-1')
const spanTwo = document.querySelector('#Span-2')
const buttonOne = document.querySelector('#Button-1')
const buttonTwo = document.querySelector('#Button-2')
const buttonThree = document.querySelector('#Button-3')
const select = document.querySelector('select')
let score = 0
let score2 = 0
let maxScore = parseInt(select.value)
buttonOne.addEventListener('click', function () {
	maxScore = parseInt(select.value)
	if (score < maxScore) {
		score++
		spanOne.textContent = score
	}
	else if (score === maxScore) {
		buttonTwo.disabled = true
		buttonOne.disabled = true
		spanOne.style.color = 'green'
		spanTwo.style.color = 'red'
		console.log('Max Score Reached! Player One Won!')
	}
})

buttonTwo.addEventListener('click', function () {
	maxScore = parseInt(select.value)
	if (score2 < maxScore) {
		score2++
		spanTwo.textContent = score2
	}
	else if (score2 === maxScore) {
		buttonTwo.disabled = true
		buttonOne.disabled = true
		spanTwo.style.color = 'green'
		spanOne.style.color = 'red'
		console.log('Max Score Reached! Player Two Won!')
	}
})

buttonThree.addEventListener('click', function () {
	spanOne.style.color = 'black'
	spanTwo.style.color = 'black'
	buttonOne.disabled = false
	buttonTwo.disabled = false
	score = 0
	score2 = 0
	spanOne.textContent = score
	spanTwo.textContent = score2
})