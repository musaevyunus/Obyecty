//

function getName(person) {
return person.name
}
console.log(getName({name: "ljll"}))


//const fam = {
  // firstname: 'Yunus',
   // lastname: 'Musaev',
    //age: 31
  //};

function getNames(man){
    return [man.firstname, man.lastname]
}
console.log(getNames({fam}))


function concatNames (obj, lastname) {
    return obj.firstname +' '+ lastname
}
console.log(concatNames(person, 'Musaev'))


function correctName(family){
if (family.fathername === undefined){
    return family.firstname
}
else{
    return family.firstname +' '+ family.lastname +' '+ family.fathername
}
}
console.log(correctName(firstPerson));
console.log(correctName(secondPerson));