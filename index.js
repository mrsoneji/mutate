function mutate(arrayOrObject, schema, result) {
	if(typeof(schema) === 'object') {
		return arrayOrObject.map((el) => {
			let returnValue = {}
			for (var key in schema) {
			    // if (typeof returnValue[key] === 'undefined') return 
	    		returnValue[key] = inner_loop(el, schema[key])
			}
			return returnValue
		})
	}
}

function inner_loop (element, path) {
	let prevArr = []

    return path.split('.').reduce((el, key, count, arr) => { 
		if (el === null) return null
		if ( prevArr.length > 0 ) {
			let returnValue = mapArray(prevArr, key)
			returnValue = (returnValue !== undefined) ? returnValue : []
			prevArr = []
			return returnValue
		}
		else if (Array.isArray(el[key])) {
			prevArr = el[key]
			return el[key]
		} 
		else { return el[key] }
    }, element)
}

function mapArray(arr, key) {
	return arr.map((el) => {
		return el[key]
	})
}

module.exports = mutate
