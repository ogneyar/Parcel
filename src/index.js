import './styles/index.scss'

// window.scrollTo(0, 50);

let $h1 = document.getElementById("h1")
let $head = document.getElementById("head")
let $p = document.getElementById("p")
let $p2 = document.getElementById("p2")

$p.style.opacity = "1";

setTimeout(()=>{
    $h1.innerHTML = "Как Вам Parcel?"
    $head.innerHTML = "Parcel testing..."    

    // $p.style.display = "none";
    // $p.style.display = "block";

    document.addEventListener("scroll", func);
    
}, 1000)

function func() {
	if ($p.style.opacity == "1") {
        $p.style.opacity = "0";
        setTimeout(()=>{
            $p2.style.opacity = "1";
        }, 300)
    }else {
        $p2.style.opacity = "0";
        setTimeout(()=>{
            $p.style.opacity = "1";
        }, 300)
    }
    console.log("log");
	document.removeEventListener("scroll", func);

    setTimeout(()=>{
        document.addEventListener("scroll", func);
    }, 1000)
}

