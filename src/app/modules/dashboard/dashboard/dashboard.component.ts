import { Component, OnInit } from '@angular/core';
import { InfomodalComponent } from '../infomodal/infomodal.component';
import {  MatDialog } from '@angular/material';
import { Router,NavigationExtras } from '@angular/router';
import { cardStyleData as envconfig } from '@env/environment';
import { EditmodalComponent } from '../editmodal/editmodal.component';
import { CommonService } from '@services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  tiles = [];
  noOfTiles = 12;
  
  cardStyleData = {}
  constructor(private api:CommonService,private router: Router,private dialog: MatDialog) {
    this.cardStyleData = this.api.getStyleData()
      .subscribe(item => this.cardStyleData = item); 
  }

  ngOnInit() {
    if(localStorage.getItem("tileStyleData"))
      this.cardStyleData = JSON.parse(localStorage.getItem("tileStyleData"));
    else
      this.cardStyleData = envconfig;
    for(let i=1;i<=this.noOfTiles;i++){
      let obj = {
        'tilename':`Title ${i}`,
        'tileinfo':`This is information ${i}`,
        'tileabout':`This is detail about ${i}`
      }
      this.tiles.push(obj)
    }
  }

  showInfo(i){
    this.dialog.open(InfomodalComponent,{
      panelClass: 'info-modal',
      disableClose: true,
      data: this.tiles[i]
    });
  }

  showDetail(i){
    const navigationExtras: NavigationExtras = {state: {detailData: this.tiles[i]}};
    this.router.navigateByUrl('/detail',navigationExtras)

  }

  openEditModal(){
    this.dialog.open(EditmodalComponent,{
      panelClass: 'edit-modal',
      disableClose: true
    });
  }

  

}
