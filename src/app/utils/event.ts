export class Event {
    name: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    price: number;
    location: string;

    constructor(name: string, date: string, price: number, location: string, timeStart: string, timeEnd?: string) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.location = location;
        this.timeStart = timeStart;
        this.timeEnd = !!this.timeEnd? this.timeEnd : '<none>';
    }
}