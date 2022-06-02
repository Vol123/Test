class Calc {
    value;
    constructor(value) {
        this.value = value;
    }

    Sum(value) {
        return this.value + value;
    }     

    Min(value) {
        return this.value - value;
    }
}

let calc = new Calc(123);
console.log(`123 + 23 = ${calc.Sum(23)}`);
console.log(`123 - 23 = ${calc.Min(23)}`);