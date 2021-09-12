class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "20320320", "", "Hello", 123456);

// js와 다르게 type을 지정했기 때문에 Block배열만 넣을 수 있음.
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
