export class Result {

    public bus_dt: string;
    public particular: string;
    public value: string;
    public query: string;

    constructor(bus_dt: string,
        particular: string,
        value: string,
        query: string
    ) {
        this.bus_dt = bus_dt;
        this.particular = particular;
        this.value = value;
        this.query = query;
    }

}