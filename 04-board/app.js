const board = document.querySelector('#board')
const loading = document.querySelector('.loading')
const SQUARES_NUMBER = 400
const COLORS = ['#7A5C61', '#F7ACCF', '#E8F0FF', '#6874E8', '#392759']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  if (i === 0) {
    board.classList.add('hidden')
  }
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })
  
  if (i === 399) {
    setTimeout(() => {
      board.classList.remove('hidden')
      loading.className = 'hidden'
    }, 500)
  }
  board.append(square)
}

function setColor (el) {
  const color = getRandomColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = '0 0 2px #000'
}

function getRandomColor () {
  const index = Math.floor(Math.random() * COLORS.length)
  return COLORS[index]
}