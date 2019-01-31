import { Component, OnInit } from '@angular/core';
import { PermDataService } from '../perm-data.service';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-permanantjavascript',
  templateUrl: './permanantjavascript.component.html',
  styleUrls: ['./permanantjavascript.component.css']
})
export class PermanantjavascriptComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  document_data = [{
    thisyeardata:"firstvalue",
    lastyeardata:"secondvalue",
    twoyearagodata:"thirdvalue"
  }]

  ngOnInit() {
    this.permdataaccess.getJavascriptData().subscribe( res => { this.document_data = res;
      this.document_data.forEach(element => {
        console.log(element);
        
        })
      }
    )
  }
}
    



