import { Component, OnInit } from '@angular/core';
import { PermDataService } from '../perm-data.service';

@Component({
  selector: 'app-permanantaws',
  templateUrl: './permanantaws.component.html',
  styleUrls: ['./permanantaws.component.css']
})
export class PermanantawsComponent implements OnInit {

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
