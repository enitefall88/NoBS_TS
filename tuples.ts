type ThreeCoordinates = [x: number, y: number, z: number]

function add3Coordinates(coord1: ThreeCoordinates, coord2: ThreeCoordinates): ThreeCoordinates {
  return [coord1[0] + coord2[0], coord1[1] + coord2[1], coord1[2] + coord2[2]]
}

//console.log(add3Coordinates([3,4,5], [2,3,6]))

function simpleStringState(  //tracks a piece of stored space
    initial: string  // initial is saved here
): [()=> string, (v:string) => void] { // tuple of two functions in array because it`s two
  let str: string = initial
  return [
    () => str,
    (v: string) => {
    str = v
  }
 ]
}

let [str1getter, str1setter] = simpleStringState("hello") //just load in memory and pass initial string in
console.log(str1getter())  // logs hello through ()=> str
str1setter("goodbye") // changes str to goodbye
console.log(str1getter())

let [str2getter, str2setter] = simpleStringState("hello Jack")
console.log(str2getter())
str2setter("goodbye jack")
console.log(str2getter())
