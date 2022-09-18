export class User {
    public firstName: string;
    public lastName: string;
    public contactNo: string;
    public email: string;

    constructor(
        firstName: string = '',
        lastName: string = '',
        contactNo: string = '',
        email: string = '',
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
        this.email = email;
    }
}