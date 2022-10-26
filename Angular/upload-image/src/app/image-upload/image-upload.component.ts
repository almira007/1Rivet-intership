import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  public url!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectfiles(event: any) {
    var reader = new FileReader();
    console.log(reader);

  }
}
