// type your javascript code below

function computeBMI()
{
	//Obtain user inputs
	var height=Number(document.getElementById("height").value );
	var weight=Number(document.getElementById("weight").value);
	
	// Convert to meter
	//height/= 100;

	//Perform calculation
	//var BMI=weight/Math.pow(height,2);
	var BMI=(height*2.4710538146717)+(weight*0.02471);

	//Display result of calculation
	//document.getElementById("out").innerText=Math.round(BMI*100)/100;
	document.getElementById("out").innerText=BMI;

	var output =  Math.round(BMI*100)/100
	
	/* if (output<18.5)
	document.getElementById("coment").innerText = "You are Under weight";
	else   if (output>=18.5 && output<=25)
	document.getElementById("coment").innerText = "You are Healthy weight";
	else   if (output>=25 && output<=30)
	document.getElementById("coment").innerText = "You are Overweight";
	else   if (output>30)
	document.getElementById("coment").innerText = "You are Obese";
	else
	alert("Please Fill in everything correctly")
  
   */
}




		   




//Type your javascrit code above 