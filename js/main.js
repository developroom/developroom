//main engine of this shit
document.addEventListener('DOMContentLoaded',()=>{
    init();
    menuOperate();
});

const menuOperate = ()=>{
    document.querySelector('.menu-wrapper').addEventListener('click',()=>{
        document.querySelector('.hamburger-menu').classList.toggle('animate');
        document.querySelector('nav').classList.toggle('open');
    });
    let links = document.querySelectorAll('nav ul li');
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click',()=>{
            document.querySelector('.hamburger-menu').classList.toggle('animate');
            document.querySelector('nav').classList.toggle('open');
        });
    }
};

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
      if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length -1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.txtElement.innerHTML = this.txt;
      let typeSpeed = 100;
      if(this.isDeleting) {
        typeSpeed /= 3;
      }
      if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
}
function init() {
    const txtElement = document.querySelector('.text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}
