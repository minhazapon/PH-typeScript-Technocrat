{


    //////////////basic typeScript//////////////////
      

    let countryName: string = 'banladesh, india, pakistan, afganistan' 

    console.log(countryName)

    let yourNumber: number = 1950374409 

    console.log(yourNumber)

    let aponIspythonDeveloper: boolean = false 

    console.log(aponIspythonDeveloper)

    let mangoIshere: null = null 

    console.log(mangoIshere)

    let appleIsHere: undefined = undefined 

    console.log(appleIsHere)


    //////array in typeScript ////////


    let skills: string[] = [ 'js', 'ts', 'react', 'next.js', 'redux', 'express', 'mongoose' ]

    console.log(skills)

    let someNum: number[] = [ 23, 45, 35, 3545, 355, 455, 455, 5355, 35, 355, 355 ]

    console.log(someNum)



    ///////tuple in type/////////


    let allThinks: (string | number)[] = [ 'bangladesh', 'india', 'kashmir', 'bhutan', 34, 354, 454, 345, 455] 
    
    console.log(allThinks)



    //////////////basic typeScript//////////////////



    /////object in typeScript////////////


    const User: {

        readonly name: string,
       profession: string,
       PhoneNumber: number,
       address: string

    } = {

      name: 'minhaz',
      profession: 'software development',
      PhoneNumber: 1950374409,
      address: "bangladesh"

    }


    console.log(User.name)
    console.log(User.profession)
    console.log(User.PhoneNumber)
    console.log(User.address)



    /////object in typeScript////////////


    ////function in typeScript//////////


    function The( num: number, num1: number, num3: number, num4: number  ){

         const allNumZ = num * num1 * num3 * num4 
         
         const allZ = allNumZ / 5000 

         const allW = 60 + allZ

         console.log(allW)


         if(allW > 90){

             console.log('code is good')

         } else{


             console.log('good is not good')

         }


    }

    The(20, 400, 500, 60 )



    ////arrow in typeScript///


    const z = ( n: number, m: number ): number => n + m 

    const zs = z( 30, 50 )

    console.log(zs)


    const aponRiver = {

       name: 'apon',
       number: 1213,
       add( balance: number ): string {
          
        return ` my balance is a ${this.number + balance } `

       }

    }
    console.log(aponRiver.name)
    console.log(aponRiver.number)
    console.log(aponRiver.add(45))

    

    ///array map

    const arr: number[] = [ 12, 23, 345, 34, 234 ]

    const newArr = arr.map( (a: number):number => a * a  )

    console.log(newArr)


    ////function in typeScript//////////
    


    ////spread and rest operator//////////////

    
    const nu: number[] = [23, 34, 45, 456, 345, 5456, 35 ] 

    const nu2: number[] = [ 2354, 24, 34, 34 ] 

    nu.push(...nu2) 

    console.log(nu)

    const river = {

       r1: 'podda',
       r2: 'meghna'

    }

    const river2 = {

       r3: 'navaganga',
       r4: 'gorai'

    }


    const allRiver = {

      ...river,
      ...river2

    }


    console.log(allRiver)


    ////rest operator/////


    const greetFrnd = (...friends: string[]) =>{

        friends.forEach( (friends:String) => console.log(` hello frnd >>>> ${ friends } `) )

    }
    greetFrnd( 'am ', 'jam', 'kathal', 'etc' )
 



    ////spread and rest operator//////////////
  

    ////// destructure//////////////


    const allFrutz = {

       n1: 'mango',
       n2: 'jam',
       n3: 'apple',
       n4: 'kathal'

    }


    const { n1, n2, n3, n4 } = allFrutz

    console.log(n1, n2, n3, n4)


    const allS: string[] = ['js', 'ts', 'react', 'next', 'redux' ] 

    const [ q, w, r ] = allS

    console.log(q, w, r )


    //////////////type Alias//////////////////


    type allValue = string | number | boolean | null | undefined


    const nm : allValue = 1000;
    const nm2: allValue = 2000;
    const nm3: allValue = 3000;
    const nm4: allValue = 4000;

    const allValue = nm + nm2 + nm3 + nm4 

    console.log(allValue)


    // function Bo(ns: allValue, ns1: allValue, ns3: allValue ){
    //    const allVZ = ns + ns1 + ns3
    //    console.log(allVZ)
    // }
    // Bo(20, 30, 40)


    ///////////////////union type////////////////////////////


    type Banladesh = string | number | boolean 


    const B1 = 10;
    const B2 = 20;
    const B3 = 30;
    const allB = B1 * B2 * B3
    console.log(allB)


    type Frontend = {

         skills1: 'js, ts, react, next.js, redux',

    }

    type Backend = {

         skills2: 'js, ts, node, express, mongoose, '

    }

    type FullStack = Frontend & Backend 


    const fullStack: FullStack = {


        skills1: 'js, ts, react, next.js, redux',
        skills2: 'js, ts, node, express, mongoose, '


    }

    console.log(fullStack.skills1)
    console.log(fullStack.skills2)


    //////////////////////////////ternary operator//////////////////


    const aponAge: number = 23 


    const isAudlt = aponAge > 20? 'adult': 'not adult' 

    console.log(isAudlt)



    type UserZ = {

        name: string,
        skill: string,
        address:{
          
            location: string,
            district: string,
            number: number
        }
    }


    const AllInfo: UserZ = {

        
         name: 'minhazul abedin apon',
         skill: 'software development',
         address:{

            location: 'masterPara jhenaidah',
            district: 'jheniadah',
            number: 1950374409

         }

    }

    // const Data = AllInfo.address.country ?? 'country is bangladesh' 

    // console.log(Data)


    ////////////////////////never and unknown//////////////////////////////


    const SearchName = (value: string | null ) =>{
        if(value){
            console.log('Code is run')
        }else{
            console.log('code is not running')
        }
    }
    SearchName(null)



    //////never type///////////////////////////////////


    const err = ( name: string ): never =>{
     throw new Error(name) 
    }
    err('code is never run')



}