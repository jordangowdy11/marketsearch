import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { PermDataService } from '../perm-data.service';

@Component({
  selector: 'app-permanantjavascript',
  templateUrl: './permanantjavascript.component.html',
  styleUrls: ['./permanantjavascript.component.css']
})
export class PermanantjavascriptComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  indexValue : number;
  indexString: string;
  localStorageIndexName : string;

  document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  addToLocal(one, two, three){
    console.log("Logging row to local storage")
    localStorage.setItem("firstvalueJS", one)
    localStorage.setItem("secondvalueJS", two)
    localStorage.setItem("thirdvalueJS", three)
  }

  ngOnInit() {
    this.permdataaccess.getPermDocumentData("javascript").subscribe( res => { this.document_data = res;
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
    doc.save('permanent-js.pdf')


  }
}
    



