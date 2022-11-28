
const gameForm = document.querySelector("#randomGame");
const submitNumber = document.querySelector(".submit-number .number");
const choseView = document.querySelector(".chose-view");
const randomView = document.querySelector(".random-view");

const range = document.querySelector(".range input");




function play(event){
  event.preventDefault();
  const rangeNumber = Math.ceil(Math.random() * range.value);
  choseView.innerText = submitNumber.value;
  randomView.innerText = rangeNumber;
};

gameForm.addEventListener("submit",play);


//0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
//범위에는 음수가 포함될 수 없습니다.
//실시간으로 범위 값을 업데이트해야 합니다.
//유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
//유저에게 게임의 승패를 알려야 합니다.
