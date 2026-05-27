// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და 
// დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().
console.log("------------")
console.log("Task 1")
class Triangle{
    constructor(a,b,c){
        this.a = a 
        this.b = b 
        this.c = c 
    }

    getPerimeter(){
        return (this.a + this.b + this.c)
    }

    getArea(){
        // ვიპოვით ჯერ ნახევარ პერიმეტრს p=(a+b+c)/2
        let p = (this.a + this.b + this.c)/2
        //ფართბი არის  ფესვიდან p*(p-a)*(p-b)*(p-c)
        return Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
        
    }

    isRightTriangle(){
        // შევიტანოთ მასივში გვერდები და დავასორტიროთ ზრდადობით და შემეგ პითაგორის თეორემის საშუალებით გავიგებთ მართ კუთხა სამკუთხედს
        let sides = [this.a, this.b, this.c]

        sides.sort((a,b) => a-b)
        // console.log(sides.sort((a,b) => a-b))

        //გამოვიყენოთ პითაგორას თეორემა a^2 + b^2 = c^2
        return sides[0]**2 + sides[1]**2 === sides[2]**2
    }
    
}


let triangleABC = new Triangle(5, 3, 4)
console.log(triangleABC.getPerimeter())
console.log(triangleABC.getArea())
console.log(triangleABC.isRightTriangle())



// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear.
//  გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, 
// და დაამატე მეთოდი performanceIndex().
console.log("------------")
console.log("Task 2")

class Smartphone{
    constructor(brand, model, releaseYear){
        this.brand = brand
        this.model = model
        this.releaseYear = releaseYear
    }
}

class GamingPhone extends Smartphone{
    constructor(brand, model, releaseYear, gpuScore, batteryCapacity){
        super(brand, model, releaseYear)
        this.gpuScore = gpuScore
        this.batteryCapacity = batteryCapacity
    }
    
    performanceIndex(){
        return this.gpuScore + this.batteryCapacity
    }
}

let smartphone1 = new Smartphone("Apple", "17 pro max", 2026)
let smartphone2 = new GamingPhone("OnePlus", "Ace 6 Ultra", 2026, 1311664, 7300)
console.log(smartphone1)
console.log(smartphone2)
console.log(smartphone2.performanceIndex(), "Performance index")

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
console.log("------------")
console.log("Task 3")
class CryptoWallet{
    constructor(initialBalance) {
        this.balance = initialBalance
        this.history = []
    }

    deposit(amount) {
        this.balance += amount;
        this.history.push(`+${amount}`)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            this.history.push(`failed withdraw ${amount}`)
            return "Not enough balance";
        }

        this.balance -= amount
        this.history.push(`-${amount}`)
    }

    transfer(amount, wallet) {
        if (amount > this.balance) 
        {
            return "Not enough balance"
        }

        this.balance -= amount
        wallet.balance += amount

        this.history.push(`transfer -${amount}`)
        wallet.history.push(`transfer +${amount}`)
    }
    getHistory() {
        return this.history
    }
}

let wallet1 = new CryptoWallet(4000)
console.log(wallet1.balance, "Wallet 1 ")
let wallet2 = new CryptoWallet(0)
console.log(wallet2.balance, "Wallet 2")

wallet1.deposit(1000)
wallet1.transfer(1000, wallet2)
wallet2.withdraw(300)
console.log(wallet1.getHistory())
console.log(wallet2.getHistory())
console.log(wallet1.balance,"Wallet 1")
console.log(wallet2.balance,"Wallet2")


// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()
console.log("------------")
console.log("Task 4")

class Wishlist{
    constructor(){
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    deleteItem(id){
        this.items = this.items.filter(item => item.id !== id)
    }

    updateItem(id, newItem){
        let item = this.items.find(item => item.id === id)
        if (item) {
            item.name = newItem
        }
    }
}


let wishList = new Wishlist()
wishList.addItem({ id: 1, name: "Car" })
wishList.addItem({ id: 2, name: "Mobile" })

console.log(wishList.items)

wishList.updateItem(1, "Laptop")

console.log(wishList.items)

wishList.deleteItem(1)
console.log(wishList.items)



// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(),
//  რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, 
// დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).
console.log("------------")
console.log("Task 5")
class Freelancer{
    constructor(hourlyRate){
        this.hourlyRate = hourlyRate
    }

    calculateEarnings(hour){
        let workTime = hour * this.hourlyRate

        if(hour > 160){
            let bonusHour = hour - 160
            workTime += bonusHour * this.hourlyRate * 0.5;
        }

        return workTime
    }

}

let work = new Freelancer(160);

console.log(work.calculateEarnings(190));