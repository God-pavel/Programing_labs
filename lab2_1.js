function solution(roman){
  let arr = [];
  for (let i=0;i<roman.length;i++) {
    if (roman[i] == 'M') {
      arr[i] = 1000;
    }
     if (roman[i] == 'D') {
      arr[i] = 500;
    }
     if (roman[i] == 'C') {
      arr[i] = 100;
    }
     if (roman[i] == 'L') {
      arr[i] = 50;
    }
     if (roman[i] == 'X') {
      arr[i] = 10;
    }
     if (roman[i] == 'V') {
      arr[i] = 5;
    }
     if (roman[i] == 'I') {
      arr[i] = 1;
    }
  }
  console.log(arr);
  let result = 0;
  for (let i = 0; i<arr.length; i++) {
    if (i == arr.length-1) {
      result+=arr[arr.length-1];
      break
    }
    if (arr[i]>=arr[i+1]) {
      result+=arr[i];
    }
    else {
      result+=arr[i+1]-arr[i];
      i++
    }
  }
  console.log(result);
  return result;  
}
