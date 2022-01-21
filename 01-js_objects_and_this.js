// Class code examplesç

// This is a function that will be attaches to the GLOBAL object
//therefore the "this" keyword will point to the global object
function sayHelloFloating(){
    console.log(`this objecte of a floating function: `, this)
    console.log("this.firstName", this.firstName)
}

sayHelloFloating()


const person = {
    firstName: "Jordi",
    age: 28,
    city: "Valencia",
    sayHello(){
       console.log(this.firstName)
    }
}

// This function is attached to a "person1" object
// and therefore the "this" keyword will refer to the person1 
person.sayHello()


const person2 = {
    firstName: "Daniel",
    age: 31,
    city: "Barcelona",
    sayHello(){
       console.log(`Buenos dias, soy ${this.firstName}. I am ${this.age} years old`)
    }
}

person2.sayHello()

const abstractPerson = {
    sayHello(){
      return `Hello my name is ${this.firstName}`
    },
    tellAge(){
    return `I am ${this.age} years young`
    }
}

console.log("abstractPerson: ", abstractPerson.tellAge())

abstractPerson.tellAge.bind(person)

console.log(abstractPerson.sayHello.bind(person)())