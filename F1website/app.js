class Standings {
    constructor() {
        this.url = 'https://ergast.com/api/f1/current/driverStandings.json';
        this.display = document.querySelector('.display');
        this.driverStandingsTemplate = document.getElementById('driver-standings');
        this.driverElementTemplate = document.getElementById('driver');

    }


    async getData() {
        const data = await fetch(this.url);
        console.log('data recieved')
        const jsonData = await data.json();
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

    async renderDrivers() {
        const driversData = await this.getData();
        if(!this.driversArray){
            console.log('no drivers found')
        } else {
            const driverStandings = document.importNode(this.driverStandingsTemplate.content, true);
            this.display.appendChild(driverStandings);
            
        }
    }

}




let currentStandings = new Standings();
currentStandings.renderDrivers();




// currentStandings.render();
// driverStandings.renderData();
// document.querySelector('#logo').addEventListener('click', () => {
//     currentStandings.driversArray[0].classList.add('yellow');
// })
