const tabs = document.querySelectorAll(".tabs-link");
const tabContents = document.querySelectorAll(".tab-content-item");

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click', function () {

        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            tabContents[j].classList.remove("active2");
        }

        this.classList.add("active");
        tabContents[i].classList.add("active2");
    });
}

