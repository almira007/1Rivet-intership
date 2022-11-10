import { Employee } from "../Model/employee.model";

export class EmployeeAdapter {

    public toConcat(item: any) {
        const employeelist: Employee = new Employee();
        employeelist.id = item.id;
        employeelist.firstName = item.firstName;
        employeelist.lastName = item.lastName;
        employeelist.emailId = item.emailId;
        employeelist.mobileNo = item.mobileNo;
        employeelist.salary = item.salary;
        employeelist.fullName = item.firstName.concat(" " + item.lastName);
        return employeelist;
    }
} 
