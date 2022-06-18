// document.write(`<h1>question 1</h1> </br>`)

// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var fullName = document.write(`welcome ${firstName} ${lastName} </br>`)

// document.write(`<h1>question 2</h1> </br>`)
// var inp = prompt("enter your favorite phone");
// document.write(`my favorite phone is:  ${inp} </br> length of string is ${inp.length} </br>`)

// document.write(`<h1>question 3</h1> </br>`)
// var letter1 = "Pakistan";
// document.write(`index number of n is ${letter1.indexOf("n")} in ${letter1} </br>`)

// document.write(`<h1>question 4</h1> </br>`)
// var letter2 = "Hello world";
// document.write(`index number of l is ${letter2.lastIndexOf("l")} in ${letter2} </br>`)

// document.write(`<h1>question 5</h1> </br>`)
// var letter3 = "Pakistan";
// document.write(`index number of i is ${letter3.indexOf("i")} in ${letter3} </br>`)

// document.write(`<h1>question 6</h1> </br>`)
// var firstName1 = prompt("enter first name ");
// var lastName1 = prompt("enter last name");
// var fullName = document.write(`welcome ${firstName1.concat(lastName1)} </br>`)

// document.write(`<h1>question 7</h1> </br>`)
// var city = "hyderabad";
// document.write(`City: ${city} </br> After replacement: islam${city.slice(5)} </br>`)

// document.write(`<h1>question 8</h1> </br>`)
// var message = "Ali and Sami are best friends They play cricket and football together.";
// document.write(`Message: ${message}</br> Afetr replacement: ${message.replace(/and/g,"&")}`)

// document.write(`<h1>question 9</h1> </br>`)
// var str = "472";
// var num = Number(str);
// document.write(`Value: ${str} </br>  Type:${typeof(str)} </br> Value: ${num} </br> Type: ${typeof(num)} </br> `)

// document.write(`<h1>question 10</h1> </br>`)
// var website = prompt("enter a url like www.example.com");
// document.write(`url: ${website} </br> domain: ${website.slice(4)} </br>`)

// document.write(`<h1>question 11</h1> </br>`)
// var cap = prompt("enter any word");
// document.write(`input: ${cap} </br> capital: ${cap.toUpperCase()} </br>`)

// document.write(`<h1>question 12</h1> </br>`)
// var low = prompt("enter any word");
// document.write(`input: ${low} </br> lowercase: ${low.toLowerCase()} </br>`)

// document.write(`<h1>question 13</h1> </br>`)
// var cap1 = prompt("enter any word");
// document.write(`input: ${cap1} </br> title case: ${cap1.charAt(0).toUpperCase().concat(cap1.slice(1))} </br>`)

// document.write(`<h1>question 14</h1> </br>`)
// var num1 = 33.56;
// document.write(`num: ${num1} </br> str: ${num1.toString()} </br>`)

// document.write(`<h1>question 15</h1> </br>`)
// var a = "3";
// var b = "3";
// var x = a + b;
// document.write(`a is 3 </br> b is 3 </br> a + b = ${x} </br>`)

// document.write(`<h1>question 16</h1> </br>`)
// var d = "3";
// var e = "3";
// var y = d - e;
// document.write(`a is 3 </br> b is 3 </br> a - b = ${y} </br>`)

document.write(`<h1>question 16</h1> </br>`)
var name2 = prompt("enter your name");

for(i=0; i < name2.length; i++){
    var a1 = name2.charCodeAt(i);
    if(a1 == 33 || a1 == 44 || a1 == 46 || a1 == 64){
        alert("enter a valid username")
        break
    }
    else{
        document.write(`${name2} </br>`)
    }
}