function signUpNow() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  alert("Welcome 🤸🏽‍♀️" + name + ", you're one step closer");
  let subscription = prompt(
    "Would you prefer a monthly subscription?"
  ).toLowerCase();
  if (subscription === "yes") {
    alert("You're in! 🥳" + " " + name);
  } else if (subscription === "no") {
    alert("☹️ Hope you'll be back soon");
  }
  let h2 = document.querySelector("h2");
  h2.innerHTML = "<em> Thank you!</em> " + name + ", we'll be in touch!";
}
let signUpNowButton = document.querySelector("button");
signUpNowButton.addEventListener("click", signUpNow);
