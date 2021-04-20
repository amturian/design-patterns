import CarPartVisitor from "./CarPartVisitor";

interface CarPart {
    accept(visitor: CarPartVisitor): void;
}

export default CarPart;