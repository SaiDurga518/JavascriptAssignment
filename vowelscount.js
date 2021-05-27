function vowelscount(str) { 


     count = str.match(/[aeiouAEIOU]/gi).length;
     return count;
}

string = "Hey This is Skillsanta JS Training";//prompt('Enter a string: ');

result = vowelscount(string);

//console.log(result);
console.log(vowelscount("Hey This is Skillsanta JS Training"));
//document.write(vowelscount("Hey This is Skillsanta JS Training",+ result+ "<br/>"));
document.write("the Count of Vowels in string is  ",+ result);
//document.write(vowelscount("Hey This is Skillsanta JS Training"));

