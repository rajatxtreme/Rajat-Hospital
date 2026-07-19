// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target.toLocaleString() + "+";
        }
    };

    update();
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function reveal() {
    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mobile Menu
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "20px";
        nav.style.background = "#fff";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
        nav.style.boxShadow = "0 10px 20px rgba(0,0,0,.15)";
    }
});

// Smooth Close Menu
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            nav.style.display = "none";
        }
    });
});

// Feedback Form
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("✅ Thank you for your feedback!");

    form.reset();
});

// Button Hover Effect
document.querySelectorAll(".btn,.btn2").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// Floating Buttons Animation
document.querySelectorAll(".floating-call,.floating-whatsapp").forEach(btn => {
    setInterval(() => {
        btn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" }
        ], {
            duration: 1000
        });
    }, 2500);
});