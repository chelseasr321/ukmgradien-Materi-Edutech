const filterButtons = document.querySelectorAll(".filter button");
const projects = document.querySelectorAll(".project");

function filterProject(category, button){

    filterButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    projects.forEach(project => {

        if(category === "all" || project.getAttribute("data-category") === category){

            project.style.display = "block";

        }else{

            project.style.display = "none";

        }

    });

}

const contactForm = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const warning = document.getElementById("warning");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    if(nama.value.trim() === ""){

        warning.textContent = "Nama tidak boleh kosong!";
        warning.style.color = "red";
        nama.focus();

    }else{

        warning.textContent = "Pesan berhasil dikirim.";
        warning.style.color = "green";
        contactForm.reset();

    }

});

const portfolioButton = document.querySelector(".btn");

portfolioButton.addEventListener("click", function(event){

    event.preventDefault();

    document.getElementById("portfolio").scrollIntoView({

        behavior: "smooth"

    });

});

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 40){

        nav.style.background = "rgba(37,99,235,0.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        nav.style.background = "rgba(255,255,255,.08)";
        nav.style.boxShadow = "none";

    }

});
