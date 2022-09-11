import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {

  title = 'Two way Binding';

  constructor() { }

  ngOnInit(): void {
  }

  public handclick():void{
    alert('Hello');
  }
}
