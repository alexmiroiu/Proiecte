export class DriversDetails {
    constructor() {
        this.driversApiUrl = 'https://ergast.com/api/f1/current/drivers.json';
        this.display = document.querySelector('.display');

    }

    async getDrivers() {
        const rawData = await fetch(this.driversApiUrl);
        const jsonData = await rawData.json();
        console.log(jsonData.MRData.DriverTable.Drivers);
    }
}