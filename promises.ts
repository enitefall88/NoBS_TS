let fixedPromise = new Promise(function (res, rej) {
    return setTimeout(()=> {
     res("Promise in callback")
    }, 1000)
}) // here the result fulfilled/resolver, what is the value?

fixedPromise.then(
    function (callback) {
      console.log(callback)
    },
    (err) => {
      console.log(err)
    }
)

let testPromise = new Promise((res,rej) => {
  setTimeout(() => {
    res("done!")
  }, 2000)
}).finally(() => console.log("from finally"))
    .then(
    function (result) {
      console.log(result)
    },
    function (error) {
        console.log(error)
    }
)

let withError = new Promise((res, rej) => {
  rej(new Error("baboom"))
}).catch((err) => console.log(err)) //error does not stop async code from running

let withErrorAndThen = new Promise((res, rej) => {
  rej(new Error("baboomWith Then"))
}).then(null, (err) => console.log(err)) // same as above

/*let loadScript = (src: string) => {
  return new Promise((res, rej) => {
  let script = document.createElement('script')
  script.src = src  // sets up source attribute like <script src="myscripts.js"></script> //closure?
    script.onload = () => res(script);
    script.onerror = () => rej(new Error(`Script load error for ${src}`));
  })
}

let doLoad = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js") // only after calling we can use then otherwise the status of promise object is unsettled

doLoad.then((result) => console.log(result))
    .catch(err => {console.log("error")})*/

function timerWithPromise( num : number) {
  setTimeout(() => {

    return new Promise((res,rej) => {
      res(`success + ${num}`)
    })
  }, num)
}

let startTimer = timerWithPromise(3000)

//startTimer.then() ?

function promiseTest() {
  return new Promise((res,rej) => {
    res("from promiseTest")
  })
}

let runPromise = promiseTest()
runPromise.then((result) => {
  console.log(result)
  }).catch(err => {
    console.log(err)
})

/*function delay(ms: number) {
  return setTimeout(()=>  {
    return new Promise((res, rej)=> {
    res("resolved")
    })
  }, ms)
}

delay(3000).then(() => console.log('runs after 3 seconds'));*/

function delay(ms: number) {
 return new Promise((res,rej) => {setTimeout(res,ms), // if resolve and reject
         (rej:any) => console.log(rej)},

     )
}

delay(3000).then(() => console.log('runs after 3 seconds'));
