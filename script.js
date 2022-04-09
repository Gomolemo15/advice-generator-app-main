const dice = document.getElementById("dice");
const quote = document.getElementById("quote");
const advice_number = document.getElementById("advice_number");

dice.addEventListener("click", () => {
  fetchAdvice();
});

async function fetchAdvice() {
  await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice_number.innerText = "#Advice " + data.slip.id;
      quote.innerText = '"' + data.slip.advice + '"';
      console.log(data.slip);
    });
}

fetchAdvice();
