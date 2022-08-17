const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5 ]
const arrayOfStrings: Array<string> = ['Hello']


function reverse<T>(array:  T[]): T[] {
return array.reverse( )
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

function mergeObject <T extends object, R extends object > (a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObject({name: 'Vitalii'}, {age: 32})


interface ILength {
     length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string}{
    return {
        value,
        count: `В этом обьекте ${value.length } символов`
    }
}

// console.log(withCount('Hello'))
// console.log(withCount(['Hello', 'World']))
// console.log(withCount(20))
// console.log(withCount({length: 20}))

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    age: 32,
    name: 'Vitalii'
} 
console.log(getObjectValue(person, 'age'))
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'job'))

class Collection<T extends number | string | boolean> {
    

    constructor (private _items: T[] = [ ]){}

    add(item: T){
        this._items.push(item)
    }

    remove(item: T){
        this._items = this._items.filter(e =>  e !== item)
    }

    get items() :T[] {
         return this.items
    }
}

const strings = new Collection (['i', 'am'])
strings.add('!')
strings.remove('am') 


const numbers = new Collection ([1, 2, 3])
numbers.add(4)
numbers .remove(3) 
