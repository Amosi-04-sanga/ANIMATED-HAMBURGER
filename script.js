// select DOM node references.
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const navList = document.querySelector('.nav__list');
const contacts = document.querySelector('.contacts');
const navRight = document.querySelector('.nav__right');

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const nav_items = Array.from( document.querySelectorAll('.nav_item') );

hamburger.addEventListener( 'click', openNav, false);

function openNav() {


          nav.classList.toggle('active');
         
           // hamburger lines.
          line1.classList.toggle('line-bottom');
          line2.classList.toggle('line-middle');
          line3.classList.toggle('line-top');

          // navigation links.
          navList.classList.toggle('active');
          navRight.classList.toggle('active');
          contacts.classList.toggle('active');
          
      // add opacity 1 to links.
      for( let j = 0; j < nav_items.length; j++) {

           nav_items[j].classList.remove('active');
           
           // set time out.
           setTimeout( () => {
                nav_items[j].classList.add('active');
           }, j * 250 );

      }

}
