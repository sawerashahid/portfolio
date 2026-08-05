// ===== Typing Effect =====

const text = "Aspiring Software Engineer";
const typing = document.querySelector(".hero-left h2");

if (typing) {
    typing.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }

    type();
}

// ===== Cursor Effect =====

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

// ===== Scroll Reveal =====

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll("section,.skill-card,.project-card,.education-card").forEach((el)=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="1s";

observer.observe(el);

});

// ===== Smooth Navbar Links =====

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===== Navbar Shadow =====

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});

// ===== Hero Card Hover =====

const card=document.querySelector(".glass-card");

if(card){

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.transform=
`rotateX(${-(y-150)/25}deg)
 rotateY(${(x-150)/25}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

}

// ===== Console Message =====

console.log("Portfolio Loaded Successfully 🚀");
