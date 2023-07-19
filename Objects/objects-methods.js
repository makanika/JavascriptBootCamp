let restuarant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvialability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restuarant.seatParty(72)
console.log(restuarant.checkAvialability(4))
restuarant.removeParty(5)
console.log(restuarant.checkAvialability(4))

