let body = document.body;
let contact1=document.getElementById("contact1")
let dark = document.getElementById("set1");
dark.addEventListener("click", function () {
    body.classList.toggle("darkmode");
    if (body.classList.contains("darkmode")) {
        dark.innerText = "LIGHT";
    } else {
        dark.innerText = "DARK";
    }
});