export default class Edge {

    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.visited = false;
    }

    getOtherNode(node) {
        return node === this.node1 ? this.node2 : this.node1;
    }

    get weight() {
        return Math.hypot(this.node1.latitude - this.node2.latitude, this.node1.longitude - this.node2.longitude);
    }
}