function locationState (input: string) : [
  () => void,
  (v: string) => void
] {
  let address = input
  return [
    () => address, // return address not input
    (v) => {address = v}
  ]
}

let [getter, setter] = locationState("Burnaby")
console.log(getter())
setter("Van")
console.log(getter())

let [getter2, setter2] = locationState("Cancouver")
