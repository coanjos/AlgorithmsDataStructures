class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }        

        this.length++

        return list
    }

    pop() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let newTail = current
        
        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null

        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        
        return current
    }

    shift() {
        if (!this.head) return null

        const temp = this.head

        this.head = this.head.next

        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return temp
    }

    unshift(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head

        for (let i = 0; i !== index; i++) {
            current = current.next            
        }

        return current
    } 

    set(value, index) {
        let node = this.get(index)

        if (!node) {
            return false
        } else {
            node.val = value
            return true
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return false

        if (index === this.length) {
            return !!this.push(value)
        }

        if (index === 0) {
            return !!this.unshift(value)
        }

        let newNode = new Node(value)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode = temp
        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let prevNode = this.get(index - 1)
        let nodeToRemove = prevNode.next
        prevNode.next = nodeToRemove.next

        this.length--

        return nodeToRemove
    }

    reverse() {
        let curr = this.head
        let prev = null

        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let temp = this.head
        this.head = this.tail
        this.tail = temp

        return this
    }
}

const list = new LinkedList()

list.push('1')
list.push('2')
list.push('3')

console.log(list.reverse())