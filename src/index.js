import './styles/index.scss'

let $h1 = document.getElementById("h1")
let $head = document.getElementById("head")

setTimeout(()=>{
    $h1.innerHTML = "Как Вам Parcel сер???"
    $head.innerHTML = "Parcel testing..."
}, 1500)
