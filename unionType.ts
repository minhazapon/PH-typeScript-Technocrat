{


//union type////////////

    
     type allValueZ = string | number | boolean | null | undefined
     
     
     const a: allValueZ = 20000;
     const b: allValueZ = 40000; 
     const c: allValueZ = 50000;
     const d: allValueZ = 1000000;
    
     const allValue = a + b + c + d 
     console.log(allValue)
    
    
    
    //////and type////////////
    
    
     type Frontend = {
       
        skills: 'next, react, redux'
    
     }
    
     type Backend = {
    
        skills1: 'node.js, express.js, mongoose'
    
     }
     
    
     type FullStack = Frontend & Backend 
    
     const Stack: FullStack = {
         
       
          skills: 'next, react, redux', skills1: 'node.js, express.js, mongoose'
    
    
     }
    
    
     console.log(Stack.skills, Stack.skills1)
    

     ///////////////////////

}