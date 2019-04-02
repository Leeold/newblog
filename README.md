
**前端面试题**

1 ：map和forEach的区别

let arr = [1,2,3,4,5,6,7];

for(let i = 0; i< arr.length; i++){
   console.log(arr[i]);
   if(arr[i] === 3){
       break;
   }
}
public class BSTree<E extends Comparable<E>> {

    private class Node{
        public E e;
        public Node left,right;

        public Node(E e, Node left, Node right) {
            this.e = e;
            this.left = left;
            this.right = right;
        }

        public Node(E e) {
            this.e = e;
            left = null;
            right = null;
        }
    }

    private Node root;
    private int size;

    public BSTree() {
        root = null;
        size = 0;
    }
    public int size(){
        return size;
    }
    public boolean isEmpty(){
        return size == 0;
    }
}
   