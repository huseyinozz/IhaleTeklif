import { Component } from '@angular/core';
import { EkModel } from '../ekModel';

@Component({
  selector: 'app-ek-aciklama',
  templateUrl: './ek-aciklama.component.html',
  styleUrls: ['./ek-aciklama.component.css']
})

export class EkAciklamaComponent {
  aciklama : string = "ihale bitecektir"
  

  model2 = new EkModel();

  addAciklama(ekaciklama : any){
    this.model2.ekaciklama.push({ekaciklama : ekaciklama.value})
  }

  getAciklama(){
    return this.model2.ekaciklama;
  }

}
