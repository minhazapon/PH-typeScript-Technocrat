{



const des = {

   id: 101,
   name: 'apon',
   address: { a1: 'ban' },
   location: 'bangladesh'

}
const {  location} = des
console.log( location )



////////array destructure/////////////

const skills : string[] = [ 'js', 'ts', 'react', 'next' ]


const [ a, b, frontEnd ] = skills
console.log(a, b, frontEnd)




}