const str: string = 'Hello';

console.log(n)

const numberArray: Array<number> = [1,2,3]
const numberArray2: number[] = [1,2,3]

// функция ничего не возвращает 
function sayMyName (name: string): void {
    console.log(name)
} 

// Tupe
const contact: [string, number] = ['Hello', 1234]

// Any
let variable: any = 42
variable = 'New string'
variable = []

// Never
function throwError (message: string): never {

            throw new Error (message)

}

function infinite (): never {
    while(true) {

    }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined