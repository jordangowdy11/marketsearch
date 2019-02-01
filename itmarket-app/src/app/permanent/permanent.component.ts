import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PermDataService } from '../perm-data.service';



@Component({
  selector: 'app-permanent',
  templateUrl: './permanent.component.html',
  styleUrls: ['./permanent.component.css']
})
export class PermanentComponent implements OnInit {

  constructor(private permdataaccess : PermDataService) { }

  lastupdatedata=[{
    LastUpdate: " "
   }]

  ngOnInit() {
    this.permdataaccess.getPermDocumentData("last_update").subscribe( res => { this.lastupdatedata = res;
      this.lastupdatedata.forEach(element => {
        console.log(element);
        })
      }
    )
  
  }
    
  }


