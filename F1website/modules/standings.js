import {
    Spinner
} from './spinner.js'

export class Standings {
    constructor() {
        this.url = 'https://ergast.com/api/f1/current/driverStandings.json';
        this.display = document.querySelector('.display');
        this.driverStandingsTemplate = document.getElementById('driver-standings');
        this.driverElementTemplate = document.getElementById('driver');
        this.driverListHeaderTemplate = document.getElementById('standings-header');

    }

    async getData() {
        if (sessionStorage.getItem('standingsData')) {
            console.log('got the data from ss')
            const ssStandingsData = JSON.parse(sessionStorage.getItem('standingsData'));
            const season = ssStandingsData.MRData.StandingsTable.StandingsLists[0].season;
            const currentRound = ssStandingsData.MRData.StandingsTable.StandingsLists[0].round;
            const driverList = ssStandingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            this.driversArray = [];
            driverList.forEach(driver => {
                let driverObj = {
                    position: driver.position,
                    lastName: driver.Driver.familyName,
                    firstName: driver.Driver.givenName,
                    points: driver.points

                }
                this.driversArray.push(driverObj);
            });

            return [season, currentRound];

        } else {
            const data = await fetch(this.url);
            console.log('called the api')
            const jsonData = await data.json();
            sessionStorage.setItem('standingsData', JSON.stringify(jsonData));
            const season = jsonData.MRData.StandingsTable.StandingsLists[0].season;
            const currentRound = jsonData.MRData.StandingsTable.StandingsLists[0].round;
            const driverList = jsonData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            this.driversArray = [];
            driverList.forEach(driver => {
                let driverObj = {
                    position: driver.position,
                    lastName: driver.Driver.familyName,
                    firstName: driver.Driver.givenName,
                    points: driver.points

                }
                this.driversArray.push(driverObj);
            });
            return [season, currentRound];
        }
    }

    async renderDrivers() {
        if (!this.display.innerHTML === "") {
            return;
        } else {
            const loadingElement = new Spinner();
            loadingElement.create(this.display);
            const driversData = await this.getData();
            if (!this.driversArray) {
                console.log('no drivers found')
            } else {
                this.display.innerHTML = "";
                const driverStandings = document.importNode(this.driverStandingsTemplate.content, true);
                const driverList = driverStandings.querySelector('.standings-list');
                const currentSeason = driverStandings.querySelector('.standings-season');
                currentSeason.textContent = `Current season: ${driversData[0]}`;
                const currentRound = driverStandings.querySelector('.standings-round')
                currentRound.textContent = `Concluded rounds: ${driversData[1]}`;
                this.display.appendChild(driverStandings);
                const driverListHeader = document.importNode(this.driverListHeaderTemplate.content, true);
                driverList.appendChild(driverListHeader);
                this.driversArray.forEach(driver => {
                    const driverElement = document.importNode(this.driverElementTemplate.content, true);
                    const driverPosElement = driverElement.querySelector('.driver-item__pos')
                    const driverNameElement = driverElement.querySelector('.driver-item__name')
                    const driverPointsElement = driverElement.querySelector('.driver-item__points')
                    driverPosElement.textContent = driver.position;
                    driverNameElement.textContent = `${driver.firstName} ${driver.lastName}`;
                    driverPointsElement.textContent = driver.points;
                    driverList.appendChild(driverElement);
                })

            }
        }
    }

}