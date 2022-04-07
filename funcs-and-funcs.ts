
type MutationFunction = (v: number) => number

export function arrayMutate(
    numbers: number[],
    mutate: MutationFunction
): number[] {
return numbers.map(mutate)
}

console.log(arrayMutate([1,3,4], (el) => el * 7))

let newMutationfunc: MutationFunction = (z: number) => z + 4

type AdderFunction = (v: number) => number

function createAdder(num: number): AdderFunction { // : AdderFunction description of returned function
    return (val: number) => num + val
}
 let addOne = createAdder(1)

console.log(addOne(2)) //addOne is that function inserted
