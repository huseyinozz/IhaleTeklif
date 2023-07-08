import { Component } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showButton = true;

  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(DialogBodyComponent,{
      width : '350px',
    })  
  }

  hideButton(){
    this.showButton = false;
  }



}
