const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const result = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", function () {
  const principal = Number(principalInput.value);
  const rate = Number(rateInput.value);
  const time = Number(timeInput.value);

  if (
 
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(time) ||
    principal <= 0 ||
    rate < 0 ||
    time <= 0
  ) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  result.textContent =
    `Interest: Rs. ${interest.toFixed(2)}. ` +
    `Total amount: Rs. ${total.toFixed(2)}.`;
});
