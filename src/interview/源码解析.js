/**
 * Promise 源码解析
 */

class myPromise{
    constructor(executor){

        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放法数组
        this.onRejectedCallbacks = [];
        let resolve = value =>{
            if(this.state = "pending"){
                this.state = "fulfilled";
                this.value = value;
                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        }
        let reject = reason =>{
            if(this.state = "pending"){
                this.state = "rejected";
                this.reason = reason;
                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }
        try{
            executor(resolve,reject);
        }catch(error) {
            reject(error);
        }

    }

    then(onFulfilled,onRejected){

        if(this.state = "fulfilled"){
            onFulfilled(this.value);
        }
        if(this.state = "rejected"){
            onRejected(this.reason);
        }

        if(this.state = 'pending'){
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
let p = new myPromise(function (resolve,reject) {
    setTimeout(function () {
        resolve("123");
    },2000);


})

p.then(data =>{
    console.log(data);
},error =>{
    console.log(error);
})