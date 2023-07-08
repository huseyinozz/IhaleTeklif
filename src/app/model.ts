import { IhaleItem } from "./ihaleitem"

export class Model {
    urun : IhaleItem[];
    constructor(){
        this.urun = [
            {urunAd : "Biskrem", urunAdet : 1000 , urunFiyat :10 ,birimKdv : 8, urunKdv :800 , urunTutar :10000,genelToplam : 0},
            {urunAd : "Tutku", urunAdet : 1000 , urunFiyat :15 , urunKdv :1200 ,birimKdv : 8 ,urunTutar :15000,genelToplam : 0},
            {urunAd : "Gofret", urunAdet : 1000 , urunFiyat :5 , urunKdv :400 ,birimKdv : 8, urunTutar : 5000,genelToplam : 0},
        ];
    }
}

