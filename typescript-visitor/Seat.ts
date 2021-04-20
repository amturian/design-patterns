import CarPart from "./CarPart";
import CarPartVisitor from "./CarPartVisitor";

// concrete element
class Seat implements CarPart {
    accept(visitor: CarPartVisitor): void {
        visitor.visitSeat(this);
    }
}

export default Seat;