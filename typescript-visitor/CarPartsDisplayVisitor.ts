import CarPartVisitor from "./CarPartVisitor";
import Roof from "./Roof";
import Seat from "./Seat";
import PartsOrder from "./PartsOrder";

// concrete visitor
class CarPartsDisplayVisitor implements CarPartVisitor {
    visitOrder(order: PartsOrder): void {
        console.log('Displaying an order');
    }

    visitRoof(roof: Roof): void {
        console.log('Displaying a roof');
    }

    visitSeat(seat: Seat): void {
        console.log('Displaying a seat');
    }
}

export default CarPartsDisplayVisitor;