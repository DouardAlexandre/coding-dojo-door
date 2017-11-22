


var i = 0;
var text = 'Open the door & Close the door';

var phrase = document.getElementById('sentence')

function write() {
		 phrase.innerHTML += text[i];
		 if(i >=text.length-1) {
		 	clearInterval(delay);
		 }
		 i++;
}
console.log(text.length);
var delay = setInterval(
			write

	, 100);