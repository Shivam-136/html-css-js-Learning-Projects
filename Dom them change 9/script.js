var theme = localStorage.getItem('theme') || 'light'

var body = document.querySelector('body')
var text = document.querySelector('h1 span')
var btn = document.querySelector('button')

body.setAttribute('class', theme )
text.innerHTML= theme

btn.addEventListener('click',function (){
    if (theme == 'light'){
        localStorage.setItem('theme','dark')
    }else{
        localStorage.setItem('theme','light')
    }
    location.reload()   
})
