{

 
    type allValue = string | number 
    
    const name: allValue = 'minhazul abedin apon';
    const number: allValue = 1950374409 
    const location: allValue = 'bangladesh'
    const id: allValue = 101
    const allThik = { name, number, location, id } 

    console.log(allThik)

    function valZ( a: allValue , b: allValue, c: allValue ){

         const allV  = { a, b, c }
         console.log(allV)

    }

    valZ( 12, 'apon', '40' )



}