import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-permananthtml',
  templateUrl: './permananthtml.component.html',
  styleUrls: ['./permananthtml.component.css']
})
export class PermananthtmlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    doc.save('permanent-html.pdf')


  }

}
