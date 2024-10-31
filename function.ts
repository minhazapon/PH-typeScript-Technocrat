
{
//////////////function in typeScript


function add( num1: number, num2: number, num3: number ):number {

      const allNumbers = num1 * num2 * num3 
      return allNumbers
}
const all = add( 20, 40, 50 )
console.log(all)


/////arrow function////////////////////


const write = (a: number, b:number, c:number):number => a + b + c 

const allW = write(34, 345, 545) 
console.log(allW)


////////////function in object///////////////


const aponPoor = {

    name: 'minhazul abedin apon',
    balance: 0,
    add(balance: number ): string {
       return `my balance is ${ this.balance + balance } `;
    }
}

console.log(aponPoor.name)
console.log(aponPoor.balance)
console.log(aponPoor.add(44))



/////// array map////////////


const array : number[] = [ 23, 34, 345, 45, 45 ] 

const newArr = array.map( (a:number):number => a * a )

console.log(newArr)
























}