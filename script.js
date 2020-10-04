// Assignment 1: Callback Function
// Complete the function below to show a delayed result in the console.
 
function delayedResult(n1, n2, delayTime, callback){
	window.setTimeout(function() {
		callback(n1+n2)
	}
	, delayTime)
}

// delayedResult(4, 5, 3000, function(result){
// console.log(result);
// }); ​// 9 (4+5) will be shown in the console after 3 seconds delayedResult(-5, 10, 2000, function(result){
// window.alert(result);
// }); ​// 5 (-5+10) will be shown in an alert dialog after 2 seconds


// Assignment 2: Callback Function and Advanced HTML DOM
// Complete the functions below to make AJAX call to a URL by GET method,
// and show the response data in the page. You may render UI with any style.

function ajax(src, callback) {
	const xhr = new XMLHttpRequest;
	xhr.onload = function(){
		if(this.status === 200){
			callback(JSON.parse(xhr.responseText));
		}
	};
	xhr.open('GET', src, true);
	xhr.send();
}


function render(data) {
	for( let i = 0; i < data.length; i++ ){
		addNode( "div","", "productItems","#productSection");
		addNode( "h2", data[i].name ,"",".productItems", i);
		addNode( "div", "$ "+data[i].price ,"productPrice",".productItems", i);
		addNode( "div", data[i].description ,"productDescription",".productItems", i);
	 }
	// document.createElement() and appendChild() are preferred. No innerHTML or 
	// something alike 
	function addNode(type, innerText, classname, appendTo, index) {
		let node = document.createElement(type);
		if (innerText)
			node.innerText=innerText;     
		if (classname)
			node.className=classname;
		if(index>=0)
			document.querySelectorAll(appendTo)[index].appendChild(node);  //parent with class
		else
			document.querySelector(appendTo).appendChild(node);            //parent with id
	}
}


ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
	render(response);
}); 

// you should get product information in JSON format and render data in the page