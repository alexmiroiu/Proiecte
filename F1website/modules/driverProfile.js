import {
    Spinner
} from './spinner.js';


export class DriverProfile {
    constructor(driverId) {
        this.display = document.querySelector('.display');
        this.driverId = driverId;
        this.driverProfileTemplate = document.getElementById('driver-profile');

    }   

    async getDriverData() {
        //fetching all info needed to construct the driver profile
        const rawData = await Promise.all([
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}.json`),
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}/constructors/.json`), 
            fetch(`https://ergast.com/api/f1/driverStandings/1.json?limit=100`), 
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}/results/.json?limit=400`)
        ]);
        //parsed the info 
        const parsedData = [];
        rawData.forEach(dataItem => {
            const parsedDataItem = dataItem.json()
            parsedData.push(parsedDataItem);
        });
        const finalData = await Promise.all(parsedData);

        // destructured the final data array into constants i can use later 
        const [rawBasicInfo, constructorInfo, rawAllTimeStandings, rawDriverResults] = finalData;

        //got championship wins by creating an array containing the number of times our selected driver is included in the alltime winners array
        const allTimeWinners = [];
        rawAllTimeStandings.MRData.StandingsTable.StandingsLists.forEach(driver => {
            let driverName = driver.DriverStandings[0].Driver.driverId;
            allTimeWinners.push(driverName);
        });
        const driverChampionshipWins = (allTimeWinners.filter(driver => driver === this.driverId).length).toString();
        // created an array with all finished races and the position finished in the respective race
        const allFinishPositions = [];
        rawDriverResults.MRData.RaceTable.Races.forEach(race => {
            const finished = race.Results[0].position;
            allFinishPositions.push(finished);
        })
        //got all wins by filtering the results in the allFinishPositions array
        const allWins = (allFinishPositions.filter(position => position === '1').length).toString();
        //got all podiums by filtering the results in the allFinishPositions array
        const allPodiums = (allFinishPositions.filter(position => {
            if(Number(position) <= 3) {
                return position;
            }    
        }).length).toString();
        //got best result wins by filtering the results in the allFinishPositions array
        const bestFinish = allFinishPositions.sort((a, b) => a-b)[0];
        const bestFinishNumberOfTimes = (allFinishPositions.filter(position => position == bestFinish).length).toString();
        console.log('Best finish is position: ' + bestFinish);
        console.log('He finished in this position ' + bestFinishNumberOfTimes + ' times')
    
        //construct the return object
        const basicInfo = {
            name: `${rawBasicInfo.MRData.DriverTable.Drivers[0].givenName} ${rawBasicInfo.MRData.DriverTable.Drivers[0].familyName}`,
            nationality: rawBasicInfo.MRData.DriverTable.Drivers[0].nationality,
            dob: rawBasicInfo.MRData.DriverTable.Drivers[0].dateOfBirth,
            team: constructorInfo.MRData.ConstructorTable.Constructors[0].name,
            championshipWins: driverChampionshipWins,
            totalRaces: rawDriverResults.MRData.total,
            raceWins: allWins,
            podiums: allPodiums,
            bestFinish,
            bestFinishNumberOfTimes
        }

        console.log(basicInfo);
        return basicInfo;

    }

    async renderDriver() {
        this.display.innerHTML='';
        const loadingSpinner = new Spinner();
        loadingSpinner.create(this.display);
        const driverData = await this.getDriverData();
        this.display.innerHTML = '';
        const profileElements = document.importNode(this.driverProfileTemplate.content, true);
        profileElements.querySelector('.driver-profile__title').textContent = driverData.name;
        profileElements.querySelector('.driver-profile__dob').textContent += driverData.dob;
        profileElements.querySelector('.driver-profile__nationality').textContent += driverData.nationality;
        profileElements.querySelector('.driver-profile__photo').src = `./images/drivers/${this.driverId}.jpg`;
        profileElements.querySelector('.driver-profile__team').textContent += driverData.team;
        profileElements.querySelector('.driver-profile__championships').textContent += driverData.championshipWins;
        profileElements.querySelector('.driver-profile__races').textContent += driverData.totalRaces;
        profileElements.querySelector('.driver-profile__wins').textContent += driverData.raceWins;
        profileElements.querySelector('.driver-profile__podiums').textContent += driverData.podiums;
        if(driverData.bestFinishNumberOfTimes === '1') {
        profileElements.querySelector('.driver-profile__best').textContent += `${driverData.bestFinish} (${driverData.bestFinishNumberOfTimes} time) `;
        } else {
        profileElements.querySelector('.driver-profile__best').textContent += `${driverData.bestFinish} (${driverData.bestFinishNumberOfTimes} times) `;
        }
        this.display.appendChild(profileElements);
    }
}