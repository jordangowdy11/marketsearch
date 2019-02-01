import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }

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
 

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("cont_devops").subscribe( res => { this.contract_document_data = res;
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
      doc.save('contract-devops.pdf')
  
  
    }
}
