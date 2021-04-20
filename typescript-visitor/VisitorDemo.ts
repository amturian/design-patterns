// client

import PartsOrder from "./PartsOrder";
import Roof from "./Roof";
import Seat from "./Seat";
import CarPartsShippingVisitor from "./CarPartsShippingVisitor";
import CarPartsDisplayVisitor from "./CarPartsDisplayVisitor";

const carPartsOrder = new PartsOrder();

const roof = new Roof();
const frontRightSeat = new Seat();
const frontLeftSeat = new Seat();

carPartsOrder.addPart(roof);
carPartsOrder.addPart(frontRightSeat);
carPartsOrder.addPart(frontLeftSeat);

carPartsOrder.accept(new CarPartsShippingVisitor());
// carPartsOrder.accept(new CarPartsDisplayVisitor());