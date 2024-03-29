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

// Create a function to make the red text alert

let alertText = (input) => {
  // Label of the input
  input.previousElementSibling.previousElementSibling.style.setProperty(
    "color",
    "red"
  );

  // Style of the text
  input.nextElementSibling.style.setProperty("display", "block");
  input.nextElementSibling.style.setProperty("color", "red");
  input.nextElementSibling.style.setProperty("font-size", "8px");
  input.nextElementSibling.style.setProperty("margin", "8px 0");
};

// Return text to grey
let noAlertText = (input) => {
  input.previousElementSibling.previousElementSibling.style.setProperty(
    "color",
    "grey"
  );
};

subBtn.addEventListener("click", () => {
  let userM = monthInput.value;
  let userD = dayInput.value;
  let userY = yearInput.value;
  let birthday = new Date(`${userM} ${userD} ${userY}`);
  let dateNow = new Date();
  let yearsOld = dateNow - birthday,
    daysOld = parseInt(yearsOld / 1000 / 60 / 60 / 24),
    monthOld = parseInt(yearsOld / 1000 / 60 / 60 / 24 / 30),
    years = parseInt(yearsOld / 1000 / 60 / 60 / 24 / 365);

  if (userD === "" || userM === "" || userY === "") {
    // Check if the day is valid
    let reqMsg = document.querySelectorAll("#required");

    // Show note to user to fill input fields
    reqMsg.forEach((msg) => {
      msg.textContent = "This field is required";
      msg.style.setProperty("display", "block");
      msg.style.setProperty("font-weight", "light");
      msg.style.setProperty("color", "red");
      msg.style.setProperty("font-size", "8px");
      msg.style.setProperty("margin", "8px 0 ");
    });

    // Change the color of the label to red
    dayInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );

    monthInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );
    yearInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "red"
    );
  } else {
    // Change the color of the label to grey
    dayInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "grey"
    );

    monthInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "grey"
    );
    yearInput.previousElementSibling.previousElementSibling.style.setProperty(
      "color",
      "grey"
    );

    // Remove the alert message
    let reqMsg = document.querySelectorAll("#required");
    reqMsg.forEach((msg) => {
      msg.textContent = "";
    });

    // old in days
    daysSpan.textContent = daysOld;
    // old in months
    monthsSpan.textContent = monthOld;
    // old in years
    yearsSpan.textContent = years;

    checkDate(userD, userM, userY);
  }
});

// Check if the date is wrong
let checkDate = (day, month, year) => {
  // Check days
  if (day > 31) {
    // Label color to red
    dayInput.nextElementSibling.textContent = "Must be a valid day";
    alertText(dayInput);
    // Don't change the HTML
    daysSpan.textContent = "- -";
  } else {
    // Label color to grey
    noAlertText(dayInput);
  }

  // Check the month
  if (month > 12) {
    // Change label color to red
    monthInput.nextElementSibling.textContent = "Must be a valid month";
    alertText(monthInput);
    // Don't change the HTML
    monthsSpan.textContent = "- -";
    yearsSpan.textContent = "- -";
  } else {
    // Label color to grey
    noAlertText(monthInput);
  }

  // Check year
  let currentYear = new Date().getFullYear();
  if (year > currentYear) {
    // Label color to red

    yearInput.nextElementSibling.textContent = "Must be in the past";
    alertText(yearInput);
    // Don't change the HTML
    yearsSpan.textContent = "- -";
  } else {
    // Label color to grey
    noAlertText(yearInput);
  }

  // Check if the year is leap

  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    // check if the month is february then check the days
    if (month === "2" && day > "29") {
      dayInput.nextElementSibling.textContent = "Must be a valid date";
      alertText(dayInput);
      daysSpan.textContent = "- -";
      monthsSpan.textContent = "- -";
      yearsSpan.textContent = "- -";
    }
  } else {
    // Label color to grey
    noAlertText(dayInput);
  }
};

// Prevent form submittion

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
