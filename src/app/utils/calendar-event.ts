export class CalendarEvent {
    name: string;
    date: Date;
    timeStart: string;
    timeEnd: string;
    price: number;
    location: string;
    is24HourFormat: boolean;

    constructor(name: string, date: Date, price: number, location: string, timeStart: string, timeEnd?: string, is24HourFormat?: boolean) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.location = location;
        this.timeStart = timeStart;
        this.timeEnd = !!this.timeEnd ? this.timeEnd : '<none>';
        this.is24HourFormat = !!this.is24HourFormat ? this.is24HourFormat : false;
    }

    public getTimeString(inputTime: string): string {
        const rawTimeData = inputTime.split(':');
        if (this.is24HourFormat)
            return `${rawTimeData[0]}:${rawTimeData[1]}`;
        else {
            const parsedHour = parseInt(rawTimeData[0]);
            if (parsedHour > 12)
                return `${parsedHour - 12}:${rawTimeData[1]} PM`;
            else if (parsedHour == 0)
                return `12:${rawTimeData[1]} AM`;
            else if (parsedHour != 12)
                return `${parsedHour}:${rawTimeData[1]} AM`;
            else
                return `${parsedHour}:${rawTimeData[1]} PM`;
        }
    }
}