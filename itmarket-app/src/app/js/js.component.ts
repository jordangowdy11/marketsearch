import { Component, OnInit } from '@angular/core';
import { PermDataService } from '../perm-data.service';
import { Permanent } from '../permanent';
import { Headings } from '../headings';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  
  headings=[
    "Rank",
    "Rank change year on year",
    "Permanent jobs citing",
    "% of permanent jobs advertised for this skill",
    "% of this skill in job categories",
    "% of permanent jobs advertised for this skill",
  ]


  constructor(private permdataaccess : PermDataService) {
  // this.headings=[
  //     {h1:"hola",h2:"",h3:"",h4:"",h5:"",h6:"",h7:"",h8:"",h9:"",h10:"",h11:"",h12:""}
  //   ]
   }
  

    // permArray : Permanent = {thisyear:"", oneyearago:"",twoyearago:""}
    document_data=[{
      thisyeardata:"firstvalue",lastyeardata:"secondvalue",twoyearagodata:"thirdvalue"
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
