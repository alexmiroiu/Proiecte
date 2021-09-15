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
    Display
} from './modules/display.js';
import {
    LastRaceResults
} from './modules/lastRace.js';

class App {

    constructor() {
        this.homeBtn = document.getElementById('logo');
        this.display = document.querySelector('.display');
        const driverStandingsBtn = document.querySelector('.standings-drivers');
        const calendarBtn = document.querySelector('.tracks-btn');
        const display = new Display();
        const lastRace = new LastRaceResults();

        window.addEventListener('load', () => {
            lastRace.render();
        })

        this.homeBtn.addEventListener('click', () => {
            display.clear();
            lastRace.render();

        })

        driverStandingsBtn.addEventListener('click', () => {
            display.clear();
            const currentStandings = new Standings();
            currentStandings.renderDrivers();

        });

        const schedule = new Calendar();
        calendarBtn.addEventListener('click', (e) => {
            display.clear();
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