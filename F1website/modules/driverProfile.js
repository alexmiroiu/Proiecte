export class DriverProfile {
    constructor(driverId) {
        this.display = document.querySelector('.display');
        this.driverId = driverId;
    }   

    async getBasicInfo() {
        const rawData = await Promise.all([
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}.json`),
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}/constructors/.json`), 
            fetch(`https://ergast.com/api/f1/driverStandings/1.json?limit=100`), 
            fetch(`https://ergast.com/api/f1/drivers/${this.driverId}/results/.json?limit=400`)
        ]);
        const parsedData = [];
        rawData.forEach(dataItem => {
            const fdi = dataItem.json()
            parsedData.push(fdi);
        });
        const finalData = await Promise.all(parsedData);
        const [rawBasicInfo, constructorInfo, rawAllTimeStandings, rawDriverResults] = finalData;

        //get championship wins
        const allTimeWinners = [];
        rawAllTimeStandings.MRData.StandingsTable.StandingsLists.forEach(driver => {
            let driverName = driver.DriverStandings[0].Driver.driverId;
            allTimeWinners.push(driverName);
        });
        const driverWins = allTimeWinners.filter(driver => driver === this.driverId).length;

        const allFinishPositions = [];
        rawDriverResults.MRData.RaceTable.Races.forEach(race => {
            const finished = race.Results[0].position;
            allFinishPositions.push(finished);
        })
        




        //construct the return object
        const basicInfo = {
            name: `${rawBasicInfo.MRData.DriverTable.Drivers[0].givenName} ${rawBasicInfo.MRData.DriverTable.Drivers[0].familyName}`,
            nationality: rawBasicInfo.MRData.DriverTable.Drivers[0].nationality,
            dob: rawBasicInfo.MRData.DriverTable.Drivers[0].dateOfBirth,
            team: constructorInfo.MRData.ConstructorTable.Constructors[0].name,
            championshipWins: driverWins,
            totalRaces: rawDriverResults.MRData.totalRaces,

        }

        console.log(basicInfo);

    }
}