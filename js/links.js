//사용자가 입력한 링크 목록을 local Storage에 저장해두었다가 출력

const linkForm = document.querySelector("#link-form");
const linkInput = document.querySelector("#link-form input");

const linkDiv = document.querySelector("#link-div");

function onLinksubmit(event){
    //기본 동작 정지
    event.preventDefault();
    //현재 링크 순서를 기억하는 정수
    const linkSeq = parseInt(localStorage.getItem("linkSeq"))+1;

    //현재 input에 담겨있는 값
    const link = linkInput.value;

    if(checkUrl(link)){
        localStorage.setItem(linkSeq,link);
        localStorage.setItem("linkSeq",linkSeq);
    }
    else{
        alert("URL is wrong");
    }

    //입력 후 내부 글자 삭제
    linkInput.value = "";
    setLink();
}

//URL 형식인지 확인
function checkUrl(strUrl) {
    let expUrl = /^http[s]?:\/\/([\S]{3,})/i;
    return expUrl.test(strUrl);
}

function setLink(){
    let i;
    //현재 입력되어있는 링크의 순서
    const LINKSEQ = parseInt(localStorage.getItem("linkSeq"));
    let str = "";
    for(i = 1; i<=LINKSEQ; i++){
        str = str + `<a href = ${localStorage.getItem(i)}>${localStorage.getItem(i)}</a><br>`
    }
    linkDiv.innerHTML = str;
}

if(localStorage.getItem("linkSeq") == null){
    localStorage.setItem("linkSeq",0);
}

if(localStorage.getItem("username") == null){
    linkForm.classList.remove("hidden");
    linkDiv.classList.remove("hidden");
}

linkForm.addEventListener("submit",onLinksubmit);
setLink();