function vowelscount(str) { 


     count = str.match(/[aeiouAEIOU]/gi).length;
     return count;
}

string = prompt('Enter a string: ');

result = vowelscount(string);

//console.log(result);

document.write("the Count of Vowels in string is  ",+ result);
