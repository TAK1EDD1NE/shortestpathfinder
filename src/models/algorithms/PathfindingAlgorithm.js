class PathfindingAlgorithm {
    constructor() {
        this.finished = false;
    }

    start(startNode, endNode) {
        this.finished = false;
        this.startNode = startNode;
        this.endNode = endNode;
    }

    nextStep() {
        return [];
    }
}

export default PathfindingAlgorithm;