let age=parseInt(prompt("enter you age:"));
if(age>18 && age<44)
{
    document.write("you are elible to open this link")
    window.location("https://selfregistation.cowin.gov.in");
}
else {
  console.log("you are not eligible");
  document.write("you are not eligible")
}