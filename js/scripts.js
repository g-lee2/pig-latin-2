function pigLatinVowels(input) {
  const inputArray = input.split(" ");
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

function pigLatinOneConsonant(input) {
  const inputArray = input.split(" ");
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

function pigLatinTwoConsonants(input) {
  const inputArray = input.split(" ");
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

function pigLatinThreeConsonants(input) {
  const inputArray = input.split(" ");
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

function pigLatinQu(input) {
  const inputArray = input.split(" ");

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
  const input = document.getElementById("inputSentence").value.toLowerCase();
  document.getElementById("result").removeAttribute("class");
  document.getElementById("translation-vowels").innerText = pigLatinVowels(input);
  document.getElementById("translation-one-const").innerText = pigLatinOneConsonant(input);
  document.getElementById("translation-two-const").innerText = pigLatinTwoConsonants(input);
  document.getElementById("translation-three-const").innerText = pigLatinThreeConsonants(input);
  document.getElementById("translation-qu").innerText = pigLatinQu(input);; 
};
