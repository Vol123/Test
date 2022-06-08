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
        alert(`Class: Calc\nUse Function: ${this.func.name}\nCurrent Value: ${this.value}`);
    }

    PrintInfoConsole() {
        console.log("Class: Calc");
        console.log(`Use Function: ${this.func.name}`);
        console.log(`Current Value: ${this.value}`);
    }
}

class FindNumber {
    resultMax = undefined;
    resultMin = undefined;

    constructor(resultMax, resultMin) {
        this.resultMax = resultMax;
        this.resultMin = resultMin;
    }

    FindMaxNumber(arr = []) {
        let result = arr[0];
        for (let value in arr) {
            try {
                if (parseFloat(arr[value]) > parseFloat(result))
                    result = parseFloat(arr[value]);
            }
            catch {
                return this.resultMax;
            }
        }
        this.resultMax = result;
        return result;
    }
    FindMinNumber(arr = []) {
        let result = arr[0];
        for (let value in arr) {
            try {
                if (parseFloat(arr[value]) < parseFloat(result))
                    result = parseFloat(arr[value]);
            }
            catch {
                return this.resultMax;
            }
        }
        this.resultMax = result;
        return result;
    }

    PrintMaxNumber() {
        alert(`${this.resultMax}`);
    }

    PrintMinNumber() {
        alert(`${this.resultMin}`);
    }

    PrintMaxNumberConsole() {
        console.log(`${this.resultMax}`);
    }

    PrintMinNumberConsole() {
        console.log(`${this.resultMin}`);
    }
}

class PrintTextOnHTMLFile {
    constructor(text='') {
        alert(text);
    }
}

class AllTimeSum {
    result = undefined;
    constructor(result) {
        if (typeof result === typeof Number || typeof result === typeof BigInt)
            this.result = result;
        else
            this.result = parseFloat(result);
    }
    Add(value) {
        if (typeof value === typeof Number || typeof value === typeof BigInt)
            this.result += value;
        else 
            this.result = parseFloat(value);
        return this.result;
    }
}

let sum = new AllTimeSum('123.23');
sum.Add(23.2323);
sum.Add('1dbdhbhb123123');
sum.Add(232323233.23);
let value = new PrintTextOnHTMLFile('Have a good viewing gentlemen readers!');
value = new PrintTextOnHTMLFile(`All Sum this project is: ${sum.result}`);
