function rot13(str) {
  let cipher = { 'A':'N', 'B':'O', 'C':'P', 'D':'Q', 'E':'R', 'F':'S', 'G':'T', 'H':'U', 'I':'V', 'J':'W', 'K':'X', 'L':'Y', 'M':'Z', 'N':'A', 'O':'B', 'P':'C', 'Q':'D', 'R':'E', 'S':'F', 'T':'G', 'U':'H', 'V':'I', 'W':'J', 'X':'K', 'Y':'L', 'Z':'M', ' ': ' ', '?':'?', '!':'!', '.':'.' }
  let result = '';
  let i;
  for (i in str) {
      result += cipher[str.charAt([i])];  
      i++;    
    }
    return result; 
}
