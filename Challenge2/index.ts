function myForEach<T>(items: T[], forEachFunc: (v: T)=> void): void {
  items.reduce((a, v)=> {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(["a","b","c"], (v)=> console.log(`forEach ${v}`))





function reducer (array: number[]): number {
let result = array.reduce((acc, val) => {
   return acc + val
 })
  return result
}

console.log(reducer([1,2,3,4,5]))
