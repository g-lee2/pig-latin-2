function pigLatinVowels(inputArray) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] == vowels[j]) {
        let newWord = inputArray[i].toString() + "way";
        return newWord.toUpperCase();
      }
    }
  }
};

function pigLatinOneConsonant(inputArray) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(1) + inputArray[i][0] + "ay";
        return newWord.toUpperCase();
      } 
    }
  }
};

function pigLatinTwoConsonants(inputArray) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] != vowels[j] && inputArray[i][1] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(2) + inputArray[i][0] + inputArray[i][1] + "ay";
        return newWord.toUpperCase();
      } 
    }
  }
};

function pigLatinThreeConsonants(inputArray) {
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] != vowels[j] && inputArray[i][1] != vowels[j] && inputArray[i][2] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(3) + inputArray[i][0] + inputArray[i][1] + inputArray[i][2] + "ay";
        return newWord.toUpperCase();
      } 
    }
  }
};

function pigLatinQu(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i][0] == 'q' && inputArray[i][1] == 'u') {
      let newWord = inputArray[i].toString().slice(2) + inputArray[i][0] + inputArray[i][1] + "ay";
      return newWord.toUpperCase();
    } 
  }
};

window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event) {
  event.preventDefault();
  const input = document.getElementById("inputWord").value.toLowerCase();
  const inputArray = input.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] == vowels[j]) {
        document.getElementById("translation").innerText = pigLatinVowels(inputArray);
      } else if (inputArray[i][0] != vowels[j]) {
        document.getElementById("translation").innerText = pigLatinOneConsonant(inputArray);
      } else if (inputArray[i][0] != vowels[j] && inputArray[i][1] != vowels[j]) {
        document.getElementById("translation").innerText = pigLatinTwoConsonants(inputArray);
      } else if (inputArray[i][0] != vowels[j] && inputArray[i][1] != vowels[j] && inputArray[i][2] != vowels[j]) {
        document.getElementById("translation").innerText = pigLatinThreeConsonants(inputArray);
      }
    }
  };
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i][0] == 'q' && inputArray[i][1] == 'u') {
      document.getElementById("translation").innerText = pigLatinQu(inputArray);
    } 
  };
  document.getElementById("result").removeAttribute("class");
};
