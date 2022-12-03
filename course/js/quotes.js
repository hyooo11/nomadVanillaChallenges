const quotes = [
   {
      quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
      author: "파울로 코엘료"
   },
   {
      quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
      author: "헬렌켈러"
   },
   {
      quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
      author: "이드리스 샤흐"
   },
   {
      quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
      author: "마르쿠스 아우렐리우스 안토니우스"
   },
   {
      quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
      author: "L론허바드"
   },
   {
      quote: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
      author: "에디슨"
   },
   {
      quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다. ",
      author: "맹자"
   },
   {
      quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
      author: "톨스토이"
   },
   {
      quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
      author: "괴테"
   },
   {
      quote: "문제점을 찾지 말고 해결책을 찾으라",
      author: "헨리포드"
   },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;