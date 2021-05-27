function passfunction(id, newfunction)
{
    newfunction();  
}

function callingfunction() {
    console.log('Hello');
    document.write("hello you pass the javascript function as a parameter")
}

passfunction(1, callingfunction);