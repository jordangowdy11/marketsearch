import { Component, OnInit } from '@angular/core';
import { ContractDataService } from '../contract-data.service'
@Component({
  selector: 'app-contracted',
  templateUrl: './contracted.component.html',
  styleUrls: ['./contracted.component.css']
})
export class ContractedComponent implements OnInit {

  constructor(private contdataacess : ContractDataService) { }
 
  contlastupdatedata=[{
    LastUpdate: " "
   }]

  ngOnInit() {
    this.contdataacess.getContractDocumentData("last_update").subscribe( res => { this.contlastupdatedata = res;
      this.contlastupdatedata.forEach(element => {
        console.log(element);
        })
      }
    )
  }

}
