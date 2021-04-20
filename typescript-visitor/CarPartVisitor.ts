import Roof from "./Roof";
import Seat from "./Seat";
import PartsOrder from "./PartsOrder";

// visitor interface
interface CarPartVisitor {
    visitRoof(roof: Roof): void;
    visitSeat(seat: Seat): void;
    visitOrder(order: PartsOrder): void;
}

export default CarPartVisitor;