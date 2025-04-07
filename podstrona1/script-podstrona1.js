const items = document.querySelectorAll(".timeline li");

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

function run() {
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add("in-view");
        } else {
            item.classList.remove("in-view");
        }
    });
}

["load", "resize", "scroll"].forEach(event =>
    window.addEventListener(event, run)
);