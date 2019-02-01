import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ContractDataService } from '../contract-data.service';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {

    constructor(private contdataaccess : ContractDataService) {
    // this.headings=[
    //     {h1:"hola",h2:"",h3:"",h4:"",h5:"",h6:"",h7:"",h8:"",h9:"",h10:"",h11:"",h12:""}
    //   ]
     }

     headings=[
      "Rank",
      "Rank change year-on-year",
      "As % of all contract IT jobs advertised in the UK",
      "Contract jobs citing JavaScript",
      "As % of the Programming Languages category",
      "UK median daily rate",
      "Median daily rate % change year-on-year",
      "Number of daily rates quoted",
      "10th Percentile",
      "90th Percentile",
      "% change year-on-year",
      "UK excluding London median daily rate"
    ]
  
  headingsString = JSON.stringify(this.headings);

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

    ngOnInit() {
      this.contdataaccess.getContractDocumentData("cont_javascript").subscribe( res => { this.contract_document_data = res;
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
      doc.save('contract-javascript.pdf')
  
  
    }
}
