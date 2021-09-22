console.log("Fizz Buzz DOJO");


const fizzBuzz = (num) => {
	/** ECRIVEZ VOTRE CODE ICI */
	/*
	consignes :
	"fizz" in the case where the number passed as a parameter is a multiple of 3.
	"buzz" in the case where the number passed in parameter is a multiple of 5
	"fizzbuzz" in the case where the past number is a multiple of both 3 and 5
	The number in the case where the latter is neither a multiple of 3 nor a multiple of 5
	
*/
	num = parseInt(num); // change/vérifie le num en Number
	if (num % 3 === 0 && num % 5 === 0) {
		console.log("fizzBuzz");
	} else if (num % 3 === 0) {
		console.log("fizz");
	}
	else if (num % 5 === 0) {
		console.log("buzz");
	}
	else{
		console.log(num);
	}


}


fizzBuzz(3);//Doit etre fizz
fizzBuzz(6);//Doit etre fizz
fizzBuzz(18);//Doit etre fizz
fizzBuzz(5);//Doit etre buzz
fizzBuzz(10);//Doit etre buzz
fizzBuzz(25);//Doit etre buzz
fizzBuzz(15);//Doit etre fizzbuzz
fizzBuzz(30);//Doit etre fizzbuzz
fizzBuzz(150);//Doit etre fizzbuzz
fizzBuzz(2);//Doit etre 2
fizzBuzz(8);//Doit etre 8
fizzBuzz(52);//Doit etre 52
fizzBuzz("52");//Doit etre 52 en number