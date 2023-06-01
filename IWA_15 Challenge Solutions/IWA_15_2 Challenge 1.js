// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

/**
 * here we create an object with the properties taken from 'lists' (line 4) with these properties:
 * first: [15,11,13,7,5],
 * second: [2, 6, 8, 4, 14, 12, 10],
 * third: [9, 3, 1]
 * This allows us to easily call the arrays
 */
const objArray = Object.fromEntries(data.lists);



const result = []
/** 
*Here we evaluate if the last no. in the array is the biggest if not evaluate the next array.
*we will next need to push the value that is evaluated 
*we also need to make sure that the values aren't constantly reevaluated :. if a value is evaluated it should be removed.
*/
const extractBiggest = () => {

    // local scope as return will not change the original values set in line 3
    const shorthand = {
            firstEnd: (objArray.first[objArray.first.length -1]),
            secondEnd:(objArray.second[objArray.second.length -1]),
            thirdEnd: (objArray.third[objArray.third.length -1])
    }

    //Here we run our evaluations checking to see which end number is the biggest  
	if (shorthand.firstEnd > shorthand.secondEnd && shorthand.firstEnd > shorthand.thirdEnd) {
        // it is important that we return the last value in the array and then remove it from the array so it won't be reevaluated
		return shorthand.firstEnd & objArray.first.pop()
	} else if (shorthand.secondEnd > shorthand.thirdEnd){
        return shorthand.secondEnd & objArray.second.pop()
    } else {
        return shorthand.thirdEnd & objArray.third.pop()
    }
}

// // Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)