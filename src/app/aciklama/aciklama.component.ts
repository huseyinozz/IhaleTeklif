import { Component } from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-aciklama',
  templateUrl: './aciklama.component.html',
  styleUrls: ['./aciklama.component.css']
})
export class AciklamaComponent {
  name = ".......";

  addItem(sirket : any){
    this.name = sirket.value;
  }


}
