// import {  getHeroById } from "./pruebaHeroes.mjs"

import { getHeroById } from "./pruebaHeroes.mjs"

// const promises1=new Promise((resolve1,reject)=>{
//     setTimeout(()=>{
//         console.log("Te prometi,en 2 segundos cumpliré mi promesa")
        
//         const hero1=getHeroById(1)
//         resolve1(hero1)
        
//     },2000)
// })
// const promises2=new Promise((resolve2,reject)=>{
//     setTimeout(()=>{
//         console.log("Te prometi,en 3 segundos cumpliré mi promesa")
//         const hero2=getHeroById(2)
//         const hero3=getHeroById(3)
//         const hero4=getHeroById(4)
//         resolve2(hero2)
//         console.log(hero3)
//         console.log(hero4)
//     },3000)
// })

// promises1.then((hero1)=>{
//     // trae a gon
//     console.log(hero1)
// })
// .catch(err=>{
//     console.warn(err)
// })

// promises2.then((hero2)=>{
//     //trae a naruto
//     console.log(hero2)
// })
const GetHeroById=(id)=>{
    const promise1=new Promise((resolve2,reject)=>{
        setTimeout(()=>{
            const hero1=getHeroById(id)
            if(hero1){
                console.log("Te prometi,en 3 segundos cumpliré mi promesa")
                resolve2(hero1)
            }
            else
            reject('No se puede recibir el heroe,revise el id')
        },3000)
    })
    return promise1
}
GetHeroById(13)
.then(heroe=>{
    console.log("heroe:",heroe)
})
.catch(err=>{
    console.warn(err)
})