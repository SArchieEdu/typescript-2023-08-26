// public protected private
// strict =======================>

export abstract class Node {
  x: number = 0;
  y: number = 0;

  constructor(private title: string) {}

  public getTitle() {
    return this.title;
  }

  abstract render(): void;
  abstract getSize(): void;
}

class FactoryNode extends Node {
  render(): void {}
  getSize(): void {}
}

class StorageNode extends Node {
  render(): void {}
  getSize(): void {}

  getTitle(): string {
    return `title: ${super.getTitle()}`;
  }
}

class CarNode extends Node {
  render(): void {}
  getSize(): void {}

  constructor() {
    super("");
  }

  getTitle(): string {
    return `title: ${super.getTitle()}`;
  }
}

function render(rootNode: Node) {
  rootNode.render();
}

const factoryNode = new FactoryNode("Factory");
// factoryNode.title;

render(factoryNode);
