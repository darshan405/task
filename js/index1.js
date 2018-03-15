function validateForm() {
	var ex1=document.getElementById("ex1").value;
	var ex2=document.getElementById("ex2").value;
	var ex3=document.getElementById("ex3").value;
	var ex4=document.getElementById("ex4").value;
	console.log(ex1)
		debugger
	if(ex1 == "" || ex2 == "" || ex3 == "" || ex4 == ""){
		alert("Name must be filled out");
	}
	else{
		document.getElementById("dispname1").innerHTML = ex1;
		document.getElementById("dispname2").innerHTML = ex2;
		document.getElementById("dispname3").innerHTML = ex3;
		document.getElementById("dispname4").innerHTML = ex4;
		document.getElementById('detail').style.display='block';
		document.getElementById('detailfrm').style.display='none';

	}
}
