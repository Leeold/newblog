
//bind函数源码实现
Function.prototype.customeBind = function (thisArg,...list) {
    let self = this;
    // 自己实现的bind函数，如果把返回的新函数当成构造，此时会遇到问题，就死找不到目标函数原型上的方法，
    //解决：让新函数继承目标函数的原型。

    let Bound = function (...arg2) {

        self.apply(thisArg,[...list,...arg2])

    }
    console.log(Object.create(self.prototype));
    Bound.prototype = Object.create(self.prototype);
    Bound.prototype.constructor = self;
    return Bound;


};
function func(...arg){
    console.log(this);
    console.log(arg);

}

func.prototype.miaowei = function () {
    console.log(123);

}
let newFunc = func.bind([1],1,2,3,4);
//    newFunc(5,6,7);
let f1 = new newFunc();
console.log(f1);

let customeBind = func.customeBind([1],1,2,3,4);
//    customeBind(5,6,7);
let f2 = new customeBind();
console.log(f2);