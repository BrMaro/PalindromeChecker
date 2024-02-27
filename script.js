const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

const removeNonAlphanumerics = (str) => str.replace(/[\W_]/g, '')

function palindromeCheck(str){
    const newStr = removeNonAlphanumerics(str)
    if ([...newStr].length===1){
        resultDiv.innerText = `${str} is a palindrome`;
    } else {
        const reverseString = newStr.split('').reverse().join('')
        resultDiv.innerText = newStr === reverseString ?`${str} is a palindrome`: `${str} is not a palindrome`;      }
} 


function checkButtonValidity() {
    if (textInput.value === ''){
        alert("Please input a value")
    } else {
        palindromeCheck(textInput.value);
    }
}


checkButton.addEventListener('click',checkButtonValidity);

