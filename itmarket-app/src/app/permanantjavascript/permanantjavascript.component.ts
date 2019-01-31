import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PermDataService } from '../perm-data.service';

@Component({
  selector: 'app-permanantjavascript',
  templateUrl: './permanantjavascript.component.html',
  styleUrls: ['./permanantjavascript.component.css']
})
export class PermanantjavascriptComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  indexValue : number;
  indexString: string;
  localStorageIndexName : string;
  headings=[
    "Rank",
    "Rank change year on year",
    "% of permanent jobs advertised for this skill",
    "Permanent jobs citing",
    "% of this skill in job categories",
    "Number of Salaries Quoted",
    "UK Median annual Salary",
    "10th Percentile",
    "Median Salary % change year on year",
    "90th Percentile",
    "UK Excluding London Median Annual Salary",
    "% Change year on year"
  ]
  document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  addToLocal(one, two, three){
    console.log("Logging row to local storage")
    localStorage.setItem("firstvalueJS", one)
    localStorage.setItem("secondvalueJS", two)
    localStorage.setItem("thirdvalueJS", three)
  }

  ngOnInit() {
    this.permdataaccess.getJavascriptData().subscribe( res => { this.document_data = res;
      this.document_data.forEach(element => {
        console.log(element);
        
        })
      }
    )
  }

  @ViewChild("content") content: ElementRef;
  public downloadPDF() {
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      elementHandlers: specialElementHandlers
    });
    doc.save('permanent-js.pdf')


  }
}
    



