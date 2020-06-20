/**
 * 定义一个链表节点
 */
class listNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 *输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */
function print(listNode) {
  let arr = [];
  while (listNode !== null) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }
  return arr.reverse();
}

/**
 *输入一个链表，反转链表后，输出新链表的头节点
 */

function reverList(listNode) {
  if (listNode === null) {
    return null;
  }
  // A b c ;
  let newHeader = null;
  let pre = null;
  let current = listNode;
  while (current !== null) {
    let pNext = current.next;
    if (pNext === null) {
      newHeader = current;
    }
    current.next = pre; //反转指针
    pre = current;
    current = pre;
  }
  return newHeader;
}

/**
 * 输入一个链表，输入链表倒数第K个节点
 */

function find(listNode, k) {
  if (listNode === null) {
    return null;
  }
  let pre = listNode;
  let last = listNode;
  for (let i = 1; i < k; i++) {
    if (pre.next !== null) {
      pre = pre.next;
    } else {
      return null;
    }
  }
  while (pre.next !== null) {
    pre = pre.next;
    last = last.next;
  }

  return last;
}

/**
 * 给一个链表，若其中包含环，请找出链表环的入口地点，否则输出null
 * @param args
 *
 */

function listLoop(listNode) {
  if (listNode === null || listNode.next === null) {
    return null;
  }
  let isLoop = false;
  let pre = listNode;
  let last = listNode;
  while (last !== null && last.next !== null) {
    pre = pre.next;
    last = last.next.next;
    if (pre === last) {
      isLoop = true;
      break;
    }
  }

  if (isLoop) {
    pre = listNode;
    while (last !== null && last.next !== null) {
      if (pre === last) {
        return pre;
      }

      pre = pre.next;
      last = last.next;
    }
  }

  return null;
}
/**
 * 反转链表 
 * 反转链表的思路：1-2-3-4-5，先将2换到第一个，变为：2-1-3-4-5。然后将3换到第一个，3-2-1-4-5。
 * 以此类推。其中，p始终指向1，q指向p的下一个，即本轮需要换到第一个的数。
如此列表：
1-2-3-4-5
2-1-3-4-5
3-2-1-4-5
4-3-2-1-5
5-4-3-2-1
 * @param {} linkNode 
 */
function reverseLink(linkNode) {
  let node = linkNode;
  let p = node;
  let q = null;
  if (p === null) {
    return null;
  }
  while (p.next !== null) {
    q = p.next;
    p.next = q.next;
    q.next = node;
    node = q;
  }
  return node;
}
