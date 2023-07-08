// export class IhaleItem{
//     constructor(public urunAd : string , public urunFiyat : string, public urunKdv : string , public urunAdet : string , public urunTutar : string ){
//     }
// }
export interface IhaleItem{
    birimKdv? : number,
    urunAd : string ,
    urunFiyat : number,
    urunKdv : number , 
    urunAdet : number , 
    urunTutar : number ,
    genelToplam : number,
}