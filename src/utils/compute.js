
/**
 *输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */
function listNode(x) {
    this.val = x;
    this.next = null;

}

function printListFromTailToHead(head) {

    let result = [];
    let pNode = head;
    while (pNode !== null){
        result.unshift(pNode.val);
        pNode = pNode.next;
    }
    return result
}

let listNode1 = new listNode(1);
let listNode2 = new listNode(2);
let listNode3 = new listNode(3);
listNode1.next = listNode2;
listNode2.next = listNode3;
console.log(listNode1);
console.log(printListFromTailToHead(listNode1));

/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 * @param str
 * @return
 */

function replace(str) {
    if(str === null){
        return null
    }

    let newStr = "";

    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === " "){
            newStr += "%20";
        }else{
            newStr +=str.charAt(i);
        }
    }

    return newStr;
}

/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 n<=39
 */
function feibonacii(n) {
    let first = 1;
    let second = 1;
    let third = 0;
    for(let i = 3; i<n; i++){
        third = first+second;
        first = second;
        second = third;
    }
    return third;
}

/**
 * js 用reduce 实现map 函数
 */

Array.prototype.map=function (callback) {

    let arr = this;
    return arr.reduce((pre,current,index)=>{
        pre.push(callback(current));
        return pre;
    },[])

}

let result = [1,2,3,4,5].map((item,index)=>{
    return item * item;
});

/**
 * 二叉树的先序遍历 先遍历根节点 再遍历左子树，再遍历右子树，
 */

function treeNode(val) {
    this.val = val;
    this.left=null;
    this.right=null;
}

function preOrder(root) {
    if(root){
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}
/**
 * 二叉树的中序遍历  先遍历左子树，再遍历根节点，再遍历右子树
 */
function inOrder(root) {
    if(root){
        console.log(root.val);
        inOrder(root.left);
        inOrder(root.right);
    }
}

/**
 * 二叉树的后续遍历  先遍历 左子树，再遍历右子树，再遍历根节点
 */
function inOrder(root) {
    if(root){
        inOrder(root.left);
        inOrder(root.right);
        console.log(root.val);
    }
}

