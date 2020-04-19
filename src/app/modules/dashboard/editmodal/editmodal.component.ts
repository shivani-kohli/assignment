import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CommonService } from '@services/common.service';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(private api:CommonService,private router:Router,private formBuilder: FormBuilder,private dialogRef: MatDialogRef<EditmodalComponent>) {

  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      width:['',Validators.required],
      height:['',Validators.required],
      margin:['',Validators.required]
    });
  }

  get f() { return this.editForm.controls; }

  closeDialog(){
    this.dialogRef.close();
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
        return;
    }
    let styleData = {
      width:this.f.width.value+'px',
      height:this.f.height.value+'px',
      margin:this.f.margin.value+'px'
    }
    localStorage.setItem('tileStyleData',JSON.stringify(styleData));
    this.api.setStyleData(styleData);
    alert("Config changed successfully!");
    this.closeDialog();
    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/dashboard']));
  }



}
