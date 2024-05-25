class Passive {
    private name: string;
    private description: string;
    private maxLevel: number;
    private level: number = 0;
    private unlocked: boolean;
    private prereq: string;

    constructor(name: string, description: string, maxLevel: number, prereq: string = "none") {
        this.name = name;
        this.description = description;
        this.maxLevel = maxLevel;
        this.level = 0;
        if (prereq == "none") {
            this.unlocked = true;
        } else {
            this.unlocked = false;
        }
        this.prereq = prereq;
    }

    public setUnlock(unlocked: boolean) {
        this.unlocked = unlocked;
    }

    public getUnlock(): boolean {
        return this.unlocked;
    }

    public getLevel(): number {
        return this.level;
    }

    public getMaxLevel(): number {
        return this.maxLevel;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrereq(): string {
        return this.prereq;
    }

    public upgrade() {
        if (this.level < this.maxLevel) {
            this.level++;
        }
    }
}

export default Passive;