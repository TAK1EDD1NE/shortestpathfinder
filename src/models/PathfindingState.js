import AStar from "./algorithms/AStar";
import Dijkstra from "./algorithms/Dijkstra";
import Greedy from "./algorithms/Greedy";
import PathfindingAlgorithm from "./algorithms/PathfindingAlgorithm";

export default class PathfindingState {
    static #instance;


    constructor() {
        if (!PathfindingState.#instance) {
            this.endNode = null;
            this.graph = null;
            this.finished = false;
            this.algorithm = new PathfindingAlgorithm();
            PathfindingState.#instance = this;
        }
    
        return PathfindingState.#instance;
    }

    get startNode() {
        return this.graph.startNode;
    }

    getNode(id) {
        return this.graph?.getNode(id);
    }

    reset() {
        this.finished = false;
        if(!this.graph) return;
        for(const key of this.graph.nodes.keys()) {
            this.graph.nodes.get(key).reset();
        }
    }

    start(algorithm) {
        this.reset();
        switch(algorithm) {
            case "astar":
                this.algorithm = new AStar();
                break;
            case "greedy":
                this.algorithm = new Greedy();
                break;
            case "dijkstra":
                this.algorithm = new Dijkstra();
                break;

            default:
                this.algorithm = new AStar();
                break;
        }

        this.algorithm.start(this.startNode, this.endNode);
    }

    nextStep() {
        const updatedNodes = this.algorithm.nextStep();
        if(this.algorithm.finished || updatedNodes.length === 0) {
            this.finished = true;
        }

        return updatedNodes;
    }
}