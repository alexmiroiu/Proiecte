class App {
    constructor() {

        this.display = document.querySelector('.display');


        const currentStandings = new Standings();
        console.dir(currentStandings.display)
        const standingsBtn = document.querySelector('.standings-btn');
        standingsBtn.addEventListener('click', () => {
            currentStandings.renderDrivers();

        });

        const schedule = new Calendar();
        schedule.getData();
    }

    clearDisplay() {
        let displayElements = this.display.children;
        console.log(displayElements);
        Array.from(displayElements).forEach(element => element.remove())
    }


}

class Spinner {
    constructor() {
        this.spinnerTemplate = document.querySelector('.loading-spinner');

    }

    create(parentElement) {
        this.spinner = document.importNode(this.spinnerTemplate.content, true);
        parentElement.appendChild(this.spinner);
    }


}


class Standings {
    constructor() {
        this.url = 'https://ergast.com/api/f1/current/driverStandings.json';
        this.display = document.querySelector('.display');
        this.driverStandingsTemplate = document.getElementById('driver-standings');
        this.driverElementTemplate = document.getElementById('driver');

    }



    async getData() {
        const data = await fetch(this.url);
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
        if (!this.display.innerHTML == "") {
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
                currentRound.textContent = `Current concluded rounds: ${driversData[1]}`;
                this.display.appendChild(driverStandings);
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

class Calendar {
    constructor() {
        this.display = document.querySelector('.display');
        this.url = 'https://ergast.com/api/f1/current.json';
    }

    async getData() {
        const data = await fetch(this.url);
        const parsedData = await data.json();
        const racesData = parsedData.MRData.RaceTable.Races;
        this.allRaces = [];
        racesData.forEach(race => {
            const raceItem = {
                name: race.raceName,
                roundNumber: race.round,
                country: race.Circuit.Location.country,
                date: race.date
            }
            this.allRaces.push(raceItem);
        })
        console.log(this.allRaces)


    }
}



new App();