import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }

  headings=[
    "Rank",
    "As % of the Programming Languages category",
    "90th Percentile",
    "UK excluding London median daily rate",
    "% change year-on-year",
    "As % of all contract IT jobs advertised in the UK",
    "Rank change year-on-year",
    "Median daily rate % change year-on-year",
    "Number of daily rates quoted",
    "UK median daily rate",
    "10th Percentile",
    "Contract jobs citing Python"
  ]


  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("cont_python").subscribe( res => { this.contract_document_data = res;
      this.contract_document_data.forEach(element => {
        console.log(element);
    
        })
      }
    )
    // console.log(this.headingsString)
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
    doc.save('contract-python.pdf')


  }

}
