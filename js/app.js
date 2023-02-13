const TIME_OUT = 600 // It should be the same transition time of the sections
const body = document.querySelector('body')
const sectionsQty = document.querySelectorAll('section').length
const sectionStick = document.querySelector('.section-stick')
let startFlag = true
let initialScroll = window.scrollY
let qty = 1,
  main = null,
  next = null
// Add child elements in .section-stick as number of sections exist
Array(sectionsQty)
  .fill()
  .forEach(() => {
    sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick"></div>'
  })
console.log('SLIDE', qty)
// Listening to scroll event
window.onscroll = () => {
  if (startFlag) {
    const scrollDown = this.scrollY >= initialScroll
    const scrollLimit = qty >= 1 && qty <= sectionsQty
    // Verify that the scroll does not exceed the number of sections
    if (scrollLimit) {
      body.style.overflowY = 'hidden' // Lock el scroll
      if (scrollDown && qty < sectionsQty) {
        main = document.querySelector(`section.s${qty}`)
        next = document.querySelector(`section.s${qty + 1}`)
        main.style.transform = 'translateY(-100vh)'
        next.style.transform = 'translateY(0)'
        qty++
      } else if (!scrollDown && qty > 1) {
        main = document.querySelector(`section.s${qty - 1}`)
        next = document.querySelector(`section.s${qty}`)
        main.style.transform = 'translateY(0)'
        next.style.transform = 'translateY(100vh)'
        qty--
      }
      document.addEventListener("DOMContentLoaded", () => {
        fadin('.fade')
      });
      // Scroll progressbar
      const active = document.querySelector('.section-stick .stick.active')
      active.style.top = (62 + 30) * (qty - 1) + 'px'
    }
    console.log('SLIDE', qty)
    // Wait for the scrolling to finish to reset the values
    setTimeout(() => {
      initialScroll = this.scrollY
      startFlag = true
      body.style.overflowY = 'scroll' // Unlock scroll
    }, TIME_OUT)
    startFlag = false
  }
  // Keep scrollbar in the middle of the viewport
  window.scroll(0, window.screen.height)
}

// ---------------------------  Effects  ---------------------------

// Variables & Constants

const texto_1_s2 = document.getElementById('texto_1_s2');
const texto_2_s2 = document.getElementById('texto_2_s2');
const title_1_s3 = document.getElementById('title_1_s3');
const text_1_s3 = document.getElementById('text_1_s3');
const title_1_s4 = document.getElementById('title_1_s4');
const area_1_s4 = document.getElementById('area_1_s4');
const area_2_s4 = document.getElementById('area_2_s4');
const area_3_s4 = document.getElementById('area_3_s4');
const area_4_s4 = document.getElementById('area_4_s4');
const dog_img = document.getElementById('dog_img');
const flower_img = document.getElementById('flower_img');
// const title_1_s5 = document.getElementById('title_1_s5');
//const letter1_s5 = document.getElementById('letter1_s5');


const cargarImagen = (entradas, observador) => {
      entradas.forEach((entradas) => {
        if(entradas.isIntersecting){
          entradas.target.classList.add('visible');}
        else{
          entradas.target.classList.remove('visible');
        }
        })
      }


const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});

observador.observe(texto_1_s2);
observador.observe(texto_2_s2);
observador.observe(title_1_s3);
observador.observe(text_1_s3);
observador.observe(title_1_s4);
observador.observe(area_1_s4);
observador.observe(area_2_s4);
observador.observe(area_3_s4);
observador.observe(area_4_s4);
observador.observe(dog_img);
observador.observe(flower_img);
//observador.observe(title_1_s5);
//observador.observe(letter1_s5);