'use strict'

const checkPlan = document.querySelector('#choosePlan > label')
checkPlan.addEventListener('click', changePrices)

const input = checkPlan.querySelector('input')
input.addEventListener('click', (event) => event.stopPropagation())

// onclick="event.stopPropagation()"

function changePrices (e) {
  const prices = document.querySelectorAll('.plans span:first-of-type')
  console.log(e.target)
  let cantidad = 20
  if (input.checked) {
    cantidad = -20
  }
  for (const price of prices) {
    const father = price.closest('article')
    const h3 = father.querySelector('h3')
    const precio = Number(price.textContent.substring(1, 3))
    price.remove()
    h3.after(createPrice(precio + cantidad))
  }
}

function createPrice (int) {
  const span = document.createElement('span')
  span.textContent = int
  const sup1 = document.createElement('sup')
  sup1.textContent = '$'
  const sup2 = document.createElement('sup')
  sup2.textContent = '00'

  span.prepend(sup1)
  span.append(sup2)

  return span
}

// carousel
next.addEventListener('click', (e) => changePage(e))
prev.addEventListener('click', (e) => changePage(e))

// let paginaMostrada = paginas.findIndex(item => !item.classList.contains('blocked'))

function changePage (event) {
  const carousel = event.target.closest('.carousel')
  const paginas = carousel.querySelectorAll('.carousel-page')
  let index = -1
  for (let i = 0; i < paginas.length; i++) {
    if (!paginas[i].classList.contains('blocked')) {
      index = i
    }
  }
  if (event.target.id === 'next') {
    if (index + 1 < paginas.length) {
      paginas[index].classList.add('blocked')
      paginas[index + 1].classList.remove('blocked')
    }
  } else {
    if (index > 0) {
      paginas[index].classList.add('blocked')
      paginas[index - 1].classList.remove('blocked')
    }
  }
}
