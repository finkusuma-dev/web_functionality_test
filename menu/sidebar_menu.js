// document.addEventListener('DOMContentLoaded', function () {
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');
const sidebarBg = document.querySelector('.sidebar__bg');

// console.log(toggleBtn);

toggleBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--open');
  sidebarBg.classList.toggle('hidden');

  console.log('toggle open');
});

sidebarBg.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar--open');
  sidebarBg.classList.toggle('hidden');
});
// });
