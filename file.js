// console.log("Hello World!");

// document.getElementsByTagName('button')[0].addEventListener('click', function() {
//     document.getElementById('text').innerHTML = "<span>"+ (5+6) +"</span>";
// });

// const button = 1;

// function printButton() {
//     return button;
// }

// printButton();

// for (var x = 1; x <= 10; x++) {
// 	console.log(x);
// }

// let z = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         z += '*';
//     }
//     z += '\n';
// }
// console.log(z);

// let n = '';
// for (let i = 5; i > 0; i--) {
//     for (let j = 0; j < i; j++) {  
//         n += '*';
//     }
//     n += '\n';
// }
// console.log(n);


var z = "";
for (var i=1; i<=5; i++) {
	for (var k=1; k<=(5-i); k++) {
		z += " ";
	}

	for (var j=1; j<=i; j++) {
		z += "* ";
	}
	z += "\n";
}

const reverseArray = (arr) => {
	for (let i=0; i<Math.floor(arr.length/2); i++){ 
		const tempArr = arr[i];
		arr[i] = arr[arr.length - 1 - i]; 
		arr[arr.length - 1 - i] = tempArr;
	}
	return arr; 
};

reverseArray([1,2,3,4,5,6,7,8]);

console.log('Changes123');
console.log('123');

const a = () => 1+2;