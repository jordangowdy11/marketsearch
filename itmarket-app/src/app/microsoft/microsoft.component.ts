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
    "Rank change year-on-year",
    "Rank",
    "Contract jobs citing Microsoft",
    "As % of all contract IT jobs advertised in the UK",
    "Number of daily rates quoted",
    "As % of the Vendors category",
    "UK median daily rate",
    "10th Percentile",
    "90th Percentile",
    "UK excluding London median daily rate",
    "Median daily rate % change year-on-year",
    "% change year-on-year"
  ] 

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("cont_microsoft").subscribe( res => { this.contract_document_data = res;
      this.contract_document_data.forEach(element => {
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
    doc.save('contract-microsoft.pdf')


  }
}
