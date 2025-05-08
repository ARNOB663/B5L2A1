"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function formatString(input, toUpper = true) {
        if (toUpper) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));
    function filterByRating(items) {
        return items.filter(item => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.0 },
        { title: "Book C", rating: 5.0 },
    ];
    console.log(filterByRating(books));
    function concatenateArrays(...arrays) {
        const result = [];
        for (const array of arrays) {
            for (const item of array) {
                result.push(item);
            }
        }
        return result;
    }
    console.log(concatenateArrays(["a", "b"], ["c"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());
    console.log(myCar.getModel());
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return value * 2;
        }
        throw new Error("Invalid input type");
    }
    console.log(processValue("hello"));
    console.log(processValue(10));
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        let mostExpensive = products[0];
        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        return mostExpensive;
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    console.log(getMostExpensiveProduct([]));
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        switch (day) {
            case Day.Monday:
            case Day.Tuesday:
            case Day.Wednesday:
            case Day.Thursday:
            case Day.Friday:
                return "Weekday";
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                throw new Error("Invalid day");
        }
    }
    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday));
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (n < 0) {
                        reject(new Error("Negative number not allowed"));
                    }
                    else {
                        resolve(n * n);
                    }
                }, 1000);
            });
        });
    }
    squareAsync(4).then(console.log);
    squareAsync(-3).catch(console.error);
}
