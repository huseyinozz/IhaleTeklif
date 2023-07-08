import { Component } from '@angular/core';
import { Model } from '../model';
import { NgFor } from '@angular/common';
import { EkModel } from '../ekModel';


@Component({
  selector: 'app-ihale-teklif',
  templateUrl: './ihale-teklif.component.html',
  styleUrls: ['./ihale-teklif.component.css']
})
export class IhaleTeklifComponent {

  message = "";


  addItem(urunad : any , fiyat : any , kdv:any,adet : any){
    const birimKdv = fiyat.value * kdv.value /100
    const kdvTutar = fiyat.value * kdv.value /100 * adet.value
    const toplam = fiyat.value * adet.value
    this.model.urun.push({urunAd : urunad.value, urunAdet : adet.value , urunFiyat :fiyat.value , urunKdv :kdvTutar, urunTutar :toplam , genelToplam :0, birimKdv : birimKdv})
    this.Topla();

  }




model = new Model();

getItems()
{
  return this.model.urun;
}


Topla(){
  let toplam = 0 ;
  const items = this.model.urun;
  for(let urun of items){
   toplam += urun.urunTutar;
  }
  return toplam;
 }

 deleteItem(urun : any){
  const index = this.model.urun.indexOf(urun)
  if(index > -1){
    this.model.urun.splice(index,1)
  }
 }
}
