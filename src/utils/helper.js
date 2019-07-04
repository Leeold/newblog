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

//js 快速排序
function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right));
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
export function isBack(str) {

    if(typeof str !== "string"){
        return false;
    }

    return str.split("").reverse().join("") === str;

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

// 输入一个链表，从尾到头打印链表每个节点的值。
export function print(head) {
    let arr = [];
    let node = head;
    while (node !== null){
        arr.unshift(node.val());
        node = node.next;
    }
    return arr;
}

//js深拷贝
export function deepCopy( source ) {
    let target = Array.isArray( source ) ? [] : {}
    for ( var k in source ) {
        if ( typeof source[ k ] === 'object' ) {
            target[ k ] = deepCopy( source[ k ] )
        } else {
            target[ k ] = source[ k ]
        }
    }
    return target
}

// 打平数组和规定深度的打平数组

export function flattenArr(arr) {

    let result = [];

    function flatten(arr) {
        for(let i = 0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                flatten(arr[i]);
            }else{
                result.push(arr[i]);
            }
        }
    }
    flatten(arr);
    return result;
}

// [1, 2, [3, [4, 5]]].flat()
// // [1, 2, 3, [4, 5]]
//
//     [1, 2, [3, [4, 5]]].flat(2)
// // [1, 2, 3, 4, 5]
//
//     [1, [2, [3]]].flat(Infinity)
// // [1, 2, 3]
//
// //如果原数组有空位，flat()方法会跳过空位
//     [1, 2 , 4, 5].flat()
// // [1, 2, 4, 5]

/**
 * 函数防抖
 * 防抖的意思可以认为是，阻止连续的抖动（所谓的事件触发），也就是说，我们用防抖来让那些连续触发的事件只触发一次。
 * 防抖实现起来的思路是，用闭包保存执行的函数，多次执行的时候把上一个执行的函数清除掉，然后再次创建一个新的函数。这样在间隔时间内还有事件触发的话，不会执行之前的函数，这么一来，函数真正的执行就是最后一次事件触发。
 * @param fn
 * @param times
 * @returns {Function}
 */

export function debounce(fn,times){
       let timeout = null
       return function(){
           console.log(arguments);
           console.log(this);
           clearTimeout(timeout)
           timeout = setTimeout(()=>{
               fn.apply(this,arguments)
           },times)
       }
   }

/**
 * 函数节流
 * 设置一个阀值（制定一个时间），在这个阀值或者时间之内，函数只会执行一次。
 * @param fn
 * @param times
 * @returns {Function}
 */
export function throttle(fn,times){
    let bool = true
    return function(){
        if(!bool){
            return false
        }
        bool = false;
        setTimeout(()=>{
            bool = true;
            fn.apply(this,arguments)
        },times)
    }

}

/**
 * js 数组去重
 */
let arr = [2,3,45,1,23,4,5,5];
let s = new Set(arr);
let arr1 = Array.from(s);

let uniq = (arr)=>{

    let temp = [];
    arr.forEach((item)=>{
        if(temp.indexOf(item) === -1){
            temp.push(item);
        }
    });
    return temp;
};

console.log(uniq(arr));

/**
 * 输入一个链表，输入该链表中倒数第k个节点
 */

function print(head,k) {
    let node = head;
    let num = 0;
    while (node !== null){
        num++;
        node = node.next;
    }
    if(num < k ){ return null;}
    let a = head;
    for(let i=0;i< num-k;i++){
        a = a.next;
    }
    return a;
}

class node {
    constructor(value,next){
        this.value = value;
        this.next = null;
    };
}
let p1 = new node(1);
let p2 = new node(2);
let p3 = new node(3);
let p4 = new node(4);
let p5 = new node(5);
let p6 = new node(6);
p1.next = p2;
p2.next= p3;
p3.next= p4;
p4.next= p5;
p5.next= p6;
console.log(print(p1,2));




