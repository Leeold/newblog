// js 判断数据类型。。。
export function type(target) {
    let result = typeof(target);
    var template = {
        "[object Array]": "array",
        "[object Object]":"object",
        "[object Number]":"number - object",
        "[object Boolean]":"boolean - object",
        "[object String]":'string-object'
    };
    if (target === null) {
        return "null"
    }else if (target === 'object') {
        let str = Object.prototype.toString.call(target);
        return template[str];
    }else {
        return result;
    }

}

// js 算法 判断字符串中出现次数最多的字符 以及次数

export function maxString(str) {
    let obj = {};
    for (let i=0; i <str.length; i++) {
        let key = str[i];
        if (obj[key]) {
            obj[key]++;
        }else{
            obj[key] = 1;
        }
    }
    let count = 0;
    let maxString = '';
    for (let key in obj) {
        if (count < obj[key]) {
            count = obj[key];
            maxString = key;
        }
    }
    return maxString + count;
}

// js给定一个升序数组，如何找到连续的元素，并返回连续元素组成的序列？例如，给定数组[1,2,3,4,6,9,22,23]，返回数组["1->4","6","9","22->23"]。
export function fn(arr) {
    var result = [],i=0;
    result[i]= [arr[0]];
    arr.reduce(function (pre,cur) {
        cur-pre === 1 ? result[i].push(cur) : result[++i] = [cur];
        return cur;
    });
    return result;
}

//实现一个简单队列，让1.2.3分别在第一秒，第三秒，第五秒打印出来。

export class Queue{
    _done(time,func){
        setTimeout(()=>{
            func();
        },time)
    }
    then(time,func){
        this._done(time,func);
    }
}

// let queue = new Queue();
// queue.then(1000,()=>{
//     console.log(1);
// })
// queue.then(3000,()=>{
//     console.log(2);
// })
// queue.then(5000,()=>{
//     console.log(3);
// })

//ES6实现队列*****************************
export class QueueDemo {
    constructor() {
        this.store = [] //队列的元素
        this.enqueue = function(element) {
            // 队尾添加元素
            return this.store.push(element)
        }
        this.dequeue = function() {
            // 队首删除元素
            if (this.store.length === 0)
                return false
            return this.store.shift()
        }
        this.front = function() {
            // 读取队首元素
            return this.store[0]
        }
        this.back = function() {
            // 读取队尾元素
            return this.store[this.store.length - 1]
        }
        this.toString = function() {
            // 获取队列的所有元素
            return this.store
        }
        this.empty = function() {
            // 清空队列
            return this.store = []
        }
    }
}
//
// //使用队列
// let q = new Queue()
// q.enqueue(2)
// q.enqueue(4)
// q.dequeue()
// q.toString() // [4]

//js 冒泡排序*****************************
//时间复杂度 O(n*n);

export function bubbleSort (arr) {
    for(let i= 0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// js 插入排序*****************
//时间复杂度 O(n*n);
export function insertSort(arr) {
    for(let i = 0; i<arr.length;i++){
        for(let j = i; j>0; j--){
            if(arr[j]<arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}

// js 回文算法

export function isPalindrome(line) {
    line += "";
    console.log(typeof line);
    for(var i=0,j=line.length-1;i<j;i++,j--){
        // 头尾开始比较是否一致
        if(line.charAt(i) !== line.charAt(j)){
            return false;  // 不是回文
        }
    }
    return true;  //是回文
}
//js 二分查找算法*****************************

//非递归算法

export function binarySearch(arrs,value) {

    var low = 0;
    var height = arrs.length - 1;
    while (low <= height){
        var mid = parseInt((low+height)/2);
        if(value === arrs[mid]){
            return mid;
        }else if(value > arrs[mid]){
            low = mid +1;
        }else if(value < arrs[mid]){

            height = mid-1;

        }else{
            return -1;
        }
    }
}
// 递归方法

export function binary_search(arrs,low,height,value) {

    if(low>height){
        return -1
    }
    var mid = parseInt((low+height) /2);
    if(arrs[mid] === value){
        return mid;
    }else if (arrs[mid] > value) {
        height = mid-1;
        return binary_search(arrs,low,height,value);
    }else if (arrs[mid] < value){
        low = mid +1;
        return binary_search(arrs,low,height,value);
    }

}
// var arrs = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
// var result = binary_search(arrs,0,arrs.length -1,10);