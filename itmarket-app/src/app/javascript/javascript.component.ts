import { Component, OnInit } from '@angular/core';
import { Permanent } from '../permanent';
import { PermanentDataService } from '../permanent-data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor(private permanent_data : PermanentDataService) { }

  thisyear: string;
  oneyearago: string;
  twoyearago: string;

  document_data = [
    {thisyear:"firstvalue", oneyearago:"secondvalue", twoyearago:"thirdvalue"}
  ]

// thisyear: string; oneyearago: string; twoyearago: string;
  formData : Permanent = {thisyear:"", oneyearago:"", twoyearago:""}


  ngOnInit() {
    console.log("javascript ngoninit executed")
    this.permanent_data.getDocumentData().subscribe(res => { this.document_data = res;
    this.document_data.forEach(element => {
      console.log(element)
    })
    })
  }

}
