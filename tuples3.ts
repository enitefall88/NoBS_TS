function setFavouriteTeam (team: string) :
    [() => void,
    (v:string) => void]
    {
      let selectedTeam = team
      return [()=> selectedTeam,
          (v) => selectedTeam = v]
    }

let [getter1, setter1] = setFavouriteTeam("Maple Leafs")

console.log(getter1())
setter1("Cal Flames")
console.log(getter1())

