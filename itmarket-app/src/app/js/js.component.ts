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
    "Rank change year on year",
    "Permanent jobs citing",
    "% of permanent jobs advertised for this skill",
    "% of this skill in job categories",
    "% of permanent jobs advertised for this skill",
  ]
  
   

  
  
  headingsString = JSON.stringify(this.headings);

  contract_document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

    ngOnInit() {
      this.contdataaccess.getContJavascriptData().subscribe( res => { this.contract_document_data = res;
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
      doc.save('contract-javascript.pdf')
  
  
    }
}
