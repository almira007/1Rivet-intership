import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  /** Get Employeee data */
  public employeedata: any;
  
  constructor(
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    /** Get the data from query param */
    this.route.queryParamMap.subscribe((param: any) => {
      this.employeedata = param.params;
    });
  }
}
