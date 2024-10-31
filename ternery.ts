{

      /////ternary operator

      const age: number = 23 

      const isAdult  = age > 40 ? ' good adult ': 'not adult'

      console.log(isAdult)



      type Users = {

          name: string,
          num: number,
          address: {
            location: string ,
            country: string ,
            permanent:  string 
          }

      }
   



      ////chaining and null polish


      const AUser: Users = {

          name: 'minhazul abedin apon',
          num: 1950374409,
          address:{

              location: 'jhenaidah',
              country: 'bangladesh',
              permanent: "magura kadirabad"

          }
       }


    //    const ReachMan = AUser?.address?.IsTakaMan ?? 'he is an taka man'

    //    console.log({ReachMan}) 













}