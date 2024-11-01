{

    //////////////////basci typeScript//////////////////////////

    
    const countryName: string = 'bangladesh' 
    console.log(countryName)

    const number: number = 1950374409 
    console.log(number)

    const aponIsTyepScriptKing: boolean = true 
    console.log(aponIsTyepScriptKing)

    const a: null = null 
    console.log(a) 

    const b: undefined = undefined
    console.log(b)



    ////array in typeScript//////////


    let apon: string[] = ['apon skills is >>>>>', 'js', 'ts', 'react', 'next.js', 'redux'] 

    console.log(apon)

    let numberZ: number[] = [ 12, 23, 234, 45, 35, 354, 34 ] 

    console.log(numberZ)


    //////tuple in typeScript//////////////////


    let riverNames: ( string | number )[] = [ 'river age is >>>', 60, 'podda age is >>>>>' , 500, 'jamuna age is >>>>', 1000 ] 

    console.log(riverNames[1]) 
    console.log(riverNames[2]) 
    console.log(riverNames[3])



    ////object in typeScript///////////////////


    const user: {

        name: string,
        skill: string,
        address: string,
        location:string

    } = {

        name: 'minhazul abedin apon',
        skill: 'software development',
        address: 'jhenaidah sadar',
        location: 'country is bangladesh'

    }


    console.log(user.name)
    console.log(user.skill)
    console.log(user.address)
    console.log(user.location)



    /////function in typeScript///////////////////


    function func(a: number, b: number, c: number){

         const allFunc = a + b + c 

         console.log(allFunc)
   
    }

    func( 20, 34, 50 )


    const arw =( w: number, e: number ):number =>{

        const allArw = w * e 

        return allArw

    }

    const aw = arw( 40, 50 ) 
    console.log(aw)



    const nuZ: number[] = [ 20, 4, 56, 67, 35 ] 

    const newAry = nuZ.map( (nuZ: number) => nuZ * nuZ ) 

    console.log(newAry)



    ////spread operator and rest operator /////////////////



    const numberS: number[] = [ 20, 234, 234, 234, 35,355, 56 ] 

    const numberS1: number[] = [ 23, 35, 56, 546, 35 ] 

    numberS1.push(...numberS)

    console.log(numberS1)


    const tech1 = {

       t1: 'js',
       t2: 'ts',
       t3: 'react',
       t4: 'next',
       t5: 'redux'

    }

    const tech2 = {

       tb: 'node.js',
       tb1: 'express.js',
       rb3: 'mongoose'

    }

    const allTech = {

       ...tech1,
       ...tech2,
       ...numberS1
 
    }


    console.log(allTech) 


    ////rest operator////////


    const allFrnd = (...frnd: string[]) =>{

       frnd.forEach( (frnd:string) => console.log(`your frnd name is ${ frnd }`) )


    }

    allFrnd( 'react', 'next.js', 'redux', 'mongoose', 'mernScript')


    //////destructure in typeScript////////////////////


    const des = {

       id: 101,
       name: 'javaScript',
       country: 'bangladesh'

    }

    const {id, name, country} = des 

    console.log(id, name, country)


    ////array destructure//////////////


    const allFood: string[] = [ 'biriyani', 'kalaVuna', 'tigerMurgiVuna',  ] 

    const [ aF , c, KhashiVuna ] = allFood 

    console.log(aF, c, KhashiVuna)




    //////type alias ////// 



    type allValeZ = string | number | boolean | null | undefined  


    const nzz: allValeZ = 50;
    const nzz1: allValeZ = 100; 
    const nzz2: allValeZ = 200; 
    const nzz3: allValeZ = 300;

    const allZZZ = nzz + nzz1 + nzz2 + nzz3 

    console.log(allZZZ)


    function AVZ(na: number, nb: number, nc: number){

      const allN = na + nb + nc 

      console.log(allN)

    }

    AVZ(20, 40, 50)



    ///////////////union type/////////////


    type UniType = string | number | boolean 


    const all:  UniType = 'bangladesh';
    const all2: UniType = 'india';
    const all3: UniType = 'america' 
    const alls = { all, all2, all3 }
    console.log(alls)


    /////and types/////////////////


    type stack = {

       isStack: 'MERN'

    }

    type stack2 = {
       
      isStack2: 'backend'

    }

    type allStack = stack & stack2 

    const ASTCK: allStack = {


          isStack: 'MERN',
          isStack2:'backend'

    }

    console.log(ASTCK.isStack)
    console.log(ASTCK.isStack2) 


    /////ternary//////////////


    const aGez: number = 20;


    const isAdult = aGez > 19? "adult is true": 'adult is not true'

    console.log(isAdult)


    type UserZs = {

       name: string,
       address: {
         
         location: string,
         country: string

       },
       number: number

    }


    const userss: UserZs = {

         name: 'apon',
         address:{

           location: 'jhenaidah',
           country: 'bangladesh'

         },
         number: 1950374409

    } 

   //  const info = userss.address.frutz ?? 'kathal'
   //  console.log(info)


   ///null and never////////////


   const nul = (n: string | null) =>{
       
      if(n){
         console.log('code null')
      } else {
         console.log('code not null')
      }

   }

   nul(null)


   const typeZ = (name: string):never =>{
       throw new Error(name)
   }
   typeZ('code is Err')

















}