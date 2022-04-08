import houses from "./houses";

interface House {
  name: string,
  planets: string | string[]
}

interface HouseWithID  extends House{
  id: number
}

type FilterFunc = (house: House) => boolean

function findHouses( // 2 parameters, one is input and the other is a function
  input: string | House[],
  filter?: (house: House) => boolean //filter is optional
): HouseWithID[] { // ): HouseWithID[] is output
  let houses: House[] = typeof input === 'string' ? JSON.parse(input) : input
  console.log(houses)
  return (filter? houses.filter(filter) : houses) // if there is optional filter function
      .map((house) => ({  // why curly braces don`t work here?
            id: houses.indexOf(house),
            ...house
      }))
}
console.log( findHouses(JSON.stringify(houses)))

console.log( findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"))

//console.log(findHouses(houses, ({ name }) => name === "Corrino"));
//console.log(findHouses(houses))
