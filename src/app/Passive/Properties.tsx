
class PassiveNode {
    #currentLVL: number;
    #passiveLVL: number;
    #pREQ: boolean;
    #dREQ: string;
    constructor(currentLVL: number, pREQ = false, dREQ = 'none') {
        this.#currentLVL = currentLVL;
        this.#passiveLVL = 0;
        this.#pREQ = pREQ;
        this.#dREQ = dREQ;
    }
}

class Passive {
    #name: string;
    #pIMG: string;
    #description: string;
    #lvl: number;
    #node: PassiveNode; // You can create an instance of Node in Passive like this
}