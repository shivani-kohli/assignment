import { Component,Inject,Optional,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infomodal',
  templateUrl: './infomodal.component.html',
  styleUrls: ['./infomodal.component.scss']
})
export class InfomodalComponent implements OnInit {

  details:any;
  constructor(private router:Router,
    public dialogRef: MatDialogRef<InfomodalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) {
    this.details = {...data};
  }


  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }


}
