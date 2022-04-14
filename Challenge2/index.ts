function myForEach<T>(items: T[], forEachFunc: (v: T)=> void): void {
  items.reduce((a, v)=> {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(["a","b","c"], (v)=> console.log(`forEach ${v}`))





let reducer = (array: number[]) => {
array.reduce((acc, val) => {
   return acc + val
 })
}

console.log(reducer([1,2,3,4,5]))
