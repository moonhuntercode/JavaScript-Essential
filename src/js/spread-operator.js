oldArr=[1,3,5]
newArr=[...oldArr,6,7]
console.log(newArr)

oldObj={
    name:"puto",
    height:180
}
newObj={
    ...oldObj,age:25,height:185
}
console.log(newObj)

const showValues=(...args)=>{
console.log(args)
for(i=0;i<args.length;i++){
    console.log(args[i])
}
}
showValues("apple","orange","banana")