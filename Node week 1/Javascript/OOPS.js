// ES6 class keyword
//Es5 prototypes

// console.log({name: 'Audi'});

class Person {
    constructor(name, email, count = 0) {
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login(){
        console.log(this.name, 'has logged in!')
    }
    logout(){
        console.log(this.name, 'has logged out!')
    }
}


let person1 = new Person('johon', 'john@gmail.com');
let person2 = new Person('jay', 'jay@gmail.com');

person1.login();
person2.login();