import CarPart from "./CarPart";
import CarPartVisitor from "./CarPartVisitor";

// concrete element
class PartsOrder implements CarPart {
    parts: CarPart[] = [];

    public addPart(part: CarPart): void {
        this.parts.push(part);
    }

    public getParts(): CarPart[] {
        return this.parts;
    }

    public accept(visitor: CarPartVisitor) {
        this.parts.forEach(p => p.accept(visitor));
        visitor.visitOrder(this);
    }
}

export default PartsOrder;