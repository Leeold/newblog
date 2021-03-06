
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

/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像
 */

function mirro(treeNode) {

    if(treeNode != null){
        var temp = treeNode.left;
        treeNode.left = treeNode.right;
        treeNode.right = temp;
        if(treeNode.left != null){
            mirro(treeNode.left);
        }
        if(treeNode.right !=null){
            mirro(treeNode.right);
        }
    }
    
}

/**
 * 输入输入一颗二叉树，求该树的深度
 */

function treeDepth(treeNode) {

    if(treeNode === null){
        return 0;
    }
    let left =0;
    let right =0;

    left = treeDepth(treeNode.left);
    right  = treeDepth(treeNode.right);

    return left > right ? (left+1) : (right+1);
    
}

/**
 * 输入一颗二叉树，判断该二叉树是否是平衡二叉树
 * 
 * 
 * 平衡二叉树：
 * 
 *（1）左子树和右子树都是平衡二叉树；

  （2）左子树和右子树的深度（高度）之差的绝对值不超过1。
 */

function isBalance(treeNode) {

    let isBalanced = true;

    getDepth(treeNode);

    function getDepth(treeNode) {
        if(treeNode === null){
            return 0;
        }

        let left= 0;
        let right = 0;
        left = getDepth(treeNode.left);
        right = getDepth(treeNode.right);

        if(Math.abs(left-right) > 1){
            isBalanced =false;
        }

        return left > right ? (left+1) : (right+1);
    }

    return isBalanced;

}


/**
 * 请事先一个函数，判断一颗二叉树是不是对称的，
 * 如果一颗二叉树，同此二叉树的镜像是相同的，定义其为对称的，
 * (左子树中每个节点的左孩子 = 同层右子树中每个节点的右孩子 && 左子树中每个节点的右孩子 = 同层右子树中每个节点的左孩子)
 *
 */

function isSymmetry(treeNode) {

    if(treeNode == null){return true};
    isSymmetrical(treeNode.left,treeNode.right);

}

function isSymmetrical(left,right) {
    if(left == null && right == null){
        return true;
    }
    if(left ==null || right == null){
        return false;
    }

    return left.val === right.val && isSymmetrical(left.left === right.right) && isSymmetrical(left.right === right.left);

}

/**
 * 从上往下打印二叉树，同层节点从左往右打印
 */


function printNOde(treeNode) {

    let arr = [];
    let data =[];
    if(treeNode !== null){
        arr.push(treeNode);
    }
    while (arr.length !== 0){
        var node = arr.shift();
        if(node.left !== null){
            arr.push(node.left);
        }
        if(node.right!== null){
            arr.push(node.right);
        }
        data.push(node.val);
    }

    return data;

}


/**
 * 在一个地图中，找出一共有多少个岛屿。
 我们用一个二维数组表示这个地图，地图中的 1 表示陆地，0 表示水域。一个岛屿是指由上下左右相连的陆地，并且被水域包围的区域。
 你可以假设地图的四周都是水域。
 { 0, 0, 0, 0, 0, 0, 0, 0 },
 { 0, 0, 1, 0, 0, 0, 0, 0 },
 { 0, 1, 1, 1, 0, 0, 0, 0 },
 { 0, 0, 1, 0, 0, 1, 1, 0 },
 { 0, 0, 0, 0, 0, 1, 1, 0 },
 { 0, 0, 1, 0, 0, 0, 0, 0 },
 { 0, 0, 0, 0, 0, 0, 0, 1 },

 */

let arr = [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1]
];
function isLand(arr) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] ===1){
                count++;
                lj(i,j);
            }
        }
    }
    console.log(count);
}
isLand(arr);
function lj(i,j) {
    arr[i][j] = 2;
    //上边
    if(i-1>=0 && arr[i-1][j] ===1){
        lj(i-1,j)
    }
    //下边
    if(i+1<arr.length && arr[i+1][j] ===1 ){
        lj(i+1,j);
    }
    //左边
    if(j-1>=0 && arr[i][j-1] ===1){
        lj(i,j-1);
    }
    //右边
    if(j+1<arr[i].length && arr[i][j+1] === 1){
        lj(i,j+1);
    }
}

/**
 *给一个数组返回它的最大连续子序列的和
 */
var arr = [6,-3,-2,7,-15,1,2,2];

function maxNum(arr) {

    if(arr.length == 0){
        return 0;
    }

    let result = arr[0];
    let max = arr[0];

    for(let i=1;i<arr.length;i++){
        max = Math.max(max+arr[i],arr[i]);
        result = Math.max(max,result);
    }

    return result;

}

/**
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 *
 */

function print(node) {

    if(!node){
        return [];
    }

    let queue = [];
    let result = [];
    let flag = true;
    queue.push(node);
    while (queue.length){
        let len = queue.length;
        let tempArr = [];
        for(let i=0;i<len;i++){
            let temp = queue.shift();
            tempArr.push(temp.val);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
        }
        if(!flag){
            tempArr.reverse();
        }
        flag = !flag;

        result.push(tempArr);

    }

    return result;

}

/**
 * 无重复字符的最长子串
 给定一个字符串，找出不含有重复字符的最长子串的长度。

 示例：

 给定 "abcabcbb" ，没有重复字符的最长子串是"abc"，那么长度就是3。

 给定 "bbbbb" ，最长的子串就是 "b"，长度是1。

 给定 "pwwkew"，最长子串是"wke"，长度是3。请注意答案必须是一个子串，"pwke"是 子序列 而不是子串。
 */

function longStr(s) {
    var res = 0; // 用于存放当前最长无重复子串的长度
    var str = ""; // 用于存放无重复子串
    var len = s.length;
    for(var i = 0; i < len; i++) {
        var char = s.charAt(i);
        var index = str.indexOf(char);
        if(index === -1) {
            str += char;
            res = res < str.length ? str.length : res;
        } else {
            console.log(str);
            str = str.substr(index + 1) + char;
        }
    }
    return res;

}

/**
 * 两个有序数组合并为一个有序数组
 */

function concat(arr1,arr2) {

    let num1 =arr1;
    let num2 =arr2;
    //变量用于存储两个集合应该被比较的索引（存入新集合就加一）
    let a = 0;
    let b= 0;
    let newArr = [];
    for(let i=0;i<num1.length+num2.length;i++){//两数组都未遍历完，相互比较后加入
        if(a<num1.length && b<num2.length){
            if(num1[a]>num2[b]){
                newArr[i] = num2[b];
                b++;

            }else{
                newArr[i] = num1[a];
                a++
            }
        }else if (a < num1.length) {   //num2已经遍历完，无需比较，直接将剩余num1加入
            newArr[i] = num1[a];
            a++;
        } else if (b < num2.length) {    //num1已经遍历完，无需比较，直接将剩余num2加入
            newArr[i] = num2[b];
            b++;
        }
    }
    return newArr;

}


