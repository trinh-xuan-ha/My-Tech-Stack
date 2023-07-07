class information {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`xin chào tôi là ${this.name}.`);
    }
}
let information_new = new information ("Hà");
information_new.hello(); 
//kế thừa 
class information1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} speak.....`);
    }
}
class cats extends information1 {
    constructor(name, breed) {
        super(name);
        this
    }
}