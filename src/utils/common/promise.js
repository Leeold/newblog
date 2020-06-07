/**
 * promise.all 源码实现
 * @param promises
 * @returns {Promise<unknown>}
 */

let myAll = function (promises) {
    return new Promise(function (resolve,reject) {
        if(!Array.isArray(promises)){
            return reject(new TypeError("参数必须为数组"));
        }
        let resolvedCounter = 0;
        let promiseNum = promises.length;
        let resolvedValues = new Array(promiseNum);
        for(let i =0; i< promiseNum; i++){
            Promise.resolve(promises[i]).then(function(value) {
                resolvedCounter++
                resolvedValues[i] = value
                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedValues)
                }
            }, function(reason) {
                return reject(reason)
            })
        }
    })
}