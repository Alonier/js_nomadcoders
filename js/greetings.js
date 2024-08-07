const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const profile = document.getElementById("profile");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const section = document.getElementById("section");

// 매개변수 info 입력이 아닌, 함수 내부에 info 변수로 정보 전달.
function onLoginSubmit(event) {
  //기본동작 방지
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `어서 오세요 ${username}님!`;
  profile.style["transform"] = "translateY(-100%)";
  // section.classList.remove(HIDDEN_CLASSNAME);
}

//자바스크립트 순차적 작동
//localStorage에서 username 입력
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  profile.style["transform"] = "translateY(0)";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //환영합니다 보여주기
  paintGreetings(savedUsername);
}
