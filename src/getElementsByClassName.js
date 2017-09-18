// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var arrayForClassName = [];
	var body = document.body;
	//var children = body.childNodes;
	function checkClassList(element){
		if(element.classList){
			console.log('here');
			for (var i = 0; i < element.classList.length; i++) {
				if (className === element.classList[i]) {
					return true;
				}
			}
			return false;
		}
		return false;
	}
	function checkforChildren(element){
		if(element.childNodes){
			for(var j = 0; j < element.childNodes.length; j++){
				if(checkClassList(element.childNodes[j])){
					arrayForClassName.push(element.childNodes[j]);
					checkClassList(element.childNodes[j]);
					//console.log(arrayForClassName);
				}
			}
		}	
		return arrayForClassName;
	}
console.log(arrayForClassName);

checkforChildren(body);
//checkforChildren(body);
return arrayForClassName;
	// for(var j = 0; j < children.length; i++){

	// }
  // your code here
};
