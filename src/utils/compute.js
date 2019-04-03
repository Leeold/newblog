
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

    return newStr;
}