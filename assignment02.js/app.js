/////////// Question 01 ////////////////////
var age = prompt('Enter Your Age');
if (age < 13) {
    console.log('You Are Child');   
}
else if(age > 13 && age < 19){
    console.log('You Are Teenager'); 
}
else{
    console.log("Adult");  
}


/////////// Question 02 ////////////////////
var num = +prompt('Enter Your Number');
 if(num % 2 == 0 && num % 3 == 0){
    console.log('Divisible by both'); 
}
else{
    console.log('Not divisible by both');  
}


/////////// Question 03 ////////////////////
pass = prompt('Enter Your Password');
if (pass == 'saylani123') {
    alert('Access Granted');
}
else{
     alert('Access Denied');
}


/////////// Question 04 ////////////////////
 num1 = +prompt("Enter first number:");
 num2 = +prompt("Enter second number:");
if (num1 > num2) {
    alert("Larger number is: " + num1);
} else {
    alert("Larger number is: " + num2);
}


/////////// Question 05 ////////////////////
array = ['Red', 'Green', 'Purple', 'Blue', 'Black'];
console.log('FirstColor ' + array[0] + ' and LastColor ' + array[4]);



/////////// Question 06 ////////////////////
fruits = ['mango', 'apple', 'banana'];
fruits.push("cherry");
console.log(fruits);


/////////// Question 07 ////////////////////
let colors = ["Karachi", "lahore", "Islamabad", "Gilgit", "Multan"];
colors.shift();
alert(colors); 


/////////// Question 08 ////////////////////
number =  [10, 20, 30, 40, 50];
number.splice(2, 1)
console.log(number);


/////////// Question 09 ////////////////////
num = [100, 200, 300, 400, 500];
change = num.slice(1, 4);
 console.log(change);


/////////// Question 10 ////////////////////
marks = [
    +prompt('Enter Your Math number'),
    +prompt('Enter Your english number'),
    +prompt('Enter Your urdu number'),
];
total =  marks[0] + marks[1] + marks[2];
average = total / 3;
alert("Total marks is " + total + " average marks is " + average);  



/////////// Question 11 ////////////////////
month = +prompt("Enter Your Month");
if (month == 12 || month == 1 || month == 2) {
    alert('Winter');
}
else if(month == 3 || month == 4 || month == 5){
    alert('Spring');
}
else if(month == 6 || month == 7 || month == 8){
    alert('Summer');
}
else{
    alert('Autumn')
}



/////////// Question 12 ////////////////////
for( var i = 2; i <= 20; i+=2){
    console.log(i)
};


/////////// Question 13 ////////////////////
names  = ['Ali', 'Sara', 'Ahmed', 'Ayesha'];
for(var i = 0; i < names.length; i++){
    console.log(names);  
}



/////////// Question 14 ////////////////////
num = +prompt("Enter Your Number");
for(i = 1; i <=10; i++){
    console.log(num + ' * '+ i + ' = '+ num*i);   
}



/////////// Question 15 ////////////////////
number = [2, 4, 6, 8, 10];
sum = 0
for(i = 0; i < number.length; i++){
    sum += number[i];   
}
console.log('Sum of all number ' + sum)




/////////// Question 16 ////////////////////
let name = prompt("Enter your name:");
if (name === "Alice".toLowerCase() || name === "Bob".toLowerCase()) {
    alert("Welcome!");
} else {
    alert("You are not authorized.");
}



/////////// Question 17 ////////////////////
number = +prompt('Enter Your Number');
if (number > 0) {
    if(number % 2 == 0)
        alert('Positive Even');
    else{
       alert('Positive Odd');
    }
}
else{
    alert('Negative number')
}

  

/////////// Question 18 ////////////////////
fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
fruits.splice(2, 0, "Mango");
console.log(fruits);

