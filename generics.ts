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
