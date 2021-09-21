import {
    Spinner
} from './modules/spinner.js';
import {
    Standings
} from './modules/standings.js';
import {
    Calendar
} from './modules/calendar.js';
import {
    LastRaceResults
} from './modules/lastRace.js';
import {
    CStandings
} from './modules/cStandings.js';
import {
    DriversDetails
} from './modules/driversDetails.js';
import {
    Modal
} from './modules/modal.js';

class App {

    constructor() {
        this.homeBtn = document.getElementById('logo');
        this.display = document.querySelector('.display');
        const driverStandingsBtn = document.querySelector('.standings-drivers');
        const constructorsStandingsBtn = document.querySelector('.standings-constructors');
        const calendarBtn = document.querySelector('.tracks-btn');
        const searchDriversBtn = document.querySelector('.search-drivers-btn');
        const lastRace = new LastRaceResults();

        window.addEventListener('load', () => {
            const modal = new Modal();
            modal.render();
            lastRace.render();
        })

        constructorsStandingsBtn.addEventListener('click', () => {
            this.display.innerHTML = '';
            const constructors = new CStandings();

            constructors.render()
        })

        searchDriversBtn.addEventListener('click', () => {
            this.display.innerHTML = '';
            const searchDrivers = new DriversDetails();
            searchDrivers.render()
        })

        this.homeBtn.addEventListener('click', () => {
            this.display.innerHTML = '';
            lastRace.render();

        })

        driverStandingsBtn.addEventListener('click', () => {
            this.display.innerHTML = '';
            const currentStandings = new Standings();
            currentStandings.renderDrivers();

        });

        const schedule = new Calendar();
        calendarBtn.addEventListener('click', (e) => {
            this.display.innerHTML = '';
            schedule.render(e.target.textContent);
        })
        this.display.addEventListener('click', (e) => {
            if ((e.target.textContent === 'Previous' || e.target.textContent === 'Next') && schedule.active === true) {
                console.log(schedule.currentPage)
                schedule.render(e.target.textContent);
            }
        })
    }


}

new App();