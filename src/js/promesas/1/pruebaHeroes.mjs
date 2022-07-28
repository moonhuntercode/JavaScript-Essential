const heroes=[
    {id:1,name:'Gon',anime:'hunterxhunter'},
    {id:2,name:'Naruto',anime:'naruto shippuden'},
    {id:3,name:'Goku',anime:'Dragon ball Z'},
    {id:4,name:'bleach',anime:'BLEACH'}
];
export const getHeroById=(id)=>heroes.find((heroex)=>heroex.id===id)
export default heroes
