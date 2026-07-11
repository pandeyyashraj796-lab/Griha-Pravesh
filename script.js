// ================================
// Griha Pravesh Invitation
// Version 1.0
// ================================

// Elements
const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

// Open Invitation
openBtn.addEventListener("click", () => {

    // Fade out welcome screen
    welcome.style.transition = "all 1s ease";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";
        invitation.style.display = "flex";
const card = document.querySelector(".scroll-card");

card.style.transform = "scaleY(0)";
card.style.opacity = "0";

setTimeout(() => {

    card.style.transition = "all 1.2s ease";

    card.style.transform = "scaleY(1)";
    card.style.opacity = "1";

},100);
        // Smooth Scroll
        invitation.scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

});

// ======================================
// Golden Sparkles
// ======================================

const particleContainer = document.querySelector(".particles");

if (particleContainer) {

    for (let i = 0; i < 80; i++) {

        const star = document.createElement("span");

        star.style.position = "absolute";
        star.style.width = Math.random() * 5 + "px";
        star.style.height = star.style.width;
        star.style.background = "gold";
        star.style.borderRadius = "50%";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.opacity = Math.random();
        star.style.animation = `sparkle ${4 + Math.random() * 5}s infinite alternate`;

        particleContainer.appendChild(star);
    }

}
// ======================================
// Add Keyframes using JS
// ======================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes sparkle{

0%{

transform:scale(.4);

opacity:.2;

}

100%{

transform:scale(1.4);

opacity:1;

}

}

`;

document.head.appendChild(style);

// ======================================
// Greeting according to Time
// ======================================

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

greeting = "🌞 शुभ प्रभात";

}
else if(hour < 17){

greeting = "🌼 शुभ दोपहर";

}
else{

greeting = "🌙 शुभ संध्या";

}

const text = document.querySelector(".welcome-text");

text.innerHTML = greeting + "<br><br>With the Divine Blessings of Lord Ganesha";

// ======================================
// Ripple Button Effect
// ======================================

openBtn.addEventListener("click", function(e){

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const x = e.clientX - e.target.offsetLeft;

    const y = e.clientY - e.target.offsetTop;

    ripple.style.left = x + "px";

    ripple.style.top = y + "px";

    this.appendChild(ripple);

    setTimeout(()=>{

        ripple.remove();

    },700);

});

// Ripple CSS

const rippleCSS = document.createElement("style");

rippleCSS.innerHTML = `

#openBtn{

overflow:hidden;

position:relative;

}

.ripple{

position:absolute;

background:rgba(255,255,255,.5);

border-radius:50%;

transform:translate(-50%,-50%);

animation:ripple .7s linear;

width:20px;

height:20px;

}

@keyframes ripple{

from{

transform:translate(-50%,-50%) scale(0);

opacity:1;

}

to{

transform:translate(-50%,-50%) scale(15);

opacity:0;

}

}

`;

document.head.appendChild(rippleCSS);

console.log("✨ Griha Pravesh Invitation Loaded Successfully");
// =============================
// Countdown Timer
// =============================

function updateCountdown(){
      console.log("Updating countdown...");
    const eventDate = new Date(2026,7,17,10,0,0).getTime();
    // Month is zero-based, so 7 = August

    const now = Date.now();

    const distance = eventDate - now;

    if(distance < 0){
        return;
    }

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);
// ======================================
// Falling Flower Petals
// ======================================

const petals = document.querySelector(".petals");

for(let i=0;i<30;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=8+Math.random()*8+"s";

petal.style.animationDelay=Math.random()*8+"s";

petal.style.opacity=Math.random();

petal.style.transform=`scale(${0.5+Math.random()})`;

petals.appendChild(petal);

}
