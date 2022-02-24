module.exports = function toReadable(numb) {
    let ED = {
     0: 'zero',
     1: 'one',
     2: 'two',
     3: 'three',
     4: 'four',
     5: 'five',
     6: 'six',
     7: 'seven',
     8: 'eight',
     9: 'nine',
     10: 'ten',
     11: 'eleven',
     12: 'twelve',
     13: 'thirteen',
     14: 'fourteen',
     15: 'fifteen',
     16: 'sixteen',
     17: 'seventeen',
     18: 'eighteen',
     19: 'nineteen'
   };
  
   let DE = {
     2: 'twenty',
     3: 'thirty',
     4: 'forty',
     5: 'fifty',
     6: 'sixty',
     7: 'seventy',
     8: 'eighty',
     9: 'ninety'
   }
 
   let SO = {
     1: 'one hundred',
     2: 'two hundred',
     3: 'three hundred',
     4: 'four hundred',
     5: 'five hundred',
     6: 'six hundred',
     7: 'seven hundred',
     8: 'eight hundred',
     9: 'nine hundred'
   }
   let result = '';
 
   let edinici = '';
   let desytki = '';
   let sotni = '';
 
   let number = String(numb).split('');
 
   for (let i = 0; i < number.length; i++) {
     number[i] = +number[i];
   }
 
   if(number.length == 1){
     for (let key in ED) {
       if (key==number[0])
      edinici = ED[key];
     }
     result = edinici;
   }
 
   if(number.length == 2 && number[0]>=2){
     for (let key in DE) {
       if (key==number[0])
      desytki = DE[key];
     }
     if(number[1]==0){
       edinici='';
     }
     else{
     for (let key in ED) {
       if (key==number[1])
      edinici = ED[key];
     }
    }
    result = desytki + " " + edinici;
     return result.trim();
   }
 
   if(number.length == 2 && number[0]<2){
     number =  number.join('');
     number = +number;
     for (let key in ED) {
       if (key==number)
       return  result = ED[key];
     }
   }
 
   if(number.length == 3 && number[1]>=2){
     for (let key in SO) {
       if (key==number[0])
      sotni = SO[key];
     }
     if(number[1]==0){
      desytki='';
     }
     else{
     for (let key in DE) {
       if (key==number[1])
      desytki = DE[key];
     }
    }
     if(number[2]==0){
      edinici='';
     }
     else{
     for (let key in ED) {
       if (key==number[2])
      edinici = ED[key];
     }
    }
    result = sotni + " " + desytki + " " + edinici;
     return result.trim();
   }
 
   if(number.length == 3 && number[1]<2){
     for (let key in SO) {
       if (key==number[0])
      sotni = SO[key];
     }
 
     number.splice(0, 1);
     number =  number.join('');
     number = +number;
     if(number == 0){
      edinici = "";
     }else{
     for (let key in ED) {
       if (key==number)
      edinici = ED[key];
     }
    }
     result = sotni + " " + edinici;
     return result.trim();
   }
 
   return result;
 }
