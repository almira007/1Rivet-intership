/**
 * @author Almira Shaikh
 * @description "Model for login"
 */
export class bookingHistoryUser {
    public id: number;
    public date: string;
    public studioName: string;
    public artistName: string;
    public bookOn: string;
    public studioType: string;
    public bookingFor: string;

    constructor(
        id: number,
        date: string,
        studioName: string,
        artistName: string,
        bookOn: string,
        studioType: string,
        bookingFor: string
    ) {
        this.id = id;
        this.date = date;
        this.studioName = studioName;
        this.artistName = artistName;
        this.bookOn = bookOn;
        this.studioType = studioType;
        this.bookingFor = bookingFor;
    }
}
export class studioBooking {
    public id: number;
    public studioBookingDate: string;
    public studioName: string;
    public studioType: string;
    public bookOnDate: string;

    constructor(
        id: number,
        studioBookingDate: string,
        studioName: string,
        studioType: string,
        bookOnDate: string
    ) {
        this.id = id;
        this.studioBookingDate = studioBookingDate;
        this.studioName = studioName;
        this.studioType = studioType;
        this.bookOnDate = bookOnDate;
    }
}
export class artistBooking {
    public id: number;
    public artistBookingDate: string;
    public artistName: string;
    public artistBookOnDate: string;

    constructor(
        id: number,
        artistBookingDate: string,
        artistName: string,
        artistBookOnDate: string,
    ) {
        this.id = id;
        this.artistBookingDate = artistBookingDate;
        this.artistName = artistName;
        this.artistBookOnDate = artistBookOnDate;
    }
}
