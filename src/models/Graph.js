import Node from "./Node";

export default class Graph {
    constructor() {
        this.startNode = null;
        this.nodes = new Map();
    }


    getNode(id) {
        return this.nodes.get(id);
    }

    addNode(id, latitude, longitude) {
        const node = new Node(id, latitude, longitude);
        this.nodes.set(node.id, node);
        return node;
    }
}