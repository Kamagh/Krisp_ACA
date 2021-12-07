/*const allVisiblePanels = document.querySelectorAll('.visible-panel');

allVisiblePanels.forEach((question) => {
    question.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            let img = document.querySelector("img");
            img.style.transform = 'rotate(180deg)';
            content.style.display = "none";
        } else {
            let img = document.querySelector("img");
            img.style.transform = 'rotate(45deg)';
            content.style.display = "block";
        }
    })
})*/

let coll = document.getElementsByClassName("visible-panel");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        let img = content.nextElementSibling;
        if (content.style.display === "block") {
            //img.style.transform = 'rotate(90deg)'
            content.style.display = "none";
        } else {
            //img.style.transform = 'rotate(45deg)'
            content.style.display = "block";
        }
    });
}
