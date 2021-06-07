	// Failed attempt to modify font size using JS
	// DOES NOT WORK

	function changeFontSize(selectSize){

		if (selectSize	== "small"){
			$('#container').css('font-size', '10px');
		}
		else if(selectSize == "regular"){
			content.style.font-size = 100%;
		} 
		else if (selectSize == "large"){
			content.style.font-size = 150%;
		}
	}
	
