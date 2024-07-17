const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

//랜덤 이미지 생성
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgsrc = document.getElementById("wrapper");
// const bgimage = document.createElement("img");

//html 이미지 객체생성
// bgimage.src = `/img/${choesnImage}`;
// bgimage.style.height = "100%";
// bgimage.style.width = "100%";

//이미지 객체 html에 삽입.
// document.body.appendChild(bgimage);

bgsrc.style["background-image"] = `url("./img/${chosenImage}")`;
