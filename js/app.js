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
const d_s5 = document.getElementById('d_s5');
const d_letters = document.getElementById('d_letters');
const d_text = document.getElementById('d_text');
const e1_s5 = document.getElementById('e1_s5');
const e1_letters = document.getElementById('e1_letters');
const e1_text = document.getElementById('e1_text');
const e2_s5 = document.getElementById('e2_s5');
const e2_letters = document.getElementById('e2_letters');
const e2_text = document.getElementById('e2_text');
const p_s5 = document.getElementById('p_s5');
const p_letters = document.getElementById('p_letters');
const p_text = document.getElementById('p_text');
const service_5 = document.getElementById('service_5');
const service_5_title = document.getElementById('service_5_title');
const service_5_text = document.getElementById('service_5_text');
const service_6 = document.getElementById('service_6');
const service_6_title = document.getElementById('service_6_title');
const service_6_text = document.getElementById('service_6_text');


const cargarImagen = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
          entrada.target.classList.add('visible');}
        else{
          entrada.target.classList.remove('visible');
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
observador.observe(d_letters);
observador.observe(d_text);
observador.observe(d_s5);
observador.observe(e1_letters);
observador.observe(e1_text);
observador.observe(e1_s5);
observador.observe(e2_letters);
observador.observe(e2_text);
observador.observe(e2_s5);
observador.observe(p_letters);
observador.observe(p_text);
observador.observe(p_s5);
observador.observe(service_5);
observador.observe(service_5_title);
observador.observe(service_5_text);
observador.observe(service_6);
observador.observe(service_6_title);
observador.observe(service_6_text);