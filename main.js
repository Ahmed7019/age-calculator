// Declare variables
// [1] Input fields
let dayInput = document.querySelector(`[name = "day"]`);
let monthInput = document.querySelector(`[name = "month"]`);
let yearInput = document.querySelector(`[name = "year"]`);
let subBtn = document.querySelector(`[type = submit]`);
//  The text area
let yearsSpan = document.querySelector("#years-area");
let monthsSpan = document.querySelector("#months-area");
let daysSpan = document.querySelector("#days-area");
// [2] The value of input fields

subBtn.addEventListener("click", () => {
  let userM = monthInput.value;
  let userD = dayInput.value;
  let userY = yearInput.value;
  daysSpan.textContent = `${parseInt(userD)} `;
  monthsSpan.textContent = `${parseInt(userM)} `;
  yearsSpan.textContent = `${parseInt(userY)} `;
});

// Prevent form submittion

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
