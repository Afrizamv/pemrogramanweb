const promoBtn =
document.getElementById("promoBtn");

promoBtn.addEventListener("click", () => {

    showToast(
    "🔥 Promo spesial! Diskon Berlaku 30 Hari!!!.");

});



const addButtons =
document.querySelectorAll(".add-to-cart-btn");

addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        showToast("✅ Produk berhasil ditambahkan!");

    });

});


const subscribeForm =
document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", (e) => {

    e.preventDefault();

    showToast("📩 Berhasil subscribe newsletter!");

    subscribeForm.reset();

});


const toast =
document.getElementById("toast");

const toastMsg =
document.getElementById("toast-msg");

function showToast(message){

    toastMsg.innerText = message;

    toast.classList.remove("hidden");

    setTimeout(() => {

        toast.classList.add("hidden");

    }, 3000);

}


const fadeElements =
document.querySelectorAll(".fade-in");

function revealOnScroll(){

    fadeElements.forEach((element) => {

        const position =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(position < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 0 20px rgba(0,0,0,0.5)";

    }else{

        navbar.style.boxShadow =
        "none";

    }

});

document.title = "NexTech - Premium Gadget Store";

document.addEventListener(
"mousemove",
(e) => {

    const glows =
    document.querySelectorAll(".bg-glow");

    glows.forEach((glow, index) => {

        const speed =
        (index + 1) * 0.01;

        const x =
        (window.innerWidth - e.pageX * speed) / 100;

        const y =
        (window.innerHeight - e.pageY * speed) / 100;

        glow.style.transform =
        `translate(${x}px, ${y}px)`;

    });
});