function makeid(l) {
 let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                      'u', 'v', 'w', 'x', 'y', 'z'];
	let str = "";
	while(l--){
		let value = parseInt(Math.random() * 35);
		str += array[value];
		
	}
	return str;
}

// Do not change the code below.
 const l = parseInt(prompt("Enter a number."));
 alert(makeid(l));
