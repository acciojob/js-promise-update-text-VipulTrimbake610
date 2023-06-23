//your JS code here. If required.
let prom = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve("Hello, world!");
	},1000)
});

prom.then(function(){
	const span = document.getElementsByTagName("span")[0];
	span.innerText = "Hello, world!";
})