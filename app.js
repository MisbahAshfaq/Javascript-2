// -----------------------------------------(Chapter 9-11 : User input and conditional statement)----------------------------------------------------------------
// Q1
var cityName = prompt("Enter Your City name");

if(cityName == "Karachi")
{
    alert("Welcome to City of Lights");
}

// Q2
     var gender = prompt("Enter Your Gender");
     if (gender == "Male")
     {
        alert("Good Morning, Sir")
     }

     else if (gender == "Female")
     {
        alert("Good Morning, Ma'am")
     }

    // Q3
        var trafficLight = prompt("Enter Road Traffic Light Color");
        if (trafficLight == "red")
        {
            alert("Must Stop")
        }

         else if (trafficLight == "yellow")
        {
            alert("Ready to Move")
        }

        else if (trafficLight == "green")
        {
            alert("Move Now")
        }

    // Q4
     var fuel = prompt("Enter a remaining fuel in car in litres");
     if (fuel <= "0.25litres")
     {
        alert("Please, refill the fuel in the car")
     }
    else {
        alert("This is not a correct value")
    }

    // Q5
    // a.
    var a = 4;
    if (++a===5){
    alert("given condition for variable a is true"); 
   }

    // output:
    // displayed

    // b.
    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
   }
   
    //   output:
    //not displayed

// c.
    var c = 12; 
    if (c++===13)
    { 
        alert("condition 1 is true");
  } 

      //   output:
    // //not displayed

    if (c===13)
    {
     alert("condition 2 is true");
  }
    
//      output:
//     displayed

    if (++c<14)
    {
     alert("condition 3 is true");
  } 

         // output:
    // //not displayed

   if(c===14)
    {
     alert("condition 4 is true");
     }
 
    //   output:
//      displayed

// d.
 var materialCost = 20000;  
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
   if (totalCost === laborCost + materialCost) 
    { 
        alert("The cost equals"); 
    } 

    // output:
    // displayed

// e. 
if (true) 
    {
         alert("True"); 
    }  
         if (false) 
            { 
                alert("False"); 
            }


    //  output:
    //  displayed       

// f. 
   if("car" < "cat")
     {
    alert("car is smaller than cat");
   }

//    output:
//    displayed

//  Q6

var subject1 = +prompt("Enter marks for Subject 1:");
    var subject2 = +prompt("Enter marks for Subject 2:");
    var subject3 = +prompt("Enter marks for Subject 3:");
    var totalMarks = 300; 

    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade;
    var remarks = "";

    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent!";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
    }  else {
      grade = "Fail";
      remarks = "Sorry";
    }
    document.write("<h2>Marks Sheet</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br>");


// Q7
  var secretNum = 6;
  var userNumInput = +prompt("Guess a Number ,Ranging from 1-10");

  if (userNumInput === secretNum)
  {
    alert("Bingo! Correct answer")
  }

  else if(userNum === ++secretNum)
  {
    alert("Close enough to the correct answer")
  }

// Q8
   var num = + prompt("Please enter a number");
   var divisible = num % 3;
      if(divisible === 0 ) 
        {
      alert("Your Number is divisible by 3")
}
else{
    alert("Your Number is not Divisible by 3")
}

// Q9
var number = +prompt("Enter a number");
var even = number % 2;

if (even === 0)
{
    alert("Your number is even")
}

else{
    alert("Your number is odd")
}

// Q10
var temp = +prompt("Enter weather Temperature");
if (temp >= 40)
    {
    alert("It is too Hot outside.")
}        
else if (temp >= 30 && temp <= 40)
    {
    alert("The Weather today is Normal.")
}
else if (temp >= 20 && temp <= 30)
    {
    alert("Today’s Weather is cool.")
}
else if (temp >= 10 && temp <= 20)
    {
    alert("OMG! Today’s weather is so Cool.")
}

// Q11
  var num1 = +prompt("Enter the first number:");
    var num2 = +prompt("Enter the second number:");
    var operation = prompt("Enter the operation (+, -, *, /, %):");

    var result;

    if (operation === "+") {
      result = num1 + num2;
    } 
    else if (operation === "-") {
      result = num1 - num2;
    } 
    else if (operation === "*") {
      result = num1 * num2;
    } 
    else if (operation === "/") {
      if(num2 === 0){
        alert("Error! Division by zero is not allowed.");
      } else {
        result = num1 / num2;
      }
    } 
    else if (operation === "%") {
      if(num2 === 0){
        alert("Error! Modulus by zero is not allowed.");
      } else {
        result = num1 % num2;
      }
    } 
    else {
      alert("Invalid operation! Please enter +, -, *, / or %.");
    }
    if(result !== undefined){
      alert("Result: " + result);
    }
// ---------------------------------------------(Chapter: 12-13)-------------------------------------------------

// Q2
var num1 = +prompt("Enter the first integer:");
    var num2 = +prompt("Enter the second integer:");

    if (num1 > num2) {
      alert(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
      alert(num2 + " is larger than " + num1);
    } else {
      alert("Both numbers are equal: " + num1 + " = " + num2);
    }

// Q3
 var number = Number(prompt("Enter a number:"));

    if(number > 0){
      alert(number + " is a Positive number ");
    } else if(number < 0){
      alert(number + " is a Negative number ");
    } else {
      alert("The number is Zero ");
    }

// Q4
 var vow = prompt("Enter a vowels:")

    if(vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u"){
      alert(true);  
    } else {
      alert(false); 
    }

//  Q5

var correctPassword = "Pakistan274";
    var userPassword = prompt("Enter your password:");
    if(userPassword === ""){
      alert("Please enter your password");
    } 
    else if(userPassword === correctPassword){
      alert("Correct! The password you entered matches the original password");
    } 
    else {
      alert("Incorrect password");
    }

//   Q6
var hour = +prompt("Enter the current hour");
var greeting;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);
