// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Small reveal animation when sections enter the screen
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});