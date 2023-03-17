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

    find(value) {
        if(!this.root) {
            return null
        }

        let current = this.root

        while(value !== current.value) {
            if (value > current.value) {
                if (current.right) {
                    current = current.right
                } else {
                    return null
                }
            } else if (value < current.value) {
                if (current.left) {
                    current = current.left
                } else {
                    return null
                }
            }
        }

        return current
    }
}

const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(4)
bst.insert(6)
bst.insert(8)


console.log(bst.find(8))