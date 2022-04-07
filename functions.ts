function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers

export const addStrings = (string1: string, string2:string = ''): string => {
  return string1 + string2
}

export const format = (title: string, param: string | number ) => {
  return title + param
}

export const printFormat = (title: string, param: string | number ): void => {
   console.log(format(title, param))
}

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)

export const introduce = ( ...names: string[])  => {
  return ` ${names.join(' ')}`
}
