

/**
 * 定义一个链表节点
 */
class listNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
/**
 *输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */
function print(listNode) {
    let arr = [];
    while (listNode !== null){
        arr.push(listNode.val);
        listNode = listNode.next;
    }
    return arr.reverse();
}

/**
 *输入一个链表，反转链表后，输出新链表的头节点
 */

function reverList(listNode) {
    if(listNode === null){
        return null;
    }
    let newHeader = null;
    let pre = null;
    let current = listNode;
    while (current !== null){
        let pNext = current.next;
        if(pNext === null){
            newHeader = current;
        }
        current.next = pre;//反转指针
        pre = current;
        current = pre;
    }
    return newHeader;
}

/**
 * 输入一个链表，输入链表倒数第K个节点
 */

function find(listNode,k) {
    if(listNode === null){
        return null;
    }
    let pre = listNode;
    let last = listNode;
    for(let i=1;i<k;i++){
        if(pre.next !== null){
            pre = pre.next;
        }else{
            return null;
        }
    }
    while (pre.next !== null){
        pre = pre.next;
        last = last.next;
    }

    return last;
}
