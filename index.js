let magic = document.getElementById("secret");
let secretText = document.getElementById("secret_text");
let loader = document.getElementsByClassName("loader")[0];
let outro = document.getElementsByClassName("outro")[0];

outro.style.display = "none";

function showAnswer() {
  let boxCheck = document.getElementsByClassName("checkbox");
  let total = 0;
  for (let i = 0; i < boxCheck.length; i++) {
    if (parseInt(boxCheck[i].value) && boxCheck[i].checked) total += parseInt(boxCheck[i].value);
  }
  magic.textContent = total;
  loader.style.display = "none";

  if (document.querySelectorAll('input[type="checkbox"]:checked').length == 0) {
    magic.textContent = "Please select at least one card!";
    loader.style.display = "none";
    secretText.style.display = "none";
  } else if (magic.textContent > 0) {
    secretText.style.display = "flex";
    outro.style.display = "flex";
    outro.scrollIntoView({ behavior: "smooth" });
  }
}

function deleteAnswer(uncheckBoxes) {
  let verifyBoxes = document.getElementsByClassName("checkbox");
  for (let i = 0; i < verifyBoxes.length; i++) {
    verifyBoxes[i].checked = uncheckBoxes;
  }
  magic.textContent = "";
  secretText.style.display = "flex";
  loader.style.display = "flex";
  loader.style.width = "35";
  outro.style.display = "none";
}
