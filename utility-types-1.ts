interface MyUser {
  name: string
  id: string
  email?: string
}

interface MyUserOptionals {
  name?: string
  id?: string
  email?: string
}

let merge = (user: MyUser, overrides: MyUserOptionals) => {
  return {
  ...user,
  overrides
  }
}

console.log(merge(
    {
      name:"Jack", id:"33", email:"epn@dsdsd"
    }, {
    email: "new@email.com"
    }
    )) // need a second argument for overrides
