import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }

  headings=[
    "As % of the Programming Languages category",
    "As % of all contract IT jobs advertised in the UK",
    "10th Percentile",
    "UK excluding London median daily rate",
    "90th Percentile",
    "Rank",
    "% change year-on-year",
    "Rank change year-on-year",
    "As % of all contract IT jobs advertised in the UK",
    "UK median daily rate",
    "Number of daily rates quoted",
    "Median daily rate % change year-on-year"
  ]

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("cont_sql").subscribe( res => { this.contract_document_data = res;
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
    doc.save('contract-sql.pdf')


  }

}
