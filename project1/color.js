document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.opacity = "1";
        });

        box.addEventListener("mouseleave", () => {
            box.style.opacity = "0.8";
        });
    });
});
