import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {
  name = ".......";

  @Output() close = new EventEmitter <string>();

  addItem(sirket : any){
    this.name = sirket.value;
    this.close.emit(this.name)
  }
}
