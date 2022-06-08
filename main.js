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
    FindMaxNumber(arr = []) {
        let result = arr[0];
        for (let value in arr)
            if (value > result)
                result = value;
        return result;
    }
    FindMinNumber(arr = []) {
        let result = arr[0];
        for (let value in arr)
            if (value < result)
                result = value;
        return result;
    }
}

class PrintTextOnHTMLFile {
    constructor(text='') {
        alert(text);
    }
}

let value = PrintTextOnHTMLFile('Have a good viewing gentlemen readers!');