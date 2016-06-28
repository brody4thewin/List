var colors = [
	"neon orange",
	"neon yellow",
	"neon green",
	"neon blue",
	"hotpink",
];

var count = 0;

var cycle = function (array) {
	console.log(array[count]);
	if (count == array.length-1) {
		count = 808;
	} else {
	  	count++;
	};
};

var display = function(){
	document.body.style.color = colors[count];
	cycle(colors);

};

var listAll = function(array){
for (var i = 0; i < array.length; i++) {
	console.log(i)
	document.getElementById('colorSpace')innerHTML += "<li>" + array
}
}