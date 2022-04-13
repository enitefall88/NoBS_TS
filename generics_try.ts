function identity<T, P>(arg1: T, arg2: P): [T, P]{ //<T,P> - type variables
  return ([arg1, arg2])
}

console.log(identity(1,3))

interface Identities<V, W> {
  id1: V,
  id2: W
}

function identityWithInterface<T, P>(arg1: T, arg2: P): Identities<T, P> { //<T,P> - type variables
let identities: Identities<T, P> = {
  id1: arg1,
  id2: arg2
}
return identities
}
console.log(identityWithInterface(1,3))


function add(a: unknown, b: unknown): object {
  let result: object = {
   field1: a,
    field2: b,
    field3: (a as number)
  }
 return result
}

//console.log(add(3,4))

