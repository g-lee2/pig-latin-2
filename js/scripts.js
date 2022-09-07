function pigLatinVowels() {
  const inputArray = text.split(" ");
  const vowelWord = []; 
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(0).includes("a")) {
      let newWord = inputArray[i].toString().concat("way");
      vowelWord.push(newWord);
    }
  } 
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(0).includes("e")) {
      let newWord = inputArray[i].toString().concat("way");
      vowelWord.push(newWord);
    } 
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(0).includes("i")) {
      let newWord = inputArray[i].toString().concat("way");
      vowelWord.push(newWord);
    } 
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(0).includes("o")) {
      let newWord = inputArray[i].toString().concat("way");
      vowelWord.push(newWord);
    } 
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(0).includes("u")) {
      let newWord = inputArray[i].toString().concat("way");
      vowelWord.push(newWord);
    } 
  }
  return vowelWord;
}

