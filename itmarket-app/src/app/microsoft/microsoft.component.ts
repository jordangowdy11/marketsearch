import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }

  headings=[
    "Rank",
    "Rank change year on year",
    "Permanent jobs citing",
    "% of permanent jobs advertised for this skill",
    "% of this skill in job categories",
    "% of permanent jobs advertised for this skill",
  ] 
  headingsString = JSON.stringify(this.headings[0]);

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContMicrosoftData().subscribe( res => { this.contract_document_data = res;
      this.contract_document_data.forEach(element => {
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
    doc.save('contract-microsoft.pdf')


  }
}
