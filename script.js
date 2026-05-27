
// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



// ACTIVE NAV LINK

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});



// FADE-IN ON SCROLL

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



// ORDER MODAL (SAFE VERSION)

function openModal() {
    const modal = document.getElementById("orderModal");
    if(modal){
        modal.style.display = "flex";
    }
}

function closeModal() {
    const modal = document.getElementById("orderModal");
    if(modal){
        modal.style.display = "none";
    }
}



// CONTACT FORM VALIDATION

const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if(name === "" || email === "" || message === ""){
            e.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Message sent successfully!");
        }
    });
}
