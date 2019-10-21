package Laioffer;
import java.util.*;

public class BFS {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	//time O(n)
	//space: O(n)
		//stack O(1) one level of call stack;
		//heap: O(n)
	public void printByLevel(TreeNode root) {
		if (root == null) {
			return;
		}
		Queue<TreeNode> queue = new LinkedList<>();
		queue.offer(root);
		while (!queue.isEmpty()) {
			TreeNode curr = queue.poll();
			System.out.println(curr.value);
			if (curr.left != null) {
				queue.offer(curr.left);
			}
			if (curr.right != null) {
				queue.offer(curr.right);
			}
		}
	}
}


