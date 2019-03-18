class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.servicesPricing = {};
        this.currentBookingNumber = 1;
    }

    set capacity(capacity) {
        //if (capacity % 10 === 0) {
            this._capacity = {
                single: (capacity - (capacity * 0.5)),
                double: (capacity - (capacity * 0.7)),
                maisonette:(capacity - (capacity * 0.8))
            }
        //}
        
    }

    get capacity() {
        return this._capacity;
    }

    set roomsPricing(val) {
        this._roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get roomsPricing() {
        return this._roomsPricing;
    }

    set servicesPricing(val) {
        this._servicesPricing = {
            'food': 10,
            'drink': 15,
            'housekeeping': 25
        };
    }

    get servicesPricing() {
        return this._servicesPricing;
    }

    rentARoom(clientName, roomType, nights) {
        let roomAvailability = this._capacity[roomType];
        if (roomAvailability > 0) {
            this.bookings.push({
                clientName,
                roomType, 
                nights,
                currentBookingNumber: this.currentBookingNumber,
                services: []
            });

            this.currentBookingNumber++;
            this._capacity[roomType]--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`
        } else {
            let result = `No ${roomType} rooms available!`;
            Object.keys(this._capacity).filter(el => el !== roomType).forEach(el => {
                result += ` Available ${el} rooms: ${this._capacity[el]}.`
            });
            return result;
        }   
    }

    roomService(currentBookingNumber, serviceType) {

        if (!this._servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        if (currentBookingNumber <= this.currentBookingNumber) {
            this.bookings[currentBookingNumber - 1]['services'].push(serviceType);
            return `Mr./Mrs. ${this.bookings[currentBookingNumber - 1]['clientName']}, Your order for ${serviceType} service has been successful.`
        } else {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
    }

    checkOut(currentBookingNumber) {
        if (currentBookingNumber <= this.currentBookingNumber) {
            let currentRoom = this.bookings[currentBookingNumber - 1];
            
            this._capacity[currentRoom.roomType]++;

            let nightsStayed = Number(currentRoom.nights) * this._roomsPricing[currentRoom.roomType];
            let servicesMoney = 0;

            currentRoom.services.forEach(el => {
                servicesMoney += this._servicesPricing[el];
            })

            this.bookings.splice(currentBookingNumber - 1, 1);

            if (currentRoom.services.length === 0) {
                return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom.clientName}. The total amount of money you have to pay is ${nightsStayed} BGN.`;
            } else {
                return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom.clientName}. The total amount of money you have to pay is ${totalMoney + servicesMoney} BGN. You have used additional room services, costing ${servicesMoney} BGN.`
            }
        } else {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
    }

    report() {
        let result = `${this.name.toUpperCase()} DATABASE:\n`
        result += `--------------------\n`;

        if (this.bookings.length === 0) {
            result += 'There are currently no bookings.';
            return result;
        }

        this.bookings.forEach(el => {
            let booking = el;
            result += `bookingNumber - ${booking.currentBookingNumber}\n`
            result += `clientName - ${booking.clientName}\n`;
            result += `roomType - ${booking.roomType}\n`;
            result += `nights - ${booking.nights}\n`;
            if (booking.services.length !== 0) {
                result += `services: ${booking.services.join(', ')}`;
            }
            if (this.bookings.indexOf(el) !== this.bookings.length - 1) {
                result += `----------\n`;
            }
        });
        return result;
    }
}