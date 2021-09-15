export class LastRaceResults {
    constructor () {
        this.url = 'https://ergast.com/api/f1/current/last/results.json';
        this.display = document.querySelector('.display');
        this.raceResultsInfoTemplate = document.getElementById('last-race-info');
        this.driverItemTemplate = document.getElementById('lr-driver-item');


    }

    async getData() {
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
        return lastRaceInfo;
    }

    async render() {
        const lastRaceData = await this.getData();
        const lastRaceElements = document.importNode(this.raceResultsInfoTemplate.content, true);
        lastRaceElements.querySelector('.lr-gp-name').textContent = lastRaceData.roundName;
        lastRaceElements.querySelector('.lr-circuit-name').textContent = lastRaceData.circuitName;
        lastRaceElements.querySelector('.lr-round-number').textContent = lastRaceData.round;
        const lastRaceStandings = lastRaceElements.querySelector('.lr-standings');
        lastRaceData.driverStandings.forEach(driver => {
            const driverItem = document.importNode(this.driverItemTemplate.content, true);
            driverItem.querySelector('.lr-driver-item__pos').textContent = driver.position;
            driverItem.querySelector('.lr-driver-item__name').textContent = driver.name;
            driverItem.querySelector('.lr-driver-item__car-number').textContent = driver.carNumber;
            driverItem.querySelector('.lr-driver-item__team').textContent = driver.team;
            driverItem.querySelector('.lr-driver-item__status').textContent = driver.status;
            driverItem.querySelector('.lr-driver-item__points').textContent = driver.points;
            lastRaceStandings.appendChild(driverItem);
        })
        this.display.appendChild(lastRaceElements);
        
    }
}