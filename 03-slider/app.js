const container = document.querySelector('.container')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${ (slidesCount - 1) * 100 }vh`

upBtn.addEventListener('click', () => { changeSlide('up') })
downBtn.addEventListener('click', () => { changeSlide('down') })

const heightWindow = container.clientHeight

function changeSlide (direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  mainSlide.style.transform = `translateY(-${ activeSlideIndex * heightWindow }px)`
  sidebar.style.transform = `translateY(${ activeSlideIndex * heightWindow }px)`
}