const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

//랜덤 이미지 생성
const choesnImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");

//html 이미지 객체생성
bgimage.src = `/img/${choesnImage}`;
bgimage.style.height = "100%";
bgimage.style.width = "100%";

//이미지 객체 html에 삽입.
document.body.appendChild(bgimage);