function locationState (input: string) : [
  () => void,
  (v: string) => void
] {
  let address = input
  return [
    () => input,
    (v) => address = v
  ]
}

let [getter, setter] = locationState("Burnaby")
console.log(getter())


let [getter2, setter2] = locationState("Cancouver")
console.log(getter2())

setter("Gulp")
console.log(getter())
