function pigLatinVowels(input) {
  const inputArray = input.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  let resultArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] == vowels[j]) {
        let newWord = inputArray[i].toString() + "way";
        resultArray.push(newWord);
      }
    }
  }
  return resultArray.join("").toUpperCase();
};

function pigLatinConsonants(input) {
  const inputArray = input.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  let resultArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputArray[i][0] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(0) + inputArray[i][0] + "ay";
        resultArray.push(newWord);
      } else if (inputArray[i][1] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(1) + inputArray[i][1] + "ay";
        resultArray.push(newWord);
      } else if (inputArray[i][2] != vowels[j]) {
        let newWord = inputArray[i].toString().slice(2) + inputArray[i][2] + "ay";
        resultArray.push(newWord);
      }
    }
  }
  return resultArray.join("").toUpperCase();
};

function pigLatinQu(input) {
  const inputArray = input.split(" ");
  const except = ["q", "u"];
  let resultArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i][0] === except[0]) {
      let newWord = inputArray[i].toString().slice(0) + inputArray[i][0];
      resultArray.push(newWord);
    } else if (inputArray[i][1] === except[1]) {
      let newWord = inputArray[i].toString().slice(1) + inputArray[i][1] + "ay";
      resultArray.push(newWord);
    }
  }
  return resultArray.join("").toUpperCase();
};

window.addEventListener("load", function() {
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event) {
  event.preventDefault();
  const input = document.getElementById("inputSentence").value.toLowerCase();
  pigLatinVowels(input);
  pigLatinConsonants(input);
  pigLatinQu(input);
  document.getElementById("result").removeAttribute("class");
}