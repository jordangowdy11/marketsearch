import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-permanantdevops',
  templateUrl: './permanantdevops.component.html',
  styleUrls: ['./permanantdevops.component.css']
})
export class PermanantdevopsComponent implements OnInit {

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
    doc.save('permanent-devops.pdf')


  }

}
