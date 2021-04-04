export class CalendarEvent {
    name: string;
    imageURL: string;
    filters: string[];
    dateStart: Date;
    timeStart: string;
    timeEnd: string;
    dateEnd: Date;
    price: number;
    location: string;
    shortLocation: string;
    is24HourFormat: boolean;

    constructor(name: string, imageURL: string, filters: string[], price: number, location: string, shortLocation: string, dateStart: Date, timeStart: string, dateEnd?: Date, timeEnd?: string, is24HourFormat?: boolean) {
        this.name = name;
        this.imageURL = imageURL;
        this.filters = filters;
        this.price = price;
        this.location = location;
        this.shortLocation = shortLocation;
        this.dateStart = dateStart;
        this.timeStart = timeStart;
        this.timeEnd = !!timeEnd ? timeEnd : '<none>';
        this.dateEnd = !!dateEnd ? dateEnd : null;
        this.is24HourFormat = !!this.is24HourFormat ? this.is24HourFormat : false;
    }

    public getDefaultShortName(inputLocation: string) {
        return inputLocation.split(',')[0].trim();
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