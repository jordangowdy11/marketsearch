import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PermDataService } from '../perm-data.service';

@Component({
  selector: 'app-permanantcsharp',
  templateUrl: './permanantcsharp.component.html',
  styleUrls: ['./permanantcsharp.component.css']
})
export class PermanantcsharpComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  headings=[
    "Rank",
    "Rank change year on year",
    "Permanent jobs citing",
    "% of permanent jobs advertised for this skill",
    "% of this skill in job categories",
    "% of permanent jobs advertised for this skill",
  ] 

  headingsString = JSON.stringify(this.headings[1]);
  

  document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.permdataaccess.getCsharpData().subscribe( res => { this.document_data = res;
      this.document_data.forEach(element => {
        console.log(element);
        console.log(this.headingsString)
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
    doc.save('permanent-csharp.pdf')


  }



}
