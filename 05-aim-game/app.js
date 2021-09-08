const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const COLORS = ['#7A5C61', '#F7ACCF', '#E8F0FF', '#6874E8', '#392759'];

let time = 0
let score = 0

startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')

    startGame()
  }
})

board.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    score++
    e.target.remove()
    createRandomCircle()
  }
})

function startGame () {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
  setTime(time)
}

function finishGame () {
  board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`
  timeEl.parentNode.classList.add('hide')
}

function decreaseTime () {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    } 
    setTime(current)
  }
}

function setTime (val) {
  timeEl.innerHTML = `00:${val}`
}

function createRandomCircle () {
  const circle = document.createElement('div')
  const size = getRandoNumber(10, 60)
  const { height, width } = board.getBoundingClientRect()
  const x = getRandoNumber(0, width - size) 
  const y = getRandoNumber(0, height - size)
  const color = getRandomColor()
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = color
  circle.style.boxShadow = `0 0 10px ${color}`
  board.append(circle)
}

function getRandoNumber (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor () {
  const index = Math.floor(Math.random() * COLORS.length)
  return COLORS[index]
}