class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex) {
        let i = 0

        while(this.adjacencyList[vertex].length) {
            const lista = this.adjacencyList[vertex]
            this.removeEdge(vertex, lista[i])

            i++
        }

        delete this.adjacencyList[vertex]
    }
}

const grafo = new Graph()

grafo.addVertex('OOP')
grafo.addVertex('Func')
grafo.addEdge('OOP', 'Func')
grafo.removeVertex('OOP')

console.log(grafo)


