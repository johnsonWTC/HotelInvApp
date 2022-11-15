
export interface Rooms{
totalRomms:number,
availableRooms: number,
bookedRooms:number,
}


export interface RoomList {
    roomType : string,
    amenities : string,
    price : number,
    roomNumber : number,
    photo : string,
    checkInTime : Date,
    checkOutTime : Date,
    rating : number
}