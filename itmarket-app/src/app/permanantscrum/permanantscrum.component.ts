import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PermDataService } from '../perm-data.service';

@Component({
  selector: 'app-permanantscrum',
  templateUrl: './permanantscrum.component.html',
  styleUrls: ['./permanantscrum.component.css']
})
export class PermanantscrumComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.permdataaccess.getPermDocumentData("scrum").subscribe( res => { this.document_data = res;
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
    doc.save('permanent-microsoft.pdf')


  }

}
