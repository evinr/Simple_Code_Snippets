function FirstReverse(str) { 
	var text = '';
	for (i=0;i<=str.length;i++){
		text += str.charAt(str.length -i);
	}
	return text;      
}

function LetterChanges(str) { 
	var text = '';
	for (i=0; i< str.length; i++) {
		var temp = '';
		temp = str.charCodeAt(i);
		
		if (temp >= 65 && temp <= 90 || temp >= 97 && temp <= 122) {
			if (temp === 122) {
				temp = 'a'
			}
				else if (temp === 90) {
				temp = 'A'
			}
			else {
				temp = str.charCodeAt(i) + 1;
			}
		}

		temp = String.fromCharCode(temp);
		if (['a', 'e', 'i', 'o', 'u'].indexOf(temp.toLowerCase()) > 0){
			temp = temp.toUpperCase();
		}
		else {
			temp = temp.toLowerCase();
		}

		text += temp
	}

	return text;       
}

function SimpleAdding(num) { 
	var temp = 0;
	for (i=num;i>0;i--) {
		temp += i;
	}
	return temp;  
}

function LetterCapitalize(str) { 
	var text = str.replace(/(\s|^)[a-z]/gi, function(v) { return v.toUpperCase(); } )
	return text;      
}
