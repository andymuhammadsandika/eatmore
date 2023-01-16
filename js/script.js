// pertama kita akan bikin class active
// buat variabel untuk mengambil class navbar-nav
// ketika hamburger menu di klik, maka (jika class active sudah ada) hapus, tapi jika class active belum ada maka tambahkan
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan side bar nya

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});