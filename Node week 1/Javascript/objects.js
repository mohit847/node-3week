let obj = {
    name: "cipher"
}

let person = {
    name: "john",
    email: "john@wic",
    age: 25,
    status: true,
    children:{
        name:'jane'
    },
    hobbies: ['reading','writing','playing'],
    login: ()=>{
        console.log('User has logged in',this)
    },
    logout: function(){
        console.log('logout', this)
    },
}


window.person.login();
person.logout();























// console.log(person.status)
// console.log(person['age'])
// console.log(person['children'])

// adding
// person.country = 'India';
// console.log(person)

// console.log(typeof person.hobbies)


// person.login()
