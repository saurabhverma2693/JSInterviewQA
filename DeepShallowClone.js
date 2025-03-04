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

// DeepCopy
// let Deepcopy = JSON.parse(JSON.stringify(OrignalCopy));
// Deepcopy[0][0] = 99;
// console.log(OrignalCopy);
// console.log(Deepcopy);

