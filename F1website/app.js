import { Spinner } from './modules/spinner.js';
import { Standings } from './modules/standings.js';
import { Calendar} from './modules/calendar.js';

class App {
    
    constructor() {
        this.display = document.querySelector('.display');
        const standingsBtn = document.querySelector('.standings-btn');
        const calendarBtn = document.querySelector('.tracks-btn');
        
        standingsBtn.addEventListener('click', () => {
            this.clearDisplay()
            const currentStandings = new Standings();
            currentStandings.renderDrivers();

        });

        const schedule = new Calendar();
        calendarBtn.addEventListener('click', (e) => {
            schedule.render(e.target.textContent);
        })
        this.display.addEventListener('click', (e) => {
            if(e.target.textContent === 'Previous' || e.target.textContent === 'Previous') {
                schedule.render(e.target.textContent);
            }
            
        })


    }

    clearDisplay() {
        let displayElements = this.display.children;
        console.log(displayElements);
        Array.from(displayElements).forEach(element => element.remove())
    }


}

new App();