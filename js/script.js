// navigation
const mobile_menu = document.querySelector(".mobile-menu");
const nav_menu = document.querySelector(".nav-menu");

mobile_menu.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  mobile_menu.classList.remove("active"); 
  nav_menu.classList.remove("active");
}))

function nullLink() {
  alert("NO LINK FOR THIS PROJECT YET :D");
}

// navigation - page indicator
const active_page = window.location.pathname === "/" ? "/index.html" : window.location.pathname;
console.log(active_page);

const nav_links = document.querySelectorAll(".nav-link").forEach(link => {
  if(link.href.includes(active_page)) {
    link.classList.add("active-page");
  }
})

// under constuction div
const underConstruction = () => {
  const header = document.querySelector('header');
  if (!header) {
    console.log('Header element not found.');
    return;
  }

  header.insertAdjacentHTML('afterend',
    `<div class="under-construction-ctn">
      <div class="under-construction-text">
        WEBSITE IS UNDER CONSTRUCTION :D
      </div>
    </div>`);
};

underConstruction();