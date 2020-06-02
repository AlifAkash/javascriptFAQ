function add_Numbers(){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum= sum + num;
    }
    return sum;
}

var result=add_Numbers(9,6,10,5);
console.log(result);