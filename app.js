
var menu = document.querySelector('#menu');
var menuClose = document.querySelector('.fa-xmark')
var menuLinks = document.querySelectorAll('.side-menu')

menu.addEventListener('click', function(){
  var showMenu = document.querySelector('.menu-background')
  showMenu.classList.toggle('active')
})

menuClose.addEventListener('click', function(){
    showMenu = document.querySelector('.menu-background')
    showMenu.classList.remove('active')
})

menuLinks.forEach(function(element){
element.addEventListener('click', function(){
    showMenu = document.querySelector('.menu-background')
    showMenu.classList.remove('active')
})
})
