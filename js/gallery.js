let overImg = document.getElementById("gallery-thumbs");
let stillImg = document.getElementById("gallery-picture");
let imgList = overImg.getElementsByClassName("thumbs-img");

let stillTtl = document.getElementById("gallery-title");

let stillText = document.getElementById("gallery-description");

for (let index = 0; index < imgList.length; index++) {

    imgList[index].addEventListener('mouseover', function () {

        stillImg.src = this.getAttribute("src");
        stillTtl.innerText = this.getAttribute("data-title");
        stillText.innerText = this.getAttribute("data-description");

    });
}
