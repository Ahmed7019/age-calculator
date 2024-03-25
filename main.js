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
  let birthday = new Date(`${userM} ${userD} ${userY}`);
  let dateNow = new Date();
  let yearsOld = dateNow - birthday;
  if (userD === "" || userM === "" || userY === "") {
    // Change the color of the label to red
    dayInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );
    // Show note to user to fill input fields
    // dayInput.after("");
    // monthInput.after("");
    // yearInput.after("");
    // dayInput.after(
    //   document
    //     .createElement("p")
    //     .appendChild(document.createTextNode("This field is required"))
    // );
    // monthInput.after(
    //   document
    //     .createElement("p")
    //     .appendChild(document.createTextNode("This field is required"))
    // );
    // yearInput.after(
    //   document
    //     .createElement("p")
    //     .appendChild(document.createTextNode("This field is required"))
    // );
    monthInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );
    yearInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );
  } else {
    daysSpan.textContent = `${parseInt(yearsOld / 1000 / 60 / 60 / 24)} `;
    monthsSpan.textContent = `${parseInt(
      yearsOld / 1000 / 60 / 60 / 24 / 30
    )} `;
    yearsSpan.textContent = `${parseInt(
      yearsOld / 1000 / 60 / 60 / 24 / 365
    )} `;
  }
});

// Check if fields are empty

// subBtn.addEventListener("click", () => {

// });

// Prevent form submittion

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
