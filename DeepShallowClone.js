// In JavaScript, shallow copy and deep copy refer to how objects or arrays are copied and how nested structures within them are handled.

// Shallow Copy:
// A shallow copy creates a new object or array, but it only copies the properties or elements at the first level.
//  If the original object or array contains nested objects or arrays, 
// the shallow copy will reference the same nested structures, not duplicate them.

// Problem with Shallow Cloning:

// It does not create copies of nested objects.
// Any modification in nested objects reflects in the original.

// let OrignalCopy = [[1,2,3],[4,5,6]]
//Shallow Copy(using spread operator)
// let ShallowCopy = [...OrignalCopy]
// ShallowCopy[0][0] = 99;
// console.log(OrignalCopy);
// console.log(ShallowCopy);



// let orgcopy = {a:1,b:{c:2}}
// let shaalowcopy = {...orgcopy}
// shaalowcopy.b.c = 76;
// console.log(orgcopy);
// console.log(shaalowcopy);








//.................................................................................................................................................


// Deep Copy:
// A deep copy creates a completely independent copy of the object or array, 
// including all nested objects or arrays. Changes to the original structure
//  do not affect the deep copy and vice versa.

// DeepCopy Example:
// let Deepcopy = JSON.parse(JSON.stringify(OrignalCopy));
// Deepcopy[0][0] = 99;
// console.log(OrignalCopy);
// console.log(Deepcopy);

// Shallow copy: Copies only the first level of properties. Nested structures are shared.
// Deep copy: Copies all levels of properties. Nested structures are duplicated.







