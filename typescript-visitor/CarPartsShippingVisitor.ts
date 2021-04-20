import CarPartVisitor from "./CarPartVisitor";
import Roof from "./Roof";
import Seat from "./Seat";
import PartsOrder from "./PartsOrder";

// concrete visitor
class CarPartsShippingVisitor implements CarPartVisitor {
    shippingAmount: number = 0;

    visitRoof(roof: Roof): void {
        this.shippingAmount += 18;
        console.log('Roof cost: 18. Added to shipping amount');
    }

    visitSeat(seat: Seat): void {
        console.log('Basic seat cost: 20. Added to shipping amount');
        this.shippingAmount += 18;
    }

    visitOrder(order: PartsOrder): void {

        const parts = order.getParts();
        if (parts.length > 3) {
            console.log('Applied 5$ discount for orders containing more than 3 items');
            this.shippingAmount -= 5;
        }

        console.log('Shipping amount is: ', this.shippingAmount);
    }
}

export default CarPartsShippingVisitor;