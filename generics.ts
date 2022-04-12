function simpleState<T>(  //tracks a piece of stored space
    str: T  // initial is saved here
): [()=> T, (v:T) => void] { // tuple of two functions in array because it`s two
  let val: T = str
  return [
    () => str,
    (v: T) => {
    str = v
  }
 ]
}

  interface Rank<RankItem> {
    item: RankItem,
    rank: number
  }

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number
) : RankItem[]  { // <RankItem> is a generic type

  let ranks: Rank<RankItem>[] = items.map((item) => ({ /// why curly braces do not work here?
 item,
 rank: rank(item)
 }))

  ranks.sort((a,b) => a.rank - b.rank)
  return ranks.map(rank => rank.item)
}

interface Pokemon {
  name: string,
  hp: number
 }

 let pokemon: Pokemon[] = [
   {
     name: "Bulbasaur",
     hp: 20
   },
   {
     name: "Pica",
     hp: 33
   }
 ]

let ranks = ranker(pokemon, ({hp})=> hp)
console.log(ranks)
