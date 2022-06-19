// SOLID - SINGLE RESPONSIBILITY PRINCIPLE
// ----------------------------------------------
// Reduce the dependency so that engineers can change one area of software without impacting others
// Additionaly they are intended to make designs easier to understand, maintain and extend
// They lead to better code for readability, maintainability, design patterns and testability
// One class should have one responsibility 

// This is very important principle because when we develop an application then day by day
// it become big and requirement will be changed, so if we violate this principle then
// many dependency will be mixed which will not be maintainable and class needs to update frequently
// and this frequent changes will break other principle as well and make a dead lock

// Single responsibility principle will make testing easier because of single unit of code

class Property {
    constructor(private readonly type: string, private readonly price: number, private readonly saleOrLet: string) {}
    
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
let residentialProperty: ResidentialProperty = new ResidentialProperty(property)
residentialProperty.setBedroom(3)
residentialProperty.setBathroom(2)

console.log(residentialProperty.getTitle())

property = new Property("Flat", 4000, "for sale")
residentialProperty = new ResidentialProperty(property)
residentialProperty.setBedroom(5)
residentialProperty.setBathroom(3)

console.log(residentialProperty.getTitle())