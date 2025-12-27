function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const guButton = document.querySelector("#gu");
const cyokiButton = document.querySelector("#cyoki");
const paButton = document.querySelector("#pa");
let resultDiv = document.querySelector("#result");
let resultText = document.createElement("p");
let cheatButton = document.querySelector("#cheatMode");
let cheatSwitch = true;

function zyannkenn(num) {
  if (cheatSwitch) {
    let com = getRandomInt(3);

    switch (num) {
      case 0:
        switch (com) {
          case 0:
            resultText.textContent = "あなた：グー　相手：グー　→あいこ！";
            resultDiv.appendChild(resultText);
            break;
          case 1:
            resultText.textContent =
              "あなた：グー　相手：チョキ　→あなたの勝ち！";
            resultDiv.appendChild(resultText);
            break;
          case 2:
            resultText.textContent =
              "あなた：グー　相手：パー　→あなたの負け！";
            resultDiv.appendChild(resultText);
            break;
        }
        break;
      case 1:
        switch (com) {
          case 0:
            resultText.textContent =
              "あなた：チョキ　相手：グー　→あなたの負け！";
            resultDiv.appendChild(resultText);
            break;
          case 1:
            resultText.textContent = "あなた：チョキ　相手：チョキ　→あいこ！";
            resultDiv.appendChild(resultText);
            break;
          case 2:
            resultText.textContent =
              "あなた：チョキ　相手：パー　→あなたの勝ち！";
            resultDiv.appendChild(resultText);
            break;
        }
        break;
      case 2:
        switch (com) {
          case 0:
            resultText.textContent =
              "あなた：パー　相手：グー　→あなたの勝ち！";
            resultDiv.appendChild(resultText);
            break;
          case 1:
            resultText.textContent =
              "あなた：パー　相手：チョキ　→あなたの負け！";
            resultDiv.appendChild(resultText);
            break;
          case 2:
            resultText.textContent = "あなた：パー　相手：パー　→あいこ！";
            resultDiv.appendChild(resultText);
            break;
        }
        break;
    }
  } else {
    switch (num) {
      case 0:
        resultText.textContent =
          "あなた：グー　相手：チョキ　→あなたの勝ち！(チートON)";
        resultDiv.appendChild(resultText);
        break;
      case 1:
        resultText.textContent =
          "あなた：チョキ　相手：パー　→あなたの勝ち！(チートON)";
        resultDiv.appendChild(resultText);
        break;
      case 2:
        resultText.textContent =
          "あなた：パー　相手：グー　→あなたの勝ち！(チートON)";
        resultDiv.appendChild(resultText);
        break;
    }
  }
}

function cheat() {
  if (cheatSwitch) {
    cheatSwitch = false;
  } else {
    cheatSwitch = true;
  }
}

guButton.addEventListener("click", function () {
  zyannkenn(0);
});
cyokiButton.addEventListener("click", function () {
  zyannkenn(1);
});
paButton.addEventListener("click", function () {
  zyannkenn(2);
});

cheatButton.addEventListener("change", cheat);
