// SOLID - INTERFACE SEGREGATION PRINCIPLE
// ----------------------------------------------

// It similar to single responsibility principle but it focused on interface
// It states that, clients should not be forced to implement unnecessary methods which they will not use
// We should split our big or generic interfaces into smaller and specific one

// This is big interface which have multiple responsibility
// It will force to client (the implementation) to implement all methods weather it appropriate or not
interface PizzaApp {
    public acceptOrderOnline(): void
    public acceptOrderOnTelephone(): void

    // Payment
    public acceptPaypalPayment(): void
    public acceptCardPayment(): void
    public acceptCashOnDeliveryPayment(): void

}

// We can segregate it in based on online responsibility
interface PizzaAppOnline {
    public acceptOrderOnline(): void
    public acceptPaypalPayment(): void
    public acceptCardPayment(): void
}

// We can segregate it in based on offline responsibility
interface PizzaAppOffline {
    public acceptOrderOnTelephone(): void
    public acceptCashOnDeliveryPayment(): void
}