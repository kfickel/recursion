var getElementsByClassName = function(className
) {
	var arrayForClassName = [];
	var body = document.body;

	function checkClassListAndChildren(element){
		if(element.classList){
			for (var i = 0; i < element.classList.length; i++) {
				if (className === element.classList[i]) {
					 arrayForClassName.push(element);
				}
			}
			if (element.childNodes) {
				for(var j = 0; j < element.childNodes.length; j++) {
						checkClassListAndChildren(element.childNodes[j]);
				}
			}
		}
	}
checkClassListAndChildren(body);

return arrayForClassName;
};
