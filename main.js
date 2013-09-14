// Project 2
// VFW 1309
// Adam Carlton


// Wait until the DOM is ready!
window.addEventListener("DOMContentLoaded", function(){
	
	//getElementsById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	// Create select field element and populate with options
	/*var saveShow = function (){
		localStorage.setItem("test1", "hello1");
		localStorage.setItem("test2", "hello2");
		localStorage.setItem("test3", "hello3");
		alert(localStorage.key);*/
		
		
		
	//Find value of selected radio buttons
	function getSelectedRadio0(){
		var	radios0 = document.forms[0].repeat;
		for(var i=0; i<radios0.length; i++){
			if(radios0[i].checked){
				recValue = radios0[i].value;
			}
		}	
	}
	function getSelectedRadio1(){
		var	radios1 = document.forms[0].repeat;
		for(var i=0; i<radios1.length; i++){
			if(radios1[i].checked){
				blockValue = radios1[i].value;
			}
		}	
	}
	function saveShow(){
			
	
		
		var id		= Math.floor(Math.random()*100000002);
		//Gather up all our form values and store in an object
		//Object properties contain array with the form label and input value.
		getSelectedRadio0();
		getSelectedRadio1();
		
		var item 			={};
			item.date 		= ["Date", $('date').value];
			item.showname	= ["Show Name", $('showname').value];
			item.r_yes		= ["Recurring ?", recValue];
			item.networks	= ["Network:", $('networks').value];
			item.important	= ["How Important?", $('important').value];
			item.block_yes	= ["Parental Block Needed?", blockValue];
			item.specialnotes	= ["Notes:", $('specialnotes').value];
		//Save data into local storage: Using Stringify to convert out object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("TV Show was Added!");
	}
	
	function getInfo(){
		//write the info from the Local Storage to the browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);	
		document.body.appendChild(makeList);
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//convert the string from local Storage value back to an object by using JSON.parsel
			var star = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in star){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = star[n][0]+" "+star[n][1];
				makeSubli.innerHTML = optSubText;
				
			}
		}
	}
	
	function clearInfo(){
		if(localStorage.length === 0){
			alert("There is no Data to Clear!!!")
		}else{
			localStorage.clear();
			alert("All TV Show and/or Movies have been Delete Forever!!!");
			window.location.reload();
			return false;
		}
		
	}
	//Variable defaults
	var tvNetworks = ["--Pick One--", "ABC", "AMC", "AETV", "the WB", "NBC", "CBS", "Netflix", "Hulu", "FOX", "Disney Channel", "Nickelodeon", "Cartoon Network", "the CW", "other"], 
	recValue,
	blockValue = "No"
	;

	
	
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getInfo);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearInfo);
	var saveInfo = $('submit');
	saveInfo.addEventListener("click", saveShow);
	
});