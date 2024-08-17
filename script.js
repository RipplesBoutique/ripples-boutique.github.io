document.body.addEventListener('mousemove',function(event) {
  const navBar = document.getElementById('navBar');
  const arrow = document.getElementById('arrow');
  const mainPage = document.querySelector('.main-page');
  const toggleButton = document.getElementById('toggleButton');

  if (event.clientX < 10){
    navBar.classList.add('open');
    mainPage.classList.add('shift');
    arrow.style.left='250px';
  } else if (event.clientX > 250){
    navBar.classList.remove('open');
    mainPage.classList.remove('shift');    
    arrow.style.left='0';
  }

  // Click event listener for the toggle button
toggleButton.addEventListener('click', function() {
  if (navBar.classList.contains('open')) {
      closeNavBar();
  } else {
      openNavBar();
  }
});
// Function to open the navBar
function openNavBar() {
  navBar.classList.add('open');
  mainPage.classList.add('shift');
  arrow.style.left = `${NAVBAR_WIDTH}px`;
}

// Function to close the navBar
function closeNavBar() {
  navBar.classList.remove('open');
  mainPage.classList.remove('shift');
  arrow.style.left = '0';
}
});
//code for image slider
if (document.querySelector('.slider')) {
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
}
//code for sub-menu
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseover', () => {
      const submenu = item.querySelector('.sub-menu');
      if (submenu) {
          submenu.style.display = 'block';
      }
  });

  item.addEventListener('mouseout', () => {
      const submenu = item.querySelector('.sub-menu');
      if (submenu) {
          submenu.style.display = 'none';
      }
  });
});
//code for sub-menu
const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('click', function(){
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
      const submenu = item.querySelector('.sub-menu');
      if (submenu) {
          submenu.style.display = 'block';
      }
  });

  item.addEventListener('click', () => {
      const submenu = item.querySelector('.sub-menu');
      if (submenu) {
          submenu.style.display = 'none';
      }
  });
});
});
//code for image expand
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxPrevButton = document.getElementById('lightbox-prev');
  const lightboxNextButton = document.getElementById('lightbox-next');
  let currentImageIndex;
  let currentGallery;

  document.querySelectorAll('.gallery img').forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentGallery = e.target.closest('.gallery');
        currentImageIndex = Array.from(currentGallery.children).indexOf(img);
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
  });


  lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg && e.target !== lightboxPrevButton && e.target !== lightboxNextButton) {
          lightbox.classList.remove('active');
      }
  });

  lightboxPrevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentGallery.children.length - 1;
    lightboxImg.src = currentGallery.children[currentImageIndex].src;
  });
  lightboxNextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < currentGallery.children.length - 1) ? currentImageIndex + 1 : 0;
    lightboxImg.src = currentGallery.children[currentImageIndex].src;
  });
});