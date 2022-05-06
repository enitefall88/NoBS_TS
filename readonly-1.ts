interface Cat {
  name: string,
  readonly breed: string
}

type ReadOnlyCat = Readonly<Cat>

function  makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed
  }
}

const Brody = makeCat("Brody", "siamese")


console.log(Brody["breed"])

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
  return [x, y, z]
}

console.log(makeCoordinate(4,5,6))

const reallyConst = [1,2,3] as const

//reallyConst.push(4)
console.log(reallyConst)
console.log(makeCoordinate(4,5,6), console.log(5)) /// ?

