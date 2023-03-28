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

    traverse(node) {
        const result = []

        const visitedVertices = {}

        const recursiveHelper = (vertex) => {
            if (vertex.length === 0) return null
            visitedVertices[vertex] = true
            result.push(vertex)

            this.adjacencyList[vertex].forEach(connection => {
                if (!visitedVertices[connection]) {
                    return recursiveHelper(connection)
                }                
            });
        }

        recursiveHelper(node)

        return result
    }
}

const grafo = new Graph()

grafo.addVertex('A')
grafo.addVertex('B')
grafo.addVertex('C')
grafo.addVertex('D')
grafo.addVertex('E')
grafo.addVertex('F')

grafo.addEdge('A', 'B')
grafo.addEdge('A', 'C')
grafo.addEdge('B', 'D')
grafo.addEdge('C', 'E')
grafo.addEdge('D', 'E')
grafo.addEdge('D', 'F')
grafo.addEdge('E', 'F')


console.log(grafo.traverse('A'))