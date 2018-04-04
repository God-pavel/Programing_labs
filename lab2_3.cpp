string solution(int number){
string str;

    while (number>999) {
      number = number - 1000;
      str = str + 'M';
      }
    if (number>899) {
      number = number - 900;
      str = str + 'C';
      str = str + 'M';
      }
    if (number>=500) {
      number = number - 500;
      str = str + 'D';
      }
    if (number>=400) {
      number = number - 400;
      str = str + 'C';
      str = str + 'D';
      }
    while (number>99) {
      number = number - 100;
      str = str + 'C';
      }
     if (number>89) {
      number = number - 90;
      str = str + 'X';
      str = str + 'C';
      }
    if (number>=50) {
      number = number - 50;
      str = str + 'L';
      }
    if (number>=40) {
      number = number - 40;
      str = str + 'X';
      str = str + 'L';
      }
     while (number>9) {
      number = number - 10;
      str = str + 'X';
      }
      if (number==9) {
      number = number - 9;
      str = str + 'I';
      str = str + 'X';
      }
      if (number>=5) {
      number = number - 5;
      str = str + 'V';
      }
      if (number==4) {
      number = number - 4;
      str = str + 'I';
      str = str + 'V';
      }
      while (number>0) {
      number = number - 1;
      str = str + 'I';
      }
  return str;
  }
