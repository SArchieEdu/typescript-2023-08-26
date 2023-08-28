// public protected private
// strict =======================>
export class Node {
    title;
    x = 0;
    y = 0;
    constructor(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
}
class FactoryNode extends Node {
    render() { }
    getSize() { }
}
class StorageNode extends Node {
    render() { }
    getSize() { }
    getTitle() {
        return `title: ${super.getTitle()}`;
    }
}
class CarNode extends Node {
    render() { }
    getSize() { }
    constructor() {
        super("");
    }
    getTitle() {
        return `title: ${super.getTitle()}`;
    }
}
function render(rootNode) {
    rootNode.render();
}
const factoryNode = new FactoryNode("Factory");
// factoryNode.title;
render(factoryNode);
