const tabs = document.querySelectorAll(".tabs-link");

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click', function () {

        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }

        this.classList.add("active");
    });
}
