function solve() {
    let buttons = [...document.getElementsByTagName('button')];
    let backupTiresDiv = document.querySelector('#exercise section:nth-child(2) fieldset:nth-child(1) div');
    let trucksDiv = document.querySelector('#exercise section:nth-child(2) fieldset:nth-child(2) div');
    let resultTextArea = document.getElementsByTagName('textarea')[0];
    let addNewTruckBtn = buttons[0];
    let addNewTireBtn = buttons[1];
    let goToWorkBtn = buttons[2];
    let endOfShift = buttons[3];

    let trucksObj = {};
    let backupTires = [];

    addNewTruckBtn.addEventListener('click', () => {
        let newTruckPlateNumber = document.getElementById('newTruckPlateNumber').value;
        let getNewTiresCondition = document.getElementById('newTruckTiresCondition').value.split(' ');
        if (!trucksObj.hasOwnProperty(newTruckPlateNumber)) {
            trucksObj[newTruckPlateNumber] = {"currSet": getNewTiresCondition, "totalKm": 0};
            let truckDiv = document.createElement('div');
            truckDiv.textContent = newTruckPlateNumber;
            trucksDiv.appendChild(truckDiv);
        }
    });

    addNewTireBtn.addEventListener('click', () => {
        let backupInput = document.getElementById('newTiresCondition').value;
        backupTires.push(backupInput.split(' ').map(Number));
        let currBackupDiv = document.createElement('div');
        currBackupDiv.setAttribute('class', 'tireSet');
        currBackupDiv.innerHTML = backupInput;
        backupTiresDiv.appendChild(currBackupDiv);
    });

    goToWorkBtn.addEventListener('click', () => {
        let plateNumber = document.getElementById('workPlateNumber').value;
        let currDistance = document.getElementById('distance').value;

        if (trucksObj.hasOwnProperty(plateNumber)) {
            let currAmountOfKilometers = (currDistance / 1000);
            
            let minNum = Math.min(...trucksObj[plateNumber]['currSet'])

            if (minNum < currAmountOfKilometers) {
                    //let smallestTyre = Math.min(...backupTires[0]);
                    let newBackup = backupTires[0].reduce(el => {
                        if (el >= currAmountOfKilometers) {
                            return true;
                        }
                    });

                    let currCollection = backupTires[0];

                    if (newBackup.length === 8) {
                        trucksObj[plateNumber]['currSet'] = currCollection;                        
                        backupTires.splice(0, 1);
                        document.getElementsByClassName('tireSet')[0].remove();
                    } else {
                        trucksObj[plateNumber]['totalKm'] += Number(currDistance);
                        trucksObj[plateNumber]['currSet'] = turkaGumi(trucksObj[plateNumber]['currSet'], currAmountOfKilometers);
                    }
                    
            } else {
                trucksObj[plateNumber]['totalKm'] += Number(currDistance);
                trucksObj[plateNumber]['currSet'] = turkaGumi(trucksObj[plateNumber]['currSet'], currAmountOfKilometers);
            }
        }
        console.log(trucksObj);
    });

    endOfShift.addEventListener('click', () => {
        let trucks = Object.entries(trucksObj);
        trucks.forEach(el => {
            resultTextArea.value += `Truck ${el[0]} has traveled ${el[1]['totalKm']}.\n`
        })
        resultTextArea.value += `You have ${backupTires.length} sets of tires left.\n`;
    })

    function turkaGumi(arr, turkane) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] -= turkane;
        }
        return arr;
    }
}