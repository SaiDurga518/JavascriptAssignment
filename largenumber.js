function large_number(x,y,z)
{
    //let a;//parseInt(prompt("enter x value"));
    //let b;//parseInt(prompt("enter y value"));
    //let c;//parseInt(prompt("enter z value"));
    if(x>y && x>z){
        document.write(+ x)
        return(" first value is grater");
    }
    else if(y>z){
        document.write(+ y)
        return("  second value is grater");
    }
    else{
        document.write(+ z)
        return(" last value is grater");
    }
}
//console.log(large_number(12,43,56))
document.write(large_number(1230,304,45));
document.write('<br />');
document.write(large_number(120,34,45));
document.write('<br />');
document.write(large_number(0,3,1));
