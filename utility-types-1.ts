interface MyUser {
  name: string
  id: number | string
  email?: string
}

/*interface MyUserOptionals {
  name?: string
  id?: string
  email?: string
}*/

let jackDonovan:MyUser = {
  name:" sdssd",
  id: 333,
  }

type MyUserOptionals = Partial<MyUser>

let merge = (user: MyUser, overrides: MyUserOptionals) => {
  return {
  ...user,
  ...overrides
  }
}

console.log(merge(
    {
      name:"Jack", id:"33", email:"epn@dsdsd"
    }, {
    email: "new@email.com"// this is going to override the original email with a new one
    }
    )) // need a second argument for overrides

type RequiredMyUser = Required<MyUser> // all is required

type EmailAndName = Pick<MyUser, "name" | "email">

let harry:EmailAndName = {name: "Harrison", email: "author@blah"} //

console.log(harry)

type UserWithoutId =  Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v; // other??
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs. Baz",
    },
  ])
);

