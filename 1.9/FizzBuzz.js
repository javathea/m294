for (let i = 1; i<=100; i++) {
    let teilbarDurchDrei = i % 3 === 0;
    let teilbarDurchFuenf = i % 5 === 0;

    if(teilbarDurchFuenf && teilbarDurchDrei) {
        console.log("FizzBuzz");
    }else if(teilbarDurchFuenf) {
        console.log("Buzz");
    }else if(teilbarDurchDrei) {
        console.log("Fizz");
    }else {
        console.log(i);
    }
}