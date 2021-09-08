const PICTURES = [
  {
    img: 'https://images.unsplash.com/photo-1623211514326-a47c460ea21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80',
    name: 'Mountin'
  },
  {
    img: 'https://images.unsplash.com/photo-1623191548298-e6cd5ce7aeb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Forest'
  },
  {
    img: 'https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Bird'
  },
  {
    img: 'https://images.unsplash.com/photo-1617235641226-4ebf93095678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Sakura'
  },
  {
    img: 'https://images.unsplash.com/photo-1623183074688-24e60d8fd141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Flowers'
  }
];

(function renderSlider () {
  const app = document.getElementById('app')
  app.innerHTML = generationSlideBlock()
  addEventToSlide()
})()

function addEventToSlide () {
  const slides = document.querySelectorAll('.slide')
  const crearActiveClasses = () => {
    slides.forEach(i => {
      i.classList.remove('active')
    })
  }
  for (const slide of slides) {
    slide.addEventListener('click', () => {
      crearActiveClasses()
      slide.classList.add('active')  
    })
  }
}

function generationSlideBlock () {
  const isActiveSlideClass = index => index === 2 ? "slide active" : "slide"
  return PICTURES.reduce((res, { img, name }, index) => {
    return res += `
    <div class="${isActiveSlideClass(index)}" style="background-image: url('${img}');">
      <h3>${name}</h3>
    </div>
    `
  }, ``)
}