import CarPart from "./CarPart";
import CarPartVisitor from "./CarPartVisitor";

// concrete element
class Roof implements CarPart {
    accept(visitor: CarPartVisitor): void {
        visitor.visitRoof(this);
    }
}

export default Roof;