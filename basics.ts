let userName: string = 'Jack'
let hasLoggedIn: boolean = true
let myNumber: number = 10
let myRegex: RegExp  = /foo/

//hasLoggedIn += ' Durandin'


const names: string[] = userName.split('')
const myValues: Array<number> = [6,3]

console.log(names)

const myPerson: { last: string; cool: boolean; first: string } =  {
    first: 'Jack',
    cool: false,
    last: 'Herrington'
}

interface Person {
    last: string;
    first: string;
    cool: boolean;
}

let a = myPerson.last

const ids: Record<number,string> = {
    10: "a",
    20: "b"
}

ids[30] = "c"

const out: number[] = [1,2,3].map(el => el * 2)
console.log(out)
console.log(ids)

