
function checkPass()
{
	var  pass= document.getElementById('pass').value;
	//alert(pass);
	var len=pass.length;
	//alert(len);
	
	//check the number of figures in the password if they exist, increment the variable 'num' by 1
		var num=0;
		for(i=0; i<len; i++)
		{
			for(j=0; j<=9; j++)
			{
				if(pass.charAt(i)==j) num++;
			}
			
		}
		
	// check conditions of password strength and is there empty input value
	(len<1)? document.getElementById('res').innerHTML='<span style="color:red;">HASŁO JEST PUSTE</span>':
	(len>=7 && num)? document.getElementById('res').innerHTML='<span style="color:green;">HASŁO JEST DOBRE</span>':
	 (len>=4 && len<=6 && num)? document.getElementById('res').innerHTML='<span style="color:blue;">HASŁO JEST ŚREDNIE</span>':
	document.getElementById('res').innerHTML='<span style="color:yellow;">HASŁO JEST SŁABE</span>';
	
		
}



