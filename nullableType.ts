{
   

///////null types
  
   const searchName = ( value: string | null ) =>{
      if( value){
         console.log('search Thik ache bhai || vai')
      } else {
         console.log('searchThik nei vai')
      }
   }
   searchName(null)

////////never type


   const bangladesh = ( name: string ): never => {
    throw new Error(name)
   }
   bangladesh('kaj hoyeche')

   
  
}