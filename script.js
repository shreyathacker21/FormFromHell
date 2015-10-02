
   	
function validate(){
var errorMsg ="";
var degreeVal;
degree = document.getElementsByName ("degree");

   	if (!document.getElementById("name").value){
  			errorMsg += " *Please enter your full name<br/>";
  	}else{
  		errorMsg += "";
  	
  		}
  	
  	if (!document.getElementById("email").value){
  			errorMsg += " *Please enter your email address<br/>";
  	}
  	else{
  		errorMsg += "";
  	
  		}
  		
		if (!document.getElementById("uid").value){
  			errorMsg += " *Please enter your University ID<br/>";
  	}
  	else{
  		errorMsg += "";
  	
  		}
  		
  	if (!document.getElementById("addr").value){
  			errorMsg += " *Please enter your address<br/>";
  	}else{
  		errorMsg += "";
  	
  		}
  		
  	
  	if (!document.getElementById("state").value){
  			errorMsg += " *Please enter your state<br/>";
  	}else{
  		errorMsg += "";
  	
  		}
  		
		if (!document.getElementById("phone").value){
  			errorMsg += " *Please enter a phone number<br/>";
  	}
  	else{
  		errorMsg += "";
  	
  		}
  		
  	if ( errorMsg.length ){
  		
  		document.getElementById("error-msg").innerHTML = errorMsg;
  		return false;
  	}
		
			return true;
}
  	

   
 
   
   