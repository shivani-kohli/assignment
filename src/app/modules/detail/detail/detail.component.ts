import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailData:any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if(navigation.extras.state){
      const state = navigation.extras.state as {detailData: string};
      console.log(navigation.extras.state)
      this.detailData = state.detailData;
    }else{
      this.navigateBack();
    }
   }


   navigateBack(){
    this.router.navigateByUrl('/dashboard')
  }


  ngOnInit() {
  }

}
