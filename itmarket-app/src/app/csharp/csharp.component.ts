import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css']
})
export class CSharpComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }

  headings=[
    "Rank change year on year",
    "Rank",
    "Contract jobs citing C#",
    "As % of all contract IT jobs advertised in the UK",
    "Number of daily rates quoted",
    "As % of the Programming Languages category",
    "UK median daily rate",
    "Median daily rate % change year-on-year",
    "10th Percentile",
    "90th Percentile",
    "% change year-on-year",
    "UK excluding London median daily rate"
  ]

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("cont_csharp").subscribe( res => { this.contract_document_data = res;
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
    doc.save('contract-csharp.pdf')


  }

}
