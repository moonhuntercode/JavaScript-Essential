//primitive:the value is stored with assign-by-value
//reference the value is stored with assign-by-reference
var name = "Sam"
var namecopy = name
console.log('name' + name);
console.log('namecopy' + namecopy);
name = "Mary"
console.log("name", name);
console.log("namecopy", namecopy);
console.log("--------------------------");

const user = {
    name: "victor"
}
const usercopy = { ...user }
console.log('user', user);
console.log('usercopy', usercopy);
user.name = "Hina"
console.log('user', user);
console.log('usercopy', usercopy);