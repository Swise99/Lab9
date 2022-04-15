var numberValue = document.getElementById("header").className;
switch(numberValue) {
    case '1':
        document.write('<img src="/images/moose.png\"')
        break;
    case '2':
        document.write('<img src="/images/sunglasses.jpg\"')
        break;
    case '3':
        document.write('<img src="/images/hydrogen.png\"')
        break;
}
document.getElementById("header").innerHTML="This is JS code"+document.getElementById("header").className;