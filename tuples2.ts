function currentAddressState(
    initialAddress:  string
): [()=> string, (v:string) => void] {
  let address = initialAddress
  return [
    () => address,
    (v) => {
  address = v
  }
  ]
}

let [adressGetter, adressSetter] = currentAddressState("Vancouver")
console.log(adressGetter())
console.log(adressSetter("Burnaby"))
console.log(adressGetter())
