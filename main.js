class Calc {
    value;
    constructor(value) {
        this.value = value;
    }

    func;
    Sum(value) {
        this.func = this.Sum;
        return this.value += value;
    }     

    Min(value) {
        this.func = this.Min;
        return this.value -= value;
    }

    Multiplication(value) {
        this.func = this.Multiplication;
        return this.value *= value;
    }

    Division(value) {
        this.func = this.Multiplication;
        return this.value /= value;
    }

    Print(result) {
        console.log(result);
    }

    PrintInfo() {
        console.log("Class: Calc");
        console.log(`Use Function: ${this.func.name}`);
        console.log(`Current Value: ${this.value}`);
    }
}

let calc = new Calc(123);
calc.Sum(23);
calc.PrintInfo();