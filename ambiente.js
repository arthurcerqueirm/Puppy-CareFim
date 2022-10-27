const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const header = document.querySelector('#header')
var clicar = document.querySelector('.nao')
const btndenuncia = document.querySelector('.btndenun')
const quadrado = document.querySelector('.quadrado')

function OpenMenu(){
    console.log(clicar)
    menu.classList.toggle("active")
    window.setTimeout( header.classList.toggle("active"), 600)
}

function FecharMenu(){
    menu.classList.toggle("active")
}

btndenuncia.addEventListener('mouseenter', ()=>{
    quadrado.classList.add('active')
})

btndenuncia.addEventListener('mouseleave', ()=>{
    quadrado.classList.remove('active')
})

btnMenu.addEventListener('click' , OpenMenu)