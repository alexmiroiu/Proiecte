



class Standings {
    constructor(apiUrl, parentElement, title) {
        this.url = apiUrl;
        this.display = parentElement;
        this.title = title;
    }

    async render() {
        const data = await fetch(this.url);
        console.log('data recieved')
        const jsonData = await data.json();
        const season = jsonData.MRData.StandingsTable.StandingsLists[0].season;
        const currentRound = jsonData.MRData.StandingsTable.StandingsLists[0].round;
        const driverList = jsonData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(driverList);
        driverList.forEach(driver => {
            console.log('done')
            let driverElement = document.createElement('li');
            driverElement.classList.add('driverItem');
            driverElement.innerHTML = `
            <div>${driver.position}</div>
            <div>${driver.Driver.givenName} ${driver.Driver.familyName}</div>
            <div>${driver.points}</div>`;
            driverElement.style.visibility = 'hidden';
            this.display.appendChild(driverElement);

            setTimeout(() => {
            driverElement.style.visibility = 'visible';

            }, 1000);

        });
    }


}



const displayTitle = document.querySelector('.display h1');
const displayList = document.querySelector('.display ul');
let currentStandings = new Standings('https://ergast.com/api/f1/current/driverStandings.json', displayList, displayTitle);

currentStandings.render();
// driverStandings.renderData();

