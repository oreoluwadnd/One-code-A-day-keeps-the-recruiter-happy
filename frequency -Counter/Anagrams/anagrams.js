//check anagram of two strings

function anagram(str1, str2) {
  if (!str1.length === str2.length) {
    return false;
  }

  let string1 = {};
  let string2 = {};

  for (let value of str1) {
    string1[value] = (string1[value] || 0) + 1;
  }
  for (let value of str2) {
    string2[value] = (string2[value] || 0) + 1;
  }
  console.log(string1);
  for (let val in string1) {
    if (!(val in string2)) {
      return false;
    }
    if (string1[val] !== string2[val]) {
      return false;
    }
  }

  return true;
}
anagram("oreoluwa", "oreoluwa");
