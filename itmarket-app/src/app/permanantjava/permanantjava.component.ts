import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-permanantjava',
  templateUrl: './permanantjava.component.html',
  styleUrls: ['./permanantjava.component.css']
})
export class PermanantjavaComponent implements OnInit {

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
    doc.save('permanent-java-stats.pdf')


  }

}
