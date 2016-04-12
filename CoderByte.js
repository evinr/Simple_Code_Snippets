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

function FirstFactorial(num) { 
	var temp = 1;
	for (i=num; i>0;i--) {
		temp = temp * i;
	}
	return temp;     
}

function LongestWord(sen) { 
	var re = /([^a-zA-Z0-9 ])/gi
	var result = sen.replace(re, '')
	var results = result.split(' ');
	result = '';
	Object.keys(results).forEach(function (key) {
		if (result.length < results[key].length) {
			result = results[key];
		}
	});
	return result; 
}

function SimpleSymbols(str) { 
	var temp = str.split('')
	for (i = 0; i < temp.length; i++) {
		var re = /[a-zA-Z]/gi
		if (temp[i].match(re)) {
			if (temp[i-1] !== '+' || temp[i+1] !== '+') {
				return false;
			}
		}
	}
	return true;         
}

function TimeConvert(num) { 
	var hours = Math.floor(num / 60);
	var minutes = num % 60;
	return hours + ':' + minutes;         
}

function AlphabetSoup(str) { 
	var re = /([^a-zA-Z])/gi
	return str.replace(re, '').split('').sort().join('');
}

function VowelCount(str) { 
	var re = /[aeiou]/gi
	return str.match(re) ? str.match(re).length : 0;       
}

// take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 
function WordCount(str) { 
  return str.split(' ') ? str.split(' ').length : 0; 
}


//Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 
//
function ExOh(str) { 
	var reX = /x/gi;
  	var reO = /o/gi;
  	var xCount = str.match(reX) ? str.match(reX).length : 0;
  var oCount = str.match(reO) ? str.match(reO).length : 0;
  if ( xCount  !== oCount ){
    return false
      }
  else {
	return true
  }
         
}


//take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 
function Palindrome(str) { 
	var re = /[a-zA-Z]/gi
    return str.match(re).reverse().join('') === str.match(re).join('')        
}

// take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or 
//return "Geometric" if it follows a geometric pattern. 
//If the sequence doesn't follow either pattern return -1. 
//An arithmetic sequence is one where the difference between each of the numbers is consistent, 
//where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
//Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
//Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
function ArithGeo(arr) { 
  var artList = []
  var geoList = []
  //list
  for (i=1; i < arr.length ; i++) {
 artList.push( arr[i-1] - arr[i] )
  geoList.push(arr[i] / arr[i-1] )
  }
	if ( Math.max.apply(null, artList) === Math.min.apply(null,artList)) {
        return 'Arithmetic'
        }
     else if ( Math.max.apply(null,geoList) === Math.min.apply(null,geoList)){
       return 'Geometric'
     }
  else {
    return -1
  }
           
}

//take the array of numbers stored in arr and return the string true 
//if any combination of numbers in the array can be added up to equal the largest number in the array, 
//otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
function combinations(str) {
    var fn = function(activeElement, restOfString, resultsArray, check) {
    	console.log('activeElement: ' + activeElement)
    	console.log('restOfString: ' + restOfString)
    	console.log('resultsArray: ' + resultsArray)
    	console.log('Is this the first function: ' + check)

        if (!activeElement && !restOfString) //Exit the recursive loop when finished itterating over list
            return;
        if (!restOfString) {
            resultsArray.push(activeElement); //When there are no more elements to recursivly itterate over, then push the remaining element
        } else {
        	//Both of these are needed to be able to get both dimensions of results
            fn(activeElement + restOfString[0], restOfString.slice(1), resultsArray, true);  //#2  This gets executed after the function below
            fn(activeElement, restOfString.slice(1), resultsArray);  //#1  This gets executed before the function above
        }
        return resultsArray;
    }
    return fn("", str, []);
}



function combinations(list) {
    var fn = function(activeElement, restOfArray, resultsArray) {
    	console.log('activeElement: ' + activeElement)
    	console.log('restOfArray: ' + restOfArray)
    	console.log('resultsArray: ' + resultsArray)

        if (!activeElement && restOfArray.length === 0) //Exit the recursive loop when finished itterating over list
            return;
        if (restOfArray.length === 0) {
            resultsArray.push(activeElement); //When there are no more elements to recursivly itterate over, then push the remaining element
        } else {
        	//Both of these are needed to be able to get both dimensions of results
            fn(activeElement + restOfArray[0], restOfArray.slice(1), resultsArray);  //#2  This gets executed after the function below
            fn(activeElement, restOfArray.slice(1), resultsArray);  //#1  This gets executed before the function above
        }
        return resultsArray;
    }
    return fn(0, list, []);
}  



function ArrayAdditionI(list) { 
    var fn = function(activeElement, restOfArray, resultsArray) {
        if (!activeElement && !restOfArray) //Exit the recursive loop when finished itterating over list
            return;
        if (!restOfArray) {
            resultsArray.push(activeElement); //When there are no more elements to recursivly itterate over, then push the remaining element
        } else {
            fn(activeElement + restOfArray.shift(), restOfArray.splice(0,1), resultsArray); 
            fn(activeElement, restOfArray.splice(0,1), resultsArray);
        }
        return resultsArray;
    }
    return fn(0, list, []); 
}

function ArrayAdditionI(arr) { 
  
function combinations(list) { //need a way to eliminate the single number from storing itself 
    var fn = function(activeElement, restOfArray, resultsArray) {
    	console.log('activeElement: ' + activeElement)
    	console.log('restOfArray: ' + restOfArray)
    	console.log('resultsArray: ' + resultsArray)

        if (!activeElement && restOfArray.length === 0) //Exit the recursive loop when finished itterating over list
            return;
        if (restOfArray.length === 0) {
            resultsArray.push(activeElement); //When there are no more elements to recursivly itterate over, then push the remaining element
        } else {
        	//Both of these are needed to be able to get both dimensions of results
            fn(activeElement + restOfArray[0], restOfArray.slice(1), resultsArray);  //#2  This gets executed after the function below
            fn(activeElement, restOfArray.slice(1), resultsArray);  //#1  This gets executed before the function above
        }
        return resultsArray;
    }
    return fn(0, list, []);
}  
  
  function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
  var results = combinations(arr)
  for (i=0;i<=results.length;i++){
  if (getMaxOfArray(arr) === results[i]){
    return results;
  }

  }
  return false;
         
}
   
// keep this function call here 
ArrayAdditionI(readline());                            






function LetterCountI(str) { 
	var strArray = str.split(' ');
	var letterMap = {};
  	var highest;
  	var longest;
  
 	for (i = 0; i < strArray.length; i++) {
 		var words = strArray.split('');
 		for (m = 0; m < words.length; m++) {
 			letterMap[words[m]] += 1 
 		}
 		for (m = 0; m < letterMap.length; m++) {
 			if( highest < letterMap[m] ) {
 				longest = i
 			} 
 		}
 	
 	}
 	if (longest) {
 		return strArray[longest]
 	}
 	return -1
  
}
   








                            
                            
                            
