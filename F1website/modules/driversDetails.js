import {
    Spinner
} from './spinner.js';

import {
    DriverProfile
} from './driverProfile.js';

export class DriversDetails {
    constructor() {
        this.driversApiUrl = 'https://ergast.com/api/f1/current/drivers.json';
        this.display = document.querySelector('.display');
        this.driversListTemplate = document.getElementById('drivers-list');
        this.driverItemTemplate = document.getElementById('dl-driver-item');


    }

    async getDrivers() {
        const rawData = await fetch(this.driversApiUrl);
        const jsonData = await rawData.json();
        const filteredData = jsonData.MRData.DriverTable.Drivers;
        const driversList = [];
        filteredData.forEach(driver => {
            const driverElement = {
                name: `${driver.givenName} ${driver.familyName}`,
                number: driver.permanentNumber,
                id: driver.driverId,
                code: driver.code
            }
            driversList.push(driverElement);
        });
        console.log(driversList)
        return driversList;
    }

    async render() {
        const loadingSpinner = new Spinner();
        this.display.innerHTML = '';
        loadingSpinner.create(this.display);
        const driverItems = await this.getDrivers();
        this.display.innerHTML = '';
        const driverListElements = document.importNode(this.driversListTemplate.content, true);
        const driversList = driverListElements.querySelector('.drivers-list');
        driverItems.forEach(driver => {
            const driverItemContainer = document.importNode(this.driverItemTemplate.content, true);
            const driverItem = driverItemContainer.querySelector('.dl-driver-item');
            driverItem.querySelector('.dl-driver-item__name').textContent = driver.name;
            driverItem.querySelector('.dl-driver-item__number').textContent = driver.number;
            driverItem.querySelector('.dl-driver-item__helmet').src = `./images/drivers/${driver.id}Helmet.png`;
            driverItem.addEventListener('click', () => {
                const driverProfile = new DriverProfile(driver.id);
                driverProfile.renderDriver();
            })
            driversList.appendChild(driverItem);

        })
        this.display.appendChild(driverListElements);


    }
}