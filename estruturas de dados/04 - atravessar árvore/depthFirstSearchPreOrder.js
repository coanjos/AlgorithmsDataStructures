class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if(!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root

        while(newNode.value !== current.value) {
            if (newNode.value > current.value) {
                if (current.right) {
                    current = current.right
                } else {
                    current.right = newNode
                    current = current.right
                }
            } else if (newNode.value < current.value) {
                if (current.left) {
                    current = current.left
                } else {
                    current.left = newNode
                    current = current.left
                }
            }
        }

        return this
    }

    dfsPreOrder() {
        const visited = []
        let current = this.root

        let helper = (node) => {
            visited.push(node)

            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }

        helper(current)

        return visited
    }
}

const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(4)
bst.insert(6)
bst.insert(8)

console.log(bst.dfsPreOrder())
