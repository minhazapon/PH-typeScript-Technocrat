{
///////////// spread and rest operator in typeScript
   

    const number: number[] = [ 1, 23, 2344 , 3455, 45, 33,54 ,445, ]

    const number2: number[] = [ 23, 34, 454, 35, 345,234 ]

    number.push(...number2)
    
    console.log(number)

    const skillList = {
        s1: 'javascript',
        s2: 'react',
        s3: 'next.js'

    }
    const skillList2 = {

        s1: 'node.js',
        s2: 'express.js',
        s3: 'mongoose'
    }

    const allSkillInObj = {

        ...skillList,
        ...skillList2

    }
    console.log(allSkillInObj)




    /////////rest operator/////////////////


    const greetFriend = (...friends: string[]) =>{

       friends.forEach( ( friends:string ) => console.log(`hi ${ friends }`)  )

    } 

    greetFriend( 'fahim', 'ovi', 'fagun', 'bangladesh', 'india' )
     



















}