
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


/**
 * promise源码实现
 *
 * */

class MyPromise{
    constructor(executor){
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放法数组
        this.onRejectedCallbacks = [];
        let resolve = value =>{
            if(this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        };
        let reject = reason =>{
            if(this.state === 'pending'){
                this.state = 'reject';
                this.reason = reason;
                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        };
        try{
            executor(resolve,reject);
        }catch (error){
            reject(error);
        }

    }
    then(onFulfilled,onRejected){

        if(this.state === 'fulfilled'){
            onFulfilled(this.value);
        }

        if(this.state === 'reject'){
            onRejected(this.reason);
        }

        // 当状态state为pending时
        if (this.state === 'pending') {
            // onFulfilled传入到成功数组
            this.onResolvedCallbacks.push(()=>{
                onFulfilled(this.value);
            })
            // onRejected传入到失败数组
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason);
            })
        }
    }
}


let p = new MyPromise(function (resolve,reject) {
    setTimeout(()=>{
        resolve("123");
    },2000);


})
console.log(p);
p.then(function (data) {
    console.log(data);

},function (error) {
    console.log(error);

});