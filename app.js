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
   
      output:
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