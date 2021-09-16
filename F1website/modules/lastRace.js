import {
    Spinner
} from './spinner.js';

export class LastRaceResults {
    constructor() {
        this.url = 'https://ergast.com/api/f1/current/last/results.json';
        this.display = document.querySelector('.display');
        this.raceResultsInfoTemplate = document.getElementById('last-race-info');
        this.driverItemTemplate = document.getElementById('lr-driver-item');
        this.resultsHeaderTemplate = document.getElementById('lr-header');

    }

    async getData() {
        if (sessionStorage.getItem('lastRace')) {
            const lastRaceInfo = JSON.parse(sessionStorage.getItem('lastRace'));
            return lastRaceInfo;
        } else {
            const rawData = await fetch(this.url);
            const dataToJson = await rawData.json();
            const raceStandings = [];
            dataToJson.MRData.RaceTable.Races[0].Results.forEach(driver => {
                const driverData = {
                    carNumber: driver.number,
                    position: driver.position,
                    name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                    team: driver.Constructor.name,
                    points: driver.points,
                    status: driver.status
                }
                raceStandings.push(driverData)
            });
            const lastRaceInfo = {
                season: dataToJson.MRData.RaceTable.season,
                round: dataToJson.MRData.RaceTable.round,
                roundName: dataToJson.MRData.RaceTable.Races[0].raceName,
                circuitName: dataToJson.MRData.RaceTable.Races[0].Circuit.circuitName,
                driverStandings: raceStandings
            }
            console.log(lastRaceInfo);
            sessionStorage.setItem('lastRace', JSON.stringify(lastRaceInfo));
            return lastRaceInfo;

        }
    }

    async render() {
        const loadingSpinner = new Spinner();
        loadingSpinner.create(this.display);
        const lastRaceData = await this.getData();
        this.display.innerHTML = '';
        const lastRaceElements = document.importNode(this.raceResultsInfoTemplate.content, true);
        const lastRaceStandings = lastRaceElements.querySelector('.lr-standings');
        lastRaceElements.querySelector('.lr-gp-name').textContent = `${lastRaceData.roundName} at circuit ${lastRaceData.circuitName}`;
        lastRaceElements.querySelector('.lr-round-number').textContent += lastRaceData.round;
        const lastRaceListHeader = document.importNode(this.resultsHeaderTemplate.content, true).querySelector('.lr-header');
        lastRaceStandings.appendChild(lastRaceListHeader);
        lastRaceData.driverStandings.forEach(driver => {
            const driverItem = document.importNode(this.driverItemTemplate.content, true);
            driverItem.querySelector('.lr-driver-item__pos').textContent = driver.position;
            driverItem.querySelector('.lr-driver-item__name').textContent = driver.name;
            driverItem.querySelector('.lr-driver-item__car-number').textContent = driver.carNumber;
            driverItem.querySelector('.lr-driver-item__team').textContent = driver.team;
            const finishStatus = driverItem.querySelector('.lr-driver-item__status');
            finishStatus.textContent = driver.status;
            if(finishStatus.innerText !== 'Finished') {
                finishStatus.style.color = 'red';
            }
            driverItem.querySelector('.lr-driver-item__points').textContent = driver.points;
            lastRaceStandings.appendChild(driverItem);
        })
        this.display.appendChild(lastRaceElements);

    }
}