import { Component, OnInit } from '@angular/core';
import { PermDataService } from '../perm-data.service';
import { Permanent } from '../permanent';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

    // permArray : Permanent = {thisyear:"", oneyearago:"",twoyearago:""}
    document_data=[{
      thisyear:"firstvalue",oneyearago:"secondvalue",twoyearago:"thirdvalue"
    }]

  ngOnInit() {
    this.permdataaccess.getJavascriptData().subscribe(res => { this.document_data = res;
      this.document_data.forEach(element => {
        console.log(element)
      })

    
  //   this.permdataaccess.getJavascriptData().subscribe(
  //     res => 
  //     this.permArray=res
    
    })
  }
}
