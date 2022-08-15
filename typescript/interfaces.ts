interface Rect {
    // только для чтения, нельзя перезаписать
   readonly id: string 
//    необязательный параметр
   color?: string
size: {
    width: number
    height: number
}
}

const rect1: Rect = {
     id: '1234',
    //  color: 'red',
     size: {
width: 20,
height: 20
     }
}

const rect3 = {} as Rect

const rect4 = <Rect>{} 



interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id:  '12345',
    size: {
        width: 30,
        height: 30
             },
    getArea (): number {
        return this.size.width * this.size.height
    }
}
 
interface IClock {
    time: Date,
    setTime(date: Date): void 
}

class Clock implements IClock  {
time: Date = new Date()
 setTime(date: Date): void {
      this.time = date 
 }
}


interface Styles {
   [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}