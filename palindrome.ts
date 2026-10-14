// THIS WAS NOT MADE BY AI

function verifyPalindrome(word: string) {
    const lowerCaseWord = word.toLowerCase();
    const normalizedWord = word.toLowerCase().split('').reverse().join('');
    if (lowerCaseWord === normalizedWord) {
        console.log(`YES, ${word} is palindrome`)
    } else {
        console.log(`NO, ${word} is not a palindrome`)
    }
}

const first = "Ame a ema";
const second = "Banana";

verifyPalindrome(first);
verifyPalindrome(second);