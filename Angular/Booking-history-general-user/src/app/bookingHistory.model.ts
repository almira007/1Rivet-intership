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
