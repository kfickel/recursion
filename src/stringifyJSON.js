var stringifyJSON = function(obj) {
	if(obj === null) {
		return 'null';
	} else if (typeof obj === 'number') {
		return obj.toString();
	} else if (typeof obj === 'boolean') {
		if(Boolean(obj)) {
			return 'true';
		} 
		return 'false';
	} else if (typeof obj === 'string') {
		return '"' + obj + '"';
	} else if (Array.isArray(obj)) {
		var array = obj.slice(0, obj.length);
		var stringArray = [];
		function iterateArray(array) {
			if(array.length === 0) {
				return stringArray;
			} else {
				stringArray.push(stringifyJSON(array[0]));
				array = array.slice(1, array.length);
				iterateArray(array);
			}
		};
		iterateArray(array);
		if(stringArray.length === 1) {
			return '[' + stringArray + ']';
		} else {
			return '[' + stringArray.join(',') + ']';
		}
	} else if (typeof obj === 'object') {
		var object = obj;
		var stringObj = [];
		function iterateObject(object){
			for(var key in object) {
				if(typeof object[key] !== 'function' && object[key] !== undefined){
					stringObj.push(stringifyJSON(key) + ':' + stringifyJSON(object[key]));
				}
			}
			return stringObj;
		}
		iterateObject(object);
		if(stringObj.length === 1) {
			return '{' + stringObj + '}';
		} else {
			return '{' + stringObj.join(',') + '}';
		}
	}
};
