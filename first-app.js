let productOfTwo = (num1, num2) => num1*num2;
console.log(productOfTwo(4,7));


const student = {
    name: 'Hemant',
    age: 25,
    greet(){
        console.log(`Hi ${this.name}, how are you?`)
    }
}

student.greet();
