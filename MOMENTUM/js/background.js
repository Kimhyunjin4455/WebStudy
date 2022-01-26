const images = ["0.jpeg", "1.jpeg", "2.jpeg"]
// 저장된 이름하고 똑같이 맞춰줄 것

const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img");
// js에서 html 요소 만들기 (우와)

bgImage.src = `img/${chosenImage}`
document.body.appendChild(bgImage);
// img 를 body에 붙여주기
// append - 제일 뒤에 붙이기, prepend - 제일 앞에 붙이기