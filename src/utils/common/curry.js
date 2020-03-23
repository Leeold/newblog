

/**
 *
 * 函数柯里化
 *
 * */

const curry = function (fn) {
    if(fn.length <= 0) return fn;
    const generator = function (args) {
        return args.length === fn.length ? fn(...args) : (item) => generator([...args,item]);
    };
    return generator([],fn.length);
};

let sum = (a,b,c)=>{
    return a+b+c;
};

//此时currySum = (item) => generator([...args,item])
let currySum = curry(sum);


let result = currySum(1)(2)(3);
console.log(result);