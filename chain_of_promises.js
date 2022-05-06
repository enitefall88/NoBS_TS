//chaining of promises
let b = ()=> new Promise((res,rej) => {
  setTimeout(()=>res(3), 1000)
}).then((res)=> {
  return res * 2
}).then((res) => {
 return console.log(res * 6)
})

console.log(b())

let g = () => new Promise((res, rej) => {
  setTimeout(() => {
    res(7), 1000
  })
}).then((result) => {
  return new Promise((res, rej) => {
    setTimeout(()=>  res(result * 7))
  })
}).then(result => {
  console.log(result)
})

console.log(g())

