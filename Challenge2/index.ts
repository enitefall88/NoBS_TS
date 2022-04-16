function myForEach<T>(items: T[], forEachFunc: (v: T)=> void): void {
  items.reduce((a, v)=> {
    forEachFunc(v)
    return undefined
  }, undefined) // undefined is an initial value
}

myForEach(["a","b","c"], (v)=> console.log(`forEach ${v}`))



function anotherFilter<T>(values: T[], filterFunc: (val: T) => boolean): T[] {
  return values.reduce((acc, currentVal) => filterFunc(currentVal) ? [...acc, currentVal] : acc, [] as T[])
}


function myFilter<T>(values: T[], filterFunc: (val: T) => boolean): T[] {
  return values.reduce((a, v) => filterFunc(v) ? [...a, v] : a, [] as T[]); //filterFunc decides if it is in or out
}// [...a,v] adding v to existing array ...a


console.log(myFilter([1,2,3,4,5], (v) => v % 2 === 0))

function reducer (array: number[]): number {
let result = array.reduce((acc, val ) => { //acc is previous value, and value is current value
   return acc + val
 }, 10) // 10 is initial value here
  return result
}

console.log(reducer([1,2,3,4,5]))
