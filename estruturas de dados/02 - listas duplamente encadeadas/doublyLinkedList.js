class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const node = new Node(val)

        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
        
        return this
    }

    pop() {        
        if (!this.head) return undefined

        let oldTail = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }

        this.length--

        return oldTail
    }

    shift() {
        if (this.length === 0) return undefined

        let oldHead = this.head
        
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--

        return oldHead
    }

    unshift(val) {
        const node = new Node(val)

        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }

        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        if (index <= this.length / 2) {
            let counter = 0
            let current = this.head

            while(counter < index) {
                current = current.next
                
                counter++
            }

            return current
        } else {
            let counter = this.length - 1
            let current = this.tail

            while(counter > index) {
                current = current.prev

                counter--
            }

            return current
        }
    }

    set(index, value) {
        const node = this.get(index)

        if (node) {
            node.val = value
            return true
        }

        return false
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(value)

        const nodeAnterior = this.get(index - 1)
        const newNode = new Node(value)
        const next = nodeAnterior.next
        
        nodeAnterior.next = newNode
        next.prev = newNode
        newNode.prev = nodeAnterior
        newNode.next = next

        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const nodeToRemove = this.get(index)
        nodeToRemove.prev.next = nodeToRemove.next
        nodeToRemove.next.prev = nodeToRemove.prev

        console.log(nodeToRemove.prev.next)

        nodeToRemove.prev = null
        nodeToRemove.next = null

        this.length--

        return nodeToRemove
    }

    reverse() {
        let curr = this.head

        while(curr) {
            let next = curr.next
            let prev = curr.prev
            curr.next = prev
            curr.prev = next
            prev = curr
            curr = next            
        }

        let head = this.head
        this.head = this.tail
        this.tail = head
        
        return this
    }
}

const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)







