
console.log("Cricket Info Clone Loaded");
const matches = document.querySelectorAll(".match-box");
matches.forEach(box => {
    box.addEventListener("click", () => {
        alert("Live Match Selected: " + box.textContent.trim());
    });
});
