const users =[{
    name: 'John Doe',
    age: 30,
},{
    name: 'Jane Doe',
    age: 25,
},{
    name: 'Jim Doe',
    age: 35,
}, {
    name: 'Jack Doe',
    age: 28,
}];

function sortingByAge() {
    return users.sort((a, b) => a.age - b.age);
}

console.log(sortingByAge());

module.exports = sortingByAge;