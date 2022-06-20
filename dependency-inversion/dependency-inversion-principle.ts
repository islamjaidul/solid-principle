// SOLID - DEPENDENCY INVERSION PRINCIPLE
// ----------------------------------------------

// It states that, "Depends on abstractions, not on concretions"
// We should design our software in such way that various moudle can be separated from each other,
// using abstraction layer to bind them each other

// It intended to make sure that we can develop a loosely coupled software
// We should inject the dependency to any module OR class, which will be decoupled, extendable and maintainable

// Dependency inversion is design pattern which is also known as dependency injection

class Property {
    constructor(
        private readonly type: string, 
        private readonly price: number, 
        private readonly saleOrLet: string
    ) {}
    
    public getType() {
        return this.type
    }

    public getPrice() {
        return this.price
    }

    public getSaleOrLet() {
        return this.saleOrLet
    }
}

// Create different types of class based on Property which is related
// e.g. CommercialProperty, AuctionProperty
class ResidentialProperty {
    private bedroom: number = 0
    private bathroom: number = 0

    // We are receiving "property" as dependency as argument in constructor
    // If we create an object inside the constructor then it will be tightly coupled
    // and violation of "dependency inversion principle"
    constructor(private property: Property) {}

    public setBedroom(bedroom: number) {
        this.bedroom = bedroom
    }

    public setBathroom(bathroom: number) {
        this.bathroom = bathroom
    }

    public getTitle(): string {
        return `${this.bedroom} bedroom with ${this.bathroom} bathroom ${this.property.getType()} residential ${this.property.getSaleOrLet().toUpperCase()} - PRICE is ${this.property.getPrice()}`
    }
}

let property: Property = new Property("Flat", 2000, "to let")

// Injecting dependency in ResidentialProperty constructor
let residentialProperty: ResidentialProperty = new ResidentialProperty(property)
residentialProperty.setBedroom(3)
residentialProperty.setBathroom(2)

console.log(residentialProperty.getTitle())

property = new Property("Flat", 4000, "for sale")

// Injecting dependency in ResidentialProperty constructor
residentialProperty = new ResidentialProperty(property)
residentialProperty.setBedroom(5)
residentialProperty.setBathroom(3)

console.log(residentialProperty.getTitle())