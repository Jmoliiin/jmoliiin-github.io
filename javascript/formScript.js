// document.getElementById('inputText').setAttribute('maxlength',2000);

function minValue(str, minValue) {
  let strLengt = str.trim();
  let expression = "^.{" + minValue + ",35}$";
  const r = new RegExp(expression);

  if (r.test(strLengt)) return true;
}

//! FIX SO THAT NUMBER ONLT APPLAY , BUT HOW MNY NUMBER AS POSIBLE
function inputPhonNumber(str) {
  const regex = /^\+?\d{2}\d{8,}$/; // Regex för att kolla om det finns minst 10 siffror

  const strWithoutSpaces = str.replace(/\s+/g, "");

  if (regex.test(strWithoutSpaces)) {
    return true;
  } else {
    return false;
  }
}

function inputText(str) {
  let strlTrimmed = str.trim();
  if (strlTrimmed.length >= 5) {
    if (strlTrimmed.length <= 700) {
      return true;
    }
  }
}

function validateEmail(str) {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(str)) return true;
}

function button() {
  const button = document.querySelector(".button");
  button.disabled = true;

  const exist = document.querySelectorAll(".button-off");

  if (exist.length > 0) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

//function to set the button to disabeld if not all reguired fields are properly filld in
button();

//! Lägg in tack medelande p laddade sidan
function onSubmit() {
  alert("Tack för ditt mail!");
  // const sendFeedback= document.getElementById('sendFeedback');
}
const valid = document.querySelectorAll(".validation");
valid.forEach((element) => {
  if (element.type === "text") {
    element.addEventListener("keyup", function (e) {
      if (!minValue(e.target.value, "2")) {
        e.target.classList.add("button-off");
        e.target.classList.add("is-invalid");
        button();
      } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        e.target.classList.remove("button-off");
        button();
      }
    });
  }
  if (element.type === "email") {
    element.addEventListener("keyup", function (e) {
      if (!validateEmail(e.target.value)) {
        e.target.classList.add("button-off");
        e.target.classList.add("is-invalid");
        button();
      } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        e.target.classList.remove("button-off");
        button();
      }
    });
  }

  if (element.id === "inputPhonNumber") {
    element.addEventListener("keyup", function (e) {
      if (!inputPhonNumber(e.target.value)) {
        e.target.classList.add("button-off");
        e.target.classList.add("is-invalid");
        button();
      } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        e.target.classList.remove("button-off");
        button();
      }
    });
  }
  //! FIXA DENNA REGEX
  if (element.id === "inputText") {
    element.addEventListener("keyup", function (e) {
      if (!inputText(e.target.value)) {
        e.target.classList.add("button-off");
        e.target.classList.add("is-invalid");
        button();
      } else {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        e.target.classList.remove("button-off");
        button();
      }
    });
  }
});
