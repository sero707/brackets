module.exports = function check(str, bracketsConfig) {
  let num = 0,
      res; 
  str = str.split('');
  str.forEach(element => {
    if(element === "(" || element === "[" || element === "{"){
      num++;
    } else if (element === ")" || element === "]" || element === "}"){
      num --;
    }
    if (num < 0){
      num = false;
    }
  });
  return res =  num === 0 ? true : false
}
