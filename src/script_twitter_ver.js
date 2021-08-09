// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

console.log('잘 불렸는지 확인')

let elInputUsername = document.querySelector('#username')
console.log(elInputUsername)

let elInputPassword = document.querySelector('#password')
let elInputPasswordRetype = document.querySelector('#password-retype')

let elMisMatchMessage = document.querySelector('.mismatch-message')

// elInputUsername.value = '김코딩'

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage)
let elSuccessMessage = document.querySelector('.success-message')

let elInputPlaceholder = document.querySelector('.blue-hide')

// elFailuarMessage.style.display = 'none'; (직접 없애버리는 방법)
// 하지만 현업에서는 css에서 .hide 를 만든 뒤 html에 hide 클래스를 넣음.

// elFailuarMessage.classList.remove('hide')  //hide 클래스 없애기
// elFailuarMessage.classList.add('hide') hide 클래스 만들기


// 아이디 입력창에 글씨가 담기면 -elInputUsername
// 글자수가 4글자 이상이라면
// 사용할 수 있는 아이디임을 출력한다. - success-message

elInputUsername.onkeyup = function (){
  console.log(elInputUsername.value)

  if (isMoreThan4Length(elInputUsername.value)){
      elSuccessMessage.classList.remove('hide')
      elFailureMessage.classList.add('hide')
  }else{
      elFailureMessage.classList.remove('hide')
      elSuccessMessage.classList.add('hide')
  }
}

elInputPasswordRetype.onkeyup = function(){
  console.log(elInputPasswordRetype.value)

  if (isMatch (elInputPassword.value, elInputPasswordRetype.value)){
    elMisMatchMessage.classList.add('hide')
  }else{
    elMisMatchMessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}

function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}