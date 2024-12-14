let nisabRadios = document.querySelectorAll("input[name='nisab']");
let nisabValue = 0;

nisabRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    nisabValue = radio.id === "gold" ? 1473000 : 114713;
  });
});

let cashTotal = 0;
let cashInputs = document.querySelectorAll("input[name='cash']");
cashInputs.forEach((input) => {
  input.addEventListener("change", () => {
    cashTotal = 0;
    cashInputs.forEach((input) => {
      cashTotal += Number(input.value);
    });
  });
});

let goldSilverTotal = 0;
let goldSilverInputs = document.querySelectorAll(
  "input[name='goldsilver']"
);
goldSilverInputs.forEach((input) => {
  input.addEventListener("change", () => {
    goldSilverTotal = 0;
    goldSilverInputs.forEach((input) => {
      goldSilverTotal += Number(input.value);
    });
  });
});

let liabilitiesTotal = 0;
let liabilitiesInputs = document.querySelectorAll(
  "input[name='liabilities']"
);
liabilitiesInputs.forEach((input) => {
  input.addEventListener("change", () => {
    liabilitiesTotal = 0;
    liabilitiesInputs.forEach((input) => {
      liabilitiesTotal += Number(input.value);
    });
  });
});

let calculateZakatButton = document.getElementById("calculateZakat");
let totalNetworthElement = document.getElementById("totalNetworth");
let totalZakatElement = document.getElementById("totalZakat");

calculateZakatButton.addEventListener("click", () => {
  let assets = cashTotal + goldSilverTotal;
  let netWorth = assets - liabilitiesTotal;
  if (netWorth > nisabValue) {
    let zakat = netWorth * 0.025;
    totalNetworthElement.innerText = `RS ${netWorth}`;
    totalZakatElement.innerText = `RS ${zakat}`;
  } else {
    totalNetworthElement.innerText = `RS ${netWorth}`;
    totalZakatElement.innerText = `no zakat`;
  }
});