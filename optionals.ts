function printIngridient(quantity: string, ingridient: string, extra?: string ) {
  console.log(`${quantity} ${ingridient} ${extra ? `${extra}` : ""} `)
}

printIngridient("1cup", "flour")
printIngridient("1cup", "flour", "something more")

interface User {
  id: string,
  info?: {
    email?: string
  }
}

function getEmail(user: User): string { // :string is an output
  if(user.info) {
    return user.info.email!
  }
  return ""
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "" // if user? exist and info and email then return otherwise if it is null or undefined  return ""
}

let alex: User = {
  id: "44",
  // info: {
  //   email:"dsdasdwsd"
  // }
}

function addWithCallback(x: number, y: number, callback?: ()=> void) { //callback is optional and returns void

}

console.log(getEmailEasy(alex))

