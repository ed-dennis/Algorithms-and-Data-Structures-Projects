function palindrome(str) {
  const newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const revStr = newStr.split('').reverse().join('');
  if (newStr === revStr) {
    return true;
   } else {
     return false;
   }
}
