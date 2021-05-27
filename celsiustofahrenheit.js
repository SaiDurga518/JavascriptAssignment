function calculatefahrenheit(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+' cel is ' + cToFahr + ' fahr.';
    console.log(message);
    document.write(message);
    document.write('<br/>');
}

function calculatecelsius(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+' fahr is ' + fToCel + 'cel.';
    console.log(message);
    document.write(message);
} 
calculatefahrenheit(60);
calculatecelsius(45);