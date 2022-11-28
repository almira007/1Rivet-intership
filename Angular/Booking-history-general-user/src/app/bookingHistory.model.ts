/**
 * @author Almira Shaikh
 * @description "Model for login"
 */
export class bookingHistoryUser {
    public id: number;
    public date: string;
    public name: string;
    public bookOn: string;

    constructor(
        id: number,
        date: string,
        name: string,
        bookOn: string
    ) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.bookOn = bookOn;
    }


}
