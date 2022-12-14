interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let myKey: PersonKeys = 'age'
myKey = 'name'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User,  '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'email'
